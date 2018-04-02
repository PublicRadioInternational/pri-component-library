/**
 * @file CtaPrompt.component.js
 * Exports a CTA Prompt component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CtaMessage from '../CtaMessage/CtaMessage.component';

const cookiePrefix = 'cta_prompt_';

/**
 * Component that renders a CTA (Call to action) prompt.
 */
export default class CtaPrompt extends Component {
  static propTypes = {
    children: PropTypes.node,
    type: CtaMessage.propTypes.type
  };

  static defaultProps = {
    children: [],
    type: null
  };

  static get cookiePrefix() {
    return cookiePrefix;
  }

  constructor(props) {
    super(props);

    this.state = {
      shownMessage: null
    };

    const children = (props.children.length
      ? props.children
      : [props.children]
    ).filter(child => child.type === CtaMessage);

    // Determine which (if any) message should be shown.
    children.forEach(msg => {
      const { data } = msg.props;

      const hash = this.getCookie(data.name);

      // Show first message that either:
      // - Doesn't have a cookie.
      // - Cookie value doesn't match message hash.
      if (!this.state.shownMessage && (!hash || hash !== data.hash)) {
        this.state.shownMessage = msg;
      }
    });
  }

  getCookie = name => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${CtaPrompt.cookiePrefix}${name}=`);
    return parts.length === 2
      ? parts
          .pop()
          .split(';')
          .shift()
      : null;
  };

  setCookie = (name, hash) => {
    document.cookie = `${CtaPrompt.cookiePrefix}${name}=${hash}; path=/`;
  };

  closePrompt = () => {
    const { shownMessage } = this.state;
    // Set cookie for message id with value of hash.
    const { name, hash } = shownMessage.props.data;
    this.setCookie(name, hash);

    // Close prompt
    this.setState({ shownMessage: null });
  };

  render() {
    const { shownMessage } = this.state;
    const output = shownMessage
      ? React.cloneElement(shownMessage, {
          // Pass cloase prompt handler to message.
          onClosePrompt: this.closePrompt.bind(this),
          // Fill in type from prompt if missing from message.
          type: shownMessage.props.type || this.props.type
        })
      : null;

    return output;
  }
}
