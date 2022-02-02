import React from "react";
import vector from "../../assets/vector.svg";
import { Button2 } from "../buttons/Button";
import wix from "../../assets/wix.png";
import { Left, Right, Wrapper } from "./styled";
export const Integrate = () => {
  return (
    <Wrapper>
      <Left>
        <h2>Integrate in under 5 mins</h2>
        <div className="integrate_img">
          <img src={wix} alt="integrate with" />
        </div>
        <div>
          <p>
            <img src={vector} alt="bullet" /> Integrate using Google Tag
            Manager, or add a few lines of script to your website.
          </p>
          <p>
            <img src={vector} alt="bullet" />
            1-click installations for Shopify, Wordpress, Wix.
          </p>
          <p>
            <img src={vector} alt="bullet" />
            Install easily on Webflow, Squarespace and more.
          </p>
        </div>
        <div className="btn_wrapper">
          <Button2 className="btn">Talk to our developer</Button2>
          <span>Powered by Gumstack</span>
        </div>
      </Left>

      <Right>
        <div>
          <img src={wix} alt="integrate with" />
        </div>
      </Right>
    </Wrapper>
  );
};
