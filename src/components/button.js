import React from 'react';
import './button.scss';

export default ({ text, onClick, variant = "yellow", size = "normal" }) => (
  <button className={`button button--${variant} button--${size}`} onClick={onClick}>{text}</button>
);
