import React from "react";
import { Left, Right, Wrapper} from "./heroStyled";
import play from '../../assets/play.png'
import {  Button1  } from "../buttons/Button";
export const Hero = () => {
  return (
    <Wrapper> 
      <Left>
    
       <div className="hero-content">
       <h1> Meet your customers face-to-face</h1>
        <h2>Instantly on your website/app</h2>
        <p>
          Integrate video calling on your website/app in under 5 minutes.
          Showcase your products, assist them with their purchase or help
          resolve issues faster with video.
        </p>

        <Button1>Register for a demo</Button1>
      
       </div>  
      </Left>

      <Right>
          <img src={play} alt='play'/>
      </Right>
    </Wrapper>
  );
};
