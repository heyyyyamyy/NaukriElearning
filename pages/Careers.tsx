import React from 'react';
import { Briefcase, MapPin, Users, Zap, Star, Sparkles, Heart } from 'lucide-react';
import ThreedTiltCard from '../components/ThreedTiltCard';

const Careers: React.FC = () => {
  const jobs = [
    { title: 'Senior AI Engineer', team: 'Naukri Labs', type: 'Remote', location: 'Bangalore / Remote' },
    { title: 'Curriculum Designer', team: 'Education', type: 'Full-time', location: 'Hyderabad' },
    { title: 'Full Stack Developer', team: 'Platform', type: 'Full-time', location: 'Remote' },
    { title: 'Career Advisor', team: 'Student Success', type: 'Full-time', location: 'Delhi' },
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Careers Hero */}
      <section className="max-w-7xl mx-auto px-4 py-24 text-center overflow-hidden">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 text-brand-600 rounded-full text-xs font-black tracking-widest uppercase mb-6 reveal">
          <Sparkles size={14} /> Join the mission
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight reveal">Build the future of <br/><span className="text-brand-600">education.</span></h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed reveal delay-200">
          We're looking for passionate individuals to help us bridge the gap between human potential and global career success.
        </p>
      </section>

      {/* Perks */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Zap className="text-yellow-400" />, title: 'High Impact', desc: 'Touch the lives of 80M+ learners around the world every day.' },
              { icon: <Heart className="text-red-400" />, title: 'Well-being', desc: 'Comprehensive health coverage and unlimited mental health support.' },
              { icon: <Users className="text-blue-400" />, title: 'Collaboration', desc: 'Work with the best engineers and educators in the industry.' },
            ].map((perk, i) => (
              <div key={i} className={`text-center reveal delay-${(i + 1) * 100}`}>
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10">
                  {perk.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{perk.title}</h3>
                <p className="text-gray-400 leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-black mb-16 text-center text-gray-900 reveal">Current Openings</h2>
        <div className="space-y-6">
          {jobs.map((job, i) => (
            <ThreedTiltCard key={i} intensity={3} className={`reveal delay-${(i + 1) * 100}`}>
              <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row justify-between items-center group">
                <div className="text-center md:text-left mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-500 font-medium">
                    <span className="flex items-center gap-1.5"><Users size={16} /> {job.team}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={16} /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Briefcase size={16} /> {job.type}</span>
                  </div>
                </div>
                <button className="px-8 py-3 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 transition-colors active:scale-95 shadow-lg shadow-brand-600/20">
                  Apply Now
                </button>
              </div>
            </ThreedTiltCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Careers;