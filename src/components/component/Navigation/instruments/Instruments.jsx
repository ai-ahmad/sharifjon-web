import React, { useState } from 'react';
import './Instrument.css'; // Import CSS file

const Instruments = () => {
  const [values, setValues] = useState('');
  const [qrCodeSrc, setQRCodeSrc] = useState('');

  const handleInputChange = (event) => {
    setValues(event.target.value);
  }

  const handleGenerateQRCode = () => {
      fetch(`http://omonullo.uz:8006/api/${values}`).then(res => res.json()).then(data => setQRCodeSrc(data))
  }
  return (
    <div className="instruments-container">
      <input
        type="text"
        value={values}
        onChange={handleInputChange}
        className="user-input"
        placeholder="Enter text for QR code"
      />
      <button onClick={handleGenerateQRCode} className="generate-btn">
        Generate QR Code
      </button>
      <div className="qr-code-container">
      <img src={qrCodeSrc ? qrCodeSrc : ''}  className="qr-code-img" />
      </div>
    </div>
  );
}

export default Instruments;
