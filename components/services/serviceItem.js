// react
import React from "react";

// material
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import BusinessIcon from "@material-ui/icons/Business";

// import
import Rgba from "color-to-rgba";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.default,
  },
  card: {
    transition: "all 300ms ease-in-out",
    cursor: "grab",
    "& .textPrimary": {
      textTransform: "capitalize",
    },
    "&:hover": {
      transform: "scale(1.04)",
      backgroundColor: theme.palette.primary.main,
      "& .iconBackground": {
        backgroundColor: Rgba(theme.palette.common.black, 0.1),
      },
      "& .icon": {
        color: theme.palette.common.white,
      },
      "& .textPrimary": {
        color: Rgba(theme.palette.common.white, 0.87),
      },
      "& .textSecondary": {
        color:
          theme.palette.type === "dark"
            ? Rgba(theme.palette.common.white, 0.7)
            : Rgba(theme.palette.common.white, 0.54),
      },
    },
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
          className={`${classes.paper} iconBackground`}
        >
          <BusinessIcon className="icon" />
        </Box>
      </Box>

      <CardContent>
        <Typography component="div">
          <Box
            my={1}
            textAlign="center"
            fontSize="h5.fontSize"
            fontWeight="fontWeightMedium"
            lineHeight={1}
            component="h2"
            color="text.primary"
            height={24}
            className="textPrimary"
          >
            {props.title}
          </Box>
        </Typography>
        <Typography component="div">
          <Box
            my={0}
            textAlign="center"
            fontSize="body2.fontSize"
            fontWeight="fontWeightRegular"
            lineHeight={1.5}
            component="p"
            color="text.secondary"
            height={84}
            className="textSecondary"
          >
            {props.body}
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
}
