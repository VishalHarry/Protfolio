import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
const Resume = () => {
  return (
    <main className="p-8 flex-1 rounded-lg bg-white shadow-lg mt-5">
      {/* Header */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Resume
          <span className="block mt-2 w-30 h-1 bg-orange-600"></span>
        </h2>
      </section>

      {/* Education and Experience */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-orange-600 flex items-center">
            <FaGraduationCap className="mr-2 text-orange-600" /> Education
          </h3>
          <div className="bg-orange-100 p-4 rounded-lg shadow">
            <p className="text-gray-800 font-medium">2021-2022</p>
            <p className="text-gray-600">High School</p>
            <p className="text-gray-500">VIP Inter college</p>
          </div>
          <div className="bg-orange-100 p-4 rounded-lg shadow mt-4">
            <p className="text-gray-800 font-medium">2022-2026</p>
            <p className="text-gray-600">BTech(CSE)</p>
            <p className="text-gray-500">ABES Institute of Technology</p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-orange-600">
            <FaBriefcase className="inline mr-2" />
            Experience
          </h3>
          <div className="bg-orange-100 p-4 rounded-lg shadow">
            <p className="text-gray-800 font-medium">2025 - Present</p>
            <p className="text-gray-600">Mentor</p>
            <p className="text-gray-500">SSV Public school</p>
          </div>
          <div className="bg-orange-100 p-4 rounded-lg shadow mt-4">
            <p className="text-gray-800 font-medium">2021-2024</p>
            <p className="text-gray-600">Website Development</p>
            <p className="text-gray-500">Private Limited </p>
          </div>
        </div>
      </section>

      {/* Work Skills and Soft Skills */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-orange-600">Work Skills</h3>
          <div className="flex flex-wrap gap-3">
            {['Servlate&Jsp', 'React.js', 'HTML 5', 'CSS 3', 'Tailwind CSS', 'Figma', 'JavaScript', 'JDBC', 'MYSQL','JUnit','DevOps', 'Hibernet', 'Spring', 'SpringBoot', 'Git','CyberSecurity','Window Testing','Web Pentesting','Security Analyst'].map((skill) => (
              <span key={skill} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-orange-600">Soft Skills</h3>
          <div className="flex flex-wrap gap-3">
            {['Time Management', 'Mentorship', 'Impeccable Communication', 'Flexibility', 'Research', 'Writing'].map((skill) => (
              <span key={skill} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resume;
