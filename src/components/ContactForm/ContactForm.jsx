import css from "./ContactForm.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useId } from "react";

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

export default function ContactForm() {

  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {   
    dispatch(
      addContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    })
      
    );
    

    actions.resetForm();
  };

  const contactFormSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")

  });





  return (
    <Formik 
    initialValues={initialValues} 
    onSubmit={handleSubmit}
    validationSchema = {contactFormSchema}
    >
      <Form className={css.form}>
        <div className={css.formContainer}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.formField}
            type="text"
            id={nameFieldId}
            name="name"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.formField}
            type="test"
            id={numberFieldId}
            name="number"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
