import React from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table'
import RaisedButton from 'material-ui/RaisedButton'
import GridRowCol from '../GridRowCol'
import {
    totalTimed, mean, normalTime, operationalEfficiency,
    utilizationEfficiency, productivity, standardTime,
    totalProduction
} from '../logic/CollectsCalculus'
import { milisecsToSecs, valueToPercent } from '../logic/CollectsFormatter'

export default ({ collects, expandCollect }) => {
    let rows = collects.map((coll, idx) => {
        return <TableRow key={idx}>
            <TableRowColumn># {idx + 1}</TableRowColumn>
            <TableRowColumn>{milisecsToSecs(totalTimed(coll))}</TableRowColumn>
            <TableRowColumn>{milisecsToSecs(mean(coll))}</TableRowColumn>
            <TableRowColumn>
                <RaisedButton primary={true} label={'Expand'}
                    onClick={() => expandCollect(coll, idx + 1)}>
                </RaisedButton>
            </TableRowColumn>
        </TableRow>
    })
    return (
        <GridRowCol>
            <Table>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>Collect</TableHeaderColumn>
                        <TableHeaderColumn>Total Timed</TableHeaderColumn>
                        <TableHeaderColumn>Mean</TableHeaderColumn>
                        <TableHeaderColumn>Expand Collect</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {rows}
                </TableBody>
            </Table>
        </GridRowCol>

    )
}
