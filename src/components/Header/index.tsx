import { Container } from "./style";
import hibridoLogo from "../../assets/logo-hibrido.svg";
import styled from "styled-components";


export function Header(){
    return (
        <Container>
            <img src={hibridoLogo} alt="Hibrido logo" />
            <div>
                <span>Home</span>
                <span>Cadastro</span>
                <span>Login</span>
            </div>
            <form>
                <input type="text" placeholder="O que você procura?"/>
            </form>
        </Container>
    )
}