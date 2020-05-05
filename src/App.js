import React, { useState } from 'react';
import 'typeface-roboto';
import './App.css';
var QRCode = require('qrcode.react');


function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  return (

    <div style={wrapper}>
      <h1>
        Patientinmatning. 
        </h1>
      <form style={wrapper}>
        <label style={ite2}>
          Namn
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>

        <label style={ite2}>
          Ålder:
          <input
            type="numbers"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
        </label>
        <label style={ite2}>
          Plats:
          <input
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </label>

        <label style={ite2}>
          Kön:
           <select
            value={gender}
            onChange={e => setGender(e.target.value)}>
            <option value="M">Man</option>
            <option value="F">Kvinna</option>
            <option value="A">Icke Binär</option>

          </select>
        </label>
      </form>
      <QRCode value={name + "$" + age + "$" + location + "$" + gender} />
    </div>
  );
}

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '50px',
  color: '#444',
};


const ite2 = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '5px',
  color: '#444',
};

export default App;
