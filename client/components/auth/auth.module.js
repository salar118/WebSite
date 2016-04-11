'use strict';

angular.module('webSiteApp.auth', [
  'webSiteApp.constants',
  'webSiteApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
