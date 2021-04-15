import React, { useEffect, useState } from 'react';
import {
  Grid,
  Paper,
  TextField,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import checkNumber from './functions'


//I used the css style of Material ui because i like to be able to have it in the same file, and it makes changes easy
const styles = theme => ({
  root: {
    backgroundColor: 'white',
    position: 'fixed',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0px'
  },

  mainGrid: {
    display: 'flex',
    alignContent: 'center'
  },

  component: {
    height: '50px',
    width: '300px'
  },

  componentGrid: {
    margin: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

});


function App(props) {

  const { classes } = props

  const [value, setValue] = useState('')

  const isPrime = checkNumber(value)

  //The layoyt was made using basically material ui alone https://material-ui.com/
  return (
    <Paper className={classes.root} elevation={3}>
      <Grid
        className={classes.mainGrid}
        direction="column"
        spacing={10}
        justify="center"
        container
      >
        <Grid
          className={classes.componentGrid}
          justify="center"
          spacing={2}
          direction="column"
          container
          item
        >
          <Grid item>
            <form noValidate>
              <TextField
                className={classes.component}
                id="outlined-basic"
                label="Informe um numero inteiro"
                type="number"
                variant="outlined"
                maxLength={8}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </form>
          </Grid>
        </Grid>
        {value && <Grid
          className={classes.componentGrid}
          justify="center"
          spacing={2}
          direction="column"
          container
          item
        >
          <Grid item>
            <div className={classes.component}>
              {isPrime ? `O numero ${value} é um número primo, ou seja, divisivel somente por ele e por 1` : `O número ${value} não é um numero primo`}
            </div>
          </Grid>
        </Grid>}
      </Grid>
    </Paper>
  );
}

export default withStyles(styles)(App);
