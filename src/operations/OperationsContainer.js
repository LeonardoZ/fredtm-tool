import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import OperationsList from './OperationsList'
import { filterOperation } from '../actions/OperationsActions'

class OperationContainer extends Component {
    constructor(props) {
        super(props)
        this.expandOperation = this.expandOperation.bind(this)
        this.selectOperation = this.selectOperation.bind(this)
    }

    componentWillMount() {
        if (!this.props.loaded) {
            this.props.history.push('/')
        }
    }

    expandOperation(operation) {
        this.props.filterOperation(operation)
        this.props.history.push('/operations/expand')
    }

    selectOperation(operation) {
        this.props.filterOperation(operation)
    }

    render() {
        if (!this.props.operations.length === 0) {
            return (<div>Sem operações registradas =(</div>)
        }

        return (
            <OperationsList
                operations={this.props.operations}
                expandOperation={this.expandOperation}
                selectedOperation={this.props.selectedOperation}
                selectOperation={this.selectOperation}
                activities={this.props.activities} />
        )
    }
}

const mapStateToProps = ({ operationTree }) => ({
    operations: operationTree.operations,
    selectedOperation: operationTree.selectedOperation,
    activities: operationTree.activities.filter((activity) =>
        activity.operationIdx === operationTree.selectedOperation.filterId),
    error: operationTree.error,
    loaded: operationTree.loaded
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ filterOperation }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(OperationContainer)

