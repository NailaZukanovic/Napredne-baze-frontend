import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { pizzaRed } from "../Styles/colors";
import { Title } from "../Styles/title";
import { Navbar } from "../Navbar/Navbar";
import { UserToken, UsersData } from "../Data/UserData";

const Login = ({ loginInputs, onChange }) => {
    return (
        <div>
            EMAIL:
            <input
                id="loginEmail"
                name="email"
                type="text"
                value={loginInputs.email}
                onChange={onChange}
            />
            <br />
            PW:
            <input
                id="loginPW"
                name="password"
                type="text"
                value={loginInputs.password}
                onChange={onChange}
            />
            <br></br>
        </div>
    );
}

export function UserAuth () {
    const [message, setMessage] = useState('');    
    const [isRegister, setIsRegister] = useState(true);
    const [registerInputs, setRegisterInputs] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        jmbg: "",
        phoneNumbers: "",
        email: "",
        address: ""
    })

    const [loginInputs, setLoginInputs] = useState({
        email: '',
        password: ''
    })

    function handleRegisterInputChange(e){
        const value = e.target.value;
        setRegisterInputs({
            ...registerInputs,
            [e.target.name]: value
        })
        console.log("reginpouts: ", registerInputs)
    }

    function handleLoginInputChange(e){
        const value = e.target.value;
        setLoginInputs({
            ...loginInputs,
            [e.target.name]: value
        })
        console.log("loginputs: ", loginInputs)
    }


    const login = () => {
        // post method saljes apiju vracas status

        // privremeno
        let foundUser = UsersData.find(({email, password}) => (email == loginInputs.email) && (password == loginInputs.password));

        if(!foundUser) {
            setMessage('Email ili šifra nisu tačni!')
        }
    } // gledaj

    const register = () => {
        // post methoda registracije

        if (
            registerInputs.username &&
            registerInputs.emails &&
            registerInputs.password &&
            registerInputs.phoneNumbers
        ) {
            UsersData.push(registerInputs);
        } else {
            setMessage('Potrebno je uneti sva polja')
        }
        
    }

    const Register = () => {
        return (
            <div>
                <input name="email" type="text" value={ registerInputs.email } onChange={handleRegisterInputChange} />
                <br></br>
                <input name="password" type="password" value={ registerInputs.password } onChange={handleRegisterInputChange} />
                <br></br>
                <button onClick={() => register()} > Registruj se </button>
            </div> 
        );
    }

    const Message = () => {
        return (
            <div>
                {message}
            </div>
        );
    }

    return (
        <>         
            {message && <Message />}
            {isRegister ? <Register /> : <Login loginInputs={loginInputs} onChange={(e) => handleLoginInputChange(e)} />}
            <button 
                onClick={() => {
                    setIsRegister(true)
                }}
            >Registracija</button>
            <button 
                onClick={() => {
                    setIsRegister(false)
                }}
            >Login</button>
        </>
    );
}