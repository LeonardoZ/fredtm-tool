import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { filterCollect } from '../actions/OperationsActions'
import OperationInfoHeaderFull from './OperationInfoHeaderFull'
import ExpandedOperationTabs from './ExpandedOperationTabs'
import ExpandOperationPage from './ExpandOperationPage'

class ExpandedOperationContainer extends Component {

    constructor(props) {
        super(props)
        this.expandCollect = this.expandCollect.bind(this)
        this.handleDialogClose = this.handleDialogClose.bind(this)
        this.goBack = this.goBack.bind(this)
        this.openGeneralReports = this.openGeneralReports.bind(this)
    }

    goBack() {
        this.props.history.push('/operations')
    }

    openGeneralReports(collects) {
        this.props.history.push('/collects/general/reports', { collects })
    }

    expandCollect(collect, idx) {
        this.props.filterCollect(collect, idx)
        this.props.history.push('/collect/expand')
    }

    handleDialogClose() {
        this.setState({ open: false });
    }

    retrieveTimesFor(collect, times) {
        return times.filter((time) => time.collectIdx === collect.filterId)
    }

    retrieveActivityFor(time) {
        return this.props.activities.filter((act) => act.title === time.activityTitle)
    }

    render() {
        let timesWithActivities = this.props.times.map(t => {
            return { ...t, activity: this.retrieveActivityFor(t)[0] }
        })
        let collectsWithTimes = this.props.collects.map(c => {
            return { ...c, times: this.retrieveTimesFor(c, timesWithActivities) }
        })
        return (
            <ExpandOperationPage goBack={this.goBack} operationName={this.props.operation.name}>
                <OperationInfoHeaderFull
                    operation={this.props.operation}
                    activities={this.props.activities} />
                <ExpandedOperationTabs
                    operation={this.props.operation}
                    activities={this.props.activities}
                    collects={collectsWithTimes}
                    openGeneralReports={this.openGeneralReports}
                    expandCollect={this.expandCollect} />
            </ExpandOperationPage>
        )
    }
}

const mapStateToProps = ({ operationTree }) => ({
    operation: operationTree.selectedOperation,
    activities: operationTree.activities.filter((activity) =>
        activity.operationIdx === operationTree.selectedOperation.filterId),
    collects: operationTree.collects.filter((collect) =>
        collect.operationIdx === operationTree.selectedOperation.filterId),
    times: operationTree.times
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ filterCollect }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpandedOperationContainer)