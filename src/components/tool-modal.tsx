import { useState, useEffect, Fragment } from 'react';
import { ArrowLeft, Copy, FolderDown, Loader2 } from 'lucide-react';
import { 
  basicTools, 
  advancedTools, 
  visualizationTools, 
  sentimentTools,
} from '../data/tools';
import { ApiPost } from '../utils/api';

interface ToolModalProps {
  toolId: string;
  content: any;
  onBack: () => void;
  category: 'basic' | 'advanced' | 'visualization' | 'sentiment';
}

interface ToolResponse {
  result: string;
}

export function   ToolModal({ toolId, content, onBack, category }: ToolModalProps) {
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [processingStarted, setProcessingStarted] = useState(false);

  const allTools = [
    ...basicTools, 
    ...advancedTools, 
    ...visualizationTools, 
    ...sentimentTools
  ];
  
  const tool = allTools.find(t => t.id === toolId);
  
  if (!tool) {            
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Tool not found</p>
        <button 
          onClick={onBack}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          Back to Tools
        </button>
      </div>
    );
  }

  const processText = async () => {
    if (processingStarted) return;
    
    setProcessingStarted(true);
    setLoading(true);
    setError(null);
    
    try {
      const endpoint = typeof content === 'string' ? 'text' : 'file';
      const payload = typeof content === 'string' 
        ? { text: content }
        : { file: content };

      const response = await ApiPost<ToolResponse>(`${category}/${toolId}/${endpoint}`, payload, {
        headers: {
          'Content-Type': endpoint === 'text' ? 'application/json' : 'multipart/form-data',
          'Accept': 'application/json'
        }
      });
      
      let processedResult = '';
      
      switch (tool.action) {
        case 'detailed-analysis':
          const analysisData = response.result as any;
          const overall = analysisData.overall;
          const sentences = analysisData.sentences;
          
          processedResult = `Overall Analysis:\n` +
            `Sentiment: ${overall.sentiment}\n` +
            `Polarity: ${overall.polarity}\n` +
            `Subjectivity: ${overall.subjectivity}\n\n` +
            `Statistics:\n` +
            `Total Sentences: ${analysisData.sentence_count}\n` +
            `Positive Sentences: ${analysisData.positive_sentences}\n` +
            `Negative Sentences: ${analysisData.negative_sentences}\n` +
            `Neutral Sentences: ${analysisData.neutral_sentences}\n\n` +
            `Sentence Analysis:\n` +
            sentences.map((s: any) => 
              `text: "${s.text}"\n` +
              `Sentiment: ${s.sentiment}\n` +
              `Polarity: ${s.polarity}\n` +
              `Subjectivity: ${s.subjectivity}`
            ).join('\n\n');
          break;
        case 'analyze':
          const sentimentData = response.result as any;
          processedResult = `Sentiment: ${sentimentData.sentiment}\nPolarity: ${sentimentData.polarity}\nSubjectivity: ${sentimentData.subjectivity}\nText Sample: ${sentimentData.text_sample}`;
          break;
        case 'tfidf-heatmap':
        case 'frequency-plot':
        case 'sentiment-graphs':
        case 'wordcloud':
          const wordcloudData = response as any;
          if (wordcloudData.success && wordcloudData.image_url) {
            processedResult = `<img src="${wordcloudData.image_url}" alt="Generated wordcloud" class="w-72 h-72 rounded-lg shadow-sm"/>`;
          } else {
            processedResult = 'Failed to generate wordcloud';
          }
          break;
        case 'word_tokenizer':
          const tokens = response?.result ? String(response.result).trim().split(/\s+/).filter(Boolean) : [];
          processedResult = `${tokens.join(' ')}`;
          break;
        default:
          // For 'count-words' and similar tools that return plain text results
          if (tool.action === 'count-words' || 
              tool.action === 'count-punctuation' || 
              tool.action === 'average-word-length' ||
              tool.action === 'average-sentence-length' ||
              tool.action === 'most-repeated-word' ||
              tool.action === 'least-repeated-word' ||
              tool.action === 'count-unique-words') {
            processedResult = String(response.result);
          } else {
            const defaultResult = response?.result ? String(response.result).trim().split(/\s+/).filter(Boolean) : [];
            processedResult = `${defaultResult.join(' ')}`;
          }
      }
      
      setResult(processedResult);
    } catch (err:any) {
      setError(err?.response?.data?.detail || 'An error occurred while processing your request');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    if (!processingStarted && tool.action !== 'replace-word') {
      processText();
    }
  }, [tool.id]);
  

  const downloadFile = () => {
    const text = result;
    const filename = tool.action+".txt";
    const blob = new Blob([text as string], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Fragment>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex items-center bg-gray-50">
        <button
          onClick={onBack}
          className="mr-3 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h3 className="text-lg font-medium text-gray-900 flex items-center">
          <tool.icon className="h-5 w-5 mr-2 text-indigo-600" />
          {tool.name}
        </h3>
      </div>
      
      <div className="p-6">
        {/* Show input field for tools that require it */}
        {tool.action === 'replace-word' && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter word to replace and replacement (format: word:replacement)
            </label>
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="original:replacement"
              />
              <button
                onClick={processText}
                className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-colors"
                disabled={loading}
              >
                Process
              </button>
            </div>
          </div>
        )}
        
        {/* Loading state */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 text-indigo-600 animate-spin" />
            <p className="ml-3 text-gray-600">Processing...</p>
          </div>
        )}
        
        {/* Error state */}
        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-md">
            {error}
          </div>
        )}
        
        {/* Result */}
        {!loading && result && (
          <div>
            <h4 className="text-md font-medium text-gray-900 mb-2">Result:</h4>
            <div className="bg-gray-50 rounded-lg max-h-80 overflow-y-auto">
              {category === 'visualization' ? (
                <div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  dangerouslySetInnerHTML={{ __html: result }}
                />
              ) : (
                <pre className="text-sm  text-gray-600 whitespace-pre-wrap" style={{ wordWrap: 'break-word' }}>
                  {result}
                </pre>
              )}
            </div>
          </div>
        )}
           
      </div>
    </div>
    <div className='flex gap-2'>
      <button className="px-4 py-2 flex items-center gap-2 text-sm font-medium mt-3 bg-indigo-600 text-white rounded-md"
        title='copy'
        onClick={()=>{
          navigator.clipboard.writeText(result as string)
        }}  
      >
        <Copy size={14}/>
      </button>
      <button 
        title='Download'
        className="px-4 py-2 text-sm font-medium mt-3 transition-colors bg-indigo-600 text-white rounded-md"
        onClick={()=>downloadFile()}  
      > <FolderDown size={14}/>
      </button>
    </div>
    </Fragment>
  );
}