import React from 'react';
import { Container } from 'reactstrap';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            newEmail: '',
            newPassword: '',
            confirmPassword: '',
            newFirstName: '',
            newLastName: '',
            errorLoginMessage: '',
            errorSigninMessage: ''
        }
    }

    handleRegister = async event => {
        event.preventDefault();

        const { newFirstName, newLastName, newEmail, newPassword, confirmPassword } = this.state;

        if (newPassword !== confirmPassword) {
            this.setState({ errorSigninMessage: "Passwords don't match." })
            return;
        } else if (!newFirstName || !newLastName) {
            this.setState({ errorSigninMessage: "Please enter your name." })
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                newEmail,
                newPassword
            );

            const displayName = newFirstName + ' ' + newLastName;

            await createUserProfileDocument(user, { displayName });

            this.props.history.push('/account'); // jump to the account page
        } catch (error) {
            this.setState({ errorSigninMessage: error.message })
        }
    };

    handleSignin = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
            this.props.history.push('/account'); // jump to the account page
        } catch (error) {
            this.setState({ errorLoginMessage: "Invalid email or password." })
        }
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value }); // need [] otherwise a new state 'name' is created
    };

    render() {
        return (
            <div className='loginpage-container' style={{ marginTop: '5rem' }}>
                <Container>
                    <div className='login-wrapper'>
                        <h1>LOGIN</h1>
                        {
                            this.state.errorLoginMessage ? <p className="error-message">{this.state.errorLoginMessage}</p> : <></>
                        }
                        <form onSubmit={this.handleSignin}>
                            <label htmlFor='email'>EMAIL</label>
                            <input type='email' id='email' value={this.state.email} name='email' onChange={this.handleChange} />
                            <label htmlFor='password'>PASSWORD</label>
                            <input autoComplete="off" type='password' id='password' value={this.state.password} name='password' onChange={this.handleChange} />
                            <button className='button' type='button submit'>SIGN IN</button>
                        </form>
                        {/* <button className='button google-btn' onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button> */}
                    </div>
                    <div className='register-wrapper'>
                        <h1>CREATE AN ACCOUNT</h1>
                        <p>Registering makes checkout fast and easy and saves your order information in your account.</p>
                        {
                            this.state.errorSigninMessage ? <p className="error-message">{this.state.errorSigninMessage}</p> : <></>
                        }
                        <form onSubmit={this.handleRegister}>
                            <label htmlFor='firstName'>FIRST NAME</label>
                            <input type='text' id='firstName' value={this.state.newFirstName} name='newFirstName' onChange={this.handleChange} />

                            <label htmlFor='lastName'>LAST NAME</label>
                            <input type='text' id='lastName' value={this.state.newLastName} name='newLastName' onChange={this.handleChange} />

                            <label htmlFor='newEmail'>EMAIL*</label>
                            <input type='email' id='newEmail' value={this.state.newEmail} name='newEmail' onChange={this.handleChange} />

                            <label htmlFor='newPassword'>PASSWORD*</label>
                            <input autoComplete="off" type='password' id='newPassword' value={this.state.newPassword} name='newPassword' onChange={this.handleChange} />

                            <label htmlFor='confirm_password'>CONFIRM PASSWORD*</label>
                            <input autoComplete="off" type='password' id='confirm_password' name='confirmPassword' onChange={this.handleChange} />

                            <button className='button'>REGISTER</button>
                            <p>By creating an account, you agree to our Terms of Use and Privacy Policy.</p>
                            <p className="bold">* REQUIRED FIELDS</p>
                        </form>
                    </div>
                </Container>
            </div>
        );
    }
};

export default LoginPage