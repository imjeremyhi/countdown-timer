import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import firebaseConfig from './firebaseConfig.json';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        firebase.initializeApp(firebaseConfig);

        this.signIn = this.signIn.bind(this);
    }

    DateButton = (text, shouldLoad) => (
        <Button 
            style={{marginLeft: '10px'}}
            variant="contained" 
            color="primary" 
            onClick={() => {
                this.setState({
                    shouldLoad
                })
                this.signIn(new firebase.auth.GoogleAuthProvider(), this.props.date);
            }}>
            {text}
        </Button>
    );

    signIn = (provider, date) => {
        const _this = this;

        firebase.auth().signInWithPopup(provider).then(function(result) {
          const { user } = result;
          const { uid } = user;
    
          const database = firebase.database();
            database.ref('users/' + uid).once('value').then(function(snapshot) {
                if (_this.state.shouldLoad) {
                    // loading
                    const date = snapshot.val() ? snapshot.val().date : null;
                    const momentDate = date ? moment(date) : moment();
                    
                    _this.props.setDate(momentDate);
                } else {
                    // saving
                    database.ref('users/' + uid).set({
                        date: date.toISOString(),
                    });
                }
            })
        }).catch(error => {
            console.log(JSON.stringify(error));
        });
    }

    render() {
        return (
            <div className='signIn'>
                {this.DateButton('Load date', true)}
                {this.DateButton('Save date', false)}
            </div>
        );
    }
}

export default SignIn;