import React from 'react';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './search.module.css';
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 600,
    },
  },
}));

export default function BasicTextFields({ onHandleSubmit }) {
  const classes = useStyles();
  return (
    <div className={styles.container}>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onHandleSubmit}
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    </div>
  );
}
