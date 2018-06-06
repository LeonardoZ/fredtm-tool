import React from 'react'
import {
    ComposedChart, Bar, Line, XAxis,
    YAxis, CartesianGrid, Tooltip, Legend, Label
} from 'recharts'

export default ({ collect, timeFormat }) => {
    if (!collect) return <div />

    let totalTimeByActivity = {}
    collect.times.forEach(time => {
        let oldVal = totalTimeByActivity[time.activityTitle] || 0
        totalTimeByActivity[time.activityTitle] = oldVal + time.timed
    });
    let data = []
    for (const key in totalTimeByActivity) {
        if (totalTimeByActivity.hasOwnProperty(key)) {
            const timed = totalTimeByActivity[key];
            data.push({ name: key, value: timeFormat.convert(timed) })
        }
    }
    // desc order
    data.sort((a,b) => a.value > b.value ? -1 : (a.value < b.value) ? 1 : 0)

    let sum = 0
    data.forEach(e => e.accumulated = sum += e.value)
    return (
        <ComposedChart width={690} height={350} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis>
                <Label value={'Timed (' + timeFormat.unit + ')'} angle={-90} position='left' />
            </YAxis>
            <YAxis />
            <Tooltip />
            <Legend verticalAlign='top' wrapperStyle={{ lineHeight: '40px' }} />
            <Bar dataKey='value' name='Activity' fill='#5C6BC0' />
            <Line type='monotone' dataKey='accumulated' name='Accumulated' stroke='#ff7300' />
        </ComposedChart>
    )
}
