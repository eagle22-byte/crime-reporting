import React from 'react';
import { Phone, AlertTriangle, MapPin, Clock, Shield, Users, Heart, Zap } from 'lucide-react';

const Emergency: React.FC = () => {
  const emergencyContacts = [
    {
      title: 'Police Emergency',
      number: '911',
      description: 'Immediate police response for crimes in progress',
      icon: Shield,
      color: 'bg-red-600',
    },
    {
      title: 'Fire Department',
      number: '911',
      description: 'Fire emergencies, hazardous materials, rescue operations',
      icon: Zap,
      color: 'bg-orange-600',
    },
    {
      title: 'Medical Emergency',
      number: '911',
      description: 'Life-threatening medical situations, ambulance services',
      icon: Heart,
      color: 'bg-red-600',
    },
    {
      title: 'Non-Emergency Police',
      number: '(555) 123-4567',
      description: 'Non-urgent police matters, general inquiries',
      icon: Shield,
      color: 'bg-blue-600',
    },
  ];

  const crisisResources = [
    {
      title: 'National Suicide Prevention Lifeline',
      number: '988',
      description: '24/7 crisis support and suicide prevention',
      hours: '24/7',
    },
    {
      title: 'Domestic Violence Hotline',
      number: '1-800-799-7233',
      description: 'Support for domestic violence situations',
      hours: '24/7',
    },
    {
      title: 'Poison Control',
      number: '1-800-222-1222',
      description: 'Poisoning emergencies and prevention',
      hours: '24/7',
    },
    {
      title: 'Crisis Text Line',
      number: 'Text HOME to 741741',
      description: 'Free, 24/7 crisis support via text message',
      hours: '24/7',
    },
  ];

  const emergencyTips = [
    {
      title: 'Stay Calm',
      description: 'Take deep breaths and try to remain calm to think clearly.',
      icon: Users,
    },
    {
      title: 'Ensure Safety',
      description: 'Get to a safe location if possible before calling for help.',
      icon: Shield,
    },
    {
      title: 'Know Your Location',
      description: 'Be prepared to provide your exact address or location.',
      icon: MapPin,
    },
    {
      title: 'Follow Instructions',
      description: 'Listen carefully to dispatcher instructions and follow them.',
      icon: Phone,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-red-600 rounded-full p-4">
              <AlertTriangle className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Emergency Contacts</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For immediate life-threatening emergencies, always call 911 first. 
            Use the resources below for other urgent situations and crisis support.
          </p>
        </div>

        {/* Primary Emergency Contacts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Immediate Emergency</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className={`${contact.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <contact.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{contact.title}</h3>
                <div className="text-2xl font-bold text-gray-900 mb-2">{contact.number}</div>
                <p className="text-gray-600 text-sm">{contact.description}</p>
                <button
                  onClick={() => window.open(`tel:${contact.number.replace(/[^\d]/g, '')}`)}
                  className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Crisis Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Crisis Support Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {crisisResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
                  <div className="flex items-center text-sm text-green-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{resource.hours}</span>
                  </div>
                </div>
                <div className="text-xl font-bold text-blue-600 mb-2">{resource.number}</div>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <button
                  onClick={() => {
                    if (resource.number.includes('Text')) {
                      window.open('sms:741741?body=HOME');
                    } else {
                      window.open(`tel:${resource.number.replace(/[^\d]/g, '')}`);
                    }
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>{resource.number.includes('Text') ? 'Send Text' : 'Call Now'}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Tips */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergency Response Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <tip.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-red-900 mb-2">Important Emergency Information</h3>
              <div className="text-red-800 space-y-2">
                <p>• <strong>Call 911</strong> for any life-threatening emergency</p>
                <p>• <strong>Give your exact location</strong> - address, landmarks, or GPS coordinates</p>
                <p>• <strong>Stay on the line</strong> until the dispatcher tells you it's okay to hang up</p>
                <p>• <strong>Follow dispatcher instructions</strong> - they are trained to help you</p>
                <p>• <strong>Don't hang up first</strong> - let the emergency operator end the call</p>
              </div>
            </div>
          </div>
        </div>

        {/* When to Call 911 */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">When to Call 911</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-800">
            <div>
              <h4 className="font-semibold mb-2">Medical Emergencies:</h4>
              <ul className="text-sm space-y-1">
                <li>• Severe bleeding or wounds</li>
                <li>• Difficulty breathing</li>
                <li>• Chest pain or heart attack</li>
                <li>• Stroke symptoms</li>
                <li>• Unconscious person</li>
                <li>• Severe allergic reactions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Safety Emergencies:</h4>
              <ul className="text-sm space-y-1">
                <li>• Crimes in progress</li>
                <li>• Fire or explosion</li>
                <li>• Vehicle accidents with injuries</li>
                <li>• Domestic violence</li>
                <li>• Threats to personal safety</li>
                <li>• Missing persons (children/vulnerable adults)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;