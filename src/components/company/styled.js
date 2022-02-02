import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(0deg, #fff9fa, #fff9fa), #231741;
  mix-blend-mode: normal;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  p {
    color: #666666;
  }
`;

export const Head = styled.div`
  margin-bottom: 3rem;
  p {
    width: 80%;
    margin: auto;
  }
`;
export const Mid = styled.div`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Bottom = styled.div`
  p {
    width: 40%;
    margin: auto;
    margin-bottom: 3rem;
    font-size: 20px;
  }

  @media screen and (max-width: 978px){
    p {
    width: 80%;
  }
  }
`;
