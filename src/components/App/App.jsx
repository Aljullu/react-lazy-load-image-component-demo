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
      afterLoadText: 'afterLoad triggered',
      beforeLoadText: 'beforeLoad triggered',
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
    const {afterLoadText, beforeLoadText,
      effect, showLowResImages, threshold} = this.state;

    return (
      <div>
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
          </fieldset>
          <br />
          <fieldset className="app-controls-fieldset">
            <p>
              <label>
                <input className="app-controls-number"
                  type="number"
                  onChange={this.onChangeNumber('threshold')}
                  value={threshold} />
                threshold <small>(px)</small>
              </label>
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
                  onChange={this.onChangeText('afterLoadText')}
                  value={afterLoadText} />
              </label>
            </p>
          </fieldset>
          <p className="app-scroll">Scrolll down to see it in action!</p>
        </form>
        <Gallery
          afterLoadText={afterLoadText}
          beforeLoadText={beforeLoadText}
          effect={effect}
          showLowResImages={showLowResImages}
          threshold={threshold} />
      </div>
    );
  }
}
