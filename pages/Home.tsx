
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, PlayCircle, Star, Sparkles, BookOpen, ChevronDown, ChevronUp, Clock, Calendar, Cpu, Sparkle, Target, Handshake, Trophy
} from 'lucide-react';
import CourseCard from '../components/CourseCard';
import ThreedTiltCard from '../components/ThreedTiltCard';
import { courses, testimonials, faqs, blogPosts, partnerships } from '../constants';

const Home: React.FC = () => {
  const featuredCourses = courses.slice(0, 4);
  const aiCourses = courses.filter(c => c.category === 'Artificial Intelligence').slice(0, 4);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
        setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-fade-in overflow-hidden">
      {/* Hero Section - Always visible initially */}
      <section className="relative bg-brand-900 text-white min-h-[95vh] flex items-center pt-24 lg:pt-32 overflow-hidden perspective-1000">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-gradient-to-br from-brand-400 to-transparent rounded-full opacity-20 blur-2xl animate-float"></div>
           <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-gradient-to-tr from-purple-500 to-brand-600 rounded-full opacity-20 blur-3xl animate-float-delayed"></div>
           <div className="absolute top-[40%] right-[40%] w-20 h-20 border-4 border-white/10 rounded-xl rotate-45 animate-spin-slow blur-sm"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-100 text-sm font-medium shadow-lg">
                  <Sparkles size={16} className="text-yellow-300" />
                  <span>Placement Drive: 5,000+ Students Placed in 2024</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]">
                Level Up with <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-purple-200 drop-shadow-sm">Modern Skills</span>
              </h1>
              <p className="text-lg lg:text-xl text-brand-100 max-w-xl leading-relaxed">
                NaukriElearning is India's leading portal for professional growth. Get certified by top MNCs and start your dream career today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 pt-4">
                <Link to="/contact" className="group relative px-8 py-4 lg:py-5 bg-white text-brand-900 rounded-2xl font-black text-lg shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                  Start Free Trial <ArrowRight size={20} />
                </Link>
                <Link to="/courses" className="flex items-center justify-center gap-3 px-8 py-4 lg:py-5 rounded-2xl font-bold text-lg text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
                  <PlayCircle size={22} /> See All 170+ Courses
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center relative">
               <ThreedTiltCard intensity={20} glow={true} className="w-full max-w-md">
                   <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 bg-brand-800">
                      <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" alt="Students" className="w-full h-[600px] object-cover opacity-80 mix-blend-overlay" />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-transparent to-transparent"></div>
                      <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl translate-z-20">
                          <div className="flex items-center gap-4 text-white">
                             <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center font-bold text-2xl shadow-lg shadow-blue-500/30">G</div>
                             <div className="flex-grow">
                                 <h3 className="font-bold text-lg">Google AI Professional</h3>
                                 <div className="flex justify-between text-xs opacity-60 mb-1">
                                    <span>Course Progress</span>
                                    <span>88%</span>
                                 </div>
                                 <div className="w-full bg-white/20 h-2 rounded-full"><div className="bg-blue-400 h-full w-[88%] rounded-full shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div></div>
                             </div>
                          </div>
                      </div>
                   </div>
               </ThreedTiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <section className="bg-white border-b border-gray-100 py-12 overflow-hidden reveal">
          <div className="max-w-7xl mx-auto px-4 mb-8">
              <p className="text-center text-xs font-black uppercase tracking-[0.2em] text-gray-400">Our Alumni Work At Global Giants</p>
          </div>
          <div className="relative flex overflow-x-hidden group">
            <div className="animate-marquee whitespace-nowrap flex gap-20 items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                {[...Array(10)].map((_, i) => (
                    <React.Fragment key={i}>
                        <span className="text-3xl font-black tracking-tighter">AMAZON</span>
                        <span className="text-3xl font-black tracking-tighter">MICROSOFT</span>
                        <span className="text-3xl font-black tracking-tighter">GOOGLE</span>
                        <span className="text-3xl font-black tracking-tighter">TCS</span>
                        <span className="text-3xl font-black tracking-tighter">INFOSYS</span>
                        <span className="text-3xl font-black tracking-tighter">ACCENTURE</span>
                        <span className="text-3xl font-black tracking-tighter">WIPRO</span>
                    </React.Fragment>
                ))}
            </div>
          </div>
      </section>

      {/* AI Revolution Workshop */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,#438ae6,transparent_70%)]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8 reveal-left">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/20 rounded-full border border-brand-500/30 text-brand-300 text-xs font-bold uppercase tracking-widest">
                          <Cpu size={14} /> LIVE Workshop
                      </div>
                      <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                          The Generative AI <br/>
                          <span className="text-brand-400">Revolution 2024</span>
                      </h2>
                      <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                          Don't just use AI—build with it. Join our 3-day intensive workshop on LLM deployment, Prompt Engineering, and AI Strategy. Certified by Naukri Labs.
                      </p>
                      <ul className="space-y-4">
                          {[
                            "Build your own custom GPT agents",
                            "Master advanced Prompt Engineering",
                            "Integrate AI into business workflows",
                            "Verifiable Certificate from NaukriElearning"
                          ].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-gray-300">
                                  <CheckCircle2 size={20} className="text-brand-500" />
                                  <span className="font-medium">{item}</span>
                              </li>
                          ))}
                      </ul>
                      <div className="pt-4">
                          <button className="bg-brand-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-brand-500 transition-all shadow-xl shadow-brand-600/20 active:scale-95 flex items-center gap-2">
                              Reserve My Spot <Sparkle size={18} />
                          </button>
                      </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 reveal-right">
                      {aiCourses.map((course, i) => (
                          <ThreedTiltCard key={course.id} intensity={10} className={i % 2 === 1 ? 'mt-8' : ''}>
                              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl group hover:bg-white/10 transition-colors">
                                  <div className="w-12 h-12 bg-brand-600 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg">
                                      <Cpu size={24} />
                                  </div>
                                  <h3 className="text-white font-bold mb-2 group-hover:text-brand-400 transition-colors leading-tight">{course.title}</h3>
                                  <p className="text-gray-500 text-xs uppercase font-black tracking-widest">{course.level}</p>
                              </div>
                          </ThreedTiltCard>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white relative overflow-hidden reveal">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-50"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">From Naukri to <span className="text-brand-600">Global Tech Giants</span></h2>
                  <p className="text-lg text-gray-600">Success stories from our {testimonials.length} most recent graduates placed at top MNCs.</p>
              </div>

              <div className="relative min-h-[450px] flex items-center justify-center">
                  {testimonials.map((t, i) => (
                      <div 
                        key={t.id}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out flex flex-col items-center justify-center text-center ${i === activeTestimonial ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10 pointer-events-none'}`}
                      >
                          <div className="mb-8">
                             <div className="w-24 h-24 bg-gradient-to-br from-brand-600 to-purple-600 rounded-3xl shadow-2xl flex items-center justify-center text-white text-4xl font-black transform rotate-6 hover:rotate-0 transition-transform duration-500 mx-auto">
                                 {t.name.charAt(0)}
                             </div>
                          </div>
                          
                          <div className="max-w-3xl px-4">
                              <div className="flex justify-center gap-1 mb-8">
                                  {[...Array(5)].map((_, star) => <Star key={star} size={24} className="fill-amber-400 text-amber-400" />)}
                              </div>
                              <blockquote className="text-2xl md:text-4xl font-medium text-gray-800 italic leading-snug mb-10 tracking-tight">
                                  "{t.content}"
                              </blockquote>
                              <div className="space-y-2">
                                  <h4 className="text-2xl font-black text-gray-900">{t.name}</h4>
                                  <div className="inline-block px-4 py-1.5 bg-brand-50 rounded-full text-brand-700 font-bold uppercase tracking-widest text-xs">
                                      {t.role}
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>

              {/* Indicators */}
              <div className="mt-16 flex flex-col items-center gap-6">
                  <div className="w-full max-w-md h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-brand-600 transition-all duration-500 ease-out" 
                        style={{ width: `${((activeTestimonial + 1) / testimonials.length) * 100}%` }}
                      ></div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
                      {testimonials.map((_, i) => (
                          <button 
                            key={i} 
                            onClick={() => setActiveTestimonial(i)}
                            className={`h-2 transition-all duration-300 rounded-full ${i === activeTestimonial ? 'w-8 bg-brand-600' : 'w-2 bg-gray-200 hover:bg-gray-400'}`}
                            title={`Slide ${i + 1}`}
                          />
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* Strategic Partnerships Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20 reveal">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600/10 rounded-full text-brand-600 text-xs font-black uppercase tracking-[0.2em] mb-4">
                      <Handshake size={14} /> Global Alliances
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Strategic Partnerships</h2>
                  <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">We collaborate with the world's leading hiring platforms and academic institutions to ensure your success.</p>
              </div>

              <div className="space-y-12">
                  {partnerships.map((partner, i) => (
                      <div key={partner.id} className={`flex flex-col lg:flex-row items-center gap-12 group reveal ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                          <div className={`lg:w-1/3 text-center lg:text-left ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}>
                              <ThreedTiltCard intensity={10} className="inline-block w-full max-w-sm">
                                  <div className="p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl group-hover:shadow-2xl transition-all border-b-8 border-brand-600">
                                      <h3 className="text-4xl font-black text-brand-600 mb-2 tracking-tighter">{partner.name}</h3>
                                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-relaxed">
                                          {partner.subtitle}
                                      </p>
                                  </div>
                              </ThreedTiltCard>
                          </div>
                          <div className={`lg:w-2/3 ${i % 2 === 0 ? 'reveal-right' : 'reveal-left'}`}>
                              <div className="relative p-8 lg:p-12 bg-white rounded-[3rem] border border-gray-100 shadow-sm group-hover:bg-brand-50 transition-colors">
                                  <div className="absolute top-10 left-0 w-1 h-12 bg-brand-600 rounded-full -translate-x-1/2 group-hover:h-24 transition-all"></div>
                                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                                      {partner.content}
                                  </p>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 reveal">
                  <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">The 3D Learning Advantage</h2>
                  <p className="text-lg text-gray-600">Why 80M+ learners prefer the Naukri methodology.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {[
                    { step: "01", title: "Choose Track", desc: "Select from 170+ industry-standard certifications.", icon: <BookOpen /> },
                    { step: "02", title: "3D Immersive Labs", desc: "Experience real-world simulators and hands-on labs.", icon: <Cpu /> },
                    { step: "03", title: "Global Exams", desc: "Pass proctored exams and receive verifiable credentials.", icon: <Trophy /> },
                    { step: "04", title: "Direct Placement", desc: "Access exclusive career fairs with our 150+ partners.", icon: <Target /> }
                  ].map((item, i) => (
                    <ThreedTiltCard key={i} intensity={15} className={`h-full reveal delay-${(i + 1) * 100}`}>
                        <div className="bg-white p-8 rounded-[2.5rem] h-full border border-gray-100 group hover:border-brand-500 transition-colors shadow-sm hover:shadow-xl">
                            <div className="text-5xl font-black text-gray-100 group-hover:text-brand-100 mb-6 transition-colors">{item.step}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </ThreedTiltCard>
                  ))}
              </div>
          </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16 reveal">
            <div>
                <h2 className="text-4xl font-black text-gray-900 tracking-tight">Trending Certifications</h2>
                <p className="text-gray-500 mt-2 font-medium">Top picks for career advancement in 2024.</p>
            </div>
            <Link to="/courses" className="text-brand-600 font-bold flex items-center gap-1 group bg-brand-50 px-5 py-2 rounded-full hover:bg-brand-100 transition-colors">View All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCourses.map((course, i) => (
              <div key={course.id} className={`reveal delay-${(i % 4 + 1) * 100}`}>
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-black text-center mb-16 text-gray-900 tracking-tight reveal">Your Questions, Answered</h2>
              <div className="space-y-4">
                  {faqs.map((faq, i) => (
                      <div key={i} className={`border border-gray-200 rounded-[1.5rem] overflow-hidden bg-white shadow-sm transition-all hover:shadow-md reveal delay-${(i + 1) * 100}`}>
                          <button 
                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            className="w-full px-8 py-6 flex justify-between items-center text-left font-bold text-gray-900 transition-colors"
                          >
                              {faq.question}
                              {openFaq === i ? <ChevronUp className="text-brand-600"/> : <ChevronDown className="text-gray-400"/>}
                          </button>
                          {openFaq === i && (
                              <div className="px-8 pb-6 bg-white text-gray-600 leading-relaxed animate-fade-in-up">
                                  {faq.answer}
                              </div>
                          )}
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Blog/Resources */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 reveal">
                  <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Career Insights</h2>
                  <p className="text-gray-600 font-medium text-lg">Stay ahead with the latest industry trends and tips.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {blogPosts.map((post, i) => (
                    <ThreedTiltCard key={post.id} intensity={5} className={`reveal delay-${(i + 1) * 100}`}>
                        <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 group">
                            <div className="h-56 overflow-hidden">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-4 text-xs font-black text-brand-600 uppercase tracking-widest mb-4">
                                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                    <span className="flex items-center gap-1"><Clock size={12} /> {Math.floor(Math.random() * 5) + 3} MIN</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-600 transition-colors leading-tight">{post.title}</h3>
                                <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">{post.excerpt}</p>
                                <button className="text-brand-600 font-bold flex items-center gap-2 text-sm hover:translate-x-1 transition-all uppercase tracking-widest">Read Article <ArrowRight size={16}/></button>
                            </div>
                        </div>
                    </ThreedTiltCard>
                  ))}
              </div>
          </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-brand-900 text-center relative overflow-hidden reveal">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-30"></div>
           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
               <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">Future-proof <br/>your career today.</h2>
               <p className="text-xl text-brand-200 mb-12 font-medium">Join 80M+ learners globally. Your success starts with a single step.</p>
               <Link to="/contact" className="inline-block bg-white text-brand-900 px-16 py-6 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-all active:scale-95">
                   Apply Now
               </Link>
           </div>
      </section>
    </div>
  );
};

export default Home;
