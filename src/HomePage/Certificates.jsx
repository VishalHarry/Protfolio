import React from 'react';
import cer1 from '../assets/cer1.jpg'
import cer2 from '../assets/cer2.jpg'
import cer3 from '../assets/cer3.jpg'



const certificateData = [
  {
    title: 'junior security Professional',
    description: 'Completed an in-depth Cyber Security course from Udemy.',
    issuedBy: 'Defronic',
    link: 'https://www.udemy.com/course/react-the-complete-guide/',
    image: cer1
  },
  {
    title: 'WebSite Hacking/penetration testing',
    description: 'Learned core Web hacking concepts and best practices.',
    issuedBy: 'Udamy',
    link: 'https://www.codecademy.com/learn/introduction-to-javascript',
    image: cer2
  },
  {
    title: 'Ethical hacking',
    description: 'Completed a Ethical hacking course',
    issuedBy: 'Udamy',
    link: 'https://www.coursera.org/professional-certificates/full-stack-web-development',
    image: cer3
  },
  // Add more certificates here
];

const Icertificates = () => {
  return (
    <section id="certificates" className="p-8 flex-1 rounded-lg bg-white shadow-lg mt-5 h-[50%] overflow-auto dark:bg-gray-800 dark:text-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Certificates
        <span className="block mt-2 w-30 h-1 bg-orange-600"></span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {certificateData.map((certificate, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-600 dark:text-gray-100">
            <img src={certificate.image} alt={certificate.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-orange-600 mb-2">{certificate.title}</h3>
            <p className="text-gray-700 mb-4 dark:text-gray-100">{certificate.description}</p>
            <p><strong>Issued By:</strong> {certificate.issuedBy}</p>
            {certificate.link && (
              <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 mt-4 block">
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Icertificates;
