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
  static messageTypes = ['pushDown', 'loadUnder'];

  static propTypes = {
    onClose: PropTypes.func,
    type: PropTypes.oneOf(CtaMessage.messageTypes),
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
  };

  static defaultProps = {
    onClose: () => {},
    type: CtaMessage.messageTypes[0],
    showLogo: false,
    title: null,
    description: null,
    action: null,
    dismiss: null
  };

  handleActionClick = () => {
    this.props.onClose();
  };

  handleDismissClick = e => {
    e.preventDefault();
    this.props.onClose();
  };

  render() {
    const { type, showLogo, title, description, action, dismiss } = this.props;
    const isLoadUnder = type === 'loadUnder';
    const promptClass = cx({
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

    return (
      <aside className={promptClass}>
        <button className={styles.close} onClick={this.handleDismissClick}>
          <Icon name="cross" width={18} height={18} ariaLabel="Close" />
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
          {description ? (
            <div
              className={styles.description}
              /* eslint-disable-next-line */
              dangerouslySetInnerHTML={{ __html: description }}
            />
          ) : null}
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
      </aside>
    );
  }
}
