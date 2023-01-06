import {AgencyDetails, AgencyAvatar} from '../../';

import {AgencyLogo} from '../../../__mocks__';

export const HeaderAgencyProfile = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', marginTop: '32px'}}>
      <AgencyAvatar image={AgencyLogo} />
      <AgencyDetails name='Jampa Trip Turismo' />
    </div>
  );
};
