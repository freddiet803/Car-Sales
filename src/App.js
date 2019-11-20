import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeature, removeFeature } from './actions';

const App = props => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
  };

  const addFeature = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
  };

  return (
    <div className='boxes'>
      <div className='box'>
        <Header car={props.car} />
        <AddedFeatures car={props.car} remove={removeFeature} />
      </div>
      <div className='box'>
        <AdditionalFeatures
          addition={addFeature}
          additionalFeatures={props.additionalFeatures}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(mapStateToProps, { addFeature, removeFeature })(App);
