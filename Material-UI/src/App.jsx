import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Alert from "@mui/material/Alert";

function App() {
  return (
    <>
      {/* Alert */}
      <Alert variant="filled" severity="success">
        This is a filled success Alert.
      </Alert>
      {/* Buttons  and  Icons */}
      <Button variant="contained">Click me!</Button>
      <Button variant="contained" disabled>
        Click me!
      </Button>
      <Button color="error" variant="contained" size="small">
        Click me!
      </Button>

      <br />
      <br />
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <br />
      <br />
      <Button variant="contained" startIcon={<SendIcon />}>
        Send
      </Button>
    </>
  );
}

export default App;
