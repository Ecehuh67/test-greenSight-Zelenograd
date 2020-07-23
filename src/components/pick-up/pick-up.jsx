import Inputmask from 'react-input-mask';

const PickUpExpress = () => {
  return (
    <div className="">
      <button>Delivery</button>
      <button>Pick-up</button>
      <div>
        <input type="text" name="fullName" placeholder="Only Cyrillic" />
      </div>
      <div>
        <Inputmask
          mask="+7 (999) 999-99-99"
          maskChar=""
          className="main__form-input"
          placeholder="+7 (___) ___-__-__"
          //   onChange={(evt) => {
          //     const isPhoneValid = validatePhone(evt.target.value);
          //     changeState('phone', isPhoneValid, evt.target.value, setFormFields);
          //   }}
        />
      </div>
      <div>
        <textarea name="comments" cols="30" rows="10"></textarea>
      </div>
      <button>Сheckout</button>
    </div>
  );
};

export default PickUpExpress;
