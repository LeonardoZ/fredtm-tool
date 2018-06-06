import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ic_launcher from '../img/ic_launcher.png'
import Subheader from 'material-ui/Subheader'

const styles = {
    titleStyle: {
        fontWeight: 'bold'
    }, 
    error: {
        color: "red"
    }
}

export default class LoadDataDialog extends Component {
    state = {
        open: true
    };

    render() {
        let error = this.props.error
        let errorBlock = <span />
        if (error !== null) {
            console.log(error)
            errorBlock = <p style={styles.error}>{error.message}</p>
        }
        return (
            <Dialog
                title='Welcome to Fred TM Tool!'
                titleStyle={styles.titleStyle}
                avatar
                modal={true}
                open={this.state.open}>
                <Grid fluid>
                    <Row>
                        <Col xs={12} md={2}>
                            <img src={ic_launcher} alt='Fred Tool Logo' />
                        </Col>
                        <Col xs={12} md={8}>
                            <Subheader>Please, import the .json generated file from your app.</Subheader>
                            <form>
                                <FlatButton
                                    containerElement='label'
                                    primary={true}
                                    label='Upload a fredtm_*.json file generated from Fred TM APP:'>
                                    <input type='file' style={{ display: 'none' }} onChange={this.props.handleChange} />
                                </FlatButton>
                                {errorBlock}
                            </form>
                        </Col>
                    </Row>
                </Grid>
            </Dialog>
        );
    }
}


