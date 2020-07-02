/**
 * http://schalkneethling.github.io/blog/2015/11/06/respect-user-choice-do-not-track/
 * https://github.com/schalkneethling/dnt-helper/blob/master/js/dnt-helper.js
 *
 * Returns true or false based on whether doNotTack is enabled. It also takes into account the
 * anomalies, such as !bugzilla 887703, which effect versions of Fx 31 and lower. It also handles
 * IE versions on Windows 7, 8 and 8.1, where the DNT implementation does not honor the spec.
 * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1217896 for more details
 * @params {string} [dnt] - An optional mock doNotTrack string to ease unit testing.
 * @params {string} [userAgent] - An optional mock userAgent string to ease unit testing.
 * @returns {boolean} true if enabled else false
 */
declare function _dntEnabled(dnt: any, userAgent: any): boolean;
