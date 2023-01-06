interface AgencyAvatarProps {
  image: string;
}

export const AgencyAvatar = ({image}: AgencyAvatarProps) => (
  <img
    src={image}
    style={{
      width: '100px',
      height: '100px',
      borderRadius: '60px',
      border: '0.6px solid #564E4E',
      marginRight: '11px',
    }}
  />
);
