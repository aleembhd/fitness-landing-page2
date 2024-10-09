import React from 'react';

const testimonials = [
  {
    name: 'Sarah M.',
    quote: "This program changed my life! I've lost 30 pounds and feel amazing.",
    before: 'https://source.unsplash.com/featured/?fitness,before',
    after: 'https://source.unsplash.com/featured/?fitness,after'
  },
  {
    name: 'John D.',
    quote: "The personalized approach really made the difference. I'm stronger than ever!",
    before: 'https://source.unsplash.com/featured/?workout,before',
    after: 'https://source.unsplash.com/featured/?workout,after'
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row mb-4">
                <img src={testimonial.before} alt="Before" className="w-full md:w-1/2 h-64 object-cover rounded-lg mb-4 md:mb-0 md:mr-4" />
                <img src={testimonial.after} alt="After" className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
              </div>
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;