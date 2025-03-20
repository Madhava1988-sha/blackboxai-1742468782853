import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center mb-4 md:mb-0">
            <div className="text-blue-600 mr-3">
              <i className="fas fa-shield-alt text-3xl"></i>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                AI Content Detector
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Better than Turnitin, ZeroGPT & Originality.AI
              </p>
            </div>
          </div>

          {/* Features List */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center text-gray-700">
              <i className="fas fa-robot text-blue-500 mr-2"></i>
              <span className="text-sm">AI Detection</span>
            </div>
            <div className="flex items-center text-gray-700">
              <i className="fas fa-book text-blue-500 mr-2"></i>
              <span className="text-sm">Scholar Search</span>
            </div>
            <div className="flex items-center text-gray-700">
              <i className="fas fa-chart-line text-blue-500 mr-2"></i>
              <span className="text-sm">Readability Score</span>
            </div>
            <div className="flex items-center text-gray-700">
              <i className="fas fa-mobile-alt text-blue-500 mr-2"></i>
              <span className="text-sm">Mobile Optimized</span>
            </div>
          </div>
        </div>

        {/* Feature Banner */}
        <div className="mt-6 bg-blue-50 rounded-lg p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100">
                <i className="fas fa-check text-blue-600"></i>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">GPT-4 Detection</h3>
                <p className="text-xs text-gray-500">Detects latest AI models</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100">
                <i className="fas fa-graduation-cap text-blue-600"></i>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">Academic Standards</h3>
                <p className="text-xs text-gray-500">Journal-ready analysis</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100">
                <i className="fas fa-infinity text-blue-600"></i>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">Unlimited Use</h3>
                <p className="text-xs text-gray-500">100% Free for scholars</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;