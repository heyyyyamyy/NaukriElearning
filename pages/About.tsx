import React from 'react';
import { Target, Heart, Shield, Globe, Award, Zap, BookOpen, Microscope, Briefcase, GraduationCap } from 'lucide-react';
import ThreedTiltCard from '../components/ThreedTiltCard';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-brand-900 text-white py-40 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                 <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-600 to-transparent transform skew-x-12"></div>
                 <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-600/30 to-transparent transform -skew-x-12"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                <div className="inline-block px-4 py-1.5 bg-brand-400/20 backdrop-blur-md rounded-full border border-brand-400/30 text-brand-200 text-sm font-bold mb-8 tracking-widest uppercase">
                    Our Mission
                </div>
                <h1 className="text-6xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
                    Empowering the World <br/>Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-300">Knowledge</span>
                </h1>
                <p className="text-xl md:text-2xl text-brand-100 max-w-3xl mx-auto leading-relaxed">
                    We are NaukriElearning. We provide the bridges between human potential and global career success through immersive digital education.
                </p>
            </div>
        </div>

        {/* Global Impact Counter Section */}
        <div className="bg-white py-20 relative z-20 -mt-10 reveal">
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-white rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.1)] border border-gray-100 p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div className="reveal delay-100">
                        <div className="text-5xl font-black text-brand-600 mb-2">80M+</div>
                        <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">Active Learners</div>
                    </div>
                    <div className="border-l border-gray-100 hidden lg:block"></div>
                    <div className="reveal delay-200">
                        <div className="text-5xl font-black text-brand-600 mb-2">170+</div>
                        <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">Certifications</div>
                    </div>
                    <div className="border-l border-gray-100 hidden lg:block"></div>
                    <div className="reveal delay-300">
                        <div className="text-5xl font-black text-brand-600 mb-2">150+</div>
                        <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">Hiring Partners</div>
                    </div>
                    <div className="border-l border-gray-100 hidden lg:block"></div>
                    <div className="reveal delay-400">
                        <div className="text-5xl font-black text-brand-600 mb-2">4.8</div>
                        <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">Average Rating</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Our Story */}
        <div className="max-w-7xl mx-auto px-4 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
                <div className="reveal-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">The Story Behind <br/>the Cube</h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        What started as a small initiative to provide affordable vocational training in 2024 has grown into a global powerhouse of professional education. Our 'Cube' logo represents the multidimensional nature of skill-building: Theory, Practice, and Verification.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        Today, we host over 170+ professional certifications ranging from Mechanical Engineering to advanced Cloud Computing, partnering with the world's most innovative companies.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 bg-brand-50 rounded-2xl border border-brand-100 reveal delay-100">
                            <Award className="text-brand-600 mb-3" size={32} />
                            <div className="text-2xl font-bold text-gray-900">#1 Platform</div>
                            <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Skill Certification</div>
                        </div>
                        <div className="p-6 bg-brand-50 rounded-2xl border border-brand-100 reveal delay-200">
                            <Globe className="text-brand-600 mb-3" size={32} />
                            <div className="text-2xl font-bold text-gray-900">Global</div>
                            <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">190+ Countries</div>
                        </div>
                    </div>
                </div>
                <div className="reveal-right">
                     <ThreedTiltCard intensity={15} className="w-full">
                         <div className="bg-white rounded-3xl p-3 shadow-2xl border border-gray-100">
                             <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" className="rounded-2xl w-full h-[550px] object-cover" alt="Mission" />
                         </div>
                     </ThreedTiltCard>
                </div>
            </div>

            {/* Our Learning Methodology */}
            <div className="mb-32 bg-gray-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden reveal">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="relative z-10">
                    <div className="text-center mb-16 reveal">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">The Learning Methodology</h2>
                        <p className="text-brand-300 text-lg">We don't just teach. We build careers using a proven 3-pillar system.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-6 reveal delay-100">
                            <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(0,86,210,0.4)]">
                                < BookOpen size={32} />
                            </div>
                            <h3 className="text-2xl font-bold">Immersive Content</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Curated by industry veterans, our high-definition video lessons and interactive theory modules ensure you grasp complex concepts with 3D visualizations.
                            </p>
                        </div>
                        <div className="space-y-6 reveal delay-200">
                            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(147,51,234,0.4)]">
                                <Microscope size={32} />
                            </div>
                            <h3 className="text-2xl font-bold">Hands-On Validation</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Knowledge is nothing without application. Our platform includes virtual sandboxes and real-world project simulators to test your skills in real-time.
                            </p>
                        </div>
                        <div className="space-y-6 reveal delay-300">
                            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                                <GraduationCap size={32} />
                            </div>
                            <h3 className="text-2xl font-bold">Verified Credentials</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Every certification is backed by our blockchain-verified system, ensuring your achievements are instantly recognizable and trustable by any employer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className="mb-32">
                <div className="text-center mb-16 reveal">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                    <p className="text-lg text-gray-500">The compass that guides our every decision.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: <Target className="text-white"/>, title: "Accessibility", desc: "Learning should be available to everyone, everywhere, regardless of background.", color: "bg-blue-500" },
                        { icon: <Shield className="text-white"/>, title: "Integrity", desc: "Our certifications represent real skills verified by rigorous standards.", color: "bg-green-500" },
                        { icon: <Heart className="text-white"/>, title: "Empathy", desc: "We understand the career struggles of modern professionals and build tools to help.", color: "bg-red-500" },
                        { icon: <Zap className="text-white"/>, title: "Innovation", desc: "We constantly update our curriculum to match the evolving industry demands.", color: "bg-purple-500" },
                        { icon: <Globe className="text-white"/>, title: "Diversity", desc: "We celebrate the global variety of perspectives in our learning community.", color: "bg-orange-500" },
                        { icon: <Award className="text-white"/>, title: "Excellence", desc: "We strive for 100% student satisfaction and career transformation.", color: "bg-brand-600" }
                    ].map((val, i) => (
                        <div key={i} className={`p-10 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all group reveal delay-${(i % 3 + 1) * 100}`}>
                            <div className={`w-14 h-14 ${val.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform`}>
                                {val.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-600 transition-colors">{val.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Strategic Partnerships Section */}
            <div className="mb-32 py-20 border-y border-gray-100 reveal">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">Strategic Alliances</h2>
                    <p className="text-gray-500 mt-2">Working with the organizations that define the global industry standards.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                    <div className="text-center font-black text-2xl reveal delay-100">PMI®</div>
                    <div className="text-center font-black text-2xl reveal delay-200">AWS</div>
                    <div className="text-center font-black text-2xl reveal delay-300">ASQ</div>
                    <div className="text-center font-black text-2xl reveal delay-400">OSHA</div>
                    <div className="text-center font-black text-2xl reveal delay-500">CISCO</div>
                </div>
            </div>
        </div>

        {/* Closing CTA */}
        <div className="bg-brand-50 py-24 reveal">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 reveal-scale">Join the learning revolution today.</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-200">
                    <button className="px-8 py-4 bg-brand-600 text-white rounded-2xl font-bold shadow-xl hover:bg-brand-700 transition-all">Enroll Now</button>
                    <button className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-2xl font-bold hover:bg-gray-50 transition-all">Careers at Naukri</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;