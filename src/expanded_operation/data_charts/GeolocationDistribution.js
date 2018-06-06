import React from 'react'
import {
    BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label
} from 'recharts'
import moment from 'moment'

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
    return (
        <BarChart width={690} height={300} data={data}
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
        </BarChart>
    )
}
