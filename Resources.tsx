import React from 'react';
import { Book, Users, Shield, Phone, ExternalLink, FileText, AlertCircle, Heart } from 'lucide-react';

const Resources: React.FC = () => {
  const crimePreventionTips = [
    {
      category: 'Home Security',
      tips: [
        'Install quality door and window locks',
        'Use outdoor lighting and security cameras',
        'Keep valuables out of sight from windows',
        'Know your neighbors and watch out for each other',
        'Don\'t advertise expensive purchases or vacations on social media',
      ],
    },
    {
      category: 'Personal Safety',
      tips: [
        'Be aware of your surroundings at all times',
        'Trust your instincts if something feels wrong',
        'Avoid walking alone in poorly lit or isolated areas',
        'Keep emergency contacts easily accessible',
        'Share your location with trusted friends or family when out',
      ],
    },
    {
      category: 'Vehicle Security',
      tips: [
        'Always lock your car and close windows',
        'Park in well-lit, visible areas',
        'Don\'t leave valuables visible in your car',
        'Keep your car in good working condition',
        'Be alert when getting in and out of your vehicle',
      ],
    },
    {
      category: 'Online Safety',
      tips: [
        'Use strong, unique passwords for all accounts',
        'Be cautious about sharing personal information online',
        'Verify the identity of people you meet online',
        'Keep software and security systems updated',
        'Report suspicious online activity immediately',
      ],
    },
  ];

  const communityResources = [
    {
      title: 'Neighborhood Watch Program',
      description: 'Join or start a neighborhood watch group to improve community safety.',
      icon: Users,
      contact: '(555) 123-4567',
      website: 'www.neighborhoodwatch.org',
    },
    {
      title: 'Victim Services',
      description: 'Support services for crime victims including counseling and legal assistance.',
      icon: Heart,
      contact: '(555) 987-6543',
      website: 'www.victimservices.org',
    },
    {
      title: 'Crime Stoppers',
      description: 'Anonymous tip line for reporting crimes and suspicious activities.',
      icon: Phone,
      contact: '1-800-CRIME-TIPS',
      website: 'www.crimestoppers.org',
    },
    {
      title: 'Legal Aid Society',
      description: 'Free legal assistance for low-income individuals and families.',
      icon: FileText,
      contact: '(555) 456-7890',
      website: 'www.legalaid.org',
    },
  ];

  const educationalResources = [
    {
      title: 'Crime Prevention Through Environmental Design (CPTED)',
      description: 'Learn how to design spaces to naturally deter criminal activity.',
      type: 'Guide',
      icon: Book,
    },
    {
      title: 'Personal Safety Workshop',
      description: 'Monthly workshops on personal safety and self-defense techniques.',
      type: 'Workshop',
      icon: Shield,
    },
    {
      title: 'Cybersecurity Basics',
      description: 'Essential guide to protecting yourself from online crimes and scams.',
      type: 'Online Course',
      icon: FileText,
    },
    {
      title: 'Teen Safety Program',
      description: 'Educational program designed specifically for teenage safety awareness.',
      type: 'Program',
      icon: Users,
    },
  ];

  const emergencyPreparedness = [
    'Create a family emergency plan and practice it regularly',
    'Prepare an emergency kit for your home and vehicle',
    'Know evacuation routes from your home and workplace',
    'Keep important documents in a safe, accessible place',
    'Establish an out-of-state contact person',
    'Learn basic first aid and CPR',
    'Stay informed about local emergency alerts and warnings',
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 rounded-full p-4">
              <Book className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Safety Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive resources to help you stay safe, prevent crime, and build stronger communities.
          </p>
        </div>

        {/* Crime Prevention Tips */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Crime Prevention Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {crimePreventionTips.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-5 w-5 text-blue-600 mr-2" />
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Community Resources */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Community Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <resource.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="font-medium text-blue-600">{resource.contact}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ExternalLink className="h-4 w-4 text-gray-400 mr-2" />
                    <a href={`https://${resource.website}`} className="text-blue-600 hover:underline">
                      {resource.website}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Educational Resources */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Educational Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {educationalResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <resource.icon className="h-6 w-6 text-green-600" />
                </div>
                <div className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full mb-3 inline-block">
                  {resource.type}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Preparedness */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Emergency Preparedness</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <AlertCircle className="h-8 w-8 text-orange-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Be Prepared for Emergencies</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Essential Preparedness Steps:</h4>
                <ul className="space-y-3">
                  {emergencyPreparedness.slice(0, 4).map((step, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-orange-600 text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-600">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Additional Safety Measures:</h4>
                <ul className="space-y-3">
                  {emergencyPreparedness.slice(4).map((step, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-orange-600 text-sm font-bold">{index + 5}</span>
                      </div>
                      <span className="text-gray-600">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Reference Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Quick Reference - Save These Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">911</div>
              <div className="text-blue-100">All Emergencies</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold mb-2">(555) 123-4567</div>
              <div className="text-blue-100">Non-Emergency Police</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold mb-2">1-800-CRIME-TIPS</div>
              <div className="text-blue-100">Anonymous Crime Tips</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;