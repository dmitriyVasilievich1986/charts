import { Line } from 'react-chartjs-2';
import axios from 'axios'
import React from 'react'

function LineChart() {
    const [data, updateData] = React.useState(null)
    const [options, updateOptions] = React.useState(null)
    React.useEffect(_ => {
        axios.get('/line_chart')
            .then(data => {
                // console.log(data.data)
                updateData(data.data.data)
                updateOptions(data.data.options)
            })
            .catch(err => console.log(err.message))
    }, [])
    if (data === null) {
        return <h1>Wait</h1>
    }
    return (
        <div className="chart">
            <Line data={data} options={options} />
        </div>
    )
}

export default LineChart
