import React from 'react';
import styled from "styled-components";





 const Button = styled.button`
cursor: pointer;
border: none;

height: 60px;
left: 0px;
top: 258px;
border-radius: 4px;
padding: 20px;
color: #fff;
font-size: 16px;
background: #ff3d6b;
font-style: normal;
line-height: 20px;
letter-spacing: 0em;
display: flex;
align-items: center;
justify-content: center;

.primary{
    background: #ff3d6b;
}
.secondary{
    background: #5F6FBF;


}
&:after {
  content: "→";
  margin-left: 10px;
}
&:hover:after {
  -webkit-animation: bounceright 1s alternate ease infinite;
  animation: bounceright 1s alternate ease infinite;
}

@keyframes bounceright {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(15px);
  }
}
`;


export const Button2 = styled(Button)`
 background: #5F6FBF;
`
export const Button1 = ({ children, ...props}) => {
  return <Button {...props}>
        {children}
  </Button>;
};
