import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// import { WishContext } from "../context/wishContext";
import { hocConsumer } from "../HOC/hocConsumer";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

//------------ without HOC

// function BasicTextFields() {
//   const classes = useStyles();

//   return (
//     <WishContext.Consumer>
//       {({ addWish }) => {
//         return (
//           <form
//             className={classes.root}
//             noValidate
//             autoComplete="off"
//             onSubmit={addWish}
//           >
//             <TextField
//               id="outlined-basic"
//               label="Outlined"
//               variant="outlined"
//             />
//           </form>
//         );
//       }}
//     </WishContext.Consumer>
//   );
// }

//---------- with HOC

function BasicTextFields({ addWish }) {
  const classes = useStyles();

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={addWish}
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
}

export default hocConsumer(BasicTextFields);
