import React from 'react';
import { Container } from 'reactstrap';
import { signInWithGoogle, auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            newEmail: '',
            newPassword: '',
            confirmPassword: '',
            newFirstName: '',
            newLastName: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const { value, name } = event.target;
        // console.log([name])
        this.setState({ [name]: value }); // @Note: need [] otehrwise a new state 'name' is created
    };

    render() {
        return (
            <div className='loginpage-container' style={{ marginTop: '5rem' }}>
                <Container>
                    <div className='login-wrapper'>
                        <h1>LOGIN</h1>
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor='email'>EMAIL</label>
                            <input type='email' id='email' value={this.state.email} name='email' onChange={this.handleChange} />
                            <label htmlFor='password'>PASSWORD</label>
                            <input autoComplete="off" type='password' id='password' value={this.state.password} name='password' onChange={this.handleChange} />
                            <button className='button' type='button submit'>SIGN IN</button>
                        </form>
                        <button className='button google-btn' onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
                    </div>
                    <div className='register-wrapper'>
                        <h1>CREATE AN ACCOUNT</h1>
                        <p>Registering makes checkout fast and easy and saves your order information in your account.</p>
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor='firstName'>FIRST NAME</label>
                            <input type='text' id='firstName' value={this.state.newFirstName} name='newFirstName' onChange={this.handleChange} />

                            <label htmlFor='lastName'>LAST NAME</label>
                            <input type='text' id='lastName' value={this.state.newLastName} name='newLastName' onChange={this.handleChange} />

                            <label htmlFor='newEmail'>EMAIL*</label>
                            <input type='email' id='newEmail' value={this.state.newEmail} name='newEmail' onChange={this.handleChange} />

                            <label htmlFor='newPassword'>PASSWORD*</label>
                            <input autoComplete="off" ype='password' id='newPassword' value={this.state.newPassword} name='newPassword' onChange={this.handleChange} />

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

export default Login;