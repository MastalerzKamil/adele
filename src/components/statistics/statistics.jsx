import React from 'react';
import { StyledSection, StyledHeader, StyledChartTitle, StyledChartDiv, StyledChartsAllCharts } from './statistics.styles';

const DoughnutChart = require('react-chartjs').Doughnut;

class Statistics extends React.Component {
  constructor() {
    super();
    this.state = {
      parsedChartValues: [],
    };
  }
  getData() {
    if (this.props.data.length === 0) {
      console.log('No data in props');
    }
    /* loop throught all items to return */
    /* arrays of values for each property */
    return this.props.data.map((item, index) => {
      // const properties = Object.keys(item);

      return this.getValueForGivenIndexAndCategory('repository', index);
    });
  }
  // returns only value for given category and index
  getValueForGivenIndexAndCategory(category, index) {
    return this.props.data[index][category].data;

  }
  render() {
    const chartOptions = {
      segmentShowStroke: true,
      segmentStrokeColor: '#fff',
      segmentStrokeWidth: 2,
      percentageInnerCutout: 50,
      animationSteps: 100,
      animationEasing: 'easeOutBounce',
      animateRotate: true,
      animateScale: false,
    };
    return (
      <StyledSection>
        <StyledHeader>Statistics</StyledHeader>
        <StyledChartsAllCharts>
          <StyledChartDiv>
            <StyledChartTitle>Repository</StyledChartTitle>
          </StyledChartDiv>
        </StyledChartsAllCharts>
      </StyledSection>
    );
  }
}

export { Statistics as default };
