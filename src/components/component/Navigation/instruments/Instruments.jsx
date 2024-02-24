import React, { useState } from 'react';
import './Instrument.css'; // Import CSS file

const Instruments = () => {
  const [values, setValues] = useState('');
  const [qrCodeSrc, setQRCodeSrc] = useState('');

  const handleInputChange = (event) => {
    setValues(event.target.value);
  }

  const handleGenerateQRCode = () => {
      fetch(`http://omonullo.uz:8006/api/${values}`).then(res => res.json()).then(data => {
        setQRCodeSrc(data[0][0])
      })
  }
  return (
    <div className="instruments-container">
      <textarea
        type="text"
        value={values}
        onChange={handleInputChange}
        className="user-input"
        placeholder="Enter text for QR code"
      />
      <div className="qr-code-container">
      <img src={qrCodeSrc ? qrCodeSrc : ''}  className="qr-code-img" />
      </div>
      <button onClick={handleGenerateQRCode} className="generate-btn">
        Generate QR Code
      </button>
    </div>
  );
}

export default Instruments;
