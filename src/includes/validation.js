import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from 'vee-validate';
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  numeric,
  min_value as minValue,
  max_value as maxValue,
  confirmed,
} from '@vee-validate/rules';

export default {
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('tos', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alpha_spaces', alphaSpaces);
    defineRule('email', email);
    defineRule('numeric', numeric);
    defineRule('min_value', minValue);
    defineRule('max_value', maxValue);
    defineRule('password_confirmed', confirmed);

    configure({
      generateMessage: ({ field, rule: { name: ruleName } }) => {
        const messages = {
          required: `The field ${field} is required.`,
          min: `The field ${field} is too short.`,
          max: `The field ${field} is too long.`,
          alpha_spaces: `The field ${field} must contain only alphabetical characters.`,
          email: `The field ${field} must be a valid email.`,
          numeric: `The field ${field} must be number.`,
          min_value: `The field ${field} is too low.`,
          max_value: `The field ${field} is too high.`,
          password_confirmed: 'Password confirmation must match.',
          tos: 'You must accept the terms of service to continue.',
        };
        const message = messages[ruleName]
          ? messages[ruleName]
          : `The field ${field} is invalid.`;

        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
