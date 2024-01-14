import React from "react";

//Image
import ProfileImage from "../../images/eu.jpeg"

//Styles
import { Wrapper, Content, Text, Image } from "./Aboutme.styles.js";

const Aboutme = () => (

  <Wrapper>
    <Content>
      <Text>
        <Image src={ProfileImage} ></Image>
        <h1>   Olteanu Teodora </h1>
        <h3>Software Developer</h3>
      </Text>

    </Content>

    <Content>
      <Text>
        <h2>Experience</h2>
        <h3>DevOps Engineer</h3>
        <p>Nov 2022 - present</p>
        <p>P3 Digital Services</p>
      </Text>
    </Content>

    <Content>
      <Text>
        <h2>Education</h2>

        <h3>Master's Degree - SIA department in german language</h3>
        <p>Oct 2022 - present</p>
        <p>Babes Bolyai University</p>
      </Text>
      <Text>
        <h3>Bachelor's Degree, department of Informatics in german language</h3>
        <p>Babes Bolyai University</p>
        <p>Oct 2019 - Jul 2022</p>
      </Text>
    </Content>
  </Wrapper>

);

export default Aboutme;