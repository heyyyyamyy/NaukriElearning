import React from 'react';
import { Shield, Zap, BarChart3, Users, CheckCircle2, Building2 } from 'lucide-react';
import ThreedTiltCard from '../components/ThreedTiltCard';

const Enterprise: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-32">
        {/* Enterprise Hero */}
        <section className="max-w-7xl mx-auto px-4 py-20 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 reveal-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold">
                        <Building2 size={16} /> FOR TEAMS & ORGANIZATIONS
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                        Transform your <span className="text-brand-600">workforce</span> for the future.
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                        Empower your team with world-class certifications. Integrated analytics, dedicated support, and scalable learning pathways.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-4 bg-brand-600 text-white rounded-2xl font-bold shadow-xl hover:bg-brand-700 transition-all">Request a Demo</button>
                        <button className="px-8 py-4 bg-gray-100 text-gray-700 rounded-2xl font-bold hover:bg-gray-200 transition-all">View Case Studies</button>
                    </div>
                </div>
                <div className="relative reveal-right">
                    <ThreedTiltCard intensity={10} className="w-full">
                        <div className="bg-gray-900 rounded-[2.5rem] p-8 shadow-3xl text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl"></div>
                            <h3 className="text-2xl font-bold mb-8">Admin Dashboard</h3>
                            <div className="space-y-6">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium opacity-60">Completion Rate</span>
                                        <span className="text-sm font-bold text-green-400">+12%</span>
                                    </div>
                                    <div className="w-full h-2 bg-white/10 rounded-full"><div className="w-[88%] h-full bg-blue-400 rounded-full"></div></div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                        <div className="text-3xl font-bold">1,240</div>
                                        <div className="text-xs opacity-50 uppercase tracking-widest font-bold mt-1">Active Learners</div>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                        <div className="text-3xl font-bold">85</div>
                                        <div className="text-xs opacity-50 uppercase tracking-widest font-bold mt-1">Certifications</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ThreedTiltCard>
                </div>
            </div>
        </section>

        {/* Benefits Grid */}
        <section className="bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16 reveal">
                    <h2 className="text-4xl font-bold text-gray-900">Built for Enterprise Scale</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: <Shield size={32} className="text-brand-600"/>, title: "SSO & Security", desc: "Seamless integration with Okta, Azure AD, and more." },
                        { icon: <BarChart3 size={32} className="text-brand-600"/>, title: "Deep Analytics", desc: "Track every employee's progress with real-time dashboards." },
                        { icon: <Zap size={32} className="text-brand-600"/>, title: "Custom Pathways", desc: "Build specialized certification tracks for your unique needs." },
                        { icon: <Users size={32} className="text-brand-600"/>, title: "Dedicated Support", desc: "24/7 account management for enterprise partners." },
                        { icon: <CheckCircle2 size={32} className="text-brand-600"/>, title: "Compliance Ready", desc: "Auto-reporting for regulatory skill compliance." },
                        { icon: <Building2 size={32} className="text-brand-600"/>, title: "White Labeling", desc: "Brand the learning portal with your company colors." }
                    ].map((item, i) => (
                        <div key={i} className={`bg-white p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-all reveal delay-${(i % 3 + 1) * 100}`}>
                            <div className="mb-6">{item.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Enterprise Logos */}
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-center text-gray-400 font-bold uppercase tracking-widest mb-12 reveal">Empowering teams at</p>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8 opacity-40 grayscale items-center reveal">
                    <div className="flex justify-center text-xl font-black italic reveal delay-100">SAMSUNG</div>
                    <div className="flex justify-center text-xl font-black italic reveal delay-200">TESLA</div>
                    <div className="flex justify-center text-xl font-black italic reveal delay-300">ORACLE</div>
                    <div className="flex justify-center text-xl font-black italic reveal delay-400">NIKE</div>
                    <div className="flex justify-center text-xl font-black italic reveal delay-500">ADOBE</div>
                    <div className="flex justify-center text-xl font-black italic reveal delay-600">SPOTIFY</div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Enterprise;