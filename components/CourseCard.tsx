import React from 'react';
import { Star } from 'lucide-react';
import { Course } from '../types';
import { useNavigate } from 'react-router-dom';
import ThreedTiltCard from './ThreedTiltCard';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate('/contact', { state: { preSelected: course.title } });
  };

  return (
    <ThreedTiltCard intensity={5} glow={true} className="h-full rounded-xl">
        <div 
        className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col h-full cursor-pointer shadow-sm hover:shadow-2xl transition-shadow duration-300"
        onClick={handleEnroll}
        >
        <div className="relative h-44 overflow-hidden transform-style-3d">
            <img 
            src={course.image} 
            alt={course.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* 3D Floating Badge */}
            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-gray-900 shadow-lg flex items-center gap-2 translate-z-10 transition-transform duration-300 group-hover:translate-y-1">
                {course.providerLogo && <div className="w-4 h-4 rounded-full bg-brand-100 flex items-center justify-center text-[8px]">{course.providerLogo[0]}</div>}
                <span className="uppercase tracking-wide">{course.provider}</span>
            </div>
        </div>
        
        <div className="p-5 flex flex-col flex-grow bg-white relative z-10">
            <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-600 border border-gray-200 uppercase tracking-wider">
                    {course.type === 'Professional Certificate' ? 'Certificate' : course.type}
                </span>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-brand-600 transition-colors">
            {course.title}
            </h3>
            
            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                 <div className="flex items-center gap-1.5 text-sm">
                    <span className="font-bold text-amber-500 flex items-center">
                        {course.rating} <Star size={14} className="fill-current ml-1" />
                    </span>
                    <span className="text-gray-400 text-xs">({course.students})</span>
                </div>
                <div className="text-xs font-medium text-brand-600 bg-brand-50 px-2 py-1 rounded">
                    {course.level}
                </div>
            </div>
        </div>

        {/* Enroll Button appears on hover */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
    </ThreedTiltCard>
  );
};

export default CourseCard;