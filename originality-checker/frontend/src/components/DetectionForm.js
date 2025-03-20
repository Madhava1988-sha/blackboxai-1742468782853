import React, { useState } from 'react';

function DetectionForm({ onSubmit, loading }) {
  const [text, setText] = useState('');
  const [dragActive, setDragActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type === "text/plain") {
        const reader = new FileReader();
        reader.onload = (e) => {
          setText(e.target.result);
        };
        reader.readAsText(file);
      }
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === "text/plain") {
        const reader = new FileReader();
        reader.onload = (e) => {
          setText(e.target.result);
        };
        reader.readAsText(file);
      }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Check Your Content
        </h2>
        <p className="text-gray-600">
          Paste your text or upload a file to check for AI-generated content and analyze readability.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div 
          className={`relative border-2 border-dashed rounded-lg transition-colors
            ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <textarea
            className="w-full h-64 p-4 bg-transparent resize-none focus:outline-none"
            placeholder="Enter your text here or drag & drop a text file..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={loading}
          ></textarea>

          {/* Drag & Drop Overlay */}
          {dragActive && (
            <div className="absolute inset-0 bg-blue-50 bg-opacity-90 flex items-center justify-center rounded-lg">
              <div className="text-center">
                <i className="fas fa-cloud-upload-alt text-4xl text-blue-500 mb-2"></i>
                <p className="text-blue-600 font-medium">Drop your file here</p>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          {/* File Upload Button */}
          <div className="relative">
            <input
              type="file"
              accept=".txt"
              onChange={handleFileInput}
              className="hidden"
              id="file-upload"
              disabled={loading}
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <i className="fas fa-upload mr-2"></i>
              Upload File
            </label>
          </div>

          {/* Word Count */}
          <div className="text-sm text-gray-500">
            Words: {text.trim() ? text.trim().split(/\s+/).length : 0}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!text.trim() || loading}
            className={`ml-auto px-6 py-2 rounded-md text-white font-medium transition-colors
              ${!text.trim() || loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
              }`}
          >
            {loading ? (
              <>
                <i className="fas fa-circle-notch fa-spin mr-2"></i>
                Analyzing...
              </>
            ) : (
              <>
                <i className="fas fa-search mr-2"></i>
                Analyze Text
              </>
            )}
          </button>
        </div>
      </form>

      {/* Features List */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100">
              <i className="fas fa-check-circle text-green-600 text-sm"></i>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-gray-900">AI Detection</h3>
              <p className="mt-1 text-xs text-gray-500">Identifies content from GPT-4, Gemini & more</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100">
              <i className="fas fa-book text-blue-600 text-sm"></i>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-gray-900">Scholar Search</h3>
              <p className="mt-1 text-xs text-gray-500">Find relevant academic papers</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-purple-100">
              <i className="fas fa-chart-bar text-purple-600 text-sm"></i>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-gray-900">Readability</h3>
              <p className="mt-1 text-xs text-gray-500">Check academic writing standards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetectionForm;