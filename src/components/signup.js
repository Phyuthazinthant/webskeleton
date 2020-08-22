import React, { useState,useEffect } from 'react';
import '../App.css';
import { TextField, Card, Button } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FaceTwoToneIcon from '@material-ui/icons/FaceTwoTone';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockSharpIcon from '@material-ui/icons/LockSharp';
import { registerApi } from '../common/apis/api';

function Signup() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [invalid, setInValid] = useState(true);

    const handleSignUp = () => {
        let result = registerApi(username,email,password);
        alert(JSON.stringify(result))
    }

    useEffect(()=>{
        if(username!==''&& email!=='' && password!== '' && rePassword!==''){
            password === rePassword ? setInValid(false) : setInValid(true);
        }else{
            setInValid(true)
        }
    },[username,email,password,rePassword]);

    return (

        <Card className="App-sign">
            <div style={{ padding: '70px' }}>
                <h2>Sign Up Form</h2>
                <TextField variant="standard" label="Username" id="uname"
                    onChange={(e) => setUsername(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FaceTwoToneIcon color="primary" />
                            </InputAdornment>
                        ),
                    }}
                /><br /><br />
                <TextField variant="standard" label="Email" id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <MailOutlineIcon color="primary" />
                            </InputAdornment>
                        ),
                    }}
                /><br /><br />
                <TextField variant="standard" label="Password" type="password" id="p1"
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockOutlinedIcon color="primary" />
                            </InputAdornment>
                        ),
                    }}
                /><br /><br />
                <TextField variant="standard" label="Re-type password" type="password" id="p2"
                 onChange={(e) => setRePassword(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockSharpIcon color="primary" />
                            </InputAdornment>
                        ),
                    }}
                /><br /><br />
                <Button disabled={invalid} variant="contained" color="primary" onClick={handleSignUp}>Sign Up</Button>
                <h5>Already have an account? <a href="/" style={{ color: "#4499da" }}>Login</a></h5>

            </div>
        </Card>
    );
}


export default Signup;