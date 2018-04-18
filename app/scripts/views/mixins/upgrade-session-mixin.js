/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * View mixin to support a user upgrading their session to
 * be verified. This is useful in situations where a panel
 * might contain sensitive information or security related
 * features.
 *
 * This mix-in replaces the template loaded by the view with
 * the upgrade-session template. Once the email has been
 * verified, the page is re-rendered and the user can see
 * the gated panel.
 *
 * @mixin UpgradeSessionMixin
 */

define(function (require, exports, module) {
  'use strict';

  const $ = require('jquery');
  const BaseView = require('../base');
  const { preventDefaultThen } = BaseView;
  const SettingsPanelMixin = require('../mixins/settings-panel-mixin');
  const UpgradeSessionTemplate = require('templates/settings/upgrade_session.mustache');
  const t = BaseView.t;

  const showProgressIndicator = require('../decorators/progress_indicator');
  const EMAIL_REFRESH_SELECTOR = 'button.settings-button.refresh-verification-state';
  const EMAIL_REFRESH_DELAYMS = 350;

  /**
   * The UpgradeSessionMixin can be configured to display different titles and captions
   * depending on what panel is being gated.
   *
   * @param {Object} [options]
   *  @param {String} [options.caption] - caption describing what the panel is unlocking
   *  @param {String} [options.gatedHref] - location that is redirected after session is verified
   *  @param {String} [options.title] - title name of the panel
   * @returns {Object} UpgradeSessionMixin
   */
  module.exports = (options = {}) => {
    return {
      dependsOn: [SettingsPanelMixin],

      events: {
        'click .cancel-verification-email': preventDefaultThen('_clickCancelVerificationEmail'),
        'click .refresh-verification-state': preventDefaultThen('_clickRefreshVerificationState'),
        'click .send-verification-email': preventDefaultThen('_clickSendVerificationEmail')
      },

      initialize () {
        this.gatedTemplate = this.template;
      },

      _clickRefreshVerificationState: showProgressIndicator(function() {
        return this.setupSessionGateIfRequired()
          .then((verified) => {
            if (verified) {
              this.displaySuccess(t('Primary email verified successfully'), {
                closePanel: false
              });

              // We use an explicit `navigateAway` because there could be
              // more than one panel that could be enabled buy verifying
              // the session. This will force all the panels to be re-rendered.
              return this.navigateAway(this.window.location.href);
            }
          });
      }, EMAIL_REFRESH_SELECTOR, EMAIL_REFRESH_DELAYMS),

      _clickSendVerificationEmail () {
        const account = this.getSignedInAccount();
        return account.requestVerifySession({
          redirectTo: this.window.location.href.split('?')[0]
        })
          .then(() => {
            this.displaySuccess(t('Verification email sent'), {
              closePanel: false
            });
            this.model.set({emailSent: true});
            return this.render();
          });
      },

      _clickCancelVerificationEmail () {
        this.closePanel();
        this.navigate('/settings');
        $('.send-verification-email').removeClass('hidden');
        $('.cancel-verification-email').addClass('hidden');
      },

      setInitialContext (context) {
        context.set({
          email: this.getSignedInAccount().get('email'),
          emailSent: this.model.get('emailSent'),
          gatedHref: options.gatedHref,
          isPanelOpen: this.isPanelOpen(),
          title: this.translate(options.title)
        });
      },

      /**
       * Checks to see if the current session is verified. If it is,
       * then it renders the original template, otherwise it renders
       * the upgrade-session template. This template prompts user
       * to verify their email address before they can see the original
       * template.
       *
       * @returns {Boolean} sessionVerified
       */
      setupSessionGateIfRequired () {
        const account = this.getSignedInAccount();
        return account.sessionVerificationStatus()
          .then(({sessionVerified}) => {
            if (! sessionVerified) {
              this.template = UpgradeSessionTemplate;
            } else {
              this.template = this.gatedTemplate;
            }
            return sessionVerified;
          });
      }
    };
  };
});
