import React, { useState } from 'react';

const PricingSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [costPerFoot, setCostPerFoot] = useState(0);
  const [labor, setLabor] = useState(0);
  const [controller, setController] = useState(0);
  const [wire, setWire] = useState(0);
  const [serviceFee, setServiceFee] = useState(0);
  const [marginPercent, setMarginPercent] = useState(0);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h2 onClick={toggleCollapse} style={{ cursor: 'pointer' }}>
        Pricing Settings {isOpen ? '-' : '+'}
      </h2>
      {isOpen && (
        <div>
          <div>
            <label>Cost Per Foot:</label>
            <input type='number' value={costPerFoot} onChange={(e) => setCostPerFoot(e.target.value)} />
          </div>
          <div>
            <label>Labor:</label>
            <input type='number' value={labor} onChange={(e) => setLabor(e.target.value)} />
          </div>
          <div>
            <label>Controller:</label>
            <input type='number' value={controller} onChange={(e) => setController(e.target.value)} />
          </div>
          <div>
            <label>Wire:</label>
            <input type='number' value={wire} onChange={(e) => setWire(e.target.value)} />
          </div>
          <div>
            <label>Service Fee:</label>
            <input type='number' value={serviceFee} onChange={(e) => setServiceFee(e.target.value)} />
          </div>
          <div>
            <label>Margin Percent:</label>
            <input type='number' value={marginPercent} onChange={(e) => setMarginPercent(e.target.value)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingSettings;
