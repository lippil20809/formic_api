import React from "react";
import { useDispatch } from "react-redux";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import {createPost} from '../../store/posts'
import { FormProps, FormValues } from "./Form.types";
import { Post } from "api/posts.types";

const Form: React.FC<FormProps> = ({ initial }) => {
  const dispatch = useDispatch();
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = useFormik<FormValues>({
    initialValues: {

      title: "",
      body: "",
    },
    validationSchema: yup.object().shape({
      title: yup.string().required("Required"),
      body: yup.string().required("Required"),
    }),
    onSubmit: (data) => {
      dispatch(createPost({...data, id: Math.random(), userId: 1}))
    },
  });


  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <DialogTitle>Create product</DialogTitle>
      <DialogContent>
        <Stack direction="column" spacing={2} mt={2}>
          <TextField
            label="Title"
            id="title"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.title && !!errors.title}
            helperText={touched.title && errors.title}
          />
          <TextField
            label="Brand"
            id='body'
            name="body"
            value={values.body}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.body && !!errors.body}
            helperText={touched.body && errors.body}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button  type="button" onClick={() => handleSubmit()}>
          Create
        </Button>
      
      </DialogActions>
    </form>
  );
};

export default Form;
