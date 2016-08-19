/* eslint-disable no-return-assign */

/* Node modules */
import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import { FormattedMessage } from 'react-intl';

/* Images */
import image1 from '../../../assets/images/crayons.jpg';
import image2 from '../../../assets/images/avion.jpg';
import image3 from '../../../assets/images/educatrice.jpg';

/* Styles */
const style = {
  container: {
    textAlign: 'center',
  },
};

export default class ImgGallery extends Component {
  render() {
    const images = [
      {
        original: image1,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        originalAlt: 'original-alt',
        thumbnailAlt: 'thumbnail-alt',
        thumbnailLabel: 'Optional',
        description: 'Description 1...',
        srcSet: 'Optional srcset (responsive images src)',
        size: '20px',
      },
      {
        original: image2,
        description: 'Description 2...',
      },
      {
        original: image3,
        description: 'Description 3...',
      },
    ];

    return (
      <div style={style.container}>
        <h1>
          <FormattedMessage id="imgGallery.title" />
        </h1>
        <ImageGallery
          ref={i => this.imageGallery = i}
          items={images}
          showThumbnails={false}
          showBullets
          slideInterval={2000}
          onImageLoad={this.handleImageLoad}
        />
      </div>
    );
  }

}
