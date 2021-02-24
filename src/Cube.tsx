import React from "react";

import { makeStyles } from "@material-ui/core";

interface ComponentProps {
}

const useStyles = makeStyles({
    root: {
        transformStyle: "preserve-3d",
        perspective: 600
    }
});

let Cube: React.FC<ComponentProps> = () => {
    const classes = useStyles();

    return <div className={classes.root}>
        <div
            style={{

            }}
        ></div>
    </div>;
};

export default Cube;