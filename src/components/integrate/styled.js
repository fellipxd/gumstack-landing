import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;

  .btn_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    color: #666666;
    font-size: 13px;
    margin: 10px 5px;
  }

  @media screen and (max-width: 978px) {
    flex-direction: column;
  }
`;
export const Left = styled.div`
  padding: 15px;

  .integrate_img {
    height: 300px;
    width: 100%;
    display: none;
  }
  .integrate_img img {
    height: 100%;
    margin: auto;
  }
  p img {
    margin-right: 10px;
  }
  @media screen and (max-width: 978px) {
    h2 {
      text-align: center;
    }
    .integrate_img {
      display: flex;
    }
  }
`;
export const Right = styled.div`
  @media screen and (max-width: 978px) {
    display: none;
  }
`;
