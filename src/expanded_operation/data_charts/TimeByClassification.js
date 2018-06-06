import React from 'react'
import {
    PieChart, Pie, Legend, Tooltip, Cell, text
} from 'recharts'

export default ({ collect, timeFormat }) => {
    if (!collect) return <div />
    let totalTimeByClassification = {}
    collect.times.forEach(time => {
        let oldVal = totalTimeByClassification[time.activity.activityType] || 0
        totalTimeByClassification[time.activity.activityType] = oldVal + time.timed
    });
    let data = []
    for (const key in totalTimeByClassification) {
        if (totalTimeByClassification.hasOwnProperty(key)) {
            const timed = totalTimeByClassification[key];

            let type = ''
            if (key === 0) {
                type = 'Unproductive'
            } else if (key === 1) {
                type = 'Auxiliary'
            } else if (key === 2) {
                type = 'Productive'
            }
            data.push({ name: type, value: timeFormat.convert(timed) })
        }
    }

    const RADIAN = Math.PI / 180;
    let colors = ['#FF5252', '#FFEB3B', '#2196F3']
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
