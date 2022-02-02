import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-bottom: 4rem;
   background: linear-gradient(360deg, rgba(52, 39, 85, 0.59) 0%, #231741 100%),
    linear-gradient(0deg, #231741, #231741);

  @media screen and (max-width: 978px) {
    flex-direction: column;
  }
  @media screen and (max-width:550px){
    height: max-content;
  }
    }
`;

export const Left = styled.div`
  flex: 1;
  padding: 3rem;

  h1 {
    color: #fff;
    font-size: 56px;
  }

  h2 {
    color: #ffa339;
    font-size: 24px;
  }
  p {
    color: #e6dcff;
    font-size: 16px;
  }

  .hero-content {
    width: 60%;
    margin: auto;
  }

  button {
    background: #ff3d6b;
    color: #fff;
    font-size: 16px;
    border-radius: 4px;
    border: none;
    padding: 15px 60px;
  }

  @media screen and (max-width: 978px) {
    width: 100%;

    .hero-content {
      width: 90%;
    }
  }
  @media screen and (max-width: 550px) {
    padding: 0;
    text-align: center;
    h1 {
      font-size: 32px;
    }

    button {
      font-size: 14px;
      padding: 0 10px;
      margin: auto;
      height: 40px;
    }
  }
  @media screen and (max-width: 400px) {
    h1 {
      font-size: 25px;
    }
    h2 {
      font-size: 18px;
    }
    p {
      font-size: 15px;
    }
  }
`;
export const Right = styled.div`
  flex: 0.7;

  img {
    display: block;
    margin: 20px auto;
  }

  @media screen and (max-width: 978px) {
    width: 100%;
  }

  @media screen and (max-width: 550px) {
    img {
      height: 100%;
      width: 100%;
    }
  }
`;
