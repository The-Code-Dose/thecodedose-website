import React from 'react';
import './button.scss';

export default ({
  text,
  onClick,
  variant = 'yellow',
  size = 'normal',
  link = false,
  to,
  disabled,
}) => {
  if (link) {
    return <a className={`button button--${variant} button--${size}`} href={to} target="__blank">{text}</a>
  }
  return (
    <button
      className={`button button--${variant} button--${size} ${disabled ? 'button--disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
    )
};
