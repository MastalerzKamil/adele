import React from 'react';
// import StyledStatsContainer from './stats - container.styles';
import Statistics from '../../components/statistics/statistics';
import data from '../../data/data.JSON';


class StatsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      dataFromJson: [],
      chartOptions: {},
    };
  }

  componentWillMount() {
    const headerArr = Object.keys(data[0]);
    const fixedData = data.map((item, i) => {
      const system = item;
      system.company.id = i;
      return system;
    });

    // const tmp = this.createLabelsArrayByCategory(fixedData);
    // console.log(fixedData);

    this.setState({
      /*
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
      */
    });

    this.setState({
      dataFromJson: fixedData,
    });
  }

  render() {
    return (
      <Statistics
        data={this.state.dataFromJson}
        chartOptions={this.state.chartOptions}
      />
    );
  }
}

export { StatsContainer as default };
