import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
import LoadData from './load-data/LoadData'
import OperationsContainer from './operations/OperationsContainer'
import ExpandedOperationContainer from './expanded_operation/ExpandedOperationContainer'
import CollectExpand from './expanded_operation/CollectExpand'
import GeneralReportsExpand from './expanded_operation/GeneralReportsExpand'

export const getRoutes = () => {
  return [
    <Route key="base" exact path='/' component={LoadData} />,
    <Route key='operations' exact path='/operations' component={OperationsContainer} />,
    <Route key='expand_operations' exact path='/operations/expand'
      component={ExpandedOperationContainer} />,
    <Route key='collect_expand' exact path='/collect/expand'
      component={CollectExpand} />,
    <Route key='general_reports' exact path='/collects/general/reports'
      component={GeneralReportsExpand} />
  ]
};