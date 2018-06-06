import React from 'react'
import {
    PieChart, Pie, Legend, Tooltip, Cell, text
} from 'recharts'
import { PRODUCTIVE, AUXILIARY, UNPRODUCTIVE } from '../../logic/CollectsCalculus'

export default ({ collect, timeFormat }) => {
    if (!collect) return <div />
    let totalTimeByClassification = {}
    collect.times.forEach(time => {
        let oldVal = totalTimeByClassification[time.activity.activityType] || 0
        totalTimeByClassification[time.activity.activityType] = oldVal + time.timed
    });

    const productiveTime = timeFormat.convert(totalTimeByClassification[PRODUCTIVE])
    const nonProductiveTime = timeFormat.convert(
        totalTimeByClassification[AUXILIARY] +
        totalTimeByClassification[UNPRODUCTIVE])
    const data = [{ name: 'Productive', value: productiveTime },
    { name: 'Non-productive', value: nonProductiveTime }]


    const RADIAN = Math.PI / 180;
    const colors = ['#2196F3', '#5C6BC0']
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (

            <text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline='central'>
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <PieChart width={400} height={350}>
            <Pie isAnimationActive={true} data={data}
                outerRadius={80} dataKey='value'
                labelLine={false} label={renderCustomizedLabel}>
                {
                    data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))
                }
            </Pie>

            <Tooltip />
            <Legend verticalAlign='top' wrapperStyle={{ lineHeight: '40px' }} />
        </PieChart>
    )
}
