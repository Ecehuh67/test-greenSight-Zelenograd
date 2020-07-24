import Inputmask from 'react-input-mask';

const PickUpExpress = () => {
  return (
    <form className="main__pick-up pick-up-form">
      <div className="pick-up-form__field-wrapper">
        <input
          className="pick-up-form__field-name"
          type="text"
          name="fullName"
          placeholder="Only Cyrillic"
        />
      </div>
      <div className="pick-up-form__field-wrapper">
        <Inputmask
          mask="+7 (999) 999-99-99"
          maskChar=""
          className="pick-up-form__field-phone"
          placeholder="+7 (___) ___-__-__"
          //   onChange={(evt) => {
          //     const isPhoneValid = validatePhone(evt.target.value);
          //     changeState('phone', isPhoneValid, evt.target.value, setFormFields);
          //   }}
        />
      </div>
      <div className="pick-up-form__field-wrapper">
        <input
          className="pick-up-form__field-adress"
          type="text"
          name="fullName"
          placeholder="City, street, apart number"
        />
      </div>
      <div className="pick-up-form__field-wrapper">
        <textarea
          className="pick-up-form__field-comments"
          name="comments"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <button className="pick-up-form__field-submit" type="button">
        Сheckout
      </button>
    </form>
  );
};

export default PickUpExpress;
