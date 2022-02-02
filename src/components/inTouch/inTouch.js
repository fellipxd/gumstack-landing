import React from "react";
import { Header, Wrapper, Left, Right } from "./styled";
import devices from "../../assets/icon1.png";
import click from "../../assets/icon2.png";
import options from "../../assets/icon3.png";
import download from "../../assets/icon4.png";
import { Button2 } from "../buttons/Button";
import seamless from "../../assets/seamless.png";
export const InTouch = () => {
  return (
    <Wrapper>
      <Header>
        <h2>Seamless one-one conversations on your website</h2>
        <p>
          Allow your customers to call you whenever they need you. Connect them
          instantly to an agent without taking them away from your website.
        </p>
      </Header>
      <div className="list">
        <Left>
          <div className="li">
            <div className="p_c">
              <img src={devices} alt="devices" />
              <p>Works on all devices</p>
            </div>

            <div className="p_c">
              <img src={click} alt="devices" />
              <p>1-Click video calls directly from browser</p>
            </div>

            <div className="p_c">
              <img src={options} alt="devices" />
              <p>Optional video for customers</p>
            </div>

            <div className="p_c">
              <img src={download} alt="devices" />
              <p>No app downloads</p>
            </div>
            <Button2 className="btn">Get in touch</Button2>
          </div>
        </Left>
        <Right>
          <div className="img">
            <img src={seamless} alt="seamless" />
          </div>
        </Right>
      </div>
    </Wrapper>
  );
};
