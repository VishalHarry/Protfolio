import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';
import MainNav from './MainNav';
import Resume from './Resume';
import Cont from './Cont';
import Iwork from './Iwork';
import Certificates from './Certificates';

function Home() {
  const [currentComponent, setCurrentComponent] = useState('mainContent');

  const handleNavClick = (component) => {
    setCurrentComponent(component);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-600 dark:text-gray-100 p-8">
      <Header />

      <div className="flex flex-col lg:flex-row mt-4 gap-5">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="w-full lg:w-[70%]">
          <MainNav onNavClick={handleNavClick} />
          {currentComponent === 'mainContent' && <MainContent className="flex-grow p-8" />}
          {currentComponent === 'resume' && <Resume />}
          {currentComponent === 'contact' && <Cont />}
          {currentComponent === 'work' && <Iwork />}
          {currentComponent === 'certificates' && <Certificates />}
        </div>
      </div>
    </div>
  );
}

export default Home;
