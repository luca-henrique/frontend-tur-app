import {
  HeaderAgencyProfile,
  AppLogo,
  SwiperLayout,
  Input,
} from '../../components';

import {Container} from './style';

export const Home = () => {
  return (
    <Container>
      <AppLogo />
      <Input />
      <HeaderAgencyProfile />
      <SwiperLayout />
    </Container>
  );
};
