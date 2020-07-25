import '../../less/style.less';
import PickUp from '../pick-up/pick-up';
import Delivery from '../delivery/delivery';
import { points } from '../../consts';

const App = () => {
  const [isPickUp, setPickUp] = React.useState(false);
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = React.useState(null);

  // Here we can use User's form data for smth......

  return (
    <main className="main html-wrapper">
      <section className="main__section">
        <h1 className="visually-hidden">Delivery tipes</h1>
        <h2 className="main__title">Choose way of delivery</h2>
        <div className="main__form">
          <button
            type="button"
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
            type="button"
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
          {!isPickUp && <Delivery changeHandler={setUserData} />}
          {isPickUp && <PickUp points={points} />}
        </div>
      </section>
    </main>
  );
};

export default App;
