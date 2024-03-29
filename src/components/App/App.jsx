import React from 'react';

import EffectSelector from '../EffectSelector/EffectSelector.jsx';
import Gallery from '../Gallery/Gallery.jsx';

import './app.css';

/**
 * App Root Component, contains the app
 */
export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      onLoadText: 'onLoad triggered',
      beforeLoadText: 'beforeLoad triggered',
      direction: 'vertical',
      containerWithOverflow: false,
      effect: '',
      showLowResImages: true,
      threshold: 100
    };
  }

  onChangeEffect() {
    return (e) => {
      this.setState({
        effect: e.target.value
      });
    };
  }

  onChangeNumber(key) {
    return (e) => {
      this.setState({
        [key]: parseInt(e.target.value, 10)
      });
    };
  }

  onChangeText(key) {
    return (e) => {
      this.setState({
        [key]: e.target.value
      });
    };
  }

  render() {
    const {onLoadText, beforeLoadText, direction,
      effect, showLowResImages, threshold, containerWithOverflow} = this.state;

    return (
      <div className={'app ' + direction}>
        <form className="app-controls">
          <a href="https://github.com/Aljullu/react-lazy-load-image-component">
            <img
              className="app-controls-github"
              alt="Find this project in GitHub"
              src="https://img.shields.io/github/release/Aljullu/react-lazy-load-image-component.svg" />
          </a>
          <h1>react-lazy-load-image-component</h1>
          <p><a href="https://github.com/Aljullu/react-lazy-load-image-component">Documentation and code in GitHub</a></p>
          <p>Modify the options to see how they work.</p>
          <fieldset className="app-controls-fieldset">
            <p>
              Effect to use when an image is loaded:<br/>
              <EffectSelector
                effect={effect}
                onChange={this.onChangeEffect()} />
            </p>
            <p>
              <label>
                <input className="app-controls-checkbox"
                  type="checkbox"
                  onChange={() => {
                    this.setState({
                      showLowResImages: !showLowResImages
                    });
                  }}
                  defaultChecked={showLowResImages} />
                Show low resolution images while loading
              </label>
            </p>
          </fieldset>
          <br />
          <fieldset className="app-controls-fieldset">
            <p>
              Direction:<br/>
              <label>
                <input type="radio"
                  checked={direction === 'vertical'}
                  name="direction"
                  onChange={this.onChangeText('direction')}
                  value="vertical" />
                Vertical
              </label>
              <label>
                <input type="radio"
                  checked={direction === 'horizontal'}
                  name="direction"
                  onChange={this.onChangeText('direction')}
                  value="horizontal" />
                Horizontal
              </label>
            </p>
            <p>
              <label>
                <input className="app-controls-number"
                  type="number"
                  onChange={this.onChangeNumber('threshold')}
                  value={threshold} />
                threshold <small>(px)</small>
              </label>
            </p>
          </fieldset>
          <br />
          <fieldset className="app-controls-fieldset">
            <p>
              <label>
                <input className="app-controls-checkbox"
                  type="checkbox"
                  onChange={() => {
                    this.setState({
                      containerWithOverflow: !this.state.containerWithOverflow
                    });
                  }}
                  defaultChecked={this.state.containerWithOverflow} />
                Container with overflow
              </label>
            </p>
          </fieldset>
          <br />
          <fieldset className="app-controls-fieldset">
            <p>
              Text that will be displayed in the console when the
              before/after load events are triggered:
            </p>
            <p>
              <label>
                <input className="app-controls-text"
                  type="text"
                  onChange={this.onChangeText('beforeLoadText')}
                  value={beforeLoadText} />
              </label>
            </p>
            <p>
              <label>
                <input className="app-controls-text"
                  type="text"
                  onChange={this.onChangeText('onLoadText')}
                  value={onLoadText} />
              </label>
            </p>
          </fieldset>
          <p className="app-scroll">Scroll down to see it in action!</p>
        </form>
        <Gallery
          onLoadText={onLoadText}
          beforeLoadText={beforeLoadText}
          containerWithOverflow={containerWithOverflow}
          direction={direction}
          effect={effect}
          showLowResImages={showLowResImages}
          threshold={threshold} />
      </div>
    );
  }
}
