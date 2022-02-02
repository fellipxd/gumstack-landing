import styled from "styled-components";

export const Wrapper = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 4rem;

  h2 {
    font-size: 32px;
  }
  img {
    z-index: -3;
    width: 100%;
  }

  .text-wrapper {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    position: absolute;
  }

  .bg2 {
    display: none;
  }

  @media screen and (max-width: 978px) {
    h2 {
      font-size: 22px;
      text-align: center;
    }
    .bg1 {
      display: none;
    }
    .bg2 {
      display: block;
    }


  }
`;
