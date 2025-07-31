import React, { useState } from 'react';
import { Calendar, MapPin, Upload, AlertCircle, CheckCircle, User, Phone, Eye, EyeOff } from 'lucide-react';

interface ReportCrimeProps {
  onNavigate: (page: string) => void;
}

const ReportCrime: React.FC<ReportCrimeProps> = ({ onNavigate }) => {
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [formData, setFormData] = useState({
    crimeType: '',
    incidentDate: '',
    incidentTime: '',
    location: '',
    description: '',
    witnessCount: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
  });
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');

  const crimeTypes = [
    'Theft/Burglary',
    'Assault',
    'Vandalism',
    'Drug-related',
    'Fraud/Scam',
    'Cybercrime',
    'Domestic Violence',
    'Harassment',
    'Hit and Run',
    'Suspicious Activity',
    'Other',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate a random reference number
    const refNum = 'CR' + Date.now().toString().slice(-8) + Math.random().toString(36).substr(2, 4).toUpperCase();
    setReferenceNumber(refNum);
    setSubmitted(true);
    
    // Store in localStorage for demo purposes
    const reports = JSON.parse(localStorage.getItem('crimeReports') || '[]');
    const newReport = {
      ...formData,
      referenceNumber: refNum,
      submittedAt: new Date().toISOString(),
      status: 'Under Review',
      isAnonymous,
      files: files.map(f => f.name),
    };
    reports.push(newReport);
    localStorage.setItem('crimeReports', JSON.stringify(reports));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Report Submitted Successfully</h2>
            <p className="text-lg text-gray-600 mb-6">
              Your report has been received and is being processed by our team.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Your Reference Number</h3>
              <div className="text-2xl font-mono font-bold text-blue-600 bg-white px-4 py-2 rounded border">
                {referenceNumber}
              </div>
              <p className="text-sm text-blue-700 mt-2">
                Please save this number to track your report's progress
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => onNavigate('track')}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Track This Report
              </button>
              <button
                onClick={() => onNavigate('home')}
                className="w-full bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Report a Crime</h1>
            <p className="text-gray-600">
              Your report helps law enforcement respond effectively. All information is encrypted and secure.
            </p>
          </div>

          {/* Privacy Toggle */}
          <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start space-x-3">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsAnonymous(!isAnonymous)}
                  className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-blue-600"
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      isAnonymous ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
                {isAnonymous ? <EyeOff className="h-5 w-5 text-blue-600" /> : <Eye className="h-5 w-5 text-blue-600" />}
              </div>
              <div>
                <h3 className="font-semibold text-blue-900">
                  {isAnonymous ? 'Anonymous Report' : 'Report with Contact Info'}
                </h3>
                <p className="text-sm text-blue-700">
                  {isAnonymous 
                    ? 'Your identity will remain completely confidential'
                    : 'Police may contact you for additional information'
                  }
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Crime Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type of Crime/Incident *
              </label>
              <select
                name="crimeType"
                value={formData.crimeType}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select crime type</option>
                {crimeTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Incident *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    name="incidentDate"
                    value={formData.incidentDate}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time (if known)
                </label>
                <input
                  type="time"
                  name="incidentTime"
                  value={formData.incidentTime}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Street address, intersection, or landmark"
                  required
                  className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description of Incident *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Please provide as much detail as possible about what happened..."
                rows={6}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-sm text-gray-500 mt-1">
                Include details like suspect descriptions, vehicle information, sequence of events, etc.
              </p>
            </div>

            {/* Witnesses */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Witnesses
              </label>
              <input
                type="number"
                name="witnessCount"
                value={formData.witnessCount}
                onChange={handleInputChange}
                min="0"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Contact Information (only if not anonymous) */}
            {!isAnonymous && (
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Your Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Evidence/Attachments
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <input
                  type="file"
                  onChange={handleFileChange}
                  multiple
                  accept="image/*,video/*,.pdf,.doc,.docx"
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <span className="text-blue-600 font-medium">Upload files</span>
                  <span className="text-gray-600"> or drag and drop</span>
                </label>
                <p className="text-xs text-gray-500 mt-1">
                  Images, videos, documents (Max 10MB each)
                </p>
              </div>
              {files.length > 0 && (
                <div className="mt-2 space-y-1">
                  {files.map((file, index) => (
                    <div key={index} className="text-sm text-gray-600 flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {file.name} ({(file.size / 1024 / 1024).toFixed(1)} MB)
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex">
                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                <div className="text-sm text-yellow-800">
                  <p className="font-medium mb-1">Important Notice:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>This form is for non-emergency situations only</li>
                    <li>For immediate emergencies, call 911</li>
                    <li>All information is encrypted and handled according to our privacy policy</li>
                    <li>False reports are subject to legal consequences</li>
                  </ul>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <CheckCircle className="h-5 w-5" />
              <span>Submit Report</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportCrime;