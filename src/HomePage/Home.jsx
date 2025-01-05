import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';
import MainNav from './MainNav';
import Resume from './Resume';
import Cont from './Cont';
import Iwork from './Iwork';


function Home() {
  const [currentComponent, setCurrentComponent] = useState('mainContent');
   // Function to change component based on button click
   const handleNavClick = (component) => {
    setCurrentComponent(component);
  };
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <Header />

      {/* Main Layout with Sidebar and Main Content */}
      <div className="flex mt-4 gap-5">
        {/* Sidebar */}
        <Sidebar />
        
        
            {/* Main Content */}
          
      <div className='w-[70%]'>
        <MainNav onNavClick={handleNavClick}/>
        {currentComponent === 'mainContent' && <MainContent className="flex-grow p-8" />}
        {currentComponent === 'resume' && <Resume />}
        {currentComponent === 'contact' && <Cont/>}
        {currentComponent === 'work' && <Iwork />}
        
        
      </div>
       
      
      </div>
    
    </div>
  );
}

export default Home;
