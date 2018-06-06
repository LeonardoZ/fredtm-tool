import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import Chip from 'material-ui/Chip'
import { blue300, green400 } from 'material-ui/styles/colors'
import Avatar from 'material-ui/Avatar'
import ActivitiesList from '../activities/ActivitiesList'

const OperationInfoHeader = ({ operation, activities }) => {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar backgroundColor={green400}>
                        {operation.name.substring(0, 3)}
                    </Avatar>}
                title={'Operation: ' + operation.name}
                subtitle='Detailed info about operation'
            />
            <CardActions>
            </CardActions>
            <CardText >
                <dl>
                    <dt><strong>Name: </strong> {operation.name}</dt>
                    <dt><strong>Company: </strong> {operation.company}</dt>
                    <dt><strong>Technical characteristics: </strong> {operation.technicalCharacteristics}</dt>
                    <dt><strong>Last Modified: </strong> {operation.lastModified}</dt>
                </dl>
                <br />
            </CardText>
        </Card>
    )
}

export default OperationInfoHeader
