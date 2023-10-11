import React from 'react';
import PageLinks from './PageLinks';

const Sidebar = ({ showSidebar }) => {
  return (
    <div className={`side-bar ${showSidebar ? 'sidebar-show' : ''}`}>
      <PageLinks parentClass={'sidebar-nav-links'} itemClass={'nav-link'} />
    </div>
  );
};

export default Sidebar;
