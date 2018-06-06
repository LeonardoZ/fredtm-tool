import React from 'react'
import { LineChart, Line, XAxis, CartesianGrid, YAxis, Tooltip, Legend, Label,ReferenceLine } from 'recharts'
import { getStandardDeviation } from '../../logic/CollectsCalculus'
import moment from 'moment'

export default ({ collect, timeFormat }) => {
    if (!collect) return <div />

    const timelineData = collect.times.map(t => {
        return {
            name: t.activityTitle + ' ' + moment(new Date(t.finalDate)).format('h:mm:ss a'),
            value: timeFormat.convert(t.timed)
        }
    })

    const stdTime = timeFormat.convert(getStandardDeviation(collect))
    console.log(stdTime)
    return (
        <LineChart width={976} height={350} data={timelineData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <Line name='Time Activities' type='natural' dataKey='value'
                stroke='#8884d8' />
            <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
            <XAxis dataKey='name'>
                <Label value='Timeline' offset={10} position='bottom' />
            </XAxis>
            <Tooltip />
            <YAxis dataKey='value'>
                <Label value={'Timed (' + timeFormat.unit + ')'} angle={-90} position='left' />
            </YAxis>
            <ReferenceLine y={stdTime} label='Std. Deviation' stroke='red' />
            <Legend verticalAlign='top' wrapperStyle={{ lineHeight: '40px' }} />
        </LineChart>
    )
}
