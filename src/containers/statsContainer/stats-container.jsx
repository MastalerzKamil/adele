import React from 'react';
import PropTypes from 'prop-types';
import StyledStatsContainer from './stats-container.styles';

const StatsContainer = props => <StyledStatsContainer>{props.children}</StyledStatsContainer>;

StatsContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export { StatsContainer as default };
