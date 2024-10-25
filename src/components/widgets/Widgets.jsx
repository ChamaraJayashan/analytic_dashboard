import "./Widgets.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';

const Widgets = ({ type }) => {
    
    let data = {
        title: "UNKNOWN",
        icon: <PersonOutlineOutlinedIcon className="icon" />
    };

    const amount = 100; //fine amount variable
    const no = 10; // percentage variable

    switch (type) {
        case "unit":
            data = {
                title: "Number of Units",
                icon: <ConfirmationNumberOutlinedIcon className="icon" 
                        style={{color:"crimson",
                            backgroundColor: "rgba(255, 0, 0, 0.2)",
                        }}/>
            };
            break;
        case "cost":
            data = {
                title: "Cost per Unit",
                icon: <CurrencyExchangeOutlinedIcon className="icon" 
                        style={{color:"green",
                        backgroundColor: "rgba(0, 128, 0, 0.2)",
                }}
                />
            };
            break;
        case "time":
            data = {
                title: "Up Time",
                icon: <AccessTimeOutlinedIcon className="icon" 
                    style={{color:"purple",
                    backgroundColor: "rgba(128, 0, 128, 0.2)",
            }}/>
            };
            break;
            case "motor":
            data = {
                title: "Motor Viabration",
                icon: <EngineeringOutlinedIcon className="icon" 
                    style={{color:"brown",
                    backgroundColor: "rgba(181, 101, 29, 0.2)",
            }}/>
            };
            break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="widgetLeft">
                <span className="counter">{amount}</span>
                <span className="title">{data.title}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="widgetRight">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {no}%
                </div>
                {data.icon}
            </div>
        </div>
    );
}

export default Widgets;
