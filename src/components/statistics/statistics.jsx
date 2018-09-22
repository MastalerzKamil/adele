import React from 'react';
import PropTypes from 'prop-types';
import { StyledSection, StyledHeader, StyledChartTitle, StyledChartDiv, StyledChartsAllCharts } from './statistics.styles';

const DoughnutChart = require('react-chartjs').Doughnut;
const randomColor = require('randomcolor');

class Statistics extends React.Component {
  getData() {
    if (this.props.data.length === 0) {
      console.log('No data in props');
      return null;
    }
    /* loop throught all items in all properties to return */
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
  makeArrayFlatten(array) {
    return array.reduce((prevElement, nextElement) => prevElement.concat(nextElement), []);
  }
  prepareDataToChart() {
    const dataFromJson = this.getData();
    const flattenData = dataFromJson.map((categoryArray) => {
      return this.makeArrayFlatten(categoryArray);
    });
    const preparedData = flattenData.map((categoryElement) => {
      const labelsWithValuesToChart = categoryElement.reduce((acc, val) => {
        acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
        return acc;
      }, {});
      const chartValues = Object.values(labelsWithValuesToChart);
      const chartLabels = Object.keys(labelsWithValuesToChart);
      return chartValues.map((value, valueId) => {
        const color = randomColor();
        const label = chartLabels[valueId];
        return { value, color, label };
      });
    });
    return preparedData;
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
    const chartData = this.prepareDataToChart();
    console.log(chartData);
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

Statistics.propTypes = {
  data: PropTypes.array,
};

export { Statistics as default };
