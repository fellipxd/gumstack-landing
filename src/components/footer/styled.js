import styled from "styled-components";

export const Wrapper = styled.div`
    p{
        color: #666666;
    }

`;
export const Top = styled.div`
  display: flex;
  width: 95%;
  margin: auto;

  .card {
    flex: 1;
  }

  .images {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  img {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 978px) {
    flex-direction: column;

    .card {
      border-bottom: 1px solid black;
      padding: 5px 20px;
    }
    .images {
      display: flex;
      flex-direction: column;
      width: 35%;
    }
    img {
      margin-bottom: 10px;
    }
  }
`;

export const Bottom = styled.div`
    height: 70px;
    padding: 0 30px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    
    .copy{
        display: inline-flex;
    }
    span{
        display: none;
    }

    @media screen and (max-width: 978px) {
        flex-direction: column;
        align-items: flex-start;
        margin-top:20px;

        .copy{
        display: none;
    }
    span{
        display: inline-flex;
        color: #A3A3A3;

    }

       
    }
`
