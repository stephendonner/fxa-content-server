'use strict';

/*eslint-disable max-len*/
module.exports = {
  '123DONE': {
    AUTHENTICATED: '#loggedin',
    BUTTON_SIGNIN: '.sign-in-button.signin',
    BUTTON_SIGNUP: '.sign-in-button.signup',
    LINK_LOGOUT: '#logout'
  },
  '400': {
    ERROR: '.error',
    HEADER: '#fxa-400-header'
  },
  CHANGE_PASSWORD: {
    CANCEL_BUTTON: '#change-password .cancel',DETAILS: '#change-password .settings-unit-details',
    ERROR: '#change-password .error',
    LINK_RESET_PASSWORD: '.reset-password',
    MENU_BUTTON: '#change-password .settings-unit-toggle',
    OLD_PASSWORD: '#old_password',
    OLD_PASSWORD_SHOW: '[for=show-old_password]',
    TOOLTIP: '.tooltip',
  },
  CHOOSE_WHAT_TO_SYNC: {
    ENGINE_ADDRESSES: '#sync-engine-addresses',
    ENGINE_CREDIT_CARDS: '#sync-engine-creditcards',
    ENGINE_HISTORY: '#sync-engine-history',
    ENGINE_PASSWORDS: '#sync-engine-passwords',
    HEADER: '#fxa-choose-what-to-sync-header',
    SUBMIT: 'button[type=submit]'
  },
  COMPLETE_RESET_PASSWORD: {
    DAMAGED_LINK_HEADER: '#fxa-reset-link-damaged-header',
    EXPIRED_LINK_HEADER: '#fxa-reset-link-expired-header',
    HEADER: '#fxa-complete-reset-password-header',
  },
  COMPLETE_SIGNIN: {
    LINK_RESEND: '#resend',
    VERIFICATION_LINK_DAMAGED: '#fxa-verification-link-damaged-header',
    VERIFICATION_LINK_EXPIRED: '#fxa-verification-link-expired-header',
    VERIFICATION_LINK_REUSED: '#fxa-verification-link-reused-header'
  },
  CONFIRM_RESET_PASSWORD: {
    HEADER: '#fxa-confirm-reset-password-header',
    LINK_RESEND: '#resend',
    RESEND_SUCCESS: '.success'
  },
  CONFIRM_SIGNIN: {
    HEADER: '#fxa-confirm-signin-header',
    LINK_RESEND: '#resend',
    RESEND_SUCCESS: '.success'
  },
  CONFIRM_SIGNUP: {
    HEADER: '#fxa-confirm-header'
  },
  CONNECT_ANOTHER_DEVICE: {
    HEADER: '#fxa-connect-another-device-header',
    LINK_INSTALL_ANDROID: '.marketing-link-android',
    LINK_INSTALL_IOS: '.marketing-link-ios',
    LINK_WHY_IS_THIS_REQUIRED: 'a[href="/connect_another_device/why"]',
    SIGNIN_BUTTON: 'form div a',
    SUCCESS: '.success',
    SUCCESS_DIFFERENT_BROWSER: '.success-not-authenticated',
    SUCCESS_SAME_BROWSER: '.success-authenticated',
    TEXT_INSTALL_FROM_OTHER: '#install-mobile-firefox-other',
    TEXT_INSTALL_FX_ANDROID: '#install-mobile-firefox-android',
    TEXT_INSTALL_FX_DESKTOP: '#install-mobile-firefox-desktop',
    TEXT_INSTALL_FX_FROM_FX_ANDROID: '#connect-other-firefox-from-android',
    TEXT_INSTALL_FX_IOS: '#install-mobile-firefox-ios',
    TEXT_SIGNIN_FXIOS: '#signin-fxios',
  },
  CONNECT_ANOTHER_DEVICE_WHY_IS_THIS_REQUIRED: {
    CLOSE: '.connect-another-device button[type="submit"]',
    HEADER: '#fxa-why-connect-another-device-header',
  },
  EMAIL: {
    ADDRESS_LABEL: '#emails .address',
    ADD_BUTTON: '.email-add:not(.disabled)',
    INPUT: '.new-email',
    MENU_BUTTON: '#emails .settings-unit-stub button',
    NOT_VERIFIED_LABEL: '.not-verified',
    REMOVE_BUTTON: '.email-address .settings-button.warning.email-disconnect',
    SET_PRIMARY_EMAIL_BUTTON: '.email-address .set-primary',
    SUCCESS: '.success',
    TOOLTIP: '.tooltip',
    UNLOCK_BUTTON: '.emails .unlock-button',
    UNLOCK_REFRESH_BUTTON: '.emails .refresh-verification-state',
    UNLOCK_SEND_BUTTON: '.emails .send-verification-email',
    VERIFIED_LABEL: '.verified',
  },
  ENTER_EMAIL: {
    EMAIL: 'input[type=email]',
    ERROR: '.error',
    HEADER: '#fxa-enter-email-header',
    LINK_SUGGEST_SYNC: '#suggest-sync a',
    SUBMIT: 'button[type="submit"]',
    SUB_HEADER: '#fxa-enter-email-header .service',
  },
  FORCE_AUTH: {
    EMAIL: 'input[type=email]',
    HEADER: '#fxa-force-auth-header'
  },
  MOZILLA_ORG_SYNC: {
    HEADER: '.header-content'
  },
  OAUTH_PERMISSIONS: {
    CHECKBOX_DISPLAY_NAME: 'input[name="profile:display_name"] + span',
    HEADER: '#fxa-permissions-header',
    SUBMIT: '#accept'
  },
  RESET_PASSWORD: {
    BACK: '.remember-password',
    EMAIL: 'input[type=email]',
    ERROR: '.error',
    HEADER: '#fxa-reset-password-header',
    LINK_ERROR_SIGNUP: '.error a[href="/signup"]',
    LINK_SIGNIN: '.remember-password',
    SUBMIT: 'button[type="submit"]',
    SUCCESS: '.success'
  },
  RESET_PASSWORD_COMPLETE: {
    HEADER: '#fxa-reset-password-complete-header',
    SUB_HEADER: '.account-ready-service'
  },
  SETTINGS: {
    CONTENT: '#fxa-settings-content',
    HEADER: '#fxa-settings-header',
    PROFILE_HEADER: '#fxa-settings-profile-header .card-header',
    PROFILE_SUB_HEADER: '#fxa-settings-profile-header .card-subheader',
    SIGNOUT: '#signout',
    SUCCESS: '.settings-success'
  },
  SETTINGS_CLIENTS: {
    BUTTON_REFRESH: '.clients-refresh',
    CLIENT_LIST: '.client-list',
    REFRESHING: '.clients-refresh.disabled',
  },
  SETTINGS_COMMUNICATION: {
    BUTTON_MANAGE: '#marketing-email-manage',
    BUTTON_OPT_IN: '#marketing-email-optin',
    DETAILS: '#communication-preferences .settings-unit-details',
    MENU_BUTTON: '#communication-preferences .settings-unit-toggle',
    READY: '#communication-preferences.basket-ready'
  },
  SETTINGS_DISPLAY_NAME: {
    INPUT_DISPLAY_NAME: '#display-name input[type=text]',
    MENU_BUTTON: '#display-name button.settings-unit-toggle',
    SUBMIT: '#display-name button[type=submit]',
  },
  SIGNIN: {
    EMAIL: 'input[type=email]',
    EMAIL_NOT_EDITABLE: '.prefillEmail',
    ERROR: '.error',
    HEADER: '#fxa-signin-header',
    LINK_USE_DIFFERENT: '.use-different',
    MIGRATION_NUDGE: '.info.nudge',
    PASSWORD: 'input[type=password]',
    RESET_PASSWORD: 'a[href="/reset_password"]',
    SUBMIT: 'button[type=submit]',
    SUB_HEADER: '#fxa-signin-header .service',
    TOOLTIP: '.tooltip',
  },
  SIGNIN_BOUNCED: {
    BACK: '#back',
    CREATE_ACCOUNT: '#create-account',
    HEADER: '#fxa-signin-bounced-header',
    SUPPORT: '#support'
  },
  SIGNIN_COMPLETE: {
    HEADER: '#fxa-sign-in-complete-header'
  },
  SIGNIN_PASSWORD: {
    EMAIL: 'input[type=email]',
    HEADER: '#fxa-signin-password-header',
    LINK_MISTYPED_EMAIL: '#back',
    PASSWORD: 'input[type=password]',
    SUBMIT: 'button[type="submit"]',
  },
  SIGNIN_RECOVERY_CODE: {
    DONE_BUTTON: '.two-step-authentication-done',
    FIRST_CODE: '.recovery-code:first-child',
    INPUT: '.recovery-code',
    LINK: '#use-recovery-code-link',
    MODAL: '#recovery-codes',
    SUBMIT: 'button[type="submit"]',
  },
  SIGNIN_TOKEN_CODE: {
    EMAIL_FIELD: '.verification-email-message',
    ERROR: '.error',
    HEADER: '#fxa-signin-code-header',
    INPUT: '#token-code',
    SUBMIT: 'button[type="submit"]',
  },
  SIGNIN_UNBLOCK: {
    EMAIL_FIELD: '.verification-email-message',
    HEADER: '#fxa-signin-unblock-header',
    SUBMIT: 'button[type="submit"]',
    VERIFICATION: '.verification-email-message',
  },
  SIGNUP: {
    AGE: '#age',
    // The original checkbox is not clickable after the material conversion. The span
    // next to the element holds the label text, click it instead. See #5425
    CUSTOMIZE_SYNC_CHECKBOX: '#customize-sync + span',
    CUSTOMIZE_SYNC_INPUT: '#customize-sync',
    EMAIL: 'input[type=email]',
    ERROR: '.error',
    HEADER: '#fxa-signup-header',
    LINK_SIGN_IN: 'a#have-account',
    LINK_SUGGEST_EMAIL_DOMAIN_CORRECTION: '#email-suggestion',
    LINK_SUGGEST_SIGN_IN: '.error a[href="/signin"]',
    LINK_SUGGEST_SYNC: '#suggest-sync a',
    MARKETING_EMAIL_OPTIN: 'input.marketing-email-optin + span',
    MIGRATING_USER: '.info.nudge',
    PASSWORD: '#password',
    SUBMIT: 'button[type="submit"]',
    SUB_HEADER: '#fxa-signup-header .service',
    SUGGEST_EMAIL_DOMAIN_CORRECTION: '.tooltip-suggest',
    SUGGEST_SIGN_IN: '.error',
    SUGGEST_SYNC: '#suggest-sync',
    TOOLTIP_BOUNCED_EMAIL: '.tooltip',
    VPASSWORD: '#vpassword',
  },
  SIGNUP_COMPLETE: {
    HEADER: '#fxa-sign-up-complete-header',
    SERVICE_NAME: '.account-ready-service'
  },
  SIGNUP_PASSWORD: {
    AGE: '#age',
    EMAIL: 'input[type=email]',
    ERROR_PASSWORDS_DO_NOT_MATCH: '.error',
    HEADER: '#fxa-signup-password-header',
    LINK_MISTYPED_EMAIL: '#back',
    PASSWORD: '#password',
    SUBMIT: 'button[type="submit"]',
    VPASSWORD: '#vpassword',
  },
  SMS_LEARN_MORE: {
    HEADER: '#websites-notice'
  },
  SMS_SEND: {
    HEADER: '#fxa-send-sms-header',
    LINK_LEARN_MORE: 'a#learn-more',
    LINK_MARKETING: '.marketing-link',
    LINK_MARKETING_ANDROID: '.marketing-link-android',
    LINK_MARKETING_IOS: '.marketing-link-ios',
    LINK_WHY_IS_THIS_REQUIRED: 'a[href="/sms/why"]',
    PHONE_NUMBER: 'input[type="tel"]',
    PHONE_NUMBER_TOOLTIP: 'input[type="tel"] ~ .tooltip',
    SUBMIT: 'button[type="submit"]',
    SUCCESS: '.success'
  },
  SMS_SENT: {
    HEADER: '#fxa-sms-sent-header',
    LINK_BACK: '#back',
    LINK_RESEND: '#resend',
    PHONE_NUMBER_SENT_TO: '#send-success',
    RESEND_SUCCESS: '#resend-success'
  },
  SMS_WHY_IS_THIS_REQUIRED: {
    CLOSE: '.connect-another-device button[type="submit"]',
    HEADER: '#fxa-why-connect-another-device-header',
  },
  TOTP: {
    CANCEL_BUTTON: '.totp-cancel',
    CONFIRM_CODE_BUTTON: '.totp-confirm-code',
    CONFIRM_CODE_INPUT: '.totp-code',
    DELETE_BUTTON: '.totp-delete',
    MANUAL_CODE: '.code',
    MENU_BUTTON: '#totp-section .settings-unit-toggle',
    QR_CODE: '.qr-image',
    SHOW_CODE_LINK: '.show-code-link',
    STATUS_DISABLED: '.two-step-authentication .disabled',
    STATUS_ENABLED: '.two-step-authentication .enabled',
    UNLOCK_BUTTON: '.two-step-authentication .unlock-button',
    UNLOCK_REFRESH_BUTTON: '.two-step-authentication .refresh-verification-state',
    UNLOCK_SEND_VERIFY: '.two-step-authentication .send-verification-email',
  },
  TOTP_SIGNIN: {
    HEADER: '#fxa-totp-code-header',
    INPUT: '.totp-code',
    SUBMIT: 'button[type="submit"]',
  },

};
/*eslint-enable max-len*/
