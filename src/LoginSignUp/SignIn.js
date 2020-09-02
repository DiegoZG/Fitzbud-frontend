import React, {Component, useState} from 'react'
import {Route, useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const handleClick = () => {
    if(localStorage.token) history.push("/")
}

  let handleSubmit = (e) => {
          e.preventDefault()
    
          fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: email,
              password: password
            })
          })
          .then(res => res.json())
          .then(data => { if(data.toke){
            localStorage.token = data.token
            localStorage.email = data.user.email
            console.log(localStorage.token)}
            else {
          // let wrong = document.createElement("h1");
          // wrong.innerText = data.error
          // wrong.style.color = "red"
          // document.querySelector('.makeStyles-paper-1').append(wrong)
            }
            
          })
         handleClick()
        }
  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FitnessCenterIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <form className={classes.form} noValidate onSubmit={(e) => handleSubmit(e)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={event => setEmail(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={event => setPassword(event.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            </Grid>
            <Grid item>
              {/* <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link> */}
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
       
      </Box>
    </Container>
  );
}

// class Login extends Component{

//     handleChange = (e) => {
//       this.setState({
//         [e.target.name]: e.target.value
//       })
//     }

//     handleSubmit = (e) => {
//       e.preventDefault()

//       fetch("http://localhost:3000/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           email: this.state.email,
//           password: this.state.password
//         })
//       })
//       .then(res => res.json())
//       .then(data => {
//         localStorage.token = data.token
        
        
//       })
//     }

//     render(){
//         return(
//         <div>
//              <h2>Login</h2>
//             <form onSubmit={(e) => this.handleSubmit(e)}>
//             <label>Email</label>
//             <input onChange={(e) => this.handleChange(e)} name="email" type="text"  />
//             <label>Password</label>
//             <input onChange={(e) => this.handleChange(e)} name="password" type="password" />
//             <input type="submit"/>
//             </form>
//         </div>
//         )
//     }
// }

// export default Login