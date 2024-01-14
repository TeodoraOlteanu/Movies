import React from "react";
import FooterImage from '../../images/footerImage.jpg'

//styles
import { Wrapper, Content, Image, Text } from "./Footer.styles";

const Footer = () => (

    <Wrapper>
        <Content>
            <Image src={FooterImage} alt='footer-image' />
            <Text>
                <p>2024 Olteanu Teodora</p>
            </Text>
        </Content>
    </Wrapper>


);

export default Footer;