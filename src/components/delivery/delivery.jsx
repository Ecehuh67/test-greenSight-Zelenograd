import Inputmask from 'react-input-mask';
import { validateName } from '../../consts';

const PickUpExpress = ({ isButtonActive }) => {
  return (
    <form className="main__pick-up pick-up-form">
      <div className="pick-up-form__field-wrapper">
        <input
          className="pick-up-form__field--name pick-up-form__field pick-up-form__field--error"
          type="text"
          name="fullName"
          placeholder="Only Cyrillic"
          onChange={(evt) => {
            const isValid = validateName(evt.target.value);
          }}
        />
      </div>
      <div className="pick-up-form__field-wrapper">
        <Inputmask
          mask="+7 (999) 999-99-99"
          maskChar=""
          className="pick-up-form__field--phone pick-up-form__field"
          placeholder="+7 (___) ___-__-__"
          //   onChange={(evt) => {
          //     const isPhoneValid = validatePhone(evt.target.value);
          //     changeState('phone', isPhoneValid, evt.target.value, setFormFields);
          //   }}
        />
      </div>
      <div className="pick-up-form__field-wrapper">
        <input
          className="pick-up-form__field--adress pick-up-form__field"
          type="adress"
          name="fullName"
          placeholder="City, street, apart number"
        />
      </div>
      <div className="pick-up-form__field-wrapper">
        <textarea
          className="pick-up-form__field--comments pick-up-form__field"
          name="comments"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <button
        className={
          isButtonActive
            ? 'pick-up-form__field-submit'
            : 'pick-up-form__field-submit pick-up-form__field-submit--blocked'
        }
        type="button"
        disabled={!isButtonActive}
      >
        Сheckout
      </button>
    </form>
  );
};

export default PickUpExpress;
