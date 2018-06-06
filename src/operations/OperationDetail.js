import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'
import {
    blue300,
    green400,
    purple500,
} from 'material-ui/styles/colors'
import { ListItem } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import InserChart from 'material-ui/svg-icons/editor/insert-chart'

import Paper from 'material-ui/Paper'
const style = {
    mediumIcon: {
        width: 36,
        height: 36,
    },
    medium: {
        width: 72,
        height: 72,
        padding: 16,
    },
}

const OperationItem = ({ operation, expandOperation }) => {
    let rightIconButton = <IconButton tooltip='Analyse' touch={true}
        onClick={expandOperation} tooltipPosition='top-center'
        iconStyle={style.mediumIcon}
        style={style.medium}>
        <InserChart />
    </IconButton>
    return (
        <ListItem key={operation.filterId}
            primaryText={'Operation: ' + operation.name}
            rightIconButton={rightIconButton}
            leftAvatar={
                <Avatar backgroundColor={green400}>
                    {operation.name.substring(0, 3)}
                </Avatar>
            }
            secondaryText={
                <p>
                    <strong>Company</strong> --
                    {operation.company}
                    <br />
                    <strong>Technical characteristics</strong> --
                    {operation.technicalCharacteristics || 'No description available'}
                </p>
            }
            secondaryTextLines={3}
            divider={true}>
        </ListItem >

    )
}

export default OperationItem
