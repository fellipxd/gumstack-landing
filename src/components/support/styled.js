import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
  span {
    color: #666666;
    font-size: 13px;
    margin: 10px 5px;
  }
`;
export const Grid = styled.div`
    display: grid;
    width: 95%;
    grid-gap: 50px;
  grid: 250px / auto auto auto auto;

  @media screen and (max-width: 978px){
      grid: 500px / auto auto ;
  }
`;
export const Card = styled.div`
   max-width: 200px;
   margin: auto;
   padding: 10px;


   @media screen and (max-width:978px){
     p{
       display: none;
     }
     &::hover p{
       display: flex;
     }
   }
  
`;
