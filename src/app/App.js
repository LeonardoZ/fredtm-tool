import React, { Component } from 'react'
import './App.css'
import { bindActionCreators } from 'redux'
import { Router } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Route
} from 'react-router-dom'
import { getRoutes } from '../routes'
import Layout from './Layout'
import { onDataLoaded, unloadData } from '../actions/LoadDataActions'
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class App extends Component {

  componentWillMount() {
    // load data for easy dev setup 
    // let devData = localStorage.getItem('devdata')
    // if (devData !== null)
    //   this.props.onDataLoaded(devData)

  }

  unload() {
    this.props.unloadData()
    history.push('/')
  }

  render() {
    return (
      <Router history={history}>
        <Route>
          <Layout unload={() => this.unload()} routes={getRoutes()} loaded={this.props.loaded} />
        </Route>
      </Router>
    )
  }
}

function mapStateToProps({ operationTree }) {
  return {
    operations: operationTree.operations,
    loaded: operationTree.loaded

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ onDataLoaded, unloadData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
