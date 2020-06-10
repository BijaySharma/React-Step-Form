import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
class FormPersonalDetails extends Component{

    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    }

    back = event => {
        event.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props;
        const { handleChange } = this.props;
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details" />
                    <TextField
                    name='occupation'
                    hintText="Enter your Occupation"
                    floatingLabelText="Occupation"
                    onChange={handleChange}
                    defaultValue={values.occupation}
                    /><br/>
                    <TextField
                    name='city'
                    hintText="Enter your city"
                    floatingLabelText="city"
                    onChange={handleChange}
                    defaultValue={values.city}
                    /><br/>
                    <TextField
                    name='bio'
                    hintText="Enter your bio address"
                    floatingLabelText="Bio"
                    onChange={handleChange}
                    defaultValue={values.bio}
                    /><br/><br/>

                    <RaisedButton 
                    label="Continue"
                    primary={true}
                    //style={styles.button}
                    onClick={this.continue}
                    /> &nbsp;&nbsp;&nbsp;&nbsp;

                    <RaisedButton 
                    label="Back"
                    primary={false}
                    //style={styles.button}
                    onClick={this.back}
                    />
                   
                </React.Fragment>

            </MuiThemeProvider>
        );
    }
}

export default FormPersonalDetails;