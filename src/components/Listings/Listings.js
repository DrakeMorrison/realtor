import React from 'react';
import PropTypes from 'prop-types';

import './Listings.css';
import ListingItem from '../ListingItem/ListingItem';
import {listingShape} from '../../props/listingProp';

class Listings extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(listingShape),
    onListingSelection: PropTypes.func,
  };

  render () {
    const {listings, onListingSelection} = this.props;
    const listingsItemComponents = listings.map((item, index) => {
      return (
        <ListingItem
          key={item.id}
          listing={item}
          index={index}
          onSelect={onListingSelection}
        />
      );
    });

    return (
      <div className='Listings'>
        <h2>Listings</h2>
        <ul>{listingsItemComponents}</ul>
      </div>
    );
  }
}

export default Listings;
