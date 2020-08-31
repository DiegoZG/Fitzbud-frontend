import React, {Component} from 'react'


class SignUp extends Component{

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    signUp = (e) => {
      e.preventDefault()

      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      })
      .then(res => res.json())
      .then(data => {
          console.log(data)
        // localStorage.setItem("token", data.token)
        localStorage.token = data.token
      })
    }
   
    render(){
        return(
        <div>
            <h2>Signup</h2>
            <form onSubmit={(e) => this.signUp(e)}>
            <label>Email</label>
            <input onChange={(e) => this.handleChange(e)} name="email" type="text" />
            <label>Password</label>
            <input onChange={(e) => this.handleChange(e)} name="password" type="password" />
            <input type="submit"/>
            </form>
        </div>
        )
    }
}

export default SignUp