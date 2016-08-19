/* eslint-disable no-return-assign */

/* Node modules */
import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import { FormattedMessage } from 'react-intl';

/* Images */
import image1 from '../../../assets/images/peinture_gallery.jpg';
import image2 from '../../../assets/images/educatrice_gallery.jpg';
import image3 from '../../../assets/images/soccer_gallery.jpg';

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
        description: 'Description 1...',
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
