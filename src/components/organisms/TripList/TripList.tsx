import styled from 'styled-components';

import {Trip} from '../../';

export const ScrollContainer = styled.div`
  width: 100%;
  overflow-x: scroll;
  border-radius: 6px 6px 0px 0px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

interface ContainerListTripItemsProps {
  width: number;
}

export const ContainerListTripItems = styled.div<ContainerListTripItemsProps>`
  display: flex;
  flex-direction: row;
  height: 210px;
  width: ${({width}) => (width ? width : 0)}px;
`;

export const TripList = ({data}: any) => {
  const tripScrollSize = data.length * 220;

  return (
    <ScrollContainer>
      <ContainerListTripItems width={tripScrollSize}>
        {data.map((tripItem: any) => {
          return <Trip {...tripItem} />;
        })}
      </ContainerListTripItems>
    </ScrollContainer>
  );
};
