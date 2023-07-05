import React, {useState} from 'react';
import styled from '@emotion/styled';
import { InputContainer, InputLabel, TextInputEmail, ActionBtn } from '../components/forms';

// actions
import { actionRegister } from '../api';

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

const Registration = () => {
    const [email, setEmail] = useState('');

    const onHandleSubmit = event => {
        event.preventDefault();
        actionRegister(email);
    }
    return (
        <MainContainer>
            <h1>REGISTRATION</h1>
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
                <ActionBtn type="submit">Register</ActionBtn>
                <ActionBtn onClick={() => window.location.href = '/'}>Cancel</ActionBtn>
            </form>
        </MainContainer>
    )
}

export default Registration;
