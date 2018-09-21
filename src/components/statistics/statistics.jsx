import React from 'react';
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
    });
    console.log(labelsToChart);
  }
  render() {
    /*
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
    */
    this.prepareDataToChart();
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

export { Statistics as default };
