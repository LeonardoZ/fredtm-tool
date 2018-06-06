import React from 'react'
import Subheader from 'material-ui/Subheader'
import GridRowCol from '../GridRowCol'
import { List, ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import { blue400, yellow400, red400 } from 'material-ui/styles/colors'

const styles = {
    paper: {
        marginTop: 32
    },
    list: {
        overflowY: 'auto'
    }
};


let productive = <Avatar backgroundColor={blue400}>
    PR
</Avatar>
let auxiliary = <Avatar backgroundColor={yellow400}>
    AU
</Avatar>
let unproductive = <Avatar backgroundColor={red400}>
    UN
</Avatar>

function chooseAvatarForType(activity) {
    if (activity.activityType === 0) {
        return unproductive
    } else if (activity.activityType === 1) {
        return auxiliary;
    } else if (activity.activityType === 2) {
        return productive;
    }
}

const ActivitiesList = ({ activities }) => {

    let items = activities.map((activity, idx) =>
        <ListItem
            key={idx}
            leftAvatar={chooseAvatarForType(activity)}
            primaryText={activity.title}
            secondaryTextLines={2}
            secondaryText={
                <p>
                    <span>{activity.description || 'No description provided'}</span>
                    <br />
                    {activity.quantitative ? <strong>Quantitative activity - Unit: {activity.itemName}</strong> : ''}
                    <br />
                    {activity.idleActivity ? <strong>Iddle activity</strong> : ''}
                </p>
            } />
    )
    return (
        <GridRowCol>
            <List style={styles.list}>
                <Subheader>Activities</Subheader>
                {items}
            </List>
        </GridRowCol>
    )
}

export default ActivitiesList
