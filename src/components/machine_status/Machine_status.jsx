import React, { useState } from 'react';
import './Machine_status.scss';
import Machine from '../../assets/machine.jpg';	

const MachineStatus = () => {
  const [isOn, setIsOn] = useState(false); 


  const toggleMachineStatus = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="machine-status">
      <div className="machine-diagram">
        <div className="status-toggle">
          <h3 className="machine-state" style={{ color: isOn ? 'green' : 'red' }}>
            {isOn ? 'On' : 'Off'}
          </h3>

          <label className="switch">
            <input type="checkbox" checked={isOn} onChange={toggleMachineStatus} />
            <span className="slider"></span>
          </label>
        </div>

        <div className="machine-image">
          <img src={Machine} alt="Machine Diagram" />
        </div>
      </div>
      
      <div className="temperature-zones">
      <h4>Overrall Power Consumption</h4>
        <ul className="zones">
          <li>
            <span className="zone-color" style={{ backgroundColor: 'orange' }}></span>
            35kW
          </li>
          </ul>
        <h4>Current Operation State</h4>
        
        <ul className="zones">
          <li>
            <span className="zone-color" style={{ backgroundColor: 'green' }}></span>
            Zone 1: 35°C
          </li>
          <li>
            <span className="zone-color" style={{ backgroundColor: 'blue' }}></span>
            Zone 2: 55°C
          </li>
          <li>
            <span className="zone-color" style={{ backgroundColor: 'red' }}></span>
            Zone 3: 45°C
          </li>
          <li>
            <span className="zone-color" style={{ backgroundColor: 'purple' }}></span>
            Zone 4: 60°C
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MachineStatus;
