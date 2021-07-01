// react
import React, { Fragment, useRef, useState } from "react";

// next
import Image from "next/image";

// material
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// import ;
import SectionsHeader from "../../components/sectionsHeader/sectionsHeader";

const HireMeButton = withStyles(() => ({
  root: {
    padding: "10px 40px",
  },
}))(Button);

function Contact() {
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
  return (
    <Box component="section" py={10} id="contact">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={7}>
            <SectionsHeader
              marginbottom="4"
              subheadingtextalign="left"
              subheading={<Fragment>Let's Say Hi</Fragment>}
              headingtextalign="left"
              heading={<Fragment>Hire Me.</Fragment>}
              paragraphtextalign="left"
              paragraph={
                <Fragment>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat voluptas aut facilis a voluptates ad praesentium
                  corrupti pariatur! Error omnis deserunt quae, reprehenderit
                  necessitatibus quibusdam molestias sed, voluptas vitae est!
                  Velit, necessitatibus.
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
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={5}>
            <Box borderRadius={4} clone>
              <Image
                src="/images/about/2.jpg"
                alt="hero banner image"
                width={495}
                height={595}
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
