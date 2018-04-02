/**
 * @file CtaMessage.component.js
 * Exports a CTA Message component.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CtaMessage.css';

import Button from '../../Atoms/Button/Button.component';
import ButtonLink from '../../Atoms/Button/ButtonLink.component';
import Icon from '../../Atoms/Svg/Icons.component';
import PriLogo from '../../Atoms/Svg/PriLogo.component';

const cx = classNames.bind(styles);

/**
 * Component that renders a CTA (Call to action) message.
 */
export default class CtaMessage extends Component {
  static propTypes = {
    onClosePrompt: PropTypes.func,
    type: PropTypes.oneOf(['pushDown', 'loadUnder', 'modal']),
    data: PropTypes.shape({
      name: PropTypes.string.isRquired,
      hash: PropTypes.string.isRequired,
      showLogo: PropTypes.bool,
      title: PropTypes.string,
      description: PropTypes.string,
      action: PropTypes.shape({
        label: PropTypes.string.isRequired,
        btnColor: ButtonLink.propTypes.color,
        url: PropTypes.string.isRequired
      }),
      dismiss: PropTypes.shape({
        label: PropTypes.string.isRequired
      })
    }).isRequired
  };

  static defaultProps = {
    onClosePrompt: () => {},
    type: null
  };

  constructor(props) {
    super(props);

    this.state = {
      isShown: true
    };
  }

  handleActionClick = () => {
    this.props.onClosePrompt();
  };

  handleDismissClick = e => {
    e.preventDefault();
    this.props.onClosePrompt();
  };

  render() {
    const { type, data } = this.props;
    const { showLogo, title, description, action, dismiss } = data;
    const { isShown } = this.state;
    const isLoadUnder = type === 'loadUnder';
    const promptClass = cx({
      prompt: !type,
      [type]: type
    });
    const logoSize = !isLoadUnder
      ? {
          width: 123,
          height: 26
        }
      : {
          width: 90,
          height: 19
        };

    const output = isShown ? (
      <div className={promptClass}>
        <button className={styles.close} onClick={this.handleDismissClick}>
          <Icon name="cross" width={18} height={18} />
        </button>
        <div className={styles.content}>
          {showLogo && (
            <div className={styles.logo}>
              <PriLogo
                title="PRI"
                fillColor="currentColor"
                width={logoSize.width}
                height={logoSize.height}
              />
            </div>
          )}
          {title && <h3 className={styles.title}>{title}</h3>}
          {description && <p className={styles.description}>{description}</p>}
          {action && (
            <div className={styles.actions}>
              <ButtonLink
                className={styles.actionBtn}
                url={action.url}
                color={action.btnColor}
                onClick={this.handleActionClick}
              >
                {action.label}
              </ButtonLink>
              {dismiss && (
                <Button
                  className={styles.dismissBtn}
                  color="Dark"
                  onClick={this.handleDismissClick}
                >
                  {dismiss.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    ) : null;

    return output;
  }
}
