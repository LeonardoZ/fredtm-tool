import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import Paper from 'material-ui/Paper'
import ActivitiesList from '../activities/ActivitiesList'
import Collects from './Collects'

export default ({ operation, activities, collects, expandCollect, openGeneralReports }) => {
    return (
        <Paper zDepth={2}>
            <Tabs>
                <Tab label='Collects' >
                    <div>
                        <Collects collects={collects} expandCollect={expandCollect} />
                    </div>
                </Tab>
                <Tab label='General Reports' onActive={() => openGeneralReports(collects)}>
                </Tab>
                <Tab label='Activities' >
                    <div>
                        {<ActivitiesList activities={activities} />}
                    </div>
                </Tab>

            </Tabs>
        </Paper>
    )
}
