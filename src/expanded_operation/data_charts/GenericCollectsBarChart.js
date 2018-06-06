import React from 'react'
import { BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label }
    from 'recharts'
import moment from 'moment'

export default ({ data, yLabel, needsPercent = false, timeFormat = null }) => {
    needsPercent = timeFormat == null
    return (
        <BarChart width={976} height={350} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis dataKey='value'>
                <Label value={needsPercent ? 
                    yLabel + '%' : 
                    (timeFormat ? yLabel + ' (' + timeFormat.unit + ')' :
                    yLabel)
                } angle={-90} position='left' verticalAlign='center' offset={10} />
            </YAxis>
            <Tooltip />
            <Legend verticalAlign='top' wrapperStyle={{ lineHeight: '40px' }} />
            <Bar dataKey='value' name='Collect' fill='#D32F2F' />
        </BarChart>
    )
}
