import React from 'react';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <i className="fas fa-shield-alt text-2xl text-blue-600 mr-2"></i>
              <h3 className="text-lg font-semibold text-gray-800">AI Content Detector</h3>
            </div>
            <p className="text-gray-600 text-sm">
              A powerful tool for detecting AI-generated content, analyzing academic papers, 
              and ensuring your work meets journal standards. Free for PhD scholars and researchers.
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              Features
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm flex items-center">
                  <i className="fas fa-robot mr-2 w-5"></i>
                  AI Detection
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm flex items-center">
                  <i className="fas fa-book mr-2 w-5"></i>
                  Scholar Search
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm flex items-center">
                  <i className="fas fa-chart-line mr-2 w-5"></i>
                  Readability Analysis
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm flex items-center">
                  <i className="fas fa-mobile-alt mr-2 w-5"></i>
                  Mobile Support
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm flex items-center">
                  <i className="fas fa-graduation-cap mr-2 w-5"></i>
                  For Researchers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm flex items-center">
                  <i className="fas fa-question-circle mr-2 w-5"></i>
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm flex items-center">
                  <i className="fas fa-book-open mr-2 w-5"></i>
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 text-sm flex items-center">
                  <i className="fas fa-code mr-2 w-5"></i>
                  API Access
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm">
              © 2024 AI Content Detector. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <i className="fab fa-github text-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <i className="fab fa-linkedin text-lg"></i>
              </a>
            </div>
          </div>

          {/* Additional Links */}
          <div className="mt-4 flex justify-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
            <a href="#" className="hover:text-blue-600">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;