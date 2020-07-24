import { YMaps, Map, Placemark } from 'react-yandex-maps';

const PickUp = ({ points }) => {
  return (
    <>
      <div className="main__form-wrapper">
        <ul className="main__form-points-list points-list">
          {points.map((point) => {
            return (
              <li
                key={Math.random() * new Date()}
                className="points-list__item"
              >
                <input type="checkbox" />
                <p>{`${point.prefix} ${point.title}`}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="main__map">
        <YMaps>
          <Map
            defaultState={{
              center: [55.75, 37.57],
              zoom: 10,
            }}
            style={{
              width: '650px',
              height: '350px',
            }}
          >
            {points.map((point) => {
              return (
                <Placemark
                  key={Math.random() * new Date()}
                  geometry={{
                    coordinates: new Array(point.coords.x, point.coords.y),
                    type: 'Point',
                  }}
                />
              );
            })}
          </Map>
        </YMaps>
      </div>
    </>
  );
};

export default PickUp;
