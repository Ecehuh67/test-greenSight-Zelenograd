import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { mapMarkers } from '../../consts';

const PickUp = ({ points }) => {
  return (
    <>
      <div className="main__form-wrapper">
        <ul className="main__form-points-list points-list">
          {points.map((point, i) => {
            return (
              <li
                key={Math.random() * new Date()}
                className="points-list__item"
              >
                <input type="checkbox" id={`point${i}`} />
                <label
                  htmlFor={`point${i}`}
                >{`${point.prefix} ${point.title}`}</label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="main__map">
        <YMaps>
          <Map
            className="main__map-container"
            defaultState={{
              bounds: points.map(
                // eslint-disable-next-line no-array-constructor
                (point) => new Array(point.coords.x, point.coords.y)
              ),
              behaviors: ['default'],
            }}
          >
            {points.map((point, i) => {
              return (
                <Placemark
                  key={Math.random() * new Date()}
                  geometry={{
                    // eslint-disable-next-line no-array-constructor
                    coordinates: new Array(point.coords.x, point.coords.y),
                    type: 'Point',
                  }}
                  defaultProperties={{
                    iconContent: i + 1,
                  }}
                  defaultOptions={{
                    preset:
                      mapMarkers[Math.floor(Math.random() * mapMarkers.length)],
                    hasHint: true,
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
