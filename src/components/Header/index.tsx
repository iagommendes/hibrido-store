import { Container, Content } from "./style";
import hibridoLogo from "../../assets/logo-hibrido.svg";

const menuItens = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Sobre",
        link: "/about"
    },
    {
        name: "Contato",
        link: "/contact"
    }
];

export function Header(){
    return (
        <Container>
            <Content>
                <img src={hibridoLogo} alt="Hibrido logo" />
                <div>
                    {menuItens.map(item => (
                        <a href={item.link}>{item.name}</a>
                    ))}
                </div>

                <input type="text" placeholder="O que você procura?"/>

            </Content>
        </Container>
    )
}