import React, { useState } from 'react';
import './App.css';
import QRCode from 'react-qr-code';

function App() {

  const [qrtext, setqrtext] = useState('')
  const [qrshow, setqrshow] = useState('')

  const handleQRChange = (e) => {
    setqrtext(e.target.value)
  }

  const handleSubmit = () => {
    setqrshow(qrtext)
  }

  return (
    <div className="page">
      <h1 className='heading'>QR Code Generator</h1>
      {qrshow?(
      <div style={{ padding: "16px" }}>
        <QRCode value={qrshow} fgColor='#36454f' bgColor='#efeee9'/>
      </div>
      ):(
        <div style={{ padding: "16px" }}>
        <QRCode value={"Welcome to QR Code Generator."} fgColor='#36454f' bgColor='#efeee9'/>
      </div>
      )}
      <input type='text' className='QRText' placeholder='Enter text to generate QR Code...' value={qrtext} onChange={handleQRChange}/>
      <button className='QRBtn' onClick={()=>{handleSubmit()}}>SUBMIT</button>
    </div>
  );
}

export default App;
