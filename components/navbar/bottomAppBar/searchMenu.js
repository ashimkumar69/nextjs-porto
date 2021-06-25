// react
import React from "react";

// material
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { useRef } from "react";

function SearchMenu(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   search
  const searchInputRef = useRef();
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (searchInputRef.current.value) {
      console.log(searchInputRef.current.value);
      setOpen(false);
    }
  };

  return (
    <React.Fragment>
      <IconButton edge={props.edge} color="inherit" onClick={handleClickOpen}>
        <SearchIcon />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Search</DialogTitle>
        <form noValidate autoComplete="off" onSubmit={formSubmitHandler}>
          <DialogContent>
            <DialogContentText>Search Items By Its Name.</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Search..."
              type="text"
              fullWidth
              color="primary"
              inputRef={searchInputRef}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Search
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
export default SearchMenu;
