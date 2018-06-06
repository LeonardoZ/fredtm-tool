import React, { Component } from 'react'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'
import { FORMATS } from '../logic/DecimalTimeFormats'
import BackBar from './BackBar'

const styles = {
    titleStyle: {
        fontWeight: 'bold',
        marginLeft: '8px'
    }
}

export default class GeneralReportsTitleBar extends Component {
    state = {
        value: FORMATS[0].unit
    }
    handleChange = (event, index, value) => {
        this.setState({ value })
        this.props.changeTimeFormat(value)
    }

    render() {
        let menuItens = FORMATS.map((f, idx) => {
            return <MenuItem key={idx} value={f.unit} primaryText={f.display} />
        })
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <BackBar goBack={this.props.goBack} />
                    <ToolbarTitle text={`General reports`} style={styles.titleStyle} />
                </ToolbarGroup>
                <ToolbarGroup >
                    <SelectField
                        floatingLabelText={'Choose the time format to display'}
                        value={this.state.value}
                        onChange={this.handleChange}>
                        {menuItens}
                    </SelectField>
                </ToolbarGroup>
            </Toolbar>
        )
    }
}
