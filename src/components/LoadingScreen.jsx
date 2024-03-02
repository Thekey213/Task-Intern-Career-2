import React from 'react';
import DotLoader from "react-spinners/DotLoader";
import './style.css'; // Import the CSS file for styling

const LoadingScreen = () => {
    const colour= "#C7B7CD";
  return (
    <div className="loading-screen">
      <h2>Loading...</h2>
      <DotLoader color={colour}/>
    </div>
  );
}

export default LoadingScreen;
