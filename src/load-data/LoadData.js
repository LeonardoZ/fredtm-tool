import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { onDataLoaded } from '../actions/LoadDataActions'
import LoadDataDialog from './LoadDataDialog'

class LoadData extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange(e) {
    let file = e.target.files[0]
    let reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = ((theFile) => e => {
      this.setState({ fileContent: e.target.result, open: false })
      this.props.onDataLoaded(e.target.result)
      this.props.history.push('/operations')
    })(file);

    // Read in the json file as a data URL.
    reader.readAsDataURL(file);
  }

  render() {
   
    return (
      <LoadDataDialog handleChange={this.handleChange} error={this.props.error} />
    )
  }
}

function mapStateToProps(state) {
  return {
    dataLoaded: state.loadDataTree.jsonData,
    error: state.operationTree.error
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ onDataLoaded }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadData)
