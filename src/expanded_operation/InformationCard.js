import React from 'react'
import Paper from 'material-ui/Paper'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'

const styles = {
    paper: {
        padding: '8px',
        margin: '8px'
    }
}

export default ({ title, value }) => {
    return (
        <Paper zDepth={2} style={styles.paper}>
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Subheader>{title}</Subheader>
                    </Col>
                </Row>
                <Divider />
                <Row end='xs'>
                    <Col xs={12}>
                        <h2>{value}</h2>
                    </Col>
                </Row>
            </Grid>
        </Paper>
    )
}
