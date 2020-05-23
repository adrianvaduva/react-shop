import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import Facebook from '../../assets/images/facebook.png';
import {ReactComponent as Google} from '../../assets/icons/google.svg';
import './Login.css'
import {connect} from 'react-redux';
import {loginUser} from "../../redux/user/UserActions";
import * as firebase from "firebase";

class Login extends React.Component {

    componentDidUpdate(prevProps) {
        if (this.props.user !== prevProps.user) {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div className="login-page">
                <Link to='/'>
                    <img src={Logo} alt="logo" className="logo mb-5"/>
                </Link>

                <p>Alege providerul cu care vrei să vrei să te loghezi:</p>
                <button
                    className="btn btn-outline-dark d-flex align-items-center"
                    onClick={() => this.props.signIn(new firebase.auth.GoogleAuthProvider())}
                >
                    <Google className="w-50 mr-3"/>
                    <span className="text-nowrap">Loghează-te cu Google</span>
                </button>
                <button
                    className="btn btn-outline-dark d-flex align-items-center mt-3"
                    onClick={() => this.props.signIn(new firebase.auth.FacebookAuthProvider())}
                >
                    <img src={Facebook} width="47" alt="Facebook"/>
                    <span className="text-nowrap">Loghează-te cu Facebook</span>
                </button>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (provider) => dispatch(loginUser(provider))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);