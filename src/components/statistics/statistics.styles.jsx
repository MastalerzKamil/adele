import styled from 'styled-components';
import { adeleInfo } from '../../style_tokens/tokens';

const StyledSection = styled.section`
  width: 90%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  tex-align: center;
`;

const StyledChartTitle = styled.p`
  font-family: ${adeleInfo.typography.fontFamily};
  color: ${adeleInfo.typography.colorHeader};
  font-weight: ${adeleInfo.typography.weightText};
  text-align: center;
`;

const StyledChartDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledChartsAllCharts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space around;
`;

const StyledHeader = styled.h2`
  font-family: ${adeleInfo.typography.fontFamily};
  font-size: ${adeleInfo.typography.sizeHeader};
  color: ${adeleInfo.typography.colorHeader};
  font-weight: ${adeleInfo.typography.weightText};
  text-align: center;
  margin: 0;
`;

export { StyledSection, StyledHeader, StyledChartTitle, StyledChartDiv, StyledChartsAllCharts };
