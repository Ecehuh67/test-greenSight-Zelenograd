import '../../less/style.less';
import PickUpExpress from '../pick-up/pick-up';
import Delivery from '../delivery/delivery';
import { points } from '../../consts';

const App = () => {
  const [isPickUp, setPickUp] = React.useState(false);
  const [isFormValid, setValidForm] = React.useState(false);

  return (
    <main className="main html-wrapper">
      <section className="main__section">
        <h1 className="visually-hidden">Delivery tipes</h1>
        <h2 className="main__title">Choose way of delivery</h2>
        <div className="main__form">
          <button
            className={
              isPickUp
                ? 'main__change-button main__change-button--active'
                : 'main__change-button'
            }
            onClick={() => {
              setPickUp(false);
            }}
          >
            Delivery
          </button>
          <button
            className={`${
              !isPickUp
                ? 'main__change-button main__change-button--active'
                : 'main__change-button'
            } main__change-button--right`}
            onClick={() => {
              setPickUp(true);
            }}
          >
            Pick-up
          </button>
          {!isPickUp && <Delivery isButtonActive={isFormValid} />}
          {isPickUp && <PickUpExpress points={points} />}
        </div>
      </section>
    </main>
  );
};

export default App;
