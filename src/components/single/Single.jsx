
'./single.scss'

import { Tooltip } from "@mui/material"
import { 
    Legend, 
    Line, 
    LineChart, 
    ResponsiveContainer, 
    XAxis, 
    YAxis 
} from "recharts"

import './single.scss'


  
const Single = 
    ({ title, img, info, chart, activities}) => {

        
  return (
    <div className="single">
        <div className="view">
            <div className="info">
                <div className="topInfo">
                    {
                        img && <img src={img} alt="" />
                    }
                    <h2>{title}</h2>
                    <button>Update</button>
                </div>
                <div className="details">
                    {
                        Object.entries(info).map(item => (
                            <div className="item" key={item[0]}>
                                <span className="itemTitle">{item[0]}</span>
                                <span className="itemValue">{item[1]}</span>
                            </div>
                        )) 
                    }
                </div>
            </div>
            <hr />
            {
                chart && (
                    <div className="chart">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                width={500}
                                height={300}
                                data={chart.data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                            
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {
                            chart.dataKeys.map(dataKey => (
                                    <Line
                                        key={dataKey.name}
                                        type="monotone"
                                        dataKey={dataKey.name}
                                        stroke={dataKey.color}
                                    />
                                ))
                            }                 
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                )
            }
        </div>
        {
            activities && (
                <div className="activities">
                    <h2>Latest Activities</h2>
                    <ul>
                        {
                            activities.map((item, index) => (
                                <li key={index}>
                                    <div>
                                        <p>{item.text}</p>
                                        <time>{item.time}</time>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )
        }
    </div>
  )
}

export default Single