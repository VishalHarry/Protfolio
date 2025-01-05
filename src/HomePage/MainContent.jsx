

const MainContent = () => {
  return (
    <main className="p-8 flex-1  rounded-lg bg-white shadow-lg  mt-5 ">
      {/* Navigation Menu */}


      {/* About Me Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">ABOUT ME  <span className="block mt-2 w-30 h-1 bg-orange-600"></span></h2>
        <p className="text-gray-700 leading-relaxed">
          Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile Java developer with a strong foundation in front-end development and a deep interest in cybersecurity and web security. My journey in the world of software development has been both exciting and rewarding, as I continually strive to enhance my skills, explore emerging technologies, and contribute to building secure and user-friendly solutions.
        </p>

      </section>

      {/* What I Do Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-gray-800">What I do!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Web Development Card */}
          <div className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ">
            <h3 className="text-xl font-semibold text-orange-600 mb-2">Web Development</h3>
            <p className="text-gray-700">
            As a Java developer, I’m captivated by its power to create efficient, scalable, and secure applications. My passion lies in crafting solutions that are both functional and deliver exceptional user experiences.
            </p>
          </div>

          {/* App Development Card */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-orange-600 mb-2">DevOps</h3>
            <p className="text-gray-700">
            As a Java developer, I’m passionate about building robust applications and streamlining workflows with DevOps. I focus on creating scalable, secure solutions that deliver exceptional user experiences.
            </p>
          </div>

          {/* UI/UX Designing Card */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-orange-600 mb-2">Cybersecurity</h3>
            <p className="text-gray-700">
              I am a passionate cybersecurity enthusiast dedicated to building secure and robust solutions. I thrive on identifying vulnerabilities and implementing strategies to safeguard digital systems.
            </p>
          </div>

          {/* Mentorship Card */}
          <div className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-orange-600 mb-2">Web penetration testing</h3>
            <p className="text-gray-700">
              I am a dedicated web penetration tester with a passion for identifying and exploiting vulnerabilities to enhance the security of web applications. My focus is on ensuring robust and secure digital environments.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
