import Inputmask from 'react-input-mask';
import {
  validateName,
  formFields,
  changeState,
  validatePhone,
  validateAdress,
  validateComment,
} from '../../consts';

const Delivery = ({ changeHandler }) => {
  const initialFieldsState = formFields.reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: {
        isValid: null,
        value: null,
      },
    };
  }, {});

  const [fields, setFields] = React.useState(initialFieldsState);

  const isFormValid = Object.keys(fields)
    .map((field) => fields[field].isValid)
    .every((el) => el === true);

  return (
    <form className="main__pick-up pick-up-form">
      <div className="pick-up-form__field-wrapper">
        <input
          className={`pick-up-form__field--name pick-up-form__field ${
            fields.name.isValid === false ? 'pick-up-form__field--error' : ''
          }`}
          type="text"
          name="fullName"
          placeholder="Only Cyrillic"
          onChange={(evt) => {
            const value = evt.target.value;
            const isValid = validateName(value);
            changeState('name', isValid, value, setFields);
          }}
        />
        <svg
          className={`pick-up-form__error-icon ${
            fields.name.isValid === false
              ? 'pick-up-form__error-icon--shown'
              : 'pick-up-form__error-icon--hidden'
          }`}
          width="22"
          height="22"
        >
          <use xlinkHref="#error-icon" />
        </svg>
      </div>
      <div className="pick-up-form__field-wrapper">
        <Inputmask
          mask="+7 (999) 999-99-99"
          maskChar=""
          className={`pick-up-form__field--phone pick-up-form__field ${
            fields.phone.isValid === false ? 'pick-up-form__field--error' : ''
          }`}
          placeholder="+7 (___) ___-__-__"
          onChange={(evt) => {
            const value = evt.target.value;
            const isValid = validatePhone(value);
            changeState('phone', isValid, value, setFields);
          }}
        />
        <svg
          className={`pick-up-form__error-icon ${
            fields.phone.isValid === false
              ? 'pick-up-form__error-icon--shown'
              : 'pick-up-form__error-icon--hidden'
          }`}
          width="22"
          height="22"
        >
          <use xlinkHref="#error-icon" />
        </svg>
      </div>
      <div className="pick-up-form__field-wrapper">
        <input
          className={`pick-up-form__field--adress pick-up-form__field ${
            fields.adress.isValid === false ? 'pick-up-form__field--error' : ''
          }`}
          type="adress"
          name="fullName"
          placeholder="City, street, apart number"
          onChange={(evt) => {
            const value = evt.target.value;
            const isValid = validateAdress(value);
            changeState('adress', isValid, value, setFields);
          }}
        />
        <svg
          className={`pick-up-form__error-icon ${
            fields.adress.isValid === false
              ? 'pick-up-form__error-icon--shown'
              : 'pick-up-form__error-icon--hidden'
          }`}
          width="22"
          height="22"
        >
          <use xlinkHref="#error-icon" />
        </svg>
      </div>
      <div className="pick-up-form__field-wrapper">
        <textarea
          // className="pick-up-form__field--comments pick-up-form__field"
          className={`pick-up-form__field--comments pick-up-form__field ${
            fields.comments.isValid === false
              ? 'pick-up-form__field--error'
              : ''
          }`}
          name="comments"
          cols="30"
          rows="10"
          onChange={(evt) => {
            const value = evt.target.value;
            const isValid = validateComment(value);
            changeState('comments', isValid, value, setFields);
          }}
        ></textarea>
      </div>
      <button
        className={
          isFormValid
            ? 'pick-up-form__field-submit'
            : 'pick-up-form__field-submit pick-up-form__field-submit--blocked'
        }
        type="button"
        disabled={!isFormValid}
        onClick={() => {
          changeHandler(
            Object.keys(fields).reduce((acc, curr) => {
              return {
                ...acc,
                [curr]: fields[curr].value,
              };
            }, {})
          );
        }}
      >
        Сheckout
      </button>
    </form>
  );
};

export default Delivery;
