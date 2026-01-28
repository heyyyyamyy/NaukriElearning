import React from 'react';
import { Calendar, Clock, ArrowRight, Sparkle } from 'lucide-react';
import ThreedTiltCard from '../components/ThreedTiltCard';
import { blogPosts } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Blog Header */}
      <section className="bg-gray-50 py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto reveal">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">Naukri <span className="text-brand-600">Insights</span></h1>
          <p className="text-xl text-gray-600 font-medium">Your daily dose of professional wisdom, industry trends, and career advice.</p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="max-w-7xl mx-auto px-4 -mt-12 relative z-10 reveal-scale">
        <ThreedTiltCard intensity={5} glow={true} className="w-full">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-3xl border border-gray-100 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 h-[400px] lg:h-auto">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" alt="Featured" className="w-full h-full object-cover" />
            </div>
            <div className="lg:w-1/2 p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkle size={14} /> Editor's Choice
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">Mastering the Art of Remote Leadership in a 3D Workspace</h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                As organizations shift towards immersive digital environments, the traditional rules of management are being rewritten. Discover how to lead with empathy in the metaverse.
              </p>
              <div className="flex items-center gap-6 text-sm font-bold text-gray-400 uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><Calendar size={16} /> Jan 28, 2024</span>
                <span className="flex items-center gap-1.5"><Clock size={16} /> 12 Min Read</span>
              </div>
            </div>
          </div>
        </ThreedTiltCard>
      </section>

      {/* Grid of Posts */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blogPosts.map((post, i) => (
            <ThreedTiltCard key={post.id} intensity={5} className={`reveal delay-${(i + 1) * 100}`}>
              <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group h-full flex flex-col">
                <div className="h-64 overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-xs font-black text-brand-600 uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-600 transition-colors leading-tight">{post.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="mt-auto">
                    <button className="text-brand-600 font-bold flex items-center gap-2 text-sm hover:translate-x-1 transition-all uppercase tracking-widest">
                      Read Article <ArrowRight size={16}/>
                    </button>
                  </div>
                </div>
              </div>
            </ThreedTiltCard>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-brand-50 py-24 text-center">
        <div className="max-w-2xl mx-auto px-4 reveal">
          <h2 className="text-3xl font-black mb-4">Stay updated</h2>
          <p className="text-gray-500 mb-8">Get the latest career insights delivered directly to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="email@address.com" className="flex-grow px-6 py-4 rounded-2xl border border-gray-200 outline-none focus:ring-4 focus:ring-brand-500/20" />
            <button className="px-8 py-4 bg-brand-600 text-white rounded-2xl font-bold shadow-xl hover:bg-brand-700 transition-all">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;