import React, { useState, useEffect } from 'react';
import { TextField, Checkbox, Button, Typography } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockIcon from '@material-ui/icons/Lock';
import FacebookIcon from '@material-ui/icons/Facebook';
import CloudIcon from '@material-ui/icons/Cloud';
import TwitterIcon from '@material-ui/icons/Twitter';
import plog from '../plog.svg';
import { CardContent, CardActions } from '@material-ui/core';
import Signup from './signup';
import {loginApi} from '../common/apis/api';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [helperText, setHelperText] = useState('');
    const [error, setError] = useState(false);
    const [signup, setSignup] = useState(false);

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    useEffect(() => {
        if (email.trim() && password.trim()) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [email, password]);

    const handleLogin = () => {
        let lgData = loginApi(email,password)
        if (email === lgData.email && password === lgData.password) {
            setError(false);
            setHelperText('Successful');
        } else {
            setError(true);
            setHelperText('Try Again')
        }
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === 14 || e.which === 14) {
            isButtonDisabled || handleLogin();
        }
    };


    return (
        <div className="App">
            {signup && <Signup />}
                <img src={plog} alt="plog" style={{ width: '400px', height: '600px' }} />
                <div className="App-header">
                    <br />
                    <h3 style={{ color: "blue" }} >Sign In</h3>

                    <TextField variant="outlined" label="Email" id="email" error={error}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyPress={(e) => handleKeyPress(e)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MailOutlineIcon color="primary" />
                                </InputAdornment>
                            ),
                        }} />
                    <br />
                    <TextField variant="outlined" label="Password" type="password" id="password"
                        error={error}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyPress={(e) => handleKeyPress(e)}
                        helperText={helperText}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon color="primary" />
                                </InputAdornment>
                            ),
                        }} />
                    <br />
                    <CardActions className="App-c">
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        <Typography >
                            Remember Me
    </Typography>
                    </CardActions>
                    <Button variant="contained" color="primary"
                        onClick={handleLogin}
                        disabled={isButtonDisabled}>Sign In </Button>

                    <h6><a href="google.com">Forgot Password?</a></h6>
                    { !signup &&  <h6>Don't have an account? <span onClick={() => setSignup(!signup)} style={{ textDecoration: "underline", color: "blue" }}>Sign Up</span></h6>}

                    <CardContent>
                        <FacebookIcon color="primary" style={{ fontSize: 30 }} />
                        <TwitterIcon color="primary" style={{ fontSize: 30 }} />
                        <CloudIcon color="primary" style={{ fontSize: 30 }} />
                    </CardContent>

                </div>

        </div>
    )
}
export default Login
