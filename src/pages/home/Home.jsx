import './Home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widgets from '../../components/widgets/Widgets'
import MachineStatus from '../../components/machine_status/Machine_status'
import Features from '../../components/feature1/Feature'
import Feature2 from '../../components/feature2/Feature2'
import Label from '../../components/label/Label'
import Preasure from '../../components/preasure/Preasure'


const Home = () => {
  return (
    <div className='home'>
      
        <Sidebar />
        <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widgets type="unit" />
          <Widgets type="cost" />
          <Widgets type="time" />
          <Widgets type="motor" />
          
        </div>
        <div className="status">
            <MachineStatus />
          </div>
        <div className="feature1">
          <Features/>
        </div>
        <div className="feature2">
          <Feature2/>
        </div>
        <div className="label">
          <Label/>
        </div>
        <div className="preasure">
          <Preasure/>
        </div>
        
        </div>
    </div>
  )
}

export default Home