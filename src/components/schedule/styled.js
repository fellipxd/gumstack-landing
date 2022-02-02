import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 15px 30px;
  margin-bottom: 4rem;
 .btn{
   width: 400px;
   margin: 15px auto;
 }

 @media screen and (max-width: 978px){
   .btn{
     width: 300px;
   }
 }
`;
export const Header = styled.div`
  text-align: center;

  h2 {
    font-size: 32px;
  }
  p {
    color: #666666;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  .left {
    width: 50%;
  }
  .right {
    width: 35%;
    margin: 50px; 
  }
  
  .left2 {
    width: 35%;
  }

  img {
    margin-right: 10px;
  }



  @media screen and (max-width: 978px){
    flex-direction: column;
    margin-bottom: 0rem;

    .left {
    width: 100%;
   
  }
  .right {
    width: 100%;
    margin-top: 30px ;
    display: inline-block; 
    horizontal-align: center;
 
  }
  .left2 {
    width: 100%;
    margin-bottom: 50px ; 

  }
  .right p, .right h3{
    width:55%;
    margin: 15px auto;
  }
  .left2 p, .left2 h3{
    width:55%;
    margin: 15px auto;
  }
  }

  @media screen and (max-width: 600px){
  .right p, .right h3{
    width:95%;
    margin: 15px auto;
  }
  .left2 p, .left2 h3{
    width:95%;
 
  }
  }
`;
export const Card = styled.div`
  height: 236px;
  width: 524px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background: #fff4e7;

  .p1 {
    width: 50%;
    text-align: center;
  }

  .p2 {
    width: 80%;
    text-align: center;
  }
  .calender {
    display: flex;
    width: 90%;
    margin: auto;
    justify-content: space-evenly;
  }
  .date {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 120px;
    width: 100px;
    border-radius: 8px;
    background: #fff;
  }



  @media screen and (max-width: 900px){
    width:100%;

    .calender {
    width: 100%;
  }

  .date {
    height: 100px;
    width: 90px;

  }
  .date p {
    font-size: 14px;

  }
  .p1 {
    width: 60%;
    text-align: center;
  }

  .p2 {
    width: 90%;
    text-align: center;
  }
  
  }

  
`;
export const Card2 = styled(Card)`
  background: #E8F4FF;


  .search{
    background: #fff;

    width: 60%;
    display: flex;
    justify-content: space-between;
  }

  input{
    background: transparent;
    height: 100%;
    width: 100%;
    border: none;
  }

  button{
    background: #000;
    color: #fff;
    border: none;
    padding: 15px 25px;
    cursor: pointer;
  }

  button:hover{
    opacity: 0.7;
  }


  @media screen and (max-width: 978px){
    
  .search{
    background: #fff;

    width: 80%;
  }
  }

  
`;
