import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 15px 30px;
  margin-bottom: 4rem;
  .list {
    display: flex;
  }
`;

export const Header = styled.div`
  text-align: center;
  h2 {
    font-size: 32px;
  }
  p {
    color: #666666;
    width: 90%;
    margin: 5px auto;
  }
`;
export const Left = styled.div`
  flex: 0.7;

  dispaly: flex;
  align-items: center;
  justify-content: center;

  .li {
    max-width: max-content;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .btn {
    width: 300px;
  }
  .list {
    width: 80%;
    margin: auto;
  }
  img {
    margin-right: 30px;
  }
  .p_c {
    display: flex;
    height: 55px;
    width: 80%;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 40px;
    width: 90%;
  }

  img {
    height: 70%;
  }
  @media screen and (max-width: 978px) {
    flex: 1;

    .li {
      max-width: 100%;
    }
  }
`;
export const Right = styled.div`
  flex: 1.2;
  diaplay: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }
  .img {
    width: 80%;
    margin: auto;
  }

  @media screen and (max-width: 978px) {
    display: none;
  }
`;
