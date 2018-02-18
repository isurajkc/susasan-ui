import styled from 'styled-components';

const Heading = styled.span`
  ${props => {
    return `
	   color: ${props.light ? '#fff' : '#333'};
	   font-weight: 600;
       ${props.uppercase && `
            text-transform: uppercase;
       `} 	   
       
  `;
}};
`;

Heading.displayName = 'Heading';


Heading.h1 = Heading.withComponent('h1').extend`
	font-size: 37px
`;
Heading.h1.displayName = 'Heading.h1';

Heading.h2 = Heading.withComponent('h2').extend`
	font-size: 28px;
`;
Heading.h2.displayName = 'Heading.h2';

Heading.h3 = Heading.withComponent('h3').extend`
	font-size: 21px
`;
Heading.h3.displayName = 'Heading.h3';

Heading.h4 = Heading.withComponent('h4').extend`
	font-size: 18px
`;
Heading.h4.displayName = 'Heading.h4';

export default Heading;
