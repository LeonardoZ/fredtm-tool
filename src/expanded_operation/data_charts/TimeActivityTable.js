import React from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table'
import moment from 'moment'

export default ({ collect, timeFormat }) => {
    let rows = collect.times.map((time, idx) => {

        let timeType = ''
        let type = 0
        if (timeType === 0) {
            type = 'Unproductive'
        } else if (timeType === 1) {
            type = 'Auxiliary'
        } else if (timeType === 2) {
            type = 'Productive'
        }
        let state = ''
        if (time.activity.idleActivity) {
            state = 'Idle'
        } else if (time.activity.quantitative) {
            state = 'Item - ' + time.activity.itemName
        } else {
            state = '.'
        }
        const startDate = moment(new Date(time.startDate)).format('h:mm:ss a')
        const finalDate = moment(new Date(time.finalDate)).format('h:mm:ss a')
        return <TableRow key={idx}>
            <TableRowColumn>{time.activityTitle.substring(0, 22)}</TableRowColumn>
            <TableRowColumn>{type}</TableRowColumn>
            <TableRowColumn>{startDate}</TableRowColumn>
            <TableRowColumn>{finalDate}</TableRowColumn>
            <TableRowColumn>{timeFormat.format(time.timed)}</TableRowColumn>
            <TableRowColumn>{state}</TableRowColumn>
            <TableRowColumn>{time.collectedAmount}</TableRowColumn>
        </TableRow>
    })
    return (
        <Table
            height={'350px'}
            fixedHeader={true}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn>Activity</TableHeaderColumn>
                    <TableHeaderColumn>Classification</TableHeaderColumn>
                    <TableHeaderColumn>Start date</TableHeaderColumn>
                    <TableHeaderColumn>Final date</TableHeaderColumn>
                    <TableHeaderColumn>Timed</TableHeaderColumn>
                    <TableHeaderColumn>State</TableHeaderColumn>
                    <TableHeaderColumn>Collected amount</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}
                showRowHover={true}
                stripedRows={true}>
                {rows}
            </TableBody>
        </Table>

    )
}
