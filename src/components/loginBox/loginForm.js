import React,{useContext} from 'react';
import {BoxContainer, FormContainer, Input, MutedLink, SubmitButton, BoldLink} from "./common";
import Marginer from "../Marginer/Marginer";
import {BoxContext} from "./Context";
function LoginForm(props){

    const {switchToSignup} = useContext(BoxContext)

    return (
        <BoxContainer>
            <FormContainer>
                <Input type='email' placeholder='Email'/>
                <Input type='password' placeholder='Password'/>
                <Marginer height={20}/>
                <MutedLink href='#'>Forget your password?</MutedLink>
                <Marginer height={20}/>
                <SubmitButton type='submit'>Signin</SubmitButton>
                <Marginer height={20}/>
                <MutedLink href='#'>Don't have an account? <BoldLink href='#' onClick={switchToSignup}>Signup</BoldLink></MutedLink>
            </FormContainer>
        </BoxContainer>
    )
}

export default LoginForm;
