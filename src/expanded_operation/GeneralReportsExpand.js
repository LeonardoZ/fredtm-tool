import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CollectExpandContent from './CollectExpandContent'
import { timeFormatFactoryByUnit, MILISECONDS } from '../logic/DecimalTimeFormats'
import GeneralReportContent from "./GeneralReportContent"

export class GeneralReportsExpand extends Component {

  constructor(props) {
    super(props)
    this.goBack = this.goBack.bind(this)
  }

  state = {
    timeFormat: MILISECONDS
  }

  goBack() {
    this.props.history.push('/operations/expand')
  }

  changeTimeFormat(value) {
    const timeFormat = timeFormatFactoryByUnit(value)
    this.setState({ timeFormat })
  }

  render() {
    let location = this.props.location
    if (location == undefined || location.state.collects == undefined) {
      return <p>No collects defined</p>
    }
    return (
      <GeneralReportContent
        collects={location.state.collects}
        changeTimeFormat={(value) => this.changeTimeFormat(value)}
        timeFormat={this.state.timeFormat}
        goBack={this.goBack} />
    )
  }
}

export default GeneralReportsExpand
