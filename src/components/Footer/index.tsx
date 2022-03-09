import { Container } from "../Container";
import { Text } from "../Text";
import { isMobile } from 'react-device-detect';

export function Footer() {
    return (
        <Container
            background={`linear-gradient(to right, #fdfbfb 0%, #ebedee 100%)`}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-around"
            height={isMobile ? "400px" : "150px"}
            padding="1rem"
        >
            <Text value="Preços e condições exclusivos para o site www.hibrido-store.com.br, podendo sofrer alterações sem prévia notificação." />
            <Text value="Hibrido Store / www.hibrido-store.com.br / Rua Um, n° 1 / fortaleza - CE - CEP: 01236-010 / CNPJ: 11.000.222/0000-01 / Inscrição Estadual: 000.111.222.333 / Telefone: 4000-8888 / Nossas filiais / Lojas Físicas" />
        </Container>
    );
}
