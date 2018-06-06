import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import OperationItem from './OperationItem'
import Subheader from 'material-ui/Subheader'
import TextField from 'material-ui/TextField'
import GridRowCol from '../GridRowCol'
import Paper from 'material-ui/Paper'
import { List } from 'material-ui/List'
import OperationInfoHeader from '../expanded_operation/OperationInfoHeader'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'

const titleStyle = {
    fontWeight: 'bold'
}

const styles = {
    paper: {
        marginTop: 32
    },
    list: {
        overflowY: 'auto'
    }
};

const OperationsList = ({ operations, expandOperation, selectedOperation, selectOperation, activities }) => {
    let items = operations.map((operation, idx) =>
        <OperationItem
            key={idx}
            operation={operation}
            expandOperation={expandOperation}
            selectOperation={selectOperation} />
    )
    return (
        <GridRowCol>
            <Paper zDepth={2} style={styles.paper}>
                <Toolbar>
                    <ToolbarGroup>
                        <ToolbarTitle text='Operations List' style={titleStyle} />
                        <ToolbarSeparator />
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <TextField
                            hintText='Search operations by...' />
                    </ToolbarGroup>
                </Toolbar>
                <Grid fluid>
                    <Row around='xs'>
                        <Col xs={6}>
                            <List style={styles.list}>
                                <Subheader>Loaded Operations</Subheader>
                                {items}
                            </List>
                        </Col>
                        <Col xs={4}>
                            <Subheader>Operation details</Subheader>
                            <OperationInfoHeader
                                activities={activities}
                                operation={selectedOperation}
                                selectOperation={selectOperation} />
                        </Col>
                    </Row>
                </Grid>
            </Paper>
        </GridRowCol>
    )
}

export default OperationsList
