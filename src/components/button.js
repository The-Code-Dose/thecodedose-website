import React from 'react';
import './button.scss';

export default function ({
  text,
  onClick,
  variant = 'yellow',
  size = 'normal',
  link = false,
  to,
  disabled,
  className,
}) {
  if (link) {
    return <a className={`button block mt-5 button--${variant} button--${size} ${className}`} href={to} target="__blank">{text}</a>;
  }
  return (
    <button
      className={`button mt-5 block button--${variant} button--${size} ${disabled ? 'button--disabled' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {text}
    </button>
  );
}
