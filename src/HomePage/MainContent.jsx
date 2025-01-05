const MainContent = () => {
    return (
      <main className="p-8 flex-1">
        {/* About Me Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">ABOUT ME</h2>
          <p className="text-gray-700 leading-relaxed">
            Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile
            full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
            My journey in the world of web development has been nothing short of exhilarating, and I
            constantly strive to enhance my skills and embrace emerging trends in the industry.
          </p>
        </section>
  
        {/* What I Do Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">What I do!</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Web Development Card */}
            <div className="bg-orange-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Web Development</h3>
              <p className="text-gray-700">
                As a developer, I find myself most captivated by the power and flexibility of NEXT.js.
                I'm always eager to dive into new projects that leverage innovative ways to create fast,
                scalable, and user-friendly applications.
              </p>
            </div>
  
            {/* App Development Card */}
            <div className="bg-orange-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-orange-600 mb-2">App Development</h3>
              <p className="text-gray-700">
                With a focus on user-centric design and cutting-edge technologies, I thrive on
                building intuitive and efficient apps that make a positive impact on people's lives.
              </p>
            </div>
  
            {/* UI/UX Designing Card */}
            <div className="bg-orange-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-orange-600 mb-2">UI/UX Designing</h3>
              <p className="text-gray-700">
                Crafting visually appealing and intuitive user interfaces that offer delightful user
                experiences is something I'm truly fanatic about.
              </p>
            </div>
  
            {/* Mentorship Card */}
            <div className="bg-orange-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Mentorship</h3>
              <p className="text-gray-700">
                I have also found great joy in sharing my knowledge with others. Being a technical
                mentor allows me to give back to the community that has supported me throughout my career.
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  };
  
  export default MainContent;