import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      {/* Header */}
      <Header />

      {/* Main Layout with Sidebar and Main Content */}
      <div className="flex mt-4">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <MainContent className="flex-grow p-8" />
      </div>
    </div>
  );
}

export default Home;
