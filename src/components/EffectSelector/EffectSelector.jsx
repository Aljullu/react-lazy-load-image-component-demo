import React from 'react';
import PropTypes from 'prop-types';

import './effect-selector.css';

/**
 * App Root Component, contains the app
 */
export default class EffectSelector extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {effect, onChange} = this.props;

    return (
      <React.Fragment>
        <label className="effect-selector-option">
          <input type="radio"
            name="effect"
            value="blur"
            onChange={onChange}
            defaultChecked={effect === 'blur'} />
          Blur
        </label>
        <label className="effect-selector-option">
          <input type="radio"
            name="effect"
            value="black-and-white"
            onChange={onChange}
            defaultChecked={effect === 'black-and-white'} />
          Black and white
        </label>
        <label className="effect-selector-option">
          <input type="radio"
            name="effect"
            value="opacity"
            onChange={onChange}
            defaultChecked={effect === 'opacity'} />
          Opacity
        </label>
        <label className="effect-selector-option">
          <input type="radio"
            name="effect"
            value=""
            onChange={onChange}
            defaultChecked={effect === ''} />
          None
        </label>
      </React.Fragment>
    );
  }
}

EffectSelector.propTypes = {
  effect: PropTypes.oneOf(['black-and-white', 'blur', 'opacity', '']).isRequired
};
