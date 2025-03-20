import React from 'react';

function ResultDisplay({ results }) {
  const { detection, readability, scholar } = results;

  return (
    <div className="mt-8 space-y-6">
      {/* AI Detection Results */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <i className="fas fa-robot text-blue-500 mr-2"></i>
          AI Detection Results
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main Score */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-center">
              <div className={`text-4xl font-bold mb-2 
                ${detection.confidence > 80 ? 'text-red-600' : 
                  detection.confidence > 60 ? 'text-yellow-600' : 'text-green-600'}`}>
                {detection.confidence}%
              </div>
              <p className="text-gray-600">AI Content Probability</p>
            </div>
            
            <div className="mt-4 flex justify-center">
              <span className={`px-3 py-1 rounded-full text-sm font-medium
                ${detection.isAIGenerated 
                  ? 'bg-red-100 text-red-800' 
                  : 'bg-green-100 text-green-800'}`}>
                {detection.isAIGenerated ? 'Likely AI-Generated' : 'Likely Human-Written'}
              </span>
            </div>
          </div>

          {/* Detailed Analysis */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Unique Patterns</span>
              <span className="font-medium">{detection.analysis.uniquePatterns}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded">
              <div 
                className="h-2 bg-blue-500 rounded"
                style={{ width: `${detection.analysis.uniquePatterns}%` }}
              ></div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="text-gray-600">Consistency Score</span>
              <span className="font-medium">{detection.analysis.consistencyScore}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded">
              <div 
                className="h-2 bg-green-500 rounded"
                style={{ width: `${detection.analysis.consistencyScore}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Readability Score */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <i className="fas fa-book-reader text-purple-500 mr-2"></i>
          Readability Analysis
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Score Display */}
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <div className="inline-block relative">
              <svg className="w-32 h-32" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="3"
                  strokeDasharray={`${readability.score}, 100`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div>
                  <div className="text-2xl font-bold text-purple-600">{readability.score}</div>
                  <div className="text-sm text-gray-500">Score</div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                {readability.grade} Level
              </span>
            </div>
          </div>

          {/* Suggestions */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Improvement Suggestions</h3>
            <ul className="space-y-3">
              {readability.suggestions.map((suggestion, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-purple-100">
                    <i className="fas fa-lightbulb text-purple-600 text-xs"></i>
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Scholar Results */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <i className="fas fa-graduation-cap text-green-500 mr-2"></i>
          Related Academic Papers
        </h2>

        <div className="space-y-4">
          {scholar.map((paper, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-medium text-blue-600 hover:text-blue-800 cursor-pointer">
                {paper.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{paper.authors}</p>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <span className="flex items-center">
                  <i className="far fa-calendar-alt mr-1"></i>
                  {paper.year}
                </span>
                <span className="flex items-center ml-4">
                  <i className="fas fa-quote-right mr-1"></i>
                  {paper.citations} citations
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Export Options */}
      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
          <i className="fas fa-download mr-2"></i>
          Export Report
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
          <i className="fas fa-share-alt mr-2"></i>
          Share Results
        </button>
      </div>
    </div>
  );
}

export default ResultDisplay;