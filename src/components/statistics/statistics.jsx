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
    return array.reduce((currentElement, nextElement) => currentElement.concat(nextElement), []);
  }
  prepareDataToChart() {
    const dataFromJson = this.getData();
    console.log(dataFromJson);
    const flattenData = dataFromJson.map((categoryArray) => {
      return this.makeArrayFlatten(categoryArray);
    });
    console.log(flattenData);
    const uniqueDataAmount = flattenData.map((element) => {
      return element.filter((v, i) => {
        return i === element.lastIndexOf(v);
      }).length;
    });
    console.log(uniqueDataAmount);
    const chartColors = uniqueDataAmount.map((colorsAmount) => {
      // returns array of colors for each propoerty
      return Array.from({ length: colorsAmount }, () => randomColor());
    });
    console.log(chartColors);
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
    this.prepareDataToChart();
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
