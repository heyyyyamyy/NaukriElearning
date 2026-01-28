import React from 'react';
import { Search, MessageCircle, Mail, Phone, LifeBuoy, FileText, Settings, ShieldCheck } from 'lucide-react';
import ThreedTiltCard from '../components/ThreedTiltCard';

const HelpCenter: React.FC = () => {
  const categories = [
    { icon: <FileText size={24} />, title: 'Getting Started', desc: 'Learn how to enroll and start your first course.' },
    { icon: <Settings size={24} />, title: 'Account Settings', desc: 'Manage your profile, password, and preferences.' },
    { icon: <ShieldCheck size={24} />, title: 'Certifications', desc: 'How to download and verify your credentials.' },
    { icon: <LifeBuoy size={24} />, title: 'Technical Support', desc: 'Fix issues with the 3D labs or video playback.' },
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Search */}
      <section className="bg-brand-900 py-24 px-4 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-6">How can we help?</h1>
          <div className="relative max-w-xl mx-auto reveal-scale">
            <input 
              type="text" 
              placeholder="Search help articles..." 
              className="w-full px-6 py-4 rounded-2xl text-gray-900 text-lg font-medium outline-none focus:ring-4 focus:ring-brand-500/50"
            />
            <Search className="absolute right-6 top-5 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <ThreedTiltCard key={i} intensity={5} className={`reveal delay-${(i + 1) * 100}`}>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all group h-full">
                <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{cat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </ThreedTiltCard>
          ))}
        </div>
      </section>

      {/* Support Options */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-16 reveal">Still need assistance?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="reveal-left">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mx-auto mb-6">
                <MessageCircle size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Live Chat</h4>
              <p className="text-gray-500 mb-6">Available 24/7 for premium learners.</p>
              <button className="text-brand-600 font-bold hover:underline">Start Chat</button>
            </div>
            <div className="reveal">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mx-auto mb-6">
                <Mail size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Email Support</h4>
              <p className="text-gray-500 mb-6">Get a response within 24 hours.</p>
              <button className="text-brand-600 font-bold hover:underline">Send Email</button>
            </div>
            <div className="reveal-right">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mx-auto mb-6">
                <Phone size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Call Us</h4>
              <p className="text-gray-500 mb-6">Available Mon-Fri, 9am - 6pm.</p>
              <button className="text-brand-600 font-bold hover:underline">+1 (555) 000-HELP</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;