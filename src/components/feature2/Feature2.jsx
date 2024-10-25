import "./Feature2.scss"
//import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';


const Feature2 = () => {
  return (
    <div className="feature3">
      <div className="featureContainer1">
      <div className="top2">
      <h1 className="title2">
          Mould Temperature <DeviceThermostatIcon style={{ fontSize: "30px", marginLeft: "5px", marginTop:"5px" }} />
        </h1>
      
      </div>
      <div className="bottom2">
        <div className="featuredChart2">
          <CircularProgressbar className="inject_temp2" value={70} text="70%" strokeWidth={5}/>
          <CircularProgressbar className="outject_temp2" value={50} text="50%" strokeWidth={5}/>
          {/* <CircularProgressbar className="oil_temp" value={20} text="20%" strokeWidth={5}/> */}
        </div>
        
        <div className="featuredInfo2">
          <div className="item12">
              <div className="colorBox"></div>
                <p>Inlet</p> {/*last month variable*/}
              
          </div>
          <div className="item22">
              <div className="colorBox"></div>
                <p>Outlet</p> {/*last month variable*/}
              
          </div>
         

      </div>
    </div>
    </div>
    <div className="featureContainer2">
    <div className="up">
      <h1 className="topic1">
          Ambient Temperature <DeviceThermostatIcon style={{ fontSize: "30px", marginLeft: "5px", marginTop:"5px" }} />
        </h1>
      
      </div>
      <div className="down">
        <div className="featuredChartRight">
          <CircularProgressbar className="inject_temp2" value={70} text="70%" strokeWidth={5}/>
          {/* <CircularProgressbar className="outject_temp2" value={50} text="50%" strokeWidth={5}/> */}
          {/* <CircularProgressbar className="oil_temp" value={20} text="20%" strokeWidth={5}/> */}
        </div>
        
        {/* <div className="featuredInfoRight">
          <div className="item1right">
              <div className="colorBox"></div>
                <p>Inlet</p> 
              
          </div>
          
         

      </div> */}
    </div>
    </div>
    </div>
  )
}

export default Feature2