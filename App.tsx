import React, { useState } from 'react';
import { Shield, Phone, AlertCircle, FileText, Search, Menu, X, Lock, Eye, EyeOff } from 'lucide-react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ReportCrime from './components/ReportCrime';
import TrackReport from './components/TrackReport';
import Emergency from './components/Emergency';
import Resources from './components/Resources';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'report':
        return <ReportCrime onNavigate={setCurrentPage} />;
      case 'track':
        return <TrackReport />;
      case 'emergency':
        return <Emergency />;
      case 'resources':
        return <Resources />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">CrimeReport</span>
              </div>
              <p className="text-gray-300 mb-4">
                Secure, anonymous crime reporting platform helping communities stay safe.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Lock className="h-4 w-4" />
                <span>256-bit SSL encryption</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => setCurrentPage('report')} className="hover:text-white transition-colors">Report Crime</button></li>
                <li><button onClick={() => setCurrentPage('track')} className="hover:text-white transition-colors">Track Report</button></li>
                <li><button onClick={() => setCurrentPage('emergency')} className="hover:text-white transition-colors">Emergency</button></li>
                <li><button onClick={() => setCurrentPage('resources')} className="hover:text-white transition-colors">Resources</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Emergency</h3>
              <div className="space-y-2 text-gray-300">
                <p className="text-red-400 font-bold text-xl">911</p>
                <p className="text-sm">For immediate emergencies</p>
                <p className="text-blue-400">(555) 123-4567</p>
                <p className="text-sm">Non-emergency police</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CrimeReport. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;