import styled from 'styled-components';

import {GoLocation} from 'react-icons/go';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  border-radius: 6px;
  border: 1px solid #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  box-shadow: '0px 5px 15px rgba(243, 243, 243, 0.4457),0px 1.1739px 6px rgba(24, 24, 43, 0.0265),0px 2.0109px 16.3478px rgba(0, 0, 0, 0.0265)';
  margin-right: 20px;
`;

export const Trip = ({title, price, img, date}: any) => {
  return (
    <Container>
      <img
        src={img}
        style={{
          width: '100%',
          height: '80%',
          borderRadius: '6px 6px 0px 0px',
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: '8px 6px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <strong style={{fontSize: '12px'}}>{title}</strong>
          <div style={{height: '2px'}} />
          <div>
            <GoLocation size={10} color='#AFABAB' />
            <small
              style={{
                color: '#AFABAB',
                textTransform: 'capitalize',
                marginLeft: '4px',
              }}
            >
              Paraíba
            </small>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <strong style={{color: '#B84A3D'}}>R${price}</strong>
        </div>
      </div>
    </Container>
  );
};
