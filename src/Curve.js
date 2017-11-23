import React from 'react';
import PropTypes from 'prop-types';
import { Path } from 'react-leaflet';
import { curve } from './leaflet.curve';


export default class Curve extends Path {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    option:PropTypes.object,
    positions: PropTypes.array.isRequired
  };

  createLeafletElement (props) {
    const { positions, option, ...options } = props
    return L.curve(positions, option, this.getOptions(options))
  }

  updateLeafletElement (fromProps, toProps) {
    if (toProps.positions !== fromProps.positions) {
      this.leafletElement.setPath(toProps.positions)
    }
    this.setStyleIfChanged(fromProps, toProps)
  }
}

/*
  componentWillMount() {
    super.componentWillMount();
    const { positions, ...options } = this.props
    this.leafletElement = L.curve(positions, this.getOptions(options))
  }*/