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
  getAllChartsData(properties, values, colors, labels) {
    return labels.map((label, chartId) => {
      return this.getSingleChartData(chartId, values, colors, labels);
    }).slice(2);
  }
  getSingleChartData(chartIndex, chartValues, chartColors, chartLabels) {
    console.log(chartLabels);
    return chartLabels.map((label, labelId) => {
      return this.getSingleLabelData(label, chartValues, chartColors, labelId, chartIndex);
    });
  }
  getSingleLabelData(label, values, colors, labelIndex, chartIndex) {
    const value = values[chartIndex][labelIndex];
    const color = colors[labelIndex][labelIndex];
    return { value, color, label };
  }
  makeArrayFlatten(array) {
    return array.reduce((prevElement, nextElement) => prevElement.concat(nextElement), []);
  }
  prepareDataToChart() {
    const dataFromJson = this.getData();
    const flattenData = dataFromJson.map((categoryArray) => {
      return this.makeArrayFlatten(categoryArray);
    });
    const uniqueDataAmount = flattenData.map((element) => {
      return element.filter((v, i) => {
        return i === element.lastIndexOf(v);
      }).length;
    });
    const chartColors = uniqueDataAmount.map((colorsAmount) => {
      // returns array of colors for each propoerty
      return Array.from({ length: colorsAmount }, () => randomColor());
    });
    const labelsWithValuesToChart = flattenData.map((element) => {
      return element.reduce((acc, val) => {
        acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
        return acc;
      }, {});
    });
    const labelsToChart = labelsWithValuesToChart.map((label) => {
      return Object.keys(label);
    }).slice(2);
    return { labelsToChart, labelsWithValuesToChart, chartColors };
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
    const { labelsToChart, labelsWithValuesToChart, chartColors } = this.prepareDataToChart();
    const properties = Object.keys(this.props.data[0]);
    const chartData = this.getAllChartsData(properties, labelsWithValuesToChart, chartColors, labelsToChart);
    console.log(chartData);
    return (
      <StyledSection>
        <StyledHeader>Statistics</StyledHeader>
        <StyledChartsAllCharts>
          <StyledChartDiv>
            <StyledChartTitle>Repository</StyledChartTitle>
            <DoughnutChart data={this.props.chartData} options={this.props.chartOptions} />
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
