import React from 'react';

const AdditionalFeature = props => {
  const addIt = e => {
    e.preventDefault();
    props.addition(props.feature);
  };
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={addIt} className='button'>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
