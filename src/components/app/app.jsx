import '../../less/style.less';
import PickUpExpress from '../pick-up/pick-up';

const App = () => {
  return (
    <main className="html-wrapper">
      <section>
        <h1 className="visually-hidden">Delivery tipes</h1>
        <h2>Choose way of delivery</h2>
        <div>
          <PickUpExpress />
        </div>
      </section>
    </main>
  );
};

export default App;
