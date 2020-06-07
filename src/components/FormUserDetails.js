import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
class FormUserDetails extends Component{

    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { values } = this.props;
        const { handleChange } = this.props;
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details" />
                    <TextField
                    name='firstName'
                    hintText="Enter your First Name"
                    floatingLabelText="First Name"
                    onChange={handleChange}
                    defaultValue={values.firstName}
                    /><br/>
                    <TextField
                    name='lastName'
                    hintText="Enter your Last Name"
                    floatingLabelText="Last Name"
                    onChange={handleChange}
                    defaultValue={values.lastName}
                    /><br/>
                    <TextField
                    name='email'
                    hintText="Enter your Email address"
                    floatingLabelText="Email"
                    onChange={handleChange}
                    defaultValue={values.email}
                    /><br/><br/>

                    <RaisedButton 
                    label="Continue"
                    primary={true}
                    //style={styles.button}
                    onClick={this.continue}
                    />
                   
                </React.Fragment>

            </MuiThemeProvider>
        );
    }
}

export default FormUserDetails;