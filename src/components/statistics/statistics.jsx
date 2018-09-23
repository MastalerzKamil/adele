import React from 'react';
import PropTypes from 'prop-types';
import { StyledSection, StyledHeader, StyledChartTitle, StyledChartDiv, StyledChartsAllCharts } from './statistics.styles';

const DoughnutChart = require('react-chartjs').Doughnut;
const randomColor = require('randomcolor');

class Statistics extends React.Component {
  getData() {
    if (this.props.data.length === 0) {
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
    }).slice(2); // because we miss first 2 columns
    return preparedData;
  }
  renderCharts(chartsData, properties) {
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
    return chartsData.map((singleChartData, singleChartDataId) => {
      return (
        <StyledChartDiv>
          <StyledChartTitle>{properties[singleChartDataId]}</StyledChartTitle>
          <DoughnutChart data={singleChartData} options={chartOptions} />
        </StyledChartDiv>
      );
    });
  }
  render() {
    const chartsData = this.prepareDataToChart();
    const properties = this.props.properties;
    return (
      <StyledSection>
        <StyledHeader>Statistics</StyledHeader>
        <StyledChartsAllCharts>
          {this.renderCharts(chartsData, properties)}
        </StyledChartsAllCharts>
      </StyledSection>
    );
  }
}

Statistics.propTypes = {
  data: PropTypes.array.isRequired,
  properties: PropTypes.array.isRequired,
};

export { Statistics as default };
