import React from 'react';
import './HeavyComponent.css'

const HeavyComponent = () => {
  // Simulate a list of heavy items
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

  return (
    <div className="container-heavy">
    <h2>Heavy Component</h2>
    <p>Heavy load with multiple items and images.</p>
    
    <div className="image-container">
        <img src={'image1.avif'} alt="Placeholder" className="image" />
        <img src={'image2.avif'} alt="Placeholder" className="image" />
        <img src={'image3.avif'} alt="Placeholder" className="image" />
    </div>

    <ul className="list">
        {items.map((item, index) => (
            <li key={index} className="list-item">{item}</li>
        ))}
    </ul>
</div>

  );
};
export default HeavyComponent