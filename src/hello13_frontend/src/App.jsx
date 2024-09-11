import React from 'react';
import './App.css'; // Import the CSS file for styling

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>Hoppy Brews</h1>
        <p>Your favorite beer company</p>
      </header>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          At Hoppy Brews, we craft the finest beers with the highest quality ingredients. Our mission is to bring joy and refreshment to beer lovers around the world.
        </p>
      </section>

      <section className="beer-list">
        <h2>Our Beers</h2>
        <ul>
          <li><strong>Golden Lager</strong> - A smooth and crisp lager with a golden hue.</li>
          <li><strong>Amber Ale</strong> - Rich and malty with a hint of caramel.</li>
          <li><strong>IPA</strong> - A hoppy and flavorful IPA with citrus notes.</li>
          <li><strong>Stout</strong> - Dark and robust with flavors of coffee and chocolate.</li>
        </ul>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Hoppy Brews. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

