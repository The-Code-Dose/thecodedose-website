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
  className,
}) => {
  if (link) {
    return <a className={`button button--${variant} button--${size} ${className}`} href={to} target="__blank">{text}</a>
  }
  return (
    <button
      className={`button button--${variant} button--${size} ${disabled ? 'button--disabled' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
    )
};
