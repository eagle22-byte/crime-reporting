import React, { useState } from 'react';
import { Search, FileText, Clock, CheckCircle, AlertTriangle, Eye } from 'lucide-react';

const TrackReport: React.FC = () => {
  const [referenceNumber, setReferenceNumber] = useState('');
  const [report, setReport] = useState<any>(null);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearching(true);
    setError('');
    setReport(null);

    setTimeout(() => {
      const reports = JSON.parse(localStorage.getItem('crimeReports') || '[]');
      const foundReport = reports.find((r: any) => r.referenceNumber === referenceNumber.toUpperCase());

      if (foundReport) {
        // Add some demo status updates
        const statusHistory = [
          { date: foundReport.submittedAt, status: 'Report Submitted', description: 'Your report has been received and logged into our system.' },
          { date: new Date(new Date(foundReport.submittedAt).getTime() + 1000 * 60 * 30).toISOString(), status: 'Under Review', description: 'A detective has been assigned and is reviewing your case.' },
        ];

        // Randomly add more updates for demo
        if (Math.random() > 0.5) {
          statusHistory.push({
            date: new Date(new Date(foundReport.submittedAt).getTime() + 1000 * 60 * 60 * 24).toISOString(),
            status: 'Investigation Active',
            description: 'Investigation is underway. Additional evidence is being collected.'
          });
        }

        setReport({ ...foundReport, statusHistory });
      } else {
        setError('Report not found. Please check your reference number and try again.');
      }
      setSearching(false);
    }, 1000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Report Submitted':
        return <FileText className="h-5 w-5 text-blue-600" />;
      case 'Under Review':
        return <Clock className="h-5 w-5 text-yellow-600" />;
      case 'Investigation Active':
        return <Eye className="h-5 w-5 text-orange-600" />;
      case 'Resolved':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Report Submitted':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Investigation Active':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Resolved':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Track Your Report</h1>
            <p className="text-gray-600">
              Enter your reference number to check the status of your crime report.
            </p>
          </div>

          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reference Number
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={referenceNumber}
                    onChange={(e) => setReferenceNumber(e.target.value)}
                    placeholder="e.g., CR12345678ABCD"
                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono"
                    required
                  />
                </div>
              </div>
              <div className="flex items-end">
                <button
                  type="submit"
                  disabled={searching}
                  className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {searching ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Searching...</span>
                    </>
                  ) : (
                    <>
                      <Search className="h-4 w-4" />
                      <span>Search</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>

          {error && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 mr-3" />
                <p className="text-red-800">{error}</p>
              </div>
            </div>
          )}

          {report && (
            <div className="space-y-6">
              {/* Report Overview */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h2 className="text-xl font-semibold text-blue-900">Report Details</h2>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(report.statusHistory[report.statusHistory.length - 1].status)}`}>
                    {getStatusIcon(report.statusHistory[report.statusHistory.length - 1].status)}
                    <span className="ml-2">{report.statusHistory[report.statusHistory.length - 1].status}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-blue-900">Reference Number:</span>
                    <span className="ml-2 font-mono">{report.referenceNumber}</span>
                  </div>
                  <div>
                    <span className="font-medium text-blue-900">Crime Type:</span>
                    <span className="ml-2">{report.crimeType}</span>
                  </div>
                  <div>
                    <span className="font-medium text-blue-900">Date Reported:</span>
                    <span className="ml-2">{new Date(report.submittedAt).toLocaleDateString()}</span>
                  </div>
                  <div>
                    <span className="font-medium text-blue-900">Report Type:</span>
                    <span className="ml-2">{report.isAnonymous ? 'Anonymous' : 'With Contact Info'}</span>
                  </div>
                </div>
              </div>

              {/* Status Timeline */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Status Timeline</h3>
                <div className="space-y-4">
                  {report.statusHistory.map((status: any, index: number) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-10 h-10 bg-white border-2 border-gray-300 rounded-full">
                          {getStatusIcon(status.status)}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium text-gray-900">{status.status}</h4>
                          <time className="text-sm text-gray-500">
                            {new Date(status.date).toLocaleString()}
                          </time>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{status.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Details */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Case Information</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Incident Date:</span>
                    <span className="ml-2">{report.incidentDate} {report.incidentTime && `at ${report.incidentTime}`}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Location:</span>
                    <span className="ml-2">{report.location}</span>
                  </div>
                  {report.witnessCount && (
                    <div>
                      <span className="font-medium text-gray-700">Witnesses:</span>
                      <span className="ml-2">{report.witnessCount}</span>
                    </div>
                  )}
                  {report.files && report.files.length > 0 && (
                    <div>
                      <span className="font-medium text-gray-700">Attachments:</span>
                      <span className="ml-2">{report.files.length} file(s) uploaded</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium text-yellow-800 mb-1">Need to provide additional information?</p>
                    <p className="text-yellow-700">
                      Contact the investigating officer at (555) 123-4567 and reference case number {report.referenceNumber}.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackReport;