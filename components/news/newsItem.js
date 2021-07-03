// react
import React from "react";

// next
import Image from "next/image";
import Link from "next/link";
// meterial
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

const StyledCardHeader = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 2, 1, 2),
  },
}))(CardHeader);

const useStyles = makeStyles((theme) => ({
  card: {
    transition: "all 500ms ease-in-out",
    cursor: "grab",
    "&:hover": {
      transform: "translateY(-10px)",
      "& $chip": {
        transform: "translateX(0)",
        transition: "all 500ms ease-in-out",
        opacity: 1,
      },
      "& $image": {
        transform: "scale(1.1)",
      },
    },
  },
  chip: {
    opacity: 0,
    transform: "translateX(-120px)",
    transition: "all 500ms ease-in-out",
  },
  imageBox: {
    position: "relative",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  image: {
    transition: "all 500ms ease-in-out",
  },
  title: {
    marginBottom: theme.spacing(1),
  },
}));

function News(props) {
  const classes = useStyles();

  return (
    <Card elevation={0} className={classes.card}>
      <Box className={classes.imageBox}>
        <Image
          src={props.image}
          width={300}
          height={200}
          layout="responsive"
          alt="avatar"
          className={classes.image}
        />
        <Box className={classes.overlay} display="flex" alignItems="flex-end">
          <Box flexGrow={1} p={1}>
            <Chip
              className={classes.chip}
              color="primary"
              label={props.date}
              icon={<CalendarTodayIcon fontSize="small" />}
            />
          </Box>
        </Box>
      </Box>
      <StyledCardHeader
        avatar={
          <Avatar aria-label="avatar">
            <Image
              src={props.headeravatar}
              width={50}
              height={50}
              alt="avatar"
            />
          </Avatar>
        }
        title={props.headertitle}
        subheader={props.headersubtitle}
      />
      <CardContent>
        <Typography
          variant="h5"
          component="h5"
          color="textPrimary"
          className={classes.title}
        >
          {props.title}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {props.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={props.path}>
          <Button
            component="a"
            variant="outlined"
            size="small"
            color="primary"
            disableElevation
          >
            View More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default News;
