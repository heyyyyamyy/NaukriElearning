import React from 'react';
import { ClipboardCheck, Calendar, BookOpen, UserCheck, GraduationCap, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import ThreedTiltCard from '../components/ThreedTiltCard';

const CertificationProcess: React.FC = () => {
  const steps = [
    { title: "Proposal", desc: "Receive a comprehensive proposal email with all necessary enrollment information." },
    { title: "Enrollment", desc: "Place your order and complete the secure payment process to begin your journey." },
    { title: "Onboarding", desc: "Receive study materials and dedicated support assistance within 10 working days." },
    { title: "Pre-board Scheduling", desc: "Book your pre-board exam at a time and date that suits your schedule." },
    { title: "Expert Connection", desc: "Our industry experts connect with you before your scheduled session." },
    { title: "Material Access", desc: "Gain full access to all related digital materials via your registered email." },
    { title: "Global Recognition", desc: "Your degree is acknowledged internationally from the day of release." },
    { title: "Training Sessions", desc: "Access professional video lectures between 90-120 days for final prep." },
    { title: "Expert Mentorship", desc: "Continuous communication with our experts until your final on-board exam." },
    { title: "Final Certification", desc: "Receive your soft copy via email within 48–72 hours after completion." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-brand-900 text-white py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/20 rounded-full border border-white/10 text-brand-200 text-xs font-bold uppercase tracking-widest mb-8">
            <ShieldCheck size={16} /> Verified Journey
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">Certification <span className="text-brand-400">Process</span></h1>
          <p className="text-xl md:text-2xl text-brand-100 max-w-3xl mx-auto leading-relaxed font-medium">
            We are here to bridge the gap in your professional journey and assist you in achieving the career upgrade you deserve.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-12">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <Clock className="text-brand-600" /> Timeline & Overview
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Thank you for showing your interest in participation. We are connecting with you regarding it and we are here to help you for the upgrade that you are looking forward in your career.
              </p>
              <div className="bg-brand-50 border-l-4 border-brand-600 p-8 rounded-r-3xl">
                <h3 className="text-xl font-bold text-brand-900 mb-4">Program Duration: 90 to 120 Days</h3>
                <p className="text-brand-800 leading-relaxed">
                  After payment, learners receive the invoice, study materials, and video lectures within 10 working days, followed by a pre-board exam scheduled within 48 to 72 hours through the official exam portal.
                </p>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <GraduationCap className="text-brand-600" /> Examination Process
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Both tests are conducted using an online platform on our server. The test is a combination of necessary professional courses and includes questions from desired modules.
              </p>
              <ul className="space-y-4">
                {[
                  "90-120 minute strict time limit",
                  "200 objective questionnaires",
                  "Questions derived from provided study materials",
                  "On-call assistance available during exams"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 size={20} className="text-brand-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8 sticky top-32">
            <ThreedTiltCard intensity={10} className="w-full">
              <div className="bg-gray-900 rounded-[3rem] p-12 text-white shadow-3xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/20 blur-[100px]"></div>
                <h3 className="text-2xl font-black mb-6">Method of Obtaining Certification</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  After completion of your session, we will evaluate your performance within 48 to 72 hours and provide your results.
                </p>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Soft Copy Issuance</h4>
                    <p className="text-xs text-gray-400">Sent to registered email immediately after results.</p>
                  </div>
                </div>
              </div>
            </ThreedTiltCard>

            <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
               <h3 className="font-black text-gray-900 mb-4">Need Help?</h3>
               <p className="text-gray-500 text-sm mb-6">Our career counselors are available 24/7 to guide you through the enrollment and certification process.</p>
               <button className="w-full py-4 bg-white border-2 border-brand-600 text-brand-600 rounded-xl font-bold hover:bg-brand-600 hover:text-white transition-all">Contact Advisor</button>
            </div>
          </div>
        </div>

        {/* Step by Step Timeline */}
        <div className="pt-12">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-black text-gray-900 mb-4">Step-by-Step Roadmap</h2>
                <p className="text-lg text-gray-600">A clear path from enrollment to international certification.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {steps.map((step, i) => (
                    <ThreedTiltCard key={i} intensity={15} className="h-full">
                        <div className="bg-white p-6 rounded-3xl h-full border border-gray-100 shadow-sm hover:shadow-xl group transition-all">
                            <div className="text-3xl font-black text-brand-100 group-hover:text-brand-500 transition-colors mb-4">
                                {(i + 1).toString().padStart(2, '0')}
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">{step.title}</h4>
                            <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                        </div>
                    </ThreedTiltCard>
                ))}
            </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-brand-50 border-y border-brand-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-black text-gray-900 mb-6">Begin Your Upgrade Today</h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              We appreciate your interest in our professional course certification program. Join 5,000+ graduates this year and fill the gap in your professional journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-5 bg-brand-600 text-white rounded-2xl font-black text-lg shadow-xl hover:bg-brand-500 transition-all active:scale-95">Enroll Now</button>
                <button className="px-10 py-5 bg-white text-gray-700 border border-gray-200 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all">Download Brochure</button>
            </div>
        </div>
      </section>
    </div>
  );
};

// Helper for check icon since it's locally needed here
const CheckCircle2 = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default CertificationProcess;