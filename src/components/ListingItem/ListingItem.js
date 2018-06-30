import React from 'react';
// import PropTypes from 'prop-types';

import './ListingItem.css';
import {listingShape} from '../../props/listingProp';

class ListingItem extends React.Component {
  static propTypes = {
    listing: listingShape,
  };

  render () {
    const {listing} = this.props;

    return (
      <li>{listing.price}</li>
    );
  }
}

export default ListingItem;
