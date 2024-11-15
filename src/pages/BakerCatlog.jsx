import React, { useEffect, useState } from 'react';
import cakesData from './Cakes.json';
import './BakerCatlog.css';

const BakerCatlog = () => {
  const [cakes, setCakes] = useState([]);
  const [expandedCakeId, setExpandedCakeId] = useState(null);

  useEffect(() => {
    setCakes(cakesData.cakes);
  }, []);

  const handleToggleDescription = (cakeId) => {
    setExpandedCakeId(expandedCakeId === cakeId ? null : cakeId);
  };

  return (
    <div className="baker-catalog-container">
      <div className="cake-grid">
        {cakes.map((cake) => {
          const isExpanded = expandedCakeId === cake.id;
          return (
            <div className="cake-card" key={cake.id}>
              <img className="cake-image" src={cake.image} alt={cake.title} />
              <div className="cake-content">
                <h1 className="cake-title">{cake.title}</h1>
                <h3 className="cake-preview-description">{cake.previewDescription}</h3>
                <p className={`cake-detail-description ${isExpanded ? 'show' : 'hide'}`}>
                  {cake.detailDescription}
                </p>
                <button
                  className="toggle-description-button"
                  onClick={() => handleToggleDescription(cake.id)}
                >
                  {isExpanded ? 'Show Less' : 'Show More'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BakerCatlog;
