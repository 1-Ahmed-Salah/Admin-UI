import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'
import './barChartBox.scss'

const BarChartBox = ({title, color, dataKey, chartData}) => {
  return (
    <div className='barChartBox'>
        <h2>{title}</h2>
        <div className="chart">
            <ResponsiveContainer width="99%" height={150}>
                <BarChart data={chartData}>
                    <Tooltip
                        contentStyle={{background: "#2a3447", borderRadius: '5px'}}
                        labelStyle={{display: 'none'}}
                        cursor={{fill: 'none'}}
                    />
                    <Bar dataKey={dataKey} fill={color} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BarChartBox