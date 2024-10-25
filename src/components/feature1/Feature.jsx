import "./Feature.scss"
//import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';


const Featured = () => {
  return (
    <div className="feature">
      <div className="top">
      <h1 className="title">
          Machine Temperature <DeviceThermostatIcon style={{ fontSize: "30px", marginLeft: "5px", marginTop:"5px" }} />
        </h1>
      
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar className="inject_temp" value={70} text="70%" strokeWidth={5}/>
          <CircularProgressbar className="outject_temp" value={50} text="50%" strokeWidth={5}/>
          <CircularProgressbar className="oil_temp" value={20} text="20%" strokeWidth={5}/>
        </div>
        
        <div className="featuredInfo">
          <div className="item1">
              <div className="colorBox"></div>
                <p>Inlet</p> {/*last month variable*/}
              
          </div>
          <div className="item2">
              <div className="colorBox"></div>
                <p>Outlet</p> {/*last month variable*/}
              
          </div>
          <div className="item3">
              <div className="colorBox"></div>
                <p>Oil</p> {/*last month variable*/}
              
          </div>

      </div>
    </div>
    </div>
  )
}

export default Featured