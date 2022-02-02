import React from "react";
import ellipse from "../../assets/ellipse.png";
import stars from '../../assets/stars.svg'
import { Bottom, Head, Mid, Wrapper } from "./styled";
export const Company = () => {
  return (
    <Wrapper>
      <Head>
        <h2>You are in good company</h2>
        <p>
          Gumstack allows your customers to call you directly from your online
          store, and get them to video shop with the help of your agents
        </p>
      </Head>
      <Mid>
        <img src={ellipse} alt="logo" />
        <span>Sameen Eajaz</span>
        <p>COO, Co-Founder, Koskii</p>
        <img src={stars} alt='stars'/>
      </Mid>
      <Bottom>
        <p>
          “The app is exactly what we were looking for and has helped us add
          another sales channel very quickly giving our customers a discovery
          platform to explore high asp products”
        </p>
      </Bottom>
    </Wrapper>
  );
};
