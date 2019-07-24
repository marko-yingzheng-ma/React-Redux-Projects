import React from 'react';

function getSeason(lat, month) {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonalDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const weatherText = season === 'winter' ? 'cold as f' : 'hot as f';
  const icon = season === 'winter' ? 'snowflake' : 'sun';

  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{weatherText}</h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

export default SeasonalDisplay;