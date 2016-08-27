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
  header: {
    textAlign: 'center',
    paddingTop: '15px',
    paddingBottom: '15px',
  },
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
      <div>
        <div style={style.header}>
          <h1>
            <FormattedMessage id="imgGallery.title" />
          </h1>
        </div>
        <div style={style.container}>
          <ImageGallery
            ref={i => this.imageGallery = i}
            items={images}
            showThumbnails={false}
            showBullets
            slideInterval={2000}
            onImageLoad={this.handleImageLoad}
          />
        </div>
      </div>
    );
  }

}
