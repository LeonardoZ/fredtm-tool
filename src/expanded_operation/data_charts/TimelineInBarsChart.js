import React from 'react'
import { BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label }
    from 'recharts'
import moment from 'moment'

export default ({ collect, timeFormat }) => {
    if (!collect) return <div />

    let timelineData = collect.times.map(t => {
        return {
            name: t.activityTitle + ' ' + moment(new Date(t.finalDate)).format('h:mm:ss a'),
            value: timeFormat.convert(t.timed)
        }
    })
    return (
        <BarChart width={976} height={350} data={timelineData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis >
                <Label value={'Timed (' + timeFormat.unit + ')'} angle={-90} position='left' />
            </YAxis>
            <Tooltip />
            <Legend verticalAlign='top' wrapperStyle={{ lineHeight: '40px' }} />
            <ReferenceLine y={0} stroke='#000' />
            <Brush dataKey='name' height={30} stroke='#D32F2F' />
            <Bar dataKey='value' name='Time Activities' fill='#D32F2F' />
        </BarChart>
    )
}
