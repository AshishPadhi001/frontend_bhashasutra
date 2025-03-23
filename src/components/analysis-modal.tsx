import { X } from 'lucide-react';
import { useState } from 'react';
import { ToolList } from './tool-list';
import { ToolModal } from './tool-modal';
import { 
  basicTools, 
  advancedTools, 
  visualizationTools, 
  sentimentTools 
} from '../data/tools';

interface AnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: any;
  toolCategory?: 'basic' | 'advanced' | 'visualization' | 'sentiment';
}

export function AnalysisModal({ 
  isOpen, 
  onClose, 
  content, 
  toolCategory = 'basic' 
}: AnalysisModalProps) {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  
  if (!isOpen) return null;

  const handleToolSelect = (toolId: string) => {
    setSelectedTool(toolId);
  };

  const handleBackToList = () => {
    setSelectedTool(null);
  };

  const getToolsByCategory = () => {
    switch (toolCategory) {
      case 'advanced':
        return advancedTools;
      case 'visualization':
        return visualizationTools;
      case 'sentiment':
        return sentimentTools;
      case 'basic':
      default:
        return basicTools;
    }
  };  

  const tools = getToolsByCategory();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full mx-4 max-h-[90vh] overflow-hidden flex flex-col">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-indigo-600 to-purple-600">
          <h2 className="text-xl font-bold text-white flex items-center">
            {toolCategory.charAt(0).toUpperCase() + toolCategory.slice(1)} Analysis Tools
          </h2>
          <button
            onClick={()=> {
              onClose();
              setSelectedTool(null);
            }}
            className="text-white hover:text-gray-200 transition-colors focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto flex-grow">
          {selectedTool ? (
            <ToolModal
              toolId={selectedTool}
              content={content}
              onBack={handleBackToList}
              category={toolCategory}
            />
          ) : (
            <ToolList 
              tools={tools} 
              onSelectTool={handleToolSelect}
            />
          )}
        </div>
        
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex justify-between">
          <p className="text-xs text-gray-500">{toolCategory.charAt(0).toUpperCase() + toolCategory.slice(1)} analysis tools for text processing</p>
          <button 
            onClick={()=>{
              onClose();
              setSelectedTool(null);
            }}
            className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}