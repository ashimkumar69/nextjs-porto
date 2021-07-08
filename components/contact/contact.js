// react
import React, { Fragment, useRef, useState } from "react";

// next
import Image from "next/image";
import dynamic from "next/dynamic";
// redux
import { useSelector } from "react-redux";
// material
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import Alert from "@material-ui/lab/Alert";

// import ;
import SectionsHeader from "../../components/sectionsHeader/sectionsHeader";

function SlideTransition(props) {
  return <Slide {...props} direction="left" />;
}

const HireMeButton = withStyles((theme) => ({
  root: {
    padding: theme.spacing(1.25, 5),
  },
}))(Button);

const useStyle = makeStyles((theme) => ({
  grid1: {
    order: 0,
    [theme.breakpoints.down("sm")]: {
      order: 1,
    },
  },
  grid2: {
    order: 1,
    [theme.breakpoints.down("sm")]: {
      order: 0,
    },
  },
  inline: {
    display: "block",
  },
  fontWeight: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

function Contact() {
  const classes = useStyle();

  const { sectionHeader, image } = useSelector(
    (state) => state.contact.contact
  );

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const subjectInputRef = useRef();
  const messageInputRef = useRef();

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    handleClick();
    setNameError(false);
    setEmailError(false);
    setSubjectError(false);
    setMessageError(false);
    if (!nameInputRef.current.value) {
      setNameError(true);
    }
    if (!emailInputRef.current.value) {
      setEmailError(true);
    }
    if (!subjectInputRef.current.value) {
      setSubjectError(true);
    }
    if (!messageInputRef.current.value) {
      setMessageError(true);
    }

    // if (
    //   nameInputRef.current.value &&
    //   emailInputRef.current.value &&
    //   subjectInputRef.current.value &&
    //   messageInputRef.current.value
    // ) {
    //   console.log(nameInputRef.current.value);
    //   console.log(emailInputRef.current.value);
    //   console.log(subjectInputRef.current.value);
    //   console.log(messageInputRef.current.value);
    // }
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Box component="section" py={10} id="contact">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={7} className={classes.grid1}>
            <SectionsHeader
              marginbottom="4"
              subheadingtextalign="left"
              subheading={sectionHeader.subheading}
              headingtextalign="left"
              heading={sectionHeader.heading}
              bodytextalign="left"
              body={
                <Fragment>
                  <Typography component="span" className={classes.inline}>
                    Call Us:{" "}
                    <Typography component="span" className={classes.fontWeight}>
                      {sectionHeader.body.phone}
                    </Typography>
                  </Typography>
                  <Typography component="span" className={classes.inline}>
                    Email Address:{" "}
                    <Typography component="span" className={classes.fontWeight}>
                      {sectionHeader.body.email}
                    </Typography>
                  </Typography>
                </Fragment>
              }
            />

            <form noValidate autoComplete="off" onSubmit={formSubmitHandler}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    inputRef={nameInputRef}
                    id="filled-name"
                    label="Your Name"
                    type="text"
                    variant="outlined"
                    fullWidth
                    size="small"
                    required
                    name="name"
                    error={nameError}
                    helperText={nameError ? "Name Required" : ""}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    inputRef={emailInputRef}
                    id="filled-email"
                    label="Your Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    size="small"
                    required
                    name="email"
                    error={emailError}
                    helperText={emailError ? "Email Required" : ""}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    inputRef={subjectInputRef}
                    id="filled-subject"
                    label="Write a Subject"
                    type="text"
                    variant="outlined"
                    fullWidth
                    size="small"
                    required
                    name="subject"
                    error={subjectError}
                    helperText={subjectError ? "Subject Required" : ""}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    inputRef={messageInputRef}
                    id="filled-message"
                    label="Your Message"
                    type="text"
                    variant="outlined"
                    fullWidth
                    rows={5}
                    multiline
                    required
                    name="message"
                    error={messageError}
                    helperText={messageError ? "Message Required" : ""}
                  />
                </Grid>
                <Grid item xs={12}>
                  <HireMeButton
                    variant="contained"
                    color="primary"
                    fullWidth
                    disableElevation
                    type="submit"
                  >
                    Submit Now
                  </HireMeButton>
                  <Snackbar
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    autoHideDuration={6000}
                    TransitionComponent={SlideTransition}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="success"
                      elevation={6}
                      variant="filled"
                    >
                      This is a success message!
                    </Alert>
                  </Snackbar>
                </Grid>
              </Grid>
            </form>
          </Grid>

          <Grid item xs={12} md={5} className={classes.grid2}>
            <Box borderRadius={4} clone>
              <Image
                src={image}
                alt="hero banner image"
                width={500}
                height={560}
                layout="responsive"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
