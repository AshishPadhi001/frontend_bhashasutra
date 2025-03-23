import { useState } from 'react';
import { Upload, FileText, BarChart2, Check, ChevronRight, AlertCircle } from 'lucide-react';
import { AnalysisModal } from '../components/analysis-modal';

type AnalysisType = 'basic' | 'advanced' | 'visualization';

export function File() {
  const [selectedType, setSelectedType] = useState<AnalysisType | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileContent, setFileContent] = useState<File | null>(null);

  const analysisOptions = [
    { id: 'basic', name: 'Basic Analysis', icon: FileText, description: 'Word count, character count, and readability metrics' },
    { id: 'advanced', name: 'Advanced Analysis', icon: BarChart2, description: 'Detailed linguistic analysis and keyword extraction' },
  ] as const;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      const validFileTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];

      if (!validFileTypes.includes(selectedFile.type)) {
        setError('Please upload a PDF, Word document, or TXT file');
        return;
      }

      if (selectedFile.size > 10 * 1024 * 1024) {
        setError('File size exceeds 10MB limit');
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    setError(null);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      const validFileTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];

      if (!validFileTypes.includes(droppedFile.type)) {
        setError('Please upload a PDF, Word document, or TXT file');
        return;
      }

      if (droppedFile.size > 10 * 1024 * 1024) {
        setError('File size exceeds 10MB limit');
        return;
      }
      setFile(droppedFile);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedType || !file) {
      setError('Please select an analysis type and upload a file');
      return;
    }

    setIsLoading(true);
    setError(null);

    setFileContent(file);

    setTimeout(() => {
      setIsLoading(false);
      setUploadSuccess(true);
      setIsModalOpen(true);

      setTimeout(() => {
        setUploadSuccess(false);
      }, 1500);
    }, 1000);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-xl leading-6 font-bold text-gray-900">BhashaShutra File Analysis</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Upload a file and select your preferred analysis method.</p>
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

            {uploadSuccess && (
              <div className="mt-4 p-3 bg-green-50 rounded-md border border-green-200">
                <div className="flex">
                  <Check className="h-5 w-5 text-green-500" />
                  <div className="ml-3">
                    <p className="text-sm text-green-600">File successfully processed!</p>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Upload file</label>
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`
                      mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg transition-all duration-200
                      ${isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'}
                      ${file ? 'bg-indigo-50 border-indigo-300' : 'hover:border-indigo-300'}
                    `}
                  >
                    <div className="space-y-1 text-center">
                      {file ? (
                        <div className="flex flex-col items-center">
                          <FileText className="mx-auto h-12 w-12 text-indigo-500" />
                          <p className="mt-1 text-sm text-gray-900 font-medium">{file.name}</p>
                          <p className="text-xs text-gray-500">
                            {(file.size / 1024).toFixed(2)} KB
                          </p>
                          <button
                            type="button"
                            onClick={() => setFile(null)}
                            className="mt-2 text-xs text-indigo-600 hover:text-indigo-500 underline"
                          >
                            Remove file
                          </button>
                        </div>
                      ) : (
                        <>
                          <Upload className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600 justify-center">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                                accept=".pdf,.doc,.docx,.txt"
                                onChange={handleFileChange}
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PDF, Word or TXT files up to 10MB</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-5">
                  <button
                    type="submit"
                    disabled={!selectedType || !file || isLoading}
                    className={`
                      w-full inline-flex justify-center items-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200
                      ${isLoading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105'}
                      ${(!selectedType || !file) ? 'opacity-50 cursor-not-allowed' : ''}
                    `}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Process File <ChevronRight className="ml-2 h-5 w-5" />
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
        content={fileContent}
        toolCategory={selectedType as 'basic' | 'advanced' | 'visualization'}
      />
    </div>
  );
}