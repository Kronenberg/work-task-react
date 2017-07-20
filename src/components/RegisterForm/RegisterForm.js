import React, { Component } from 'react';
import { reduxForm, Field, propTypes } from 'redux-form';
import registerValidation from './registerValidation';

// eslint-disable-next-line react/prop-types
const Input = ({ input, label, type, meta: { touched, error } }) => (
  <div className={`form-group ${error && touched ? 'has-error' : ''}`}>
    <label htmlFor={input.name} className="col-sm-2">{label}</label>
    <div className="col-sm-10 col-md-4 col-lg-4">
      <input {...input} type={type} className="form-control" />
      {error && touched && <span className="glyphicon glyphicon-remove form-control-feedback"></span>}
      {error && touched && <div className="text-danger"><strong>{error}</strong></div>}
    </div>
  </div>
);

@reduxForm({
  form: 'register',
  validate: registerValidation
})
export default class RegisterForm extends Component {
  static propTypes = {
    ...propTypes
  }

  render() {
    const { handleSubmit, error } = this.props;

    return (
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <Field name="username"
               type="text"
               component={Input}
               label="Username" />
        <Field
          name="email"
          type="email"
          component={Input}
          label="Email"
        />
        <Field
          name="password"
          type="password"
          component={Input}
          label="Password" />
        {error && <p className="text-danger"><strong>{error}</strong></p>}
        <button className="btn btn-primary" type="submit">
          <i className="fa fa-sign-in" />{' '}Register
        </button>
      </form>
    );
  }
}
