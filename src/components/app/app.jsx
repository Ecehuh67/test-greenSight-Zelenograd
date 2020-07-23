import '../../less/style.less';
import PickUpExpress from '../pick-up/pick-up';

const App = () => {
  return (
    <main className="main html-wrapper">
      <section className="main__section">
        <h1 className="visually-hidden">Delivery tipes</h1>
        <h2 className="main__title">Choose way of delivery</h2>
        <div className="main__form">
          <button className="main__change-button main__change-button--active">
            Delivery
          </button>
          <button className="main__change-button main__change-button--right">
            Pick-up
          </button>
          <PickUpExpress />
        </div>
      </section>
    </main>
  );
};

export default App;
