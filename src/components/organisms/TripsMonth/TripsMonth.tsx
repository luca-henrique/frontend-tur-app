import {TripList} from '../../';

export const TripMonth = ({data}: any) => {
  return (
    <div style={{marginBottom: '30px'}}>
      <h3 style={{fontWeight: 700, color: '#737373', marginBottom: '8px'}}>
        {data.month}
      </h3>

      <TripList data={data.data} />
    </div>
  );
};
