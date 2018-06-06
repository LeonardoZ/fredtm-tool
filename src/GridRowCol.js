import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

export default ({ children, size = 12, offset = 0 }) => {
    return (
        <Grid>
            <Row>
                <Col xs={size} xsOffset={offset}>
                    {children}
                </Col>
            </Row>
        </Grid>
    )
}
