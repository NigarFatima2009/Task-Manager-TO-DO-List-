import React, { useState, useContext } from "react";
import * as S from "./styles";
import Logo from "../../Img/Logo.png";
import { Link } from "react-router-dom";
import AuthContext, { AuthType } from "../../Contexts/authContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login: React.FC = () => {
    const { setUserData } = useContext(AuthContext) as AuthType;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    function handleLogin() {
        localStorage.setItem('@Project:email', email);
        setUserData({ email });
    }

    function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    function togglePasswordVisibility() {
        setShowPassword(!showPassword);
    }

    return (
        <S.Page>
            <S.LeftSide>
                <S.Img src={Logo} />
            </S.LeftSide>
            <S.RightSide>
                <S.Title>Welcome to Task Manager (To-Do List)</S.Title>
                <S.FieldName>Email</S.FieldName>
                <S.InputField
                    value={email}
                    id="email"
                    onChange={handleEmail}
                    placeholder="Insert your email"
                />
                <S.FieldName>Password</S.FieldName>
                <S.PasswordFieldWrapper>
                    <S.PasswordInputField
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={handlePassword}
                        placeholder="Insert your password"
                    />
                    <S.VisibilityToggle onClick={togglePasswordVisibility}>
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </S.VisibilityToggle>
                </S.PasswordFieldWrapper>
                <S.KeepSigned>
                    <S.Checkbox />
                    <S.Subtitle>Remember me</S.Subtitle>
                </S.KeepSigned>
                <Link to="/">
                    <S.SignIn onClick={handleLogin}>Sign In</S.SignIn>
                </Link>
                <S.Subtitle>
                    Don't have an account? <a href="/signup">Sign Up</a>
                </S.Subtitle>
            </S.RightSide>
        </S.Page>
    );
};

export default Login;
