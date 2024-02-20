import React, { useState } from 'react';
import QRCode from 'qrcode';
import './Instrument.css'; // Import CSS file

const Instruments = () => {
  const [userData, setUserData] = useState('');
  const [qrCodeURL, setQRCodeURL] = useState('');
  const [error, setError] = useState('');

  const generateQRCode = async (data) => {
    try {
      if (!data) {
        setError('Error: No input text');
        return;
      }

      const qrCodeDataURL = await QRCode.toDataURL(data);
      setQRCodeURL(qrCodeDataURL);
    } catch (error) {
      console.error('Error occurred:', error);
      setError('Error occurred: ' + error.message);
    }
  }

  const handleInputChange = (event) => {
    setUserData(event.target.value);
  }

  const handleGenerateQRCode = () => {
    setError('');
    generateQRCode(userData);
  }

  return (
    <div className="instruments-container">
      <input
        type="text"
        value={userData}
        onChange={handleInputChange}
        className="user-input"
        placeholder="Enter text for QR code"
      />
      <button onClick={handleGenerateQRCode} className="generate-btn">
        Generate QR Code
      </button>
      <div className="qr-code-container">
        {error && <p className="error-message">{error}</p>}
        {qrCodeURL && <img src={qrCodeURL} alt="QR Code" className="qr-code-img" />}
      </div>
    </div>
  );
}

export default Instruments;
