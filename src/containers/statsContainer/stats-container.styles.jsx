import styled from 'styled-components';
import background from '../../assets/background.png';


const StyledStatsContainer = styled.article`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
z-index: 6000;
margin: 0 auto;
width: 100%;
background-image: url(${background});
background-repeat: no-repeat;
background-position: center;
`;

export { StyledStatsContainer as default };
