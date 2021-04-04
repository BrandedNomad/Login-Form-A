import React from 'react';
import {BoxContainer, FormContainer, Input, MutedLink, SubmitButton, BoldLink} from "./common";
import Marginer from "../Marginer/Marginer";
function LoginForm(props){
    return (
        <BoxContainer>
            <FormContainer>
                <Input type='text' placeholder='Full Name'/>
                <Input type='email' placeholder='Email'/>
                <Input type='password' placeholder='Password'/>
                <Input type='password' placeholder='Confirm Password'/>
                <Marginer height={20}/>
                <MutedLink href='#'>Forget your password?</MutedLink>
                <Marginer height={20}/>
                <SubmitButton type='submit'>Signup</SubmitButton>
                <Marginer height={20}/>
                <MutedLink href='#'>Already have an account? <BoldLink href='#'>Signin</BoldLink></MutedLink>
            </FormContainer>
        </BoxContainer>
    )
}

export default LoginForm;
