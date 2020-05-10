import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class AccountPage extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            currentUser: {}
        }
    }
    componentDidMount(){

    }
    
    render(){
        // const currentUser = (this.props.currentUser.email !== null ? this.props.currentUser.email : 'a')
        console.log(this.props.currentUser)

        return (
            <div className='account-container' style={{ marginTop: '5rem' }}>
                <Container>
                    <h2>MY ACCOUNT</h2>
                    <p className='button'>LOGOUT</p>
                    <div className='main-wrapper'>
                        <Row>
                            <Col>
                                <div className='user-content'>
    
                                </div>
                            </Col>
                            <Col>
                                <div className='user-content'>
                                    <p></p>
                                    <p>{}</p>
                                    <p></p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
};

export default AccountPage;