import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { courses, categories } from '../constants';
import { Send, Check, Search, X, Filter } from 'lucide-react';

const Contact: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle pre-selection from navigation
  useEffect(() => {
    if (location.state && (location.state as any).preSelected) {
      const courseTitle = (location.state as any).preSelected;
      if (!selectedCourses.includes(courseTitle)) {
        setSelectedCourses(prev => [...prev, courseTitle]);
      }
    }
  }, [location.state]);

  const toggleCourse = (title: string) => {
    if (selectedCourses.includes(title)) {
      setSelectedCourses(selectedCourses.filter(c => c !== title));
    } else {
      setSelectedCourses([...selectedCourses, title]);
    }
  };

  const filteredCoursesList = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = filterCategory === 'All' || course.category === filterCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, filterCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCourses.length === 0) {
      alert("Please select at least one certification.");
      return;
    }
    setTimeout(() => {
        setIsSubmitted(true);
        window.scrollTo(0, 0);
    }, 1000);
  };

  const btn3d = "transform active:translate-y-1 transition-all duration-150 shadow-[0_4px_0_rgb(0,0,0,0.2)] active:shadow-none border-b-4 border-black/10 active:border-none";

  if (isSubmitted) {
      return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
              <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-lg w-full text-center border-t-8 border-brand-600">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check size={40} className="text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Sent!</h2>
                  <p className="text-gray-600 mb-8">
                      Thank you for your interest, <strong>{formData.name}</strong>. 
                      Our team will contact you shortly regarding the following <strong>{selectedCourses.length}</strong> certifications:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-xl text-left mb-8 max-h-48 overflow-y-auto border border-gray-100 shadow-inner">
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                          {selectedCourses.map(c => <li key={c} className="truncate">{c}</li>)}
                      </ul>
                  </div>
                  <button 
                    onClick={() => window.location.href = '#/'} 
                    className={`bg-brand-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-700 transition-colors ${btn3d}`}
                  >
                      Return Home
                  </button>
              </div>
          </div>
      )
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16 pt-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Professional Enrollment</h1>
            <p className="mt-4 text-xl text-gray-600">Apply for world-class certifications recognized globally.</p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-5">
                
                {/* Contact Info Side */}
                <div className="bg-brand-900 p-10 text-white lg:col-span-2 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-8">Ready to Level Up?</h3>
                        <p className="text-brand-200 text-sm mb-10 leading-relaxed">
                            Complete the application below. One of our career advisors will review your profile and reach out to discuss your roadmap.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-brand-500 transition-colors">
                                    <Check size={20} className="text-brand-300 group-hover:text-white" />
                                </div>
                                <span className="text-sm font-medium">Industry Standard Curriculum</span>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-brand-500 transition-colors">
                                    <Check size={20} className="text-brand-300 group-hover:text-white" />
                                </div>
                                <span className="text-sm font-medium">Expert Instructor Support</span>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-brand-500 transition-colors">
                                    <Check size={20} className="text-brand-300 group-hover:text-white" />
                                </div>
                                <span className="text-sm font-medium">Placement Assistance</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 pt-10 border-t border-white/10 relative z-10">
                        <p className="text-xs font-bold text-brand-400 uppercase tracking-widest mb-2">Admissions Office</p>
                        <p className="text-sm text-brand-100">admissions@naukrielearing.com</p>
                        <p className="text-sm text-brand-100">+1 (555) 123-4567</p>
                    </div>
                </div>

                {/* Form Side */}
                <div className="p-8 lg:col-span-3">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700">Full Name</label>
                                <input 
                                    type="text" 
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                                    placeholder="e.g. John Doe"
                                    value={formData.name}
                                    onChange={e => setFormData({...formData, name: e.target.value})}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-700">Email Address</label>
                                <input 
                                    type="email" 
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={e => setFormData({...formData, email: e.target.value})}
                                />
                            </div>
                        </div>

                        {/* Enhanced Course Selector */}
                        <div className="space-y-4">
                             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <label className="block text-sm font-bold text-gray-700">Select Certifications ({selectedCourses.length} selected)</label>
                                {selectedCourses.length > 0 && (
                                    <button 
                                        type="button" 
                                        onClick={() => setSelectedCourses([])}
                                        className="text-xs font-bold text-red-500 hover:text-red-600 flex items-center gap-1"
                                    >
                                        <X size={14} /> Clear All
                                    </button>
                                )}
                             </div>

                             {/* Search & Filter Bar */}
                             <div className="flex flex-col sm:flex-row gap-3">
                                <div className="relative flex-grow">
                                    <input 
                                        type="text" 
                                        placeholder="Search certifications..." 
                                        className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-brand-500"
                                        value={searchQuery}
                                        onChange={e => setSearchQuery(e.target.value)}
                                    />
                                    <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
                                </div>
                                <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-xl">
                                    <Filter size={16} className="text-gray-400" />
                                    <select 
                                        className="bg-transparent text-sm font-bold text-gray-600 outline-none border-none cursor-pointer"
                                        value={filterCategory}
                                        onChange={e => setFilterCategory(e.target.value)}
                                    >
                                        <option value="All">All Categories</option>
                                        {categories.map(cat => <option key={cat.id} value={cat.name}>{cat.name}</option>)}
                                    </select>
                                </div>
                             </div>

                             {/* The List */}
                             <div className="max-h-72 overflow-y-auto border-2 border-gray-100 rounded-2xl p-4 space-y-2 bg-gray-50 shadow-inner no-scrollbar">
                                {filteredCoursesList.length > 0 ? (
                                    filteredCoursesList.map(course => (
                                        <div 
                                            key={course.id} 
                                            className={`
                                                flex items-center p-3 rounded-xl cursor-pointer transition-all border-2
                                                ${selectedCourses.includes(course.title) 
                                                    ? 'bg-brand-50 border-brand-200 text-brand-700 shadow-sm' 
                                                    : 'bg-white border-transparent hover:border-gray-200 text-gray-700'
                                                }
                                            `}
                                            onClick={() => toggleCourse(course.title)}
                                        >
                                            <div className={`
                                                w-6 h-6 rounded-lg border flex items-center justify-center mr-4 transition-all
                                                ${selectedCourses.includes(course.title) 
                                                    ? 'bg-brand-600 border-brand-600' 
                                                    : 'border-gray-300 bg-white'
                                                }
                                            `}>
                                                {selectedCourses.includes(course.title) && <Check size={14} className="text-white" />}
                                            </div>
                                            <div className="flex-grow">
                                                <p className="text-sm font-bold truncate leading-tight">{course.title}</p>
                                                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mt-0.5">{course.category}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-10">
                                        <p className="text-gray-400 font-medium">No certifications found matching your filters.</p>
                                        <button 
                                            type="button" 
                                            onClick={() => {setSearchQuery(''); setFilterCategory('All');}}
                                            className="text-brand-600 font-bold text-sm hover:underline mt-2"
                                        >
                                            Reset Filters
                                        </button>
                                    </div>
                                )}
                             </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Academic or Career Goals (Optional)</label>
                            <textarea 
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none"
                                placeholder="Tell us what you hope to achieve..."
                                value={formData.message}
                                onChange={e => setFormData({...formData, message: e.target.value})}
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            className={`w-full bg-brand-600 text-white font-bold py-5 rounded-2xl shadow-xl hover:bg-brand-700 flex items-center justify-center gap-2 group ${btn3d}`}
                        >
                            Submit Application <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;