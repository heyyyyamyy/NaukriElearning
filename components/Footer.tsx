import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-xl">N</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-extrabold text-xl text-brand-900 tracking-tight leading-none">Naukri</span>
                    <span className="font-semibold text-[10px] text-brand-500 tracking-widest leading-none">ELEARNING</span>
                </div>
            </Link>
            <p className="text-gray-500 text-sm max-w-sm mb-6 leading-relaxed">
                Empowering professional growth with industry-recognized certifications and 3D immersive learning pathways since 2024.
            </p>
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                    <Award size={16} className="text-brand-600"/> ISO 9001 CERTIFIED
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                    <ShieldCheck size={16} className="text-brand-600"/> SECURE PLATFORM
                </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Platform</h3>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><Link to="/courses" className="hover:text-brand-600 transition-colors">Course Catalog</Link></li>
              <li><Link to="/enterprise" className="hover:text-brand-600 transition-colors">For Enterprise</Link></li>
              <li><Link to="/about" className="hover:text-brand-600 transition-colors">Learning Paths</Link></li>
              <li><Link to="/contact" className="hover:text-brand-600 transition-colors">Admissions</Link></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Student Login</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-xs">Resources</h3>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><Link to="/help" className="hover:text-brand-600 transition-colors">Help Center</Link></li>
              <li><Link to="/blog" className="hover:text-brand-600 transition-colors">Insights & Blog</Link></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Press Kit</a></li>
              <li><Link to="/careers" className="hover:text-brand-600 transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-400 font-medium">
            © 2024 NaukriElearning Global Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;