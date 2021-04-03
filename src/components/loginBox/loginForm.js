import React from 'react';
import {BoxContainer, FormContainer, Input, MutedLink, SubmitButton} from "./common";
import Marginer from "../Marginer/Marginer";
function LoginForm(props){
    return (
        <BoxContainer>
            <FormContainer>
                <Input type='email' placeholder='Email'/>
                <Input type='email' placeholder='Password'/>
                <Marginer height={20}/>
                <MutedLink href='#'>Forget your password?</MutedLink>
                <Marginer height={20}/>
                <SubmitButton type='submit'>Signin</SubmitButton>
            </FormContainer>
        </BoxContainer>
    )
}

export default LoginForm;
