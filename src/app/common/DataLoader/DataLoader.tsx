import React from 'react';
import Loader from 'react-loader-spinner';

import './style.scss';

const DataLoader: React.FC = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <Loader type="Puff" color="#9147ff" height={100} width={100} />
      </div>
    </div>
  );
};

export default DataLoader;
