import React from 'react';
import {BoxContainer, FormContainer, Input, MutedLink, SubmitButton} from "./common";

function LoginForm(props){
    return (
        <BoxContainer>
            <FormContainer>
                <Input type='email' placeholder='Email'/>
                <Input type='email' placeholder='Password'/>
                <MutedLink href='#'>Forget your password?</MutedLink>
                <SubmitButton type='submit'>Signin</SubmitButton>
            </FormContainer>
        </BoxContainer>
    )
}

export default LoginForm;
