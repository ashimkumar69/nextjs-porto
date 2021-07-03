// react
import React from "react";

// material
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// import
import Rgba from "color-to-rgba";

const useStyles = makeStyles((theme) => ({
  card: {
    transition: "all 300ms ease-in-out",
    cursor: "grab",
    "&:hover": {
      transform: "scale(1.04)",
      backgroundColor: theme.palette.primary.main,
      "& $iconBox": {
        backgroundColor: Rgba(theme.palette.common.black, 0.1),
      },
      "& .icon": {
        color: theme.palette.common.white,
      },
      "& $title": {
        color: theme.palette.type === "light" && theme.palette.common.white,
      },
      "& $body": {
        color:
          theme.palette.type === "light" &&
          Rgba(theme.palette.common.white, 0.7),
      },
    },
  },
  iconBox: {
    backgroundColor: theme.palette.background.default,
  },
  title: {
    marginBottom: theme.spacing(2),
    textTransform: "capitalize",
  },
  body: {
    //need this
  },
}));

export default function ServicesCard(props) {
  const classes = useStyles();

  return (
    <Card elevation={0} className={classes.card}>
      <Box display="flex" justifyContent="center" alignItems="center" pt={2}>
        <Box
          borderRadius="50%"
          p={4}
          component="span"
          className={classes.iconBox}
        >
          {props.icon}
        </Box>
      </Box>

      <CardContent>
        <Typography
          variant="h5"
          component="h5"
          className={classes.title}
          align="center"
          color="textPrimary"
        >
          {props.title}
        </Typography>
        <Typography
          variant="body1"
          component="p"
          className={classes.body}
          align="center"
          color="textSecondary"
        >
          {props.body}
        </Typography>
      </CardContent>
    </Card>
  );
}
