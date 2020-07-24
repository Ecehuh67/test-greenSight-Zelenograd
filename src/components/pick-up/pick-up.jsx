import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { mapMarkers } from '../../consts';

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
              bounds: points.map(
                (point) => new Array(point.coords.x, point.coords.y)
              ),
              behaviors: ['default'],
            }}
            style={{
              width: '650px',
              height: '350px',
            }}
          >
            {points.map((point, i) => {
              return (
                <Placemark
                  key={Math.random() * new Date()}
                  geometry={{
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
