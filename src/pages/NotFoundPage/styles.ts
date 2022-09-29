import { NotFoundIcon } from "assets";
import styled from "styled-components";
import { Color } from "ui";

// $bgColor: #f7f7f7;
// $jaggedDistance: 32px;

// // boo
// $booSize: $jaggedDistance * 5;
// $booBg: $bgColor;
// $booShadow: darken($booBg, 5%);

// // face
// $booFaceSize: round($jaggedDistance / 1.3333);
// $booFaceColor: #9b9b9b;

// ===========

// @keyframes floating {
// 	0% {
// 		transform: translate3d(0, 0, 0);	
// 	}
// 	45% {
// 		transform: translate3d(0, -10%, 0);	
// 	}
//   55% {
// 		transform: translate3d(0, -10%, 0);	
// 	}	
// 	100% {
// 		transform: translate3d(0, 0, 0);
// 	}			
// }

// @keyframes floatingShadow {
// 	0% {
// 		transform: scale(1);	
// 	}
// 	45% {
// 		transform: scale(.85);	
// 	}
//   55% {
// 		transform: scale(.85);	
// 	}	
// 	100% {
// 		transform: scale(1);
// 	}			
// }

// // ===========

// @mixin border-bottom-jagged($size, $color-outer) {
//   position: relative;
//   padding-bottom: $size; 

//   &::after {
//     content: '';
//     display: block;
//     position: absolute;
//     left: -($size / 1.7);
//     bottom: -($jaggedDistance / 3.85);
//     width: calc(100% + #{$size});
//     height: $size;
//     background-repeat: repeat-x;
//     background-size: $size $size;
//     background-position: left bottom;
//     background-image: linear-gradient(-45deg, $color-outer ($size / 2), transparent 0),
//                       linear-gradient(45deg, $color-outer ($size / 2), transparent 0),
//                       linear-gradient(-45deg, $booFaceColor ($size / 1.7), transparent 0),
//                       linear-gradient(45deg, $booFaceColor ($size / 1.7), transparent 0);
//   }
// }

// ===========

const Container = styled.div`
  font-family: 'Varela Round', sans-serif;
  position: relative;
  height: 100vh;
  text-align: center;
`;

const BooWrapper = styled.div` 
width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  `;


const Boo = styled.div`
  width: 160px;
  height: 184px;
  background-color: ${Color.White};
  margin-left: auto;
  margin-right: auto;
  border: 53px solid ${Color.Secondary};
  border-bottom: 0;
  overflow: hidden;
  border-radius: 80px 80px 0 0;
  animation: floating 3s ease-in-out infinite;  
  
  ::before {
      left: -24px;
    }
    
    &::after {
      right: -24px;
    }
  `;

const Face = styled.div`
    width: 24px;
    height: 3px;
    border-radius: 5px;
    background-color: ${Color.Secondary};
    position: absolute;
    left: 50%;
    bottom: 56px;
    transform: translateX(-50%);
    
    &::before,
    &::after {
      content: '';
      display: block;
      width: 6px;
      height: 6px;
      background-color: ${Color.Secondary};
      border-radius: 50%;
      position: absolute;
      bottom: 40px;
    }
    `;

const Shadow = styled.div`
        width: 128px;
height: 16px;
background-color: rgba(${Color.Secondary}, .75);
margin-top: 40px;
margin-right: auto;
margin-left: auto;
border-radius: 50%;
animation: floatingShadow 3s ease -in -out infinite;
`



export { Container, BooWrapper, Boo, Face, Shadow }