import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Form} from './styles'

export const CommentForm = ({gameId, onSubmit}) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      comment: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Endereço de email inválido').required('Required'),
      comment: Yup.string().required('Required')
    }),
    onSubmit: values => {
      onSubmit(values, gameId)
    },
  });
  return (

    <Form>
      <h2>Insira um comentário</h2>
    <form onSubmit={formik.handleSubmit}>
      <div>
      <label htmlFor="firstName">Nome</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
    </div>
      <div>
      <label htmlFor="email">Comentário</label>
      <input className="comment"
        id="comment"
        name="comment"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.comment}
        style={{
          color: "black",
          alignItems: "center",
          height: "6rem",
        }}
      />
      {formik.touched.comment && formik.errors.comment ? (
        <div>{formik.errors.comment}</div>
      ) : null}
      </div>

      <button type="submit">Comentar</button>
    </form>
    </Form>
  );
};