import React, { useState, useReducer } from "react";

import Form from "components/Form";

import { Container, Dialog, Button } from "@mui/material";

import { Product } from "./Products.types";

const Header: React.FC = () => {

  const [open, toggle] = useReducer((prev) => !prev, false);



  return (
    <Container disableGutters maxWidth="lg">
      <Button variant="outlined" color="secondary" onClick={toggle}>
        open form
      </Button>
      <Dialog open={open} onClose={toggle} fullWidth>
        <Form />
      </Dialog>
    </Container>
  );
};

export default Header;
