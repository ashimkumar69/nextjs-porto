// react
import React from "react";
// next
import Image from "next/image";
import Link from "next/link";
// material
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

// import
import Rgba from "color-to-rgba";

const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
    transition: "all 500ms ease-in-out",
    cursor: "grab",

    "&:hover": {
      transform: "translateY(-10px)",
      "& $header": {
        transform: "translateY(0)",
        transition: "all 500ms ease-in-out",
      },

      "& $collapse": {
        transform: "translateY(0)",
        opacity: 1,
        transition: "all 500ms ease-in-out 20ms",
      },

      "& $image": {
        transform: "scale(1.1)",
      },
      "& $overlay": {
        background: `linear-gradient(180deg,${Rgba(
          theme.palette.common.black,
          0.5
        )},${theme.palette.primary.main})`,
        opacity: 1,
      },
    },
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },

  cardActions: {
    padding: 0,
    justifyContent: "center",
  },
  image: {
    transition: "all 500ms linear",
  },
  collapse: {
    opacity: 0,
    transform: "translateY(100px)",
    transition: "all 500ms ease-in-out",
  },

  header: {
    transform: "translateY(100px)",
    transition: "all 500ms ease-in-out 20ms",
  },
  subtitle: {
    color:
      theme.palette.type === "light" && Rgba(theme.palette.common.white, 0.7),
    display: "block",
    marginBottom: theme.spacing(0.5),
  },
  title: {
    color: theme.palette.type === "light" && theme.palette.common.white,
    marginBottom: theme.spacing(2),
  },
  body: {
    color:
      theme.palette.type === "light" && Rgba(theme.palette.common.white, 0.7),
    marginBottom: theme.spacing(2),
  },
}));

function ProjectsCard(props) {
  const classes = useStyles();

  return (
    <Card elevation={0} className={classes.card}>
      <CardMedia>
        <Image
          src={props.image}
          alt="hero banner image"
          width={400}
          height={500}
          layout="responsive"
          className={classes.image}
        />
      </CardMedia>
      <Box className={classes.overlay} display="flex" alignItems="flex-end">
        <Box flexGrow={1}>
          <CardContent>
            <Box className={classes.header}>
              <Typography
                variant="subtitle1"
                component="span"
                align="center"
                color="textSecondary"
                className={classes.subtitle}
              >
                {props.subtitle}
              </Typography>
              <Typography
                variant="h5"
                component="h5"
                align="center"
                color="textPrimary"
                className={classes.title}
              >
                {props.title}
              </Typography>
            </Box>

            <Box className={classes.collapse}>
              <Typography
                variant="body1"
                component="p"
                align="center"
                color="textSecondary"
                className={classes.body}
              >
                {props.body}
              </Typography>
              <CardActions
                disableSpacing
                className={classes.cardActions}
                timeout="auto"
              >
                <Link href={props.path}>
                  <Button
                    component="a"
                    size="small"
                    variant="contained"
                    color="primary"
                    disableElevation
                  >
                    View More
                  </Button>
                </Link>
              </CardActions>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </Card>
  );
}

export default ProjectsCard;
