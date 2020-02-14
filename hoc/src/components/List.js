import React from "react";
import { hocConsumer } from "../HOC/hocConsumer";
// import { WishContext } from "../context/wishContext";

//------------ without HOC

// export const List = () => (
//   <WishContext.Consumer>
//     {({ data, delWish }) => (
//       <ul>
//         {data.map(({ wish, id }) => (
//           <li key={id}>
//             <h2>{wish}</h2>
//             <button onClick={() => delWish(id)}>delete</button>
//           </li>
//         ))}
//       </ul>
//     )}
//   </WishContext.Consumer>
// );

//------------ with HOC

const List = ({ data, delWish }) => (
  <ul>
    {data.map(({ wish, id }) => (
      <li key={id}>
        <h2>{wish}</h2>
        <button onClick={() => delWish(id)}>delete</button>
      </li>
    ))}
  </ul>
);

export default hocConsumer(List);
