import React from 'react'
import Paper from 'material-ui/Paper'
import { Grid, Row, Col } from 'react-flexbox-grid'
import GridRowCol from '../GridRowCol'
import GeneralReportsTitleBar from './GeneralReportsTitleBar'
import { Tabs, Tab } from 'material-ui/Tabs'
import GenericCollectsBarChart from './data_charts/GenericCollectsBarChart'
import {
    totalTimedData, meanData, normalTimeData, standardTimeData, getStandardDeviationData,
    operationalEfficiencyData, utilizationEfficiencyData, productivityData, totalProductionData
} from '../logic/GeneralCollectsChartData'
import { getProducedItem } from '../logic/CollectsFormatter'

const styles = {
    container: {
        marginTop: 32
    },
    paper: {
        padding: '8px',
    },
    titleStyle: {
        fontWeight: 'bold',
        marginLeft: '24px'
    },
    pageSubheaderStyle: {
        fontWeight: 'bold'
    }
}

function tabForBarChart(label, chart) {
    return <Tab label={label}>
        <Paper zDepth={1} style={styles.paper}>
            <Grid>
                <Row>
                    <Col xs={12} sm={11} smOffset={1}>
                        {chart}
                    </Col>
                </Row>
            </Grid>
        </Paper>
    </Tab>
}

export default ({ collects, changeTimeFormat, timeFormat, goBack }) => {
    if (collects == null || collects.length === 0) {
        return <p>No registed collects</p>
    }
    const totalTimedChartData = totalTimedData(collects, timeFormat)
    const totalTimedChart = <GenericCollectsBarChart data={totalTimedChartData}
        yLabel='Timed' timeFormat={timeFormat} />

    const meanChartData = meanData(collects, timeFormat)
    const meanChart = <GenericCollectsBarChart data={meanChartData}
        yLabel='Mean' timeFormat={timeFormat} />

    const normalTimeChartData = normalTimeData(collects, timeFormat)
    const normalTimeChart = <GenericCollectsBarChart data={normalTimeChartData}
        yLabel='Normal Time' timeFormat={timeFormat} />

    const standardTimeChartData = standardTimeData(collects, timeFormat)
    const standardTimeChart = <GenericCollectsBarChart data={standardTimeChartData}
        yLabel='Standard Time' timeFormat={timeFormat} />

    const standardDevChartData = getStandardDeviationData(collects, timeFormat)
    const standardDevChart = <GenericCollectsBarChart data={standardDevChartData}
        yLabel='Standard Deviation' timeFormat={timeFormat} />

    const operationalEfficiencyChartData = operationalEfficiencyData(collects)
    const operationalEfficiencyChart = <GenericCollectsBarChart data={operationalEfficiencyChartData}
        yLabel='Operational Efficiency' />

    const utilizationEfficiencyChartData = utilizationEfficiencyData(collects)
    const utilizationEfficiencyChart = <GenericCollectsBarChart data={utilizationEfficiencyChartData}
        yLabel='Utilization Efficiency' />

    const productivityChartData = productivityData(collects)
    const productivityChart = <GenericCollectsBarChart data={productivityChartData}
        yLabel='Productivity' />

    const totalProductionChartData = totalProductionData(collects)
    const totalProductionChart = <GenericCollectsBarChart data={totalProductionChartData}
        yLabel={'Total Production (' + getProducedItem(collects[0]) + ')'} />
    console.log(totalProductionChartData)
    return (
        <GridRowCol>
            <Paper zDepth={2} style={styles.container}>
                <GeneralReportsTitleBar changeTimeFormat={changeTimeFormat} goBack={goBack} />
                <Tabs>
                    <Tab label='Time'>
                        <Tabs tabItemContainerStyle={{ background: '#607D8B' }}>
                            {tabForBarChart('Total timed', totalTimedChart)}

                            {tabForBarChart('Mean', meanChart)}

                            {tabForBarChart('Normal time', normalTimeChart)}

                            {tabForBarChart('Standard Time', standardTimeChart)}

                            {tabForBarChart('Standard Deviation', standardDevChart)}
                        </Tabs>
                    </Tab>

                    <Tab label='Efficiency'>
                        <Tabs tabItemContainerStyle={{ background: '#607D8B' }}>
                            {tabForBarChart('Operational Efficiency', operationalEfficiencyChart)}

                            {tabForBarChart('Utilization Efficiency', utilizationEfficiencyChart)}
                        </Tabs>
                    </Tab>

                    <Tab label='Production'>
                        <Tabs tabItemContainerStyle={{ background: '#607D8B' }}>
                            {tabForBarChart('Productivity', productivityChart)}

                            {tabForBarChart('Total Production', totalProductionChart)}
                        </Tabs>
                    </Tab>
                </Tabs>
            </Paper>
        </GridRowCol >
    )
}