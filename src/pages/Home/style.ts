import styled from 'styled-components';
import {COLORS} from '../../common';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS['gray-100']};
  padding: 24px;
`;
