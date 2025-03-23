import { FileText, Upload, Zap, ChevronRight, Type, BarChart2, BrainCircuit, Search, Hash, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import './home.css'; // Import the CSS file for animations
import BhashaShutraLogo from '../components/Logo';

export function Home() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzEwMTgyNyI+PHBhdGggZD0iTTAgMHYuNDhDMTguNjIgOS4zOCAyOTcuODEgMTQwIDYzOS41IDE0MGM3Ni43MiAwIDEyOS42Ni0xOC4zOSAxNjkuMjMtMzEuODIgMzYuNzctMTIuNDEgNzAuMDYtMjMuODIgMTE4LjEzLTIzLjgyIDY5LjggMCA5MS45NCAyNy4yOCAxNzUuNzQgMjcuMjggMzMuNyAwIDY2LjgyLTUuNTkgOTcuMzktMTUuOTJsNy43OC0yLjUxVjBoLS4wMXoiLz48L2c+PC9zdmc+')] bg-bottom bg-no-repeat opacity-30"></div>
        </div>
        <div className="max-w-7xl mx-auto z-10 px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left relative">
              <div className="flex justify-center lg:justify-start mb-6 absolute -top-32">
                <BhashaShutraLogo width={120} height={120} />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-white leading-none">
                <span className="block mb-2 animate-slide-up-fade">BhashaShutra</span>
                <span className="block text-indigo-200 text-2xl md:text-3xl lg:text-4xl animate-slide-up-fade animation-delay-150">Text Analysis Redefined</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-indigo-100 max-w-xl animate-fade-in animation-delay-300">
                Powerful text analysis tools to transform, understand, and visualize your content with precision and ease.
              </p>
              <div className="mt-8 sm:flex justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/file" className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-800 hover:bg-indigo-700 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Analyze File
                  <Upload className="ml-3 h-5 w-5" />
                </Link>
                <Link to="/raw" className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-indigo-700 bg-white hover:bg-gray-50 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Raw Text Analysis
                  <Type className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute -top-16 -right-16 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="absolute top-32 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
              <div className="m-8 relative space-y-4">
                <div className="p-5 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 transform transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-indigo-800/30 rounded-full text-white">
                      <Type className="h-6 w-6" />
                    </div>
                    <h3 className="text-white font-medium">Analyze Any Text Content</h3>
                  </div>
                </div>
                <div className="p-5 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 transform transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-indigo-800/30 rounded-full text-white">
                      <BrainCircuit className="h-6 w-6" />
                    </div>
                    <h3 className="text-white font-medium">Advanced NLP Features</h3>
                  </div>
                </div>
                <div className="p-5 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 transform transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-indigo-800/30 rounded-full text-white">
                      <BarChart2 className="h-6 w-6" />
                    </div>
                    <h3 className="text-white font-medium">Data Visualization</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Tool Categories Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Tool Categories</h2>
            <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              BhashaShutra All-in-One Suite
            </p>
            <p className="mt-4 max-w-3xl text-xl text-gray-500 mx-auto">
              Our comprehensive toolkit offers everything you need for basic and advanced text analysis
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              <div className="relative p-8 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-6 translate-y-6 group-hover:opacity-20 transition-all duration-300">
                  <Type className="w-32 h-32 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-5 flex items-center">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mr-4">
                    <Type className="w-6 h-6" />
                  </span>
                  Basic Text Operations
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-indigo-500 mr-2" />
                    Word & Punctuation Counting
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-indigo-500 mr-2" />
                    Case Conversion
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-indigo-500 mr-2" />
                    Text Cleaning & Formatting
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-indigo-500 mr-2" />
                    Word & Sentence Analysis
                  </li>
                </ul>
                <Link to="/raw" className="mt-8 inline-flex items-center text-indigo-600 font-medium hover:text-indigo-500 text-lg">
                  Try these tools
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <div className="relative p-8 bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-6 translate-y-6 group-hover:opacity-20 transition-all duration-300">
                  <BrainCircuit className="w-32 h-32 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-5 flex items-center">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mr-4">
                    <BrainCircuit className="w-6 h-6" />
                  </span>
                  Advanced NLP Features
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-purple-500 mr-2" />
                    Tokenization & Stopword Removal
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-purple-500 mr-2" />
                    Stemming & Lemmatization
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-purple-500 mr-2" />
                    POS Tagging & TF-IDF Analysis
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-purple-500 mr-2" />
                    Text Summarization & Language Detection
                  </li>
                </ul>
                <Link to="/raw" className="mt-8 inline-flex items-center text-purple-600 font-medium hover:text-purple-500 text-lg">
                  Explore advanced tools
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <div className="relative p-8 bg-gradient-to-br from-green-50 to-teal-100 rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-6 translate-y-6 group-hover:opacity-20 transition-all duration-300">
                  <BarChart2 className="w-32 h-32 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-5 flex items-center">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mr-4">
                    <BarChart2 className="w-6 h-6" />
                  </span>
                  Visualization & Analysis
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-green-500 mr-2" />
                    Word Cloud Generation
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-green-500 mr-2" />
                    Word Frequency Plots
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-green-500 mr-2" />
                    Sentiment Analysis Graphs
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-green-500 mr-2" />
                    TF-IDF Heatmaps
                  </li>
                </ul>
                <Link to="/file" className="mt-8 inline-flex items-center text-green-600 font-medium hover:text-green-500 text-lg">
                  Visualize your text
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Tools Section */}
      <div className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 opacity-50"></div>
        <div className="absolute -top-16 right-16 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-16 left-16 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Featured Tools</h2>
            <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Popular BhashaShutra Tools
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white overflow-hidden shadow-xl rounded-2xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 hover:bg-indigo-50 flex flex-col">
              <div className="flex-1 px-8 py-10 flex flex-col">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 rounded-full bg-blue-100 text-blue-600">
                    <Hash className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center">Word Analysis</h3>
                <p className="mt-3 text-base text-gray-600 flex-grow text-center">
                  Count words, find most/least repeated words, and analyze word length
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow-xl rounded-2xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 hover:bg-indigo-50 flex flex-col">
              <div className="flex-1 px-8 py-10 flex flex-col">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 rounded-full bg-purple-100 text-purple-600">
                    <RefreshCw className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center">Text Transformation</h3>
                <p className="mt-3 text-base text-gray-600 flex-grow text-center">
                  Convert case, remove punctuation, clean whitespace, and replace text
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow-xl rounded-2xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 hover:bg-indigo-50 flex flex-col">
              <div className="flex-1 px-8 py-10 flex flex-col">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 rounded-full bg-green-100 text-green-600">
                    <BrainCircuit className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center">NLP Processing</h3>
                <p className="mt-3 text-base text-gray-600 flex-grow text-center">
                  Tokenization, stemming, lemmatization, and POS tagging
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow-xl rounded-2xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 hover:bg-indigo-50 flex flex-col">
              <div className="flex-1 px-8 py-10 flex flex-col">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 rounded-full bg-red-100 text-red-600">
                    <BarChart2 className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center">Visualization</h3>
                <p className="mt-3 text-base text-gray-600 flex-grow text-center">
                  Generate word clouds, frequency plots, and sentiment graphs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L40,229.3C80,235,160,245,240,250.7C320,256,400,256,480,234.7C560,213,640,171,720,154.7C800,139,880,149,960,186.7C1040,224,1120,288,1200,282.7C1280,277,1360,203,1400,165.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span className="block mb-2">Ready to use BhashaShutra?</span>
              <span className="block text-indigo-200 text-2xl lg:text-3xl font-semibold">Start with file upload or raw text input.</span>
            </h2>
            <div className="mt-10 lg:mt-0 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/file" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-indigo-600 bg-white hover:bg-indigo-50 transition-all duration-200 shadow-lg flex-1 lg:flex-none">
                <Upload className="mr-3 h-6 w-6" />
                Upload a file
              </Link>
              <Link to="/raw" className="inline-flex items-center justify-center px-8 py-4 border-2 border-indigo-300 text-lg font-medium rounded-lg text-white bg-transparent hover:bg-white/10 transition-all duration-200 shadow-lg flex-1 lg:flex-none">
                <Type className="mr-3 h-6 w-6" />
                Analyze raw text
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Define animations using CSS classes instead of JSX style tag */}
    </div>
  );
}