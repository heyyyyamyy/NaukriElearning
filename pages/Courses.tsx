import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';
import { courses, categories } from '../constants';
import { Filter } from 'lucide-react';

const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(c => c.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen py-12 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 reveal">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore our Catalog</h1>
          <p className="text-lg text-gray-600">Master in-demand skills in Data Science, Business, AI, and more.</p>
        </div>

        {/* Filter Scrollbar */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-3 no-scrollbar reveal delay-100">
            <button 
                onClick={() => setSelectedCategory('All')}
                className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${selectedCategory === 'All' ? 'bg-brand-600 text-white shadow-md' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}
            >
                All Categories
            </button>
            {categories.map((cat, i) => (
                <button 
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${selectedCategory === cat.name ? 'bg-brand-600 text-white shadow-md' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}
                >
                    {cat.name}
                </button>
            ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="hidden lg:block w-64 flex-shrink-0 reveal-left">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm sticky top-28">
                    <div className="flex items-center gap-2 mb-4 text-gray-900 font-bold">
                        <Filter size={20} /> Filters
                    </div>
                    
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-sm font-bold text-gray-900 mb-3">Level</h4>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                                    <input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500"/>
                                    <span>Beginner</span>
                                </label>
                                <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                                    <input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500"/>
                                    <span>Intermediate</span>
                                </label>
                                <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                                    <input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500"/>
                                    <span>Advanced</span>
                                </label>
                            </div>
                        </div>

                         <div>
                            <h4 className="text-sm font-bold text-gray-900 mb-3">Duration</h4>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                                    <input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500"/>
                                    <span>1-3 Months</span>
                                </label>
                                <label className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer">
                                    <input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500"/>
                                    <span>3-6 Months</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Course Grid */}
            <div className="flex-grow">
                 {filteredCourses.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCourses.map((course, i) => (
                        <div key={course.id} className={`reveal delay-${(i % 3 + 1) * 100}`}>
                          <CourseCard course={course} />
                        </div>
                        ))}
                    </div>
                 ) : (
                     <div className="text-center py-20 bg-white rounded-xl border border-gray-200 border-dashed reveal">
                         <h3 className="text-xl font-medium text-gray-500">No courses found in this category.</h3>
                         <button onClick={() => setSelectedCategory('All')} className="mt-4 text-brand-600 font-bold hover:underline">Clear Filters</button>
                     </div>
                 )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;