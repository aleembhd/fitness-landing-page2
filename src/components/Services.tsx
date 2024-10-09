import React from 'react';
import { Dumbbell, Utensils, Video } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Dumbbell size={48} className="mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Personalized Workout Plans</h3>
            <p>Tailored exercise routines designed to meet your specific goals and fitness level.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Utensils size={48} className="mb-4 text-green-500" />
            <h3 className="text-xl font-semibold mb-2">Nutrition Guidance</h3>
            <p>Expert advice on meal planning and nutrition to complement your fitness journey.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Video size={48} className="mb-4 text-red-500" />
            <h3 className="text-xl font-semibold mb-2">Online Coaching</h3>
            <p>Virtual training sessions and support to keep you motivated and on track.</p>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
          <ul className="list-disc list-inside">
            <li>Proven results with countless success stories</li>
            <li>Personalized approach tailored to your unique needs</li>
            <li>Ongoing support and motivation throughout your journey</li>
            <li>Expert guidance based on the latest fitness research</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;