import styled from 'styled-components';
import { adeleInfo } from '../../style_tokens/tokens';

const StyledSection = styled.section`
  width: 600px;
  margin: 0 auto;
`;

const StyledHeader = styled.h2`
  font-family: ${adeleInfo.typography.fontFamily};
  font-size: ${adeleInfo.typography.sizeHeader};
  color: ${adeleInfo.typography.colorHeader};
  font-weight: ${adeleInfo.typography.weightText};
  text-align: center;
  margin: 0;
`;

export { StyledSection, StyledHeader };
