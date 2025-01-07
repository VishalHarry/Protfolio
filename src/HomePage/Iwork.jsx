import React from 'react'
import img1 from '../assets/blogs.jpg'
import img2 from '../assets/digital.avif'
import img3 from '../assets/hos.jpg'
import img4 from '../assets/hr.jpg'
import img5 from '../assets/shop.avif'
import img6 from '../assets/student.jpg'
import img7 from '../assets/port.png'

const workData = [
  {
    title: 'HR Management System',
    description: 'A FrontEnd web app to manage employee data, leave requests, and payroll.',
    tools: 'React, Tailwind, Firebase, ',
    link: 'https://github.com/VishalHarry/HRManagementSystem',
    image: img4  // Example image URL
  },
  {
    title: 'Hospital Management System',
    description: 'A FullStack web app to manage Doctor data, Patient Data, and Mantained by Admin',
    tools: 'JSP, Servlet, HTML,CSS,MySql,JDBC ',
    link: 'https://github.com/your-repo/hr-management-system',
    image: img3  // Example image URL
  },
  {
    title: 'Student Management System',
    description: 'A FullStack web app to manage Student Data, Teacher Data, and Mantained by Admin',
    tools: 'React, Tailwind, Firebase,NodeJS,MongDB,Express ',
    link: 'https://github.com/VishalHarry/Rankora',
    image: img6  // Example image URL
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing my projects and skills.',
    tools: 'React, Tilwind, ',
    link: 'https://github.com/VishalHarry/Protfolio',
    image: img7  // Example image URL
  },
  {
    title: 'Bitcoins Details',
    description: 'A web that tells about the current status of all type of digital curency',
    tools: 'React, Tilwind, Fatch API',
    link: 'https://github.com/VishalHarry/FrontEndProject2',
    image: img2  // Example image URL
  },
  {
    title: 'E-commerce Platform',
    description: 'A fully functional e-commerce platform for online shopping.',
    tools: 'React, Fatch API, Firebase,Tailwind',
    link: 'https://github.com/VishalHarry/E-Commerce_FrontEnd',
    image: img5  // Example image URL
  },
  {
    title: 'Blog Website',
    description: 'A blog website built with React and Node.js.',
    tools: 'React, Tilwind,',
    link: 'https://github.com/VishalHarry/FinalFrontEndProject',
    image: img1  // Example image URL
  },
  // Add more work items here
];


const Iwork = () => {
  return (
    <section id="work" className="p-8 flex-1 rounded-lg bg-white shadow-lg mt-5 h-[50%] overflow-auto dark:bg-gray-800 dark:text-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          Works
          <span className="block mt-2 w-30 h-1 bg-orange-600"></span>
        </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 dark:bg-gray-800 dark:text-gray-100">
        {workData.map((work, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-black dark:bg-gray-600 dark:text-gray-100">
            <img src={work.image} alt={work.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-orange-600 mb-2">{work.title}</h3>
            <p className="text-gray-700 mb-4 dark:text-gray-100">{work.description}</p>
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

