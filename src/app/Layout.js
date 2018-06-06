import React from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import GridRowCol from '../GridRowCol'

const styles = {
    root: {
        width: '100%',
        height: '100%'
    },
    footer: {
        bottom: 0,
        marginTop: '32px'
    }
}


export default ({ unload, routes, loaded }) => {
    return (
        <div style={styles.root}>
            <AppBar
                title='Fred TM Tools'
                iconElementLeft={<span />}
                iconElementRight={loaded ? <FlatButton label='Unload' onClick={() => unload()} /> : <span />} />
            {routes}
            <footer style={styles.footer}>
            </footer>
        </div>
    )
}
