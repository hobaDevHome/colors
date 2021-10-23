import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ index, rgb, weight, hex }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hexValue = `#${hex}`;

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [alert]);

  return (
    <article
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert"> copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
