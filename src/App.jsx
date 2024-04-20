import React from 'react';
import './App.css'; // Importing CSS styles

// Card component representing a specific card layout
function Card() {
  return (
    <div>
      {/* Card container */}
      <div className='card'>
        {/* Page header section */}
        <div className="page-header">
          <h2>Ah!! , I never saw someone from your company</h2>
          {/* Styled horizontal line */}
          <hr className='styled-hr'/>
        </div>
        {/* Outer circular container */}
        <div className='outer-circle'>
          {/* Welcome message inside a circular div */}
          <div className="welcome"><h1>Welcome!</h1></div>
          {/* Buttons container */}
          <div className="page-buttons">
            {/* Button to browse test data */}
            <button className="button">Browse test data</button>
            {/* Button to connect domain */}
            <button className="button">Connect domain</button>
          </div>
          {/* Bottom text section */}
          <div className="bottom">
            {/* Informational text */}
            <p className="bottom-text">**tenant features are not available for free tier, however you can still explore the website</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// App component representing the main application
function App() {
  return (
    <div className="container">
      {/* Render the Card component */}
      <Card/>
    </div>
  );
}

export default App;
