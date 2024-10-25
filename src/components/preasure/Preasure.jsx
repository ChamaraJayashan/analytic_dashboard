import './Preasure.scss'

const Preasure = () => {
  return (
    <div className='preasure'>
        <div className="preasureContainer">
        <h1 className="flow">
          Flow & Preasure 
        </h1>
        <ul className="list">
        <li>
            Hydrolic Flow
            <span className="list-color1" style={{ backgroundColor: 'rgba(150, 209, 227, 0.30)' }}>255</span>
          </li>
          <li>
            Hydrolic Preasure
            <span className="list-color2" style={{ backgroundColor: 'rgba(101, 190, 98, 0.364)' }}>33</span>
          </li>
        </ul>
          
        </div>

        <div className="powerContainer">
        <h1 className="power">
          Power Monitoring 
        </h1>
        <ul className="list">
        <li>
            L1
            <span className="list-color1" style={{ backgroundColor: 'rgba(150, 209, 227, 0.30)' }}>255</span>
          </li>
          <li>
            L2
            <span className="list-color2" style={{ backgroundColor: 'rgba(101, 190, 98, 0.364)' }}>33</span>
          </li>
          <li>
            L3
            <span className="list-color3" style={{ backgroundColor: 'rgba(228,60,60, 0.364)' }}>33</span>
          </li>
        </ul>
          
        </div>
    </div>
  )
}

export default Preasure