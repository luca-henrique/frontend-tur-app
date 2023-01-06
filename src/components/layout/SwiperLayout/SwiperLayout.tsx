import {TripMonth} from '../../';

import {mockTrip} from '../../../__mocks__';

export const SwiperLayout = () => {
  return (
    <div style={{marginTop: '32px'}}>
      {mockTrip.map((data) => {
        return <TripMonth data={data} />;
      })}
    </div>
  );
};
