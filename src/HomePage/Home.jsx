import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';
import MainNav from './MainNav';


function Home() {
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
        <MainNav/>
      <MainContent className="flex-grow p-8" />
      </div>
       
      
      </div>
    
    </div>
  );
}

export default Home;
