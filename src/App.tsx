import React from "react";

import { createMuiTheme, CssBaseline, Grid, makeStyles, ThemeProvider, Typography } from "@material-ui/core";

interface ComponentProps {
}

const theme = createMuiTheme({
    palette: {
        type: "dark"
    }
});

const useStyles = makeStyles({
    title: {
        paddingTop: 15,
        font: "bold 3rem Fauna-Thin",
        color: "#fffdfe",
        letterSpacing: 1.2,
        textShadow: "cyan 0 2px 25px"
    }
});

let App: React.FC<ComponentProps> = () => {
    const classes = useStyles();

    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container direction="column" justify="space-between" alignContent="center" style={{ height: "100vh" }}>
            <Typography className={classes.title} align="center" variant="h1">DIMAKA.LOVE</Typography>
            <Typography
                align="center"
                color="textSecondary"
                variant="h4"
                style={{
                    marginTop: -25,
                    fontStyle: "italic"
                }}
            >coming soon</Typography>
            <div />
        </Grid>
    </ThemeProvider>;
};

export default App;
