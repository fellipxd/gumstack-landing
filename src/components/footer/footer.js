import React from 'react';
import apple from '../../assets/apple.png'
import google from '../../assets/google.png'
import icons from '../../assets/icons.png'
import { Bottom, Top, Wrapper } from './styled';
export const Footer = () => {
  return <Wrapper>
      <Top>
          <div className="card">
              <h4>Use cases</h4>
              <p>Retail</p>
              <p>E-Commerce</p>
              <p>SaaS</p>
          </div>


          <div className="card">
              <h4>Integrations</h4>
              <p>Shopify</p>
              <p>Google Tag Manager</p>
          </div>
          
          <div className="card">
              <h4>Compare</h4>
              <p>Vs Whatsapp</p>
              <p>Vs Facetime</p>
          </div>


          <div className="card">
              <h4>Support</h4>
              <p>Talk to us on Gumstack</p>
              <p>Chat with us</p>
          </div>

          <div className="card">
              <h4>Resources</h4>
              <p>Developer API</p>
              <p>Download Agent apps</p>
              <div className="images">
                    <img src={apple} alt='apple app store'/>
                    <img src={google} alt='google play store'/>
              </div>
          </div>
      </Top>
      <Bottom>
          <div>
          <img src={icons} alt='social icons'/>
          </div>

          <p className='copy'> &copy; Copyright Gumstack Inc. 2020- All rights reserved</p>

          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <span> &copy; Copyright Gumstack Inc. 2020- All rights reserved</span>
      </Bottom>
  </Wrapper>;
};
