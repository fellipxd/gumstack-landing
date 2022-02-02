import React from "react";
import bg from "../../assets/meet.png";
import bg2 from "../../assets/meet2.png";
import { Button1 } from "../buttons/Button";
import { Wrapper } from "./styled";
export const Meet = () => {
//   const [offset, setOffset] = useState(0);
//   const handleScroll = () => {
//     setOffset(window.pageYOffset);
//   }
//   useEffect(() => {
   

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
  return (
    <Wrapper>
     <img src={bg} className='bg1' alt='background'/>
     <img src={bg2} className='bg2' alt='background'/>
     <div className='text-wrapper'>
         <h2>
             Ready to meet your customers face to face?
         </h2>
         <Button1>Start a free trial</Button1>
     </div>
    </Wrapper>
  );
};
