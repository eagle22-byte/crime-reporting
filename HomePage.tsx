import React from 'react';
import { Shield, FileText, Search, Phone, Lock, Clock, Users, CheckCircle } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: Lock,
      title: 'Anonymous Reporting',
      description: 'Report crimes safely without revealing your identity',
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Submit reports anytime, anywhere from any device',
    },
    {
      icon: Search,
      title: 'Track Your Report',
      description: 'Follow the progress of your submitted reports in real-time',
    },
    {
      icon: Users,
      title: 'Community Safety',
      description: 'Help make your community safer by reporting incidents',
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Reports Submitted' },
    { number: '95%', label: 'Resolution Rate' },
    { number: '24/7', label: 'Support Available' },
    { number: '100%', label: 'Confidential' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Shield className="h-16 w-16 text-blue-200" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Safe. Secure. Anonymous.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Report crimes and incidents safely through our encrypted platform. 
              Help law enforcement keep your community safe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('report')}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <FileText className="h-5 w-5" />
                <span>Report a Crime</span>
              </button>
              <button
                onClick={() => onNavigate('track')}
                className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2 border border-blue-600"
              >
                <Search className="h-5 w-5" />
                <span>Track Report</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CrimeReport?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform provides a secure, user-friendly way to report crimes and help law enforcement keep communities safe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-600 rounded-2xl p-8 text-white text-center">
            <Phone className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">In Case of Emergency</h2>
            <p className="text-xl mb-6 text-red-100">
              If you're experiencing an immediate emergency, don't use this website.
            </p>
            <div className="text-4xl font-bold mb-2">Call 911</div>
            <p className="text-red-100">For immediate police, fire, or medical emergency</p>
            <button
              onClick={() => onNavigate('emergency')}
              className="mt-6 bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Emergency Contacts
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to report a crime and help your community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Submit Report</h3>
              <p className="text-gray-600">Fill out our secure form with incident details. You can remain anonymous.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Reference Number</h3>
              <p className="text-gray-600">Receive a unique reference number to track your report's progress.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Follow Progress</h3>
              <p className="text-gray-600">Use your reference number to check updates on your report.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;