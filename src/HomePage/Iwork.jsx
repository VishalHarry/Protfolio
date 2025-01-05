import React from 'react'
const workData = [
  {
    title: 'HR Management System',
    description: 'A full-stack web app to manage employee data, leave requests, and payroll.',
    tools: 'React, Node.js, Express, MongoDB',
    link: 'https://github.com/your-repo/hr-management-system',
    image: 'https://via.placeholder.com/600x400'  // Example image URL
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing my projects and skills.',
    tools: 'React, HTML, CSS',
    link: 'https://yourportfolio.com',
    image: 'https://via.placeholder.com/600x400'  // Example image URL
  },
  {
    title: 'E-commerce Platform',
    description: 'A fully functional e-commerce platform for online shopping.',
    tools: 'React, Node.js, MongoDB',
    link: 'https://github.com/your-repo/e-commerce-platform',
    image: 'https://via.placeholder.com/600x400'  // Example image URL
  },
  {
    title: 'Blog Website',
    description: 'A blog website built with React and Node.js.',
    tools: 'React, Express, MongoDB',
    link: 'https://github.com/your-repo/blog-website',
    image: 'https://via.placeholder.com/600x400'  // Example image URL
  },
  // Add more work items here
];


const Iwork = () => {
  return (
    <section id="work" className="p-8 flex-1 rounded-lg bg-white shadow-lg mt-5 h-[90%] overflow-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Works
          <span className="block mt-2 w-30 h-1 bg-orange-600"></span>
        </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {workData.map((work, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img src={work.image} alt={work.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-orange-600 mb-2">{work.title}</h3>
            <p className="text-gray-700 mb-4">{work.description}</p>
            <p><strong>Tools/Technologies:</strong> {work.tools}</p>
            {work.link && (
              <a href={work.link} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 mt-4 block">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Iwork;

