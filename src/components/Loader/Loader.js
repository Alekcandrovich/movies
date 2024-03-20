import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <RotatingLines
        strokeColor="blue"
        strokeWidth="3"
        width="200"
        loading={true}
        speedMultiplier={15}
      />
    </div>
  );
};

export default Loader;
