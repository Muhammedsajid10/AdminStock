import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';


const Layout = ({ children, openSidebarToggle, OpenSidebar }) => {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
      {/* Sidebar */}
      <div style={{ width: '250px', backgroundColor: '#4A5568' }}> 
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      </div>

      {/* Main section with header and dynamic content */}
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Header OpenSidebar={OpenSidebar} />

        {/* Main content */}
        <main 
          style={{ 
            padding: '20px', 
            flexGrow: 1, 
            backgroundColor: '#f9f9f9', 
            overflowY: 'auto' 
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
