import React, { useState } from 'react';
import './Instrument.css'; // Import CSS file
import axios from 'axios';

const Instruments = () => {
  const [qrCodeSrc, setQRCodeSrc] = useState('');
  const [url, setUrl] = useState('');
  const [data, setData] = useState({
    text_prompt: '',
    qr_code_data: ''
  });

  const handleInputChange = (event) => {
    setData({ ...data, text_prompt: event.target.value });
  }

  const handleInputChange2 = (event) => {
    setData({ ...data, qr_code_data: event.target.value });
  }

  const handleGenerateQRCode = () => {
    axios.post('http://omonullo.uz:8006/qr', data)
  .then(response => {
    setQRCodeSrc(response.data['qr_code_data']);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  }

  return (
    <div className="instruments-container">
      <textarea
        type="text"
        value={data.text_prompt}
        onChange={handleInputChange}
        className="user-input"
        placeholder="Enter text for QR code"
      />
      <input
        type="text"
        value={data.qr_code_data}
        onChange={handleInputChange2}
        className="user-input1"
        placeholder="Enter URL for QR code"
      />
      <div className="qr-code-container">
        {qrCodeSrc && <img src={qrCodeSrc} alt="QR Code" className="qr-code-img" />}
      </div>
      <button onClick={handleGenerateQRCode} className="generate-btn">
        Generate QR Code
      </button>
    </div>
  );
}

export default Instruments;
