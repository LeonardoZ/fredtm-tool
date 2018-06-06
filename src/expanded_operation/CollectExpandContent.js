import React from 'react'
import Paper from 'material-ui/Paper'
import { Grid, Row, Col } from 'react-flexbox-grid'
import InformationCard from './InformationCard'
import {
    totalTimed, mean, normalTime, operationalEfficiency,
    utilizationEfficiency, productivity, standardTime,
    totalProduction
} from '../logic/CollectsCalculus'
import CollectTitleBar from './CollectTitleBar'
import { valueToPercent } from '../logic/CollectsFormatter'
import TimelineChart from './data_charts/TimelineChart'
import TimelineInBarsChart from './data_charts/TimelineInBarsChart'
import TimeByActivitiesChart from './data_charts/TimeByActivitiesChart'
import TimeByClassification from './data_charts/TimeByClassification'
import AccumulatedTimeChart from './data_charts/AccumulatedTimeChart'
import ProductionChart from './data_charts/ProductionChart'
import TimeByProductionChart from './data_charts/TimeByProductionChart'
import TimeActivityTable from './data_charts/TimeActivityTable'
import { Tabs, Tab } from 'material-ui/Tabs'
import GridRowCol from '../GridRowCol'

const styles = {
    container: {
        marginTop: 32
    },
    paper: {
        padding: '8px',
    },
    titleStyle: {
        fontWeight: 'bold',
        marginLeft: '8px'
    },
    pageSubheaderStyle: {
        fontWeight: 'bold'
    },
    responsiveContainer: {
        width: '100%',
        height: '100%'
    }
}

export default ({ collect, index, changeTimeFormat, timeFormat, goBack }) => {

    return (
        <GridRowCol>
            <Paper zDepth={2} style={styles.container}>
                <CollectTitleBar collect={collect} index={index} changeTimeFormat={changeTimeFormat} goBack={goBack} />
                <Tabs>
                    <Tab label="Summary">
                        <Paper zDepth={2} style={styles.paper}>
                            <Grid>
                                <Row>
                                    <Col xs={12} md={3}>
                                        <InformationCard title='Mean' value={timeFormat.format(mean(collect))} />
                                    </Col>
                                    <Col xs={12} md={3}>

                                        <InformationCard title='Total Time' value={timeFormat.format(totalTimed(collect))} />
                                    </Col>
                                    <Col xs={12} md={3}>

                                        <InformationCard title='Normal Time' value={timeFormat.format(normalTime(collect))} />
                                    </Col>
                                    <Col xs={12} md={3}>
                                        <InformationCard title='Standard Time' value={timeFormat.format(standardTime(collect))} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={3}>
                                        <InformationCard title='Utilization Efficiency' value={valueToPercent(utilizationEfficiency(collect))} />
                                    </Col>
                                    <Col xs={12} md={3}>

                                        <InformationCard title='Operational Efficiency' value={valueToPercent(operationalEfficiency(collect))} />
                                    </Col>
                                    <Col xs={12} md={3}>

                                        <InformationCard title='Productivity' value={valueToPercent(productivity(collect))} />
                                    </Col>
                                    <Col xs={12} md={3}>
                                        <InformationCard title='Total production' value={totalProduction(collect).toNumber()} />
                                    </Col>
                                </Row>
                            </Grid>
                        </Paper>
                    </Tab>
                    <Tab label="Timeline">
                        <Tabs tabItemContainerStyle={{ background: '#607D8B' }}>
                            <Tab label="Detailed Timeline">
                                <Paper zDepth={2} style={styles.paper}>
                                    <Grid>
                                        <Row>
                                            <Col xs={12} sm={11} smOffset={1}>
                                                <TimelineInBarsChart collect={collect} timeFormat={timeFormat} />
                                            </Col>
                                        </Row>
                                    </Grid>
                                </Paper>
                            </Tab>
                            <Tab label="Collected time progression">
                                <Paper zDepth={2} style={styles.paper}>
                                    <Grid>
                                        <Row>
                                            <Col xs={12} sm={11} smOffset={1}>
                                                <TimelineChart collect={collect} timeFormat={timeFormat} />
                                            </Col>
                                        </Row>
                                    </Grid>
                                </Paper>
                            </Tab>
                        </Tabs>
                    </Tab>
                    <Tab label="Timed">
                        <Tabs tabItemContainerStyle={{ background: '#607D8B' }}>
                            <Tab label="Accumulated timed values">
                                <Paper zDepth={2} style={styles.paper}>
                                    <Grid>
                                        <Row>
                                            <Col xs={12} sm={11} smOffset={1}>

                                                <AccumulatedTimeChart collect={collect} timeFormat={timeFormat} />
                                            </Col>
                                        </Row>
                                    </Grid>
                                </Paper>
                            </Tab>
                            <Tab label="Timed values">
                                <Paper zDepth={2} style={styles.paper}>
                                    <Grid>
                                        <Row>
                                            <Col xs={12} sm={11} smOffset={1}>
                                                <TimeActivityTable collect={collect} timeFormat={timeFormat} />
                                            </Col>
                                        </Row>
                                    </Grid>
                                </Paper>
                            </Tab>
                        </Tabs>
                    </Tab>
                    <Tab label="Activity">
                        <Tabs tabItemContainerStyle={{ background: '#607D8B' }}>
                            <Tab label="Distributed Time by Activity">
                                <Paper zDepth={2} style={styles.paper}>
                                    <Grid>
                                        <Row>
                                            <Col xs={12} sm={10} smOffset={2}>
                                                <TimeByActivitiesChart collect={collect} timeFormat={timeFormat} />
                                            </Col>
                                        </Row>
                                    </Grid>
                                </Paper>
                            </Tab>
                            <Tab label="Distributed Time by Classification">
                                <Paper zDepth={2} style={styles.paper}>
                                    <Grid>
                                        <Row>
                                            <Col xs={12} sm={8} smOffset={4}>
                                                <TimeByClassification collect={collect} timeFormat={timeFormat} />
                                            </Col>
                                        </Row>
                                    </Grid>
                                </Paper>
                            </Tab>
                        </Tabs>
                    </Tab>
                    <Tab label="Production">
                        <Tabs tabItemContainerStyle={{ background: '#607D8B' }}>
                            <Tab label="Production by Time Activity">
                                <Paper zDepth={2} style={styles.paper}>
                                    <Grid>
                                        <Row>
                                            <Col xs={12} sm={10} smOffset={2}>
                                                <ProductionChart collect={collect} timeFormat={timeFormat} />
                                            </Col>
                                        </Row>
                                    </Grid>
                                </Paper>
                            </Tab>
                            <Tab label="Productive time proportions">
                                <Paper zDepth={2} style={styles.paper}>
                                    <Grid>
                                        <Row>
                                            <Col xs={12} sm={8} smOffset={4}>
                                                <TimeByProductionChart collect={collect} timeFormat={timeFormat} />
                                            </Col>
                                        </Row>
                                    </Grid>
                                </Paper>
                            </Tab>
                        </Tabs>
                    </Tab>
                </Tabs>
            </Paper>
        </GridRowCol>
    )
}