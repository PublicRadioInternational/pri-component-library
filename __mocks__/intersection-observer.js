/**
 * @file intersection-observer.js
 * Mocks the intersection observer polyfill.
 */
/* eslint-disable */
(function(window, document) {
  function IntersectionObserverEntry(entry) {}

  function IntersectionObserver(callback, opt_options) {}

  IntersectionObserver.prototype.observe = function() {};

  window.IntersectionObserver = IntersectionObserver;
  window.IntersectionObserverEntry = IntersectionObserverEntry;
})(window, document);
