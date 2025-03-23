import { useState } from 'react';
import { FileText, BarChart2, HeartPulse, MessageSquareText, AlertCircle, ChevronRight } from 'lucide-react';
import { AnalysisModal } from '../components/analysis-modal';

type AnalysisType = 'basic' | 'advanced' | 'sentiment';

export function Raw() {
  const [selectedType, setSelectedType] = useState<AnalysisType | null>(null);
  const [content, setContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const analysisOptions = [
    { id: 'basic', name: 'Basic Analysis', icon: FileText, description: 'Word count, character count, and readability metrics' },
    { id: 'advanced', name: 'Advanced Analysis', icon: BarChart2, description: 'Linguistic pattern detection and keyword extraction' },
    { id: 'sentiment', name: 'Sentiment Analysis', icon: HeartPulse, description: 'Emotion detection and sentiment scoring' }
  ] as const;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!selectedType || !content.trim()) {
      setError('Please select an analysis type and enter some content');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(true);
    }, 1000);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-xl leading-6 font-bold text-gray-900">BhashaShutra Text Analysis</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Enter your content and select your preferred analysis method.</p>
            </div>
            
            {error && (
              <div className="mt-4 p-3 bg-red-50 rounded-md border border-red-200">
                <div className="flex">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  <div className="ml-3">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="mt-5">
              <div className="space-y-6">
                <div>
                  <label className="text-base font-medium text-gray-900">Analysis Type</label>
                  <fieldset className="mt-4">
                    <legend className="sr-only">Analysis Type</legend>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      {analysisOptions.map((option) => (
                        <div 
                          key={option.id}
                          onClick={() => setSelectedType(option.id)}
                          className={`
                            relative rounded-lg border px-5 py-4 cursor-pointer focus:outline-none transition-all duration-200
                            ${selectedType === option.id 
                              ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-500' 
                              : 'border-gray-300 hover:border-indigo-300'
                            }
                          `}
                        >
                          <div className="flex items-center">
                            <div className="flex items-center h-fit p-1 w-10 rounded-full bg-indigo-100 justify-center">
                              <option.icon className={`h-6 w-6 ${selectedType === option.id ? 'text-indigo-600' : 'text-indigo-400'}`} />
                            </div>
                            <div className="ml-3">
                              <div className={`text-sm font-medium ${selectedType === option.id ? 'text-indigo-900' : 'text-gray-900'}`}>
                                {option.name}
                              </div>
                              <div className="mt-1 text-xs text-gray-500">
                                {option.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                      Content
                    </label>
                    <div className="text-xs text-gray-500 flex items-center">
                      <MessageSquareText className="h-3 w-3 mr-1" />
                      {content.length > 0 ? 
                        `${content.length} characters` : 
                        'Enter your text below'
                      }
                    </div>
                  </div>
                  <div className="mt-1 relative">
                    <textarea
                      id="content"
                      name="content"
                      rows={6}
                      className="p-3 shadow-sm focus:ring-indigo-500 border border-gray-300 focus:border-indigo-500 block w-full sm:text-sm rounded-lg transition-all"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Enter your content here..."
                    />
                    {content.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setContent('')}
                        className="absolute top-2 right-2 p-1 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                      >
                        <span className="sr-only">Clear</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                  <div className="mt-1 flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        const sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
                        setContent(sampleText);
                      }}
                      className="text-xs text-indigo-600 hover:text-indigo-500"
                    >
                      Use sample text
                    </button>
                  </div>
                </div>

                <div className="pt-5">
                  <button
                    type="submit"
                    disabled={!selectedType || !content.trim() || isLoading}
                    className={`
                      w-full inline-flex justify-center items-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200
                      ${isLoading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105'}
                      ${(!selectedType || !content.trim()) ? 'opacity-50 cursor-not-allowed' : ''}
                    `}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        Analyze Content <ChevronRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <AnalysisModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={content}
        toolCategory={selectedType as 'basic' | 'advanced' | 'sentiment' | 'visualization'}
      />
    </div>
  );
}