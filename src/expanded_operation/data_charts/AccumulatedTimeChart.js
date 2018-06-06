import React from 'react'
import { LineChart, Line, XAxis, CartesianGrid, YAxis, Tooltip, Legend, Label } from 'recharts'
import { miliSecsToSecsValue } from '../../logic/CollectsFormatter'
import moment from 'moment'

export default ({ collect, timeFormat }) => {
    if (!collect) return <div />
    let sum = 0
    let timelineData = collect.times.map(t => {
        let sumTimed = sum += t.timed
        return {
            name: t.activityTitle + ' ' + moment(new Date(t.finalDate)).format('h:mm:ss a'),
            value: timeFormat.convert(sumTimed)
        }
    })

    return (
        <LineChart width={976} height={350} data={timelineData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <Line name={'Time Activities Accumulated (' + timeFormat.unit + ')'} type='natural' dataKey='value'
                stroke='#8884d8' />
            <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
            <XAxis dataKey='name'>
                <Label value='Timeline' offset={10} position='bottom' />
            </XAxis>
            <Tooltip />
            <YAxis dataKey='value'>
                <Label value={'Acc.Timed (' + timeFormat.unit + ')'} angle={-90} position='left' />
            </YAxis>
            <Legend verticalAlign='top' wrapperStyle={{ lineHeight: '40px' }} />
        </LineChart>
    )
}
