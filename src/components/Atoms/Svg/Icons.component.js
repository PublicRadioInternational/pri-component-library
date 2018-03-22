/**
 * @file Icons.component.js
 * SVG Icon component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Icons.css';

const Icon = props => {
  const {
    name,
    title,
    className,
    inline,
    height,
    width,
    version,
    viewBox
  } = props;
  const iconPath = iconName => {
    switch (iconName) {
      case 'heart':
        return (
          <path d="M14 26c-0.25 0-0.5-0.094-0.688-0.281l-9.75-9.406c-0.125-0.109-3.563-3.25-3.563-7 0-4.578 2.797-7.313 7.469-7.313 2.734 0 5.297 2.156 6.531 3.375 1.234-1.219 3.797-3.375 6.531-3.375 4.672 0 7.469 2.734 7.469 7.313 0 3.75-3.437 6.891-3.578 7.031l-9.734 9.375c-0.187 0.187-0.438 0.281-0.688 0.281z" />
        );
      case 'envelope':
        return (
          <path d="M23.031 14.266l0.609 0.797c0.172 0.219 0.125 0.516-0.078 0.688-1.563 1.219-5.156 3.984-5.313 4.109-1.109 0.906-2.609 2.156-4.234 2.141h-0.031c-1.625 0-3.125-1.234-4.234-2.141-0.172-0.141-3.641-2.812-5.172-4-0.219-0.172-0.266-0.469-0.094-0.688l0.578-0.812c0.172-0.234 0.5-0.281 0.719-0.094 1.062 0.828 2.562 1.984 4.781 3.687 0.781 0.594 2.328 2.047 3.422 2.047h0.031c1.094 0 2.641-1.453 3.422-2.047 2.297-1.766 3.828-2.938 4.891-3.781 0.219-0.172 0.531-0.125 0.703 0.094zM26 25.5v-14.5c-1.563-1.453-1.328-1.328-8.563-6.922-0.781-0.609-2.328-2.078-3.422-2.078h-0.031c-1.094 0-2.641 1.469-3.422 2.078-7.234 5.594-7 5.469-8.563 6.922v14.5c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM28 11v14.5c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-14.5c0-0.562 0.234-1.094 0.641-1.469 3.203-2.969 6.891-5.547 9.109-7.375 1.094-0.906 2.609-2.156 4.234-2.156h0.031c1.625 0 3.141 1.25 4.234 2.156 2.063 1.703 5.984 4.469 9.109 7.375 0.406 0.375 0.641 0.906 0.641 1.469z" />
        );
      case 'search':
        return (
          <path d="M18 13c0-3.859-3.141-7-7-7s-7 3.141-7 7 3.141 7 7 7 7-3.141 7-7zM26 26c0 1.094-0.906 2-2 2-0.531 0-1.047-0.219-1.406-0.594l-5.359-5.344c-1.828 1.266-4.016 1.937-6.234 1.937-6.078 0-11-4.922-11-11s4.922-11 11-11 11 4.922 11 11c0 2.219-0.672 4.406-1.937 6.234l5.359 5.359c0.359 0.359 0.578 0.875 0.578 1.406z" />
        );
      case 'volume':
        return (
          <path d="M5 7h-4v6h4l5 5v-16l-5 5zM16.36 16.36l-1.41-1.41c1.272-1.265 2.059-3.015 2.059-4.95s-0.787-3.685-2.059-4.95l-0-0 1.41-1.41c1.634 1.625 2.645 3.874 2.645 6.36s-1.011 4.735-2.644 6.36l-0 0zM13.54 13.54l-1.42-1.42c0.542-0.543 0.877-1.292 0.877-2.12s-0.335-1.577-0.877-2.12l0 0 1.42-1.42c0.912 0.903 1.477 2.156 1.477 3.54s-0.565 2.637-1.477 3.54l-0 0z" />
        );
      case 'play':
        return <path d="M6 4l20 12-20 12z" />;
      case 'menu':
        return (
          <path
            fill="currentcolor"
            d="M3 5h18v2.016h-18v-2.016z M3 12.984v-1.969h18v1.969h-18z M3 19v-2.016h18v2.016h-18z"
          />
        );
      case 'left':
        return (
          <path d="M14.414 5.586c-0.78-0.781-2.048-0.781-2.828 0l-6.415 6.414 6.415 6.414c0.39 0.391 0.902 0.586 1.414 0.586s1.024-0.195 1.414-0.586c0.781-0.781 0.781-2.047 0-2.828l-3.585-3.586 3.585-3.586c0.781-0.781 0.781-2.047 0-2.828z" />
        );
      default:
        return null;
    }
  };
  return (
    <svg
      className={
        inline
          ? `${styles.inlineSvg} ${className && styles[className]} ${
              styles.svg
            }`
          : className && styles[className]
      }
      height={height}
      width={width}
      version={version}
      viewBox={viewBox}
      aria-labelledby={title}
      aria-hidden={props.ariaHidden || null}
    >
      {title && <title>{title}</title>}
      {iconPath(name)}
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf([
    'heart',
    'envelope',
    'search',
    'volume',
    'play',
    'menu',
    'left'
  ]).isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  inline: PropTypes.bool,
  ariaHidden: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number,
  version: PropTypes.number,
  viewBox: PropTypes.string
};

Icon.defaultProps = {
  title: null,
  className: null,
  inline: false,
  ariaHidden: false,
  height: 28,
  width: 28,
  version: 1.1,
  viewBox: '0 0 28 28'
};

export default Icon;
