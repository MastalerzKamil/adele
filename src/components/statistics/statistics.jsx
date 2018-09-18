import React from 'react';
import { StyledSection, StyledHeader } from './statistics.styles';

const DoughnutChart = require('react-chartjs').Doughnut;

class Statistics extends React.Component {
  constructor() {
    super();

    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentWillMount() {
    this.setState({
      chartData: [
        {
          value: 300,
          color: '#F7464A',
          highlight: '#FF5A5E',
          label: 'Red',
        },
        {
          value: 50,
          color: '#46BFBD',
          highlight: '#5AD3D1',
          label: 'Green',
        },
        {
          value: 100,
          color: '#FDB45C',
          highlight: '#FFC870',
          label: 'Yellow',
        },
      ],
      chartOptions: {
        // Boolean - Whether we should show a stroke on each segment
        segmentShowStroke: true,

        // String - The colour of each segment stroke
        segmentStrokeColor: '#fff',

        // Number - The width of each segment stroke
        segmentStrokeWidth: 2,

        // Number - The percentage of the chart that we cut out of the middle
        percentageInnerCutout: 50, // This is 0 for Pie charts

        // Number - Amount of animation steps
        animationSteps: 100,

        // String - Animation easing effect
        animationEasing: 'easeOutBounce',

        // Boolean - Whether we animate the rotation of the Doughnut
        animateRotate: true,

        // Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale: false,
        // String - A legend template
      },
    });
  }

  render() {
    return (
      <StyledSection>
        <StyledHeader>Statistics</StyledHeader>
        <DoughnutChart data={this.state.chartData} options={this.state.chartOptions} />
      </StyledSection>
    );
  }
}

export { Statistics as default };
