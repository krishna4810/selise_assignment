import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './signin.css'
import {connect} from 'react-redux'
import {signIn} from '../../../store/actions/authActions'
 class Signin extends Component {
    state={
        email:'',
        password:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render() {
        const {authError}=this.props;
        return (
            <div className="signin">
                <div className="signinWrapper">
                        <center>
                            <h2 className="signinSubtitle">
                                Manage Personal Finances
                            </h2>
                        </center>
                        <h3 className="signinTitle">
                            Sign In
                        </h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-field">
                            <label className="labelUp">Email:</label>
                            <input type="text" id="email" className="signinInput" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label className="labelUp">Password:</label>
                            <input type="password" id="password" className="signinInput" onChange={this.handleChange}/>
                        </div>
                        <button className="buttonSign" type="submit">Sign In</button>
                        <p className="already">No account yet? <Link className="signUpSpan" to="signup"><span>Sign Up</span></Link></p>
                    </form>
                    <p className="warningText">{authError ? (authError):(null)}</p>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        signIn:(credentials)=>dispatch(signIn(credentials))
    }
}
const mapStateToProps=(state)=>{
    return {
        authError:state.auth.authError
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Signin)
