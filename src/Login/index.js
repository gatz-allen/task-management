import React, {useState} from 'react';
import styled from '@emotion/styled';
import { InputContainer, InputLabel, TextInputEmail, ActionBtn } from '../components/forms';
import { Link } from 'react-router-dom';

// actions
import { actionLogin } from '../api';

const MainContainer = styled('div')({
    display: 'flex',
    borderRadius: '15px',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '200px auto 0',
    border:'1px solid #ccc',
    height: 200,
    width: 300,
    paddingBottom: 20,
    textAlign: 'center'
});

const Login = () => {
    const [email, setEmail] = useState('');
    const onHandleSubmit = event => {
        event.preventDefault();
        actionLogin(email);
    }
    return(
        <MainContainer>
            <h1>TMS Login Page</h1>
            <form onSubmit={onHandleSubmit}>
                <InputContainer>
                    <InputLabel>Email: </InputLabel>
                    <TextInputEmail
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </InputContainer>
                <ActionBtn type="submit">LOGIN</ActionBtn>
            </form>
            <ActionBtn>
                <Link to="/register">REGISTER</Link>
            </ActionBtn>
        </MainContainer>
    );
}

export default Login;