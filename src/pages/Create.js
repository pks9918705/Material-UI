import React from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const useStyles = makeStyles({
    btn: {
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        // '&:hover': {
        //     backgroundColor: 'grey',
        //     fontSize: 60
        // }

    },
});

//creating the context
const theme = createTheme({
    palette: {
        //aftter this code the primary color is not blue
        primary: {
            main: '#ce93d8',
        },
        secondary: purple
    },
});

export default function Create() {

    const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
            <div>

                <h1>Create</h1>
                <Button
                    color="primary"
                    variant='contained'
                    className={classes.btn}
                >
                    Primary
                </Button>
                <Typography

                    color="secondary"
                    variant="h5"
                    component="h6">
                    h1. Heading
                </Typography>


            </div>
        </ThemeProvider>

    )
}
