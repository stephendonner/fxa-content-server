/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const AuthErrors = require('lib/auth-errors');
const Cocktail = require('cocktail');
const FormView = require('./form');
const SignInMixin = require('./mixins/signin-mixin');
const ServiceMixin = require('./mixins/service-mixin');
const Template = require('templates/sign_in_totp_code.mustache');
const VerificationReasonMixin = require('./mixins/verification-reason-mixin');

const CODE_INPUT_SELECTOR = 'input.totp-code';

const View = FormView.extend({
  className: 'sign-in-totp-code',
  template: Template,

  beforeRender () {
    // user cannot confirm if they have not initiated a sign in.
    const account = this.getSignedInAccount();
    if (! account || ! account.get('sessionToken')) {
      this.navigate(this._getAuthPage());
    }
  },

  submit () {
    const account = this.getSignedInAccount();
    const code = this.getElementValue('input.totp-code');
    return account.verifyTotpCode(code)
      .then((result) => {
        if (result.success) {
          this.logViewEvent('success');
          return this.invokeBrokerMethod('afterCompleteSignInWithCode', account);
        } else {
          throw AuthErrors.toError('INVALID_TOTP_CODE');
        }
      })
      .catch((err) => this.showValidationError(this.$(CODE_INPUT_SELECTOR), err));
  },

  /**
   * Get the URL of the page for users that
   * must enter their password.
   *
   * @returns {String}
   */
  _getAuthPage () {
    const authPage =
      this.model.get('lastPage') === 'force_auth' ? 'force_auth' : 'signin';

    return this.broker.transformLink(authPage);
  }
});

Cocktail.mixin(
  View,
  SignInMixin,
  ServiceMixin,
  VerificationReasonMixin
);

module.exports = View;
