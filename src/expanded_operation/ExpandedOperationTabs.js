import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import Slider from 'material-ui/Slider'
import Paper from 'material-ui/Paper'
import ActivitiesList from '../activities/ActivitiesList'
import Collects from './Collects'

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

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
