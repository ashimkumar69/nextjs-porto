// react
import React from "react";

// next
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
// meterial
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
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

const StyledCardHeader = withStyles({
  root: {
    padding: "16px 16px 0 16px",
  },
})(CardHeader);

const useStyles = makeStyles((theme) => ({
  card: {
    cursor: "grab",
    "&:hover": {
      "& .chip": {
        transform: "translateX(0)",
        transition: "all 500ms ease-in-out",
        opacity: 1,
      },
    },
    "& .chip": {
      opacity: 0,
      transform: "translateX(-120px)",
      transition: "all 500ms ease-in-out",
    },
  },
  image: {
    position: "relative",
    "& .overlay": {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
  },

  //
}));

function News() {
  const router = useRouter();
  const classes = useStyles();

  return (
    <Card elevation={0} className={classes.card}>
      <Box className={classes.image}>
        <Image
          src="/images/news/1.jpg"
          width={300}
          height={200}
          layout="responsive"
          alt="avatar"
        />
        <Box className="overlay" display="flex" alignItems="flex-end">
          <Box flexGrow={1} p={1}>
            <Chip
              className="chip"
              color="primary"
              label="2 oct 2021"
              icon={<CalendarTodayIcon />}
            />
          </Box>
        </Box>
      </Box>
      <StyledCardHeader
        avatar={
          <Avatar aria-label="avatar">
            <Image
              src="/images/testimonials/1.jpg"
              width={50}
              height={50}
              alt="avatar"
            />
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="CEO Math Private Ltd."
      />
      <CardContent>
        <Typography component="div">
          <Box
            mb={1}
            mt={0}
            fontSize="subtitle1.fontSize"
            color="text.primary"
            fontWeight="fontWeightMedium"
            component="h2"
          >
            This impressive paella is a perfect party dish
          </Box>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions>
        <Link href="/login">
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
