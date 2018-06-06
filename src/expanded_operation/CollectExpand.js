import React, { Component } from 'react'
import { connect } from 'react-redux'
import CollectExpandContent from './CollectExpandContent'
import { timeFormatFactoryByUnit, MILISECONDS } from '../logic/DecimalTimeFormats'

export class CollectExpand extends Component {

  constructor(props) {
    super(props)
    this.goBack = this.goBack.bind(this)
  }

  state = {
    timeFormat: MILISECONDS
  }

  goBack() {
    this.props.history.push("/operations/expand")
  }

 

  changeTimeFormat(value) {
    const timeFormat = timeFormatFactoryByUnit(value)
    this.setState({ timeFormat })
  }

  render() {

    let props = this.props
    if ((props.collect === undefined) || (props.collect.times === undefined)) {
      return <p>No collect defined</p>
    }
    return (
      <CollectExpandContent
        collect={this.props.collect}
        index={this.props.index}
        openGeneralReports={this.openGeneralReports}
        changeTimeFormat={(value) => this.changeTimeFormat(value)}
        timeFormat={this.state.timeFormat}
        goBack={this.goBack} />
    )
  }
}

const mapStateToProps = ({ operationTree }) => ({
  collect: operationTree.selectedCollect,
  index: operationTree.collectIndex
})

export default connect(mapStateToProps, null)(CollectExpand)
