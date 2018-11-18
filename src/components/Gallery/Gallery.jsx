import React from 'react';
import PropTypes from 'prop-types';
import {trackWindowScroll} from 'react-lazy-load-image-component';

import {LazyLoadImage} from 'react-lazy-load-image-component';
import getPhotos from './photos-loader.js';

import './gallery.css';

import 'style-loader!css-loader!react-lazy-load-image-component/src/effects/blur.css';
import 'style-loader!css-loader!react-lazy-load-image-component/src/effects/black-and-white.css';
import 'style-loader!css-loader!react-lazy-load-image-component/src/effects/opacity.css';

/**
 * Gallery Container Component that loads the photos data
 */
export class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {afterLoadText, beforeLoadText, effect, direction,
      scrollPosition, showLowResImages, threshold} = this.props;
    const photos = getPhotos();

    return (
      <div className={ 'gallery ' + direction }>
        {photos.map((photo) =>
          <LazyLoadImage
            alt={photo.src}
            afterLoad={() => console.log(afterLoadText)}
            beforeLoad={() => console.log(beforeLoadText)}
            className="gallery-img"
            effect={effect}
            height={384}
            key={photo.src}
            placeholderSrc={showLowResImages ? photo.lowResSrc : null}
            scrollPosition={scrollPosition}
            src={photo.src}
            threshold={threshold}
            width={512}
            wrapperClassName="gallery-img-wrapper" />
        )}
      </div>
    );
  }
}

Gallery.propTypes = {
  afterLoadText: PropTypes.string.isRequired,
  beforeLoadText: PropTypes.string.isRequired,
  direction: PropTypes.oneOf([
    'horizontal', 'vertical']).isRequired,
  effect: PropTypes.oneOf([
    'black-and-white', 'blur', 'opacity', '']).isRequired,
  showLowResImages: PropTypes.bool.isRequired,
  threshold: PropTypes.number.isRequired
};

export default trackWindowScroll(Gallery);
