import styled from 'styled-components';

import {CgSearch} from 'react-icons/cg';

export const CustomInput = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  border-radius: 6px;
`;

export const InputContainer = styled.div`
  padding: 11px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 48px;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  box-shadow: '0px 6px 20px rgba(243, 243, 243, 0.3935),0px 3.2609px 3px rgba(24, 24, 43, 0.1048),0px 2.1413px 20.5217px rgba(0, 0, 0, 0.1048)';
`;

export const Input = () => {
  return (
    <InputContainer>
      <CustomInput placeholder='Busque por mês' />
      <CgSearch size={24} color='#C2C2C2' />
    </InputContainer>
  );
};
