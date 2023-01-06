import map from 'lodash/map';
import startCase from 'lodash/startCase';

const Trip = ({title, price, img, date}) => {
  return (
    <div
      className='w-44 flex flex-col-reverse shrink-0 rounded-md bg-cover bg-no-repeat'
      style={{backgroundImage: `url("${img}")`}}
    >
      <div className='flex bg-white justify-between p-1 rounded-b-md'>
        <div style={{fontSize: '12px'}}>
          <strong className='text-gray-700'>{title}</strong>
          <br></br>
          <small className='text-gray-400'>Paraíba</small>
        </div>
        <div className='text-md text-orange-700'>R${price}</div>
      </div>
    </div>
  );
};

const TripsList = ({trips_data}) => {
  return (
    <>
      {map(trips_data, (trips, month) => (
        <div>
          <strong className='text-lg text-gray-500'>{startCase(month)}</strong>
          <div className='flex flex-nowrap gap-4 h-44 my-4'>
            {map(trips, (trip) => (
              <Trip {...trip} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default TripsList;
