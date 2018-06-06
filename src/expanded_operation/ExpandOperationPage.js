import React from 'react'
import GridRowCol from '../GridRowCol'
import Paper from 'material-ui/Paper'
import BackBar from "./BackBar"
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'

const styles = {
    titleStyle: {
        fontWeight: 'bold',
        marginLeft: '8px'
    },
    paper: {
        marginTop: 32
    }
}

export default ({ children, goBack, operationName }) => {
    return (
        <GridRowCol>
            <Paper zDepth={2} style={styles.paper}>
                <Toolbar>
                    <ToolbarGroup firstChild={true}>
                        <BackBar goBack={goBack} />
                        <ToolbarTitle text={`${operationName} collects`} style={styles.titleStyle} />
                    </ToolbarGroup>
                </Toolbar>
                {children}
            </Paper>
        </GridRowCol>
    )
}
