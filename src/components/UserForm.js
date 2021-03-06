import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';

class UserForm extends Component{

    state = {
        step : 1,
        firstName : '',
        lastName : '',
        email : '',
        city : '',
        bio : '',
        occupation : ''
    }

    //proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step : step + 1
        });
        console.log(this.state);
    }

    // go back to previous step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step : step - 1
        });
    }

    handleChange =  event  =>{
        this.setState({
            [event.target.name] : event.target.value
        });
    } 

    render(){
        const { step } = this.state;
        const {firstName, lastName, email, bio, occupation, city} = this.state;
        const values = {firstName, lastName, email, occupation, bio, city};
        
        switch(step){
            case 1 :
                return <FormUserDetails values={values} nextStep={this.nextStep} handleChange={this.handleChange} />;
            case 2 :
                return <FormPersonalDetails values={values} nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} />;
            case 3 :
                return <h1>Confirm</h1>;
            case 4 :
                return <h1>Success</h1>;
        }
    }
}

export default UserForm;