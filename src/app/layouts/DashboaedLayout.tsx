import React from 'react';

import Header from '../common/Header/Header';

const DashboardLayout: React.FC = props => {
  return (
    <>
      <Header />
      <div className="container-fluid">{props.children}</div>
    </>
  );
};

export default DashboardLayout;
