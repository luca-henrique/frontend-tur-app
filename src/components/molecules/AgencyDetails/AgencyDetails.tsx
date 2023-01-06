interface AgencyDetailsProps {
  name: string;
}

//@ts-ignore
import ReactStars from 'react-rating-stars-component';

export const AgencyDetails = ({name}: AgencyDetailsProps) => {
  return (
    <div>
      <h4>{name}</h4>
      <div style={{height: '2px'}} />
      <ReactStars count={5} size={14} activeColor='#B87061' value={4} />
      <div style={{height: '2px'}} />
      <ul style={{fontSize: '14px', listStyleType: 'none', color: '#737373'}}>
        <li style={{marginBottom: '2px'}}>Agência de turismo em JPA</li>
        <li style={{marginBottom: '2px'}}>Transfer || Praias || Cachoeiras</li>
        <li>Contato: (83) 99838-8638</li>
      </ul>
    </div>
  );
};
