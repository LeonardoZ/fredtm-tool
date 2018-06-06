import React from 'react'
import { BarChart, Bar, Brush, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label }
    from 'recharts'
import moment from 'moment'

export default ({ collect, timeFormat }) => {
    if (!collect) return <div />
    
    let quantitativeTimes = collect.times.filter(time => time.activity.quantitative)
    
    if (quantitativeTimes === null || quantitativeTimes.length === 0) {
        return <p>No quantitative times</p>
    }

    let data = quantitativeTimes.map(t => {
        return {
            name: t.activityTitle + ' ' + moment(new Date(t.finalDate)).format('h:mm:ss a'),
            value: parseInt(t.collectedAmount, 10)
        }
    })

    return (
        <BarChart width={690} height={350} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis >
                <Label value='Quantified' angle={-90} position='insideLeft' />
            </YAxis>
            <Tooltip />
            <Legend verticalAlign='top' wrapperStyle={{ lineHeight: '40px' }} />
            <Brush dataKey='name' height={30} stroke='#2196F3' />
            <Bar dataKey='value' name='Time Activity' fill='#2196F3' />
        </BarChart>
    )
}
