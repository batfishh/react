import React from "react";
import PropTypes  from 'prop-types'
import './SeasonDisplay.css'

const seasonConfig = {
  summer: { text: "Hot.", icon: "massive sun icon" },
  winter: { text: "Chilly.", icon: "massive snowflake icon" },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, props.month);
  const {text, icon}= seasonConfig[season]
  return (
    <div className = {`season-display ${season}`}>
      <i className={`icon-left ${icon}`}></i>
      {season === "winter" ? <h1>{text}</h1> : <h1>{text}</h1>}
      <i className={`icon-right ${icon}`}></i>
    </div>
  );
};


SeasonDisplay.propTypes = {
    lat: PropTypes.string,
    month: PropTypes.string
}
export default SeasonDisplay;

