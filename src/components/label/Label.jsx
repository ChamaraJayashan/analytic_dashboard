import './Label.scss'

const Label = () => {
  return (
    <div className='label'> 
        <div className="labelContainer">
        <h1 className="rpm">
          RPM 
        </h1>
        <ul className="list">
        <li>
            Injection Screw
            <span className="list-color1" style={{ backgroundColor: 'rgba(150, 209, 227, 0.30)' }}>255</span>
          </li>
          <li>
            Main Motor
            <span className="list-color2" style={{ backgroundColor: 'rgba(101, 190, 98, 0.364)' }}>33</span>
          </li>
        </ul>
          
        </div>

        <div className="labelContainer1">
        <h1 className="position">
          Position 
        </h1>
        <ul className="list">
        <li>
            Clamp
            <span className="list-color1" style={{ backgroundColor: 'rgba(150, 209, 227, 0.30)' }}>255</span>
          </li>
          <li>
            Screw
            <span className="list-color2" style={{ backgroundColor: 'rgba(101, 190, 98, 0.364)' }}>33</span>
          </li>
          <li>
            Ejector
            <span className="list-color3" style={{ backgroundColor: 'rgba(228,60,60, 0.364)' }}>33</span>
          </li>
        </ul>
          
        </div>
    </div>
  )
}

export default Label