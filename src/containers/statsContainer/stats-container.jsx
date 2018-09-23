import React from 'react';
// import StyledStatsContainer from './stats - container.styles';
import Statistics from '../../components/statistics/statistics';
import data from '../../data/data.JSON';


class StatsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      dataFromJson: [],
      properties: [],
    };
  }

  componentWillMount() {
    const headerArr = Object.keys(data[0]);
    const parsedProperties = this.getProperties(headerArr);
    const fixedData = data.map((item, i) => {
      const system = item;
      system.company.id = i;
      return system;
    });
    this.setState({
      dataFromJson: fixedData,
      properties: parsedProperties,
    });
  }

  getProperties(headerArr) {
    return headerArr.map((elem) => {
      return data[0][elem].label;
    }).slice(2); // because we skip first 2 columns
  }

  render() {
    return (
      <Statistics
        data={this.state.dataFromJson}
        properties={this.state.properties}
      />
    );
  }
}

export { StatsContainer as default };
