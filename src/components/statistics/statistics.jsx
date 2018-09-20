import React from 'react';
import { StyledSection, StyledHeader, StyledChartTitle, StyledChartDiv, StyledChartsAllCharts } from './statistics.styles';

const DoughnutChart = require('react-chartjs').Doughnut;

class Statistics extends React.Component {
  getData() {
    if (this.props.data.length === 0) {
      console.log('No data in props');
    }
    /* loop throught all items to return */
    /* arrays of values for each property */
    const categories = Object.keys(this.props.data[0]);
    return categories.map((categoryValue) => {
      return this.props.data.map((item, dataIndex) => {
        return this.getValueForGivenIndexAndCategory(categoryValue, dataIndex);
      });
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
    console.log(this.getData());
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
