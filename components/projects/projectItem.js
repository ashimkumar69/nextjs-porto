// react
import React from "react";
// next
import Image from "next/image";
import { useRouter } from "next/router";
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

    "& .textPrimary": {
      color: Rgba(theme.palette.common.white, 0.87),
    },
    "& .textSecondary": {
      color:
        theme.palette.type === "dark"
          ? Rgba(theme.palette.common.white, 0.7)
          : Rgba(theme.palette.common.white, 0.54),
    },
    "& .image": {
      transition: "all 500ms linear",
    },
    "& .heading": {
      transform: "translateY(100px)",
      transition: "all 500ms ease-in-out 20ms",
    },
    "& .collapse": {
      opacity: 0,
      transform: "translateY(100px)",
      transition: "all 500ms ease-in-out",
    },

    "&:hover": {
      transform: "translateY(-10px)",
      "& .heading": {
        transform: "translateY(0)",
        transition: "all 500ms ease-in-out",
      },

      "& .collapse": {
        transform: "translateY(0)",
        opacity: 1,
        transition: "all 500ms ease-in-out 20ms",
      },

      "& .image": {
        transform: "scale(1.1)",
      },
      "& .overlay": {
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
}));

function ProjectsCard(props) {
  const router = useRouter();
  const classes = useStyles();

  return (
    <Card elevation={0} className={classes.card}>
      <CardMedia>
        <Image
          src="/images/projects/1.jpg"
          alt="hero banner image"
          width={400}
          height={500}
          layout="responsive"
          className={` image`}
        />
      </CardMedia>
      <Box
        className={`${classes.overlay} overlay`}
        display="flex"
        alignItems="flex-end"
      >
        <Box flexGrow={1}>
          <CardContent>
            <Box className="heading">
              <Typography component="div" align="center">
                <Box
                  fontSize="body2.fontSize"
                  fontWeight="fontWeightNormal"
                  lineHeight={1.25}
                  component="span"
                  className="textSecondary"
                  display="block"
                >
                  Photoshop
                </Box>
                <Box
                  my={2}
                  fontSize="h6.fontSize"
                  fontWeight="fontWeightMedium"
                  lineHeight={1.25}
                  component="h2"
                  className="textPrimary"
                >
                  Photoshop Design
                </Box>
              </Typography>
            </Box>

            <Box className={`collapse`}>
              <Typography component="div" align="center">
                <Box
                  my={2}
                  fontSize="body1.fontSize"
                  fontWeight="fontWeightNormal"
                  lineHeight={1.25}
                  component="p"
                  className="textSecondary"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                  deleniti distinctio sit eum nesciunt dolor.
                </Box>
              </Typography>
              <CardActions
                disableSpacing
                className={classes.cardActions}
                timeout="auto"
              >
                <Link href="/login">
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
