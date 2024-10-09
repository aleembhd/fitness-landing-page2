import React from 'react';
import { Download } from 'lucide-react';
import { triggerConfetti } from '../utils/confetti';

const resources = [
  { title: 'Beginner Workout Plan', image: 'https://source.unsplash.com/featured/?workout,beginner', pdf: '/path/to/beginner-workout.pdf' },
  { title: 'Healthy Meal Planner', image: 'https://source.unsplash.com/featured/?healthy,meal', pdf: '/path/to/meal-planner.pdf' },
  { title: 'Home Exercise Guide', image: 'https://source.unsplash.com/featured/?home,exercise', pdf: '/path/to/home-exercise.pdf' },
];

const Resources: React.FC = () => {
  const handleDownload = (pdfPath: string) => {
    // In a real application, you would implement the actual download logic here
    console.log(`Downloading: ${pdfPath}`);
    triggerConfetti();
  };

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Free Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img src={resource.image} alt={resource.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <button
                  onClick={() => handleDownload(resource.pdf)}
                  className="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  <Download size={18} className="mr-2" />
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;