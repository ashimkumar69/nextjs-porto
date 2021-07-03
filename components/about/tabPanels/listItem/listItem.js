// react
import React from "react";
// material
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: theme.typography.fontWeightMedium,
    display: "inline",
  },
}));

function CustomListItem(props) {
  const classes = useStyles();
  return (
    <ListItem disableGutters>
      <ListItemText
        disableTypography
        primary={
          <React.Fragment>
            <Typography
              variant="body1"
              component="h5"
              className={classes.title}
              color="textPrimary"
            >
              {props.title}
            </Typography>
            {props.subtitle}
          </React.Fragment>
        }
        secondary={
          <React.Fragment>
            <Typography variant="body1" component="p" color="textSecondary">
              {props.body}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
}

export default CustomListItem;
