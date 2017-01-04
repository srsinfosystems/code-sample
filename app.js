// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('RessClub', ['ionic', 'RessClub.controllers','pascalprecht.translate',"ionic-multiselect","ion-datetime-picker","ngCordova"])

.config(function($stateProvider, $urlRouterProvider, $translateProvider,$ionicConfigProvider) {
        $ionicConfigProvider.views.swipeBackEnabled(false);
        $translateProvider.translations('en', {
            HEADER_NAV: "BLAIZ",
            MY_ACCOUNT: "MY ACCOUNT",
            COMMUNICATION_AND_ORDERS: "COMMUNICATION AND ORDERS",
            NEW_ORDERS: "NEW ORDERS",
            MANEGE_PRODUCTS: "MANEGE PRODUCTS",
            MY_PRODUCTS: "MY PRODUCTS",
            ADD_VIDEO :"UPLOAD VIDEO",
            PRODUCTS: "PRODUCTS",
            MY_DONATIONS: "MY DONATIONS",
            DONATIONS: "DONATIONS",
            PROFILE_SETTING_AND_OPENING_HOURS: "PROFILE SETTING AND OPENING HOURS",
            SWITCH_STORE :"MY STORES",
            RESPONSE_SETTING: "RESPONSE SETTINGS",
            SEARCH: "SEARCH",
            NEW_RESERVATIONS: "NEW RESERVATIONS",
            PENDING_SUGGESTIONS: "PENDING SUGGESTIONS",
            RESERVATIONS: "RESERVATIONS",
            REJECTS: "REJECTS",
            NAME: "NAME",
            MAIL: "E-MAIL",
            PHONE: "PHONE",
            PERSON: "PERSONS",
            RESERVATION_DATE: "RESERVATION DATE",
            TIME: "TIME",
            ACCEPT: "ACCEPT",
            NEW_SUGGESTION: "NEW SUGGESTION",
            EDIT: "EDIT",
            REJECT: "REJECT",
            reject_placeholder: "TYPE OR SELECT YOUR COMMENT",
            SEND: "SEND",
            CHANGE_THE_NAME: "CHANGE THE NAME",
            CHANGE_THE_MAIL: "CHANGE THE MAIL",
            CHANGE_THE_PHONE: "CHANGE THE PHONE",
            CHANGE_THE_AMOUNT: "CHANGE THE AMOUNT",
            CHANGE_DATE_OR_TIME: "CHANGE DATE OR TIME",
            DAY: "DAY",
            MONTH: "MONTH",
            YEAR: "YEAR",
            HOUR: "HOUR",
            MINUTE: "MINUTE",
            SELECT_NEW_DATE_SUGGESTION: "SELECT NEW DATE SUGGESTION",
            RESPONS: "RESPONS",
            DONT_HAVE_TABLE_LEFT: "I AM SORRY WE DONT HAVE TABLES LEFT",
            DONT_HAVE_TABLE_LEFT_AT_MOMENT: "I AM SORRY WE DONT HAVE ON THIS TIME TABLE LEFT, IS IT POSSIBLE AT:",
            TODAY_FULLY_BOOKED: "TODAY WE ARE FULLY BOOKED, IS IT POSSIBLE FOR YOU TO COME TOMMOROW?",
            MESSAGE: "MESSAGE",
            REJECT_MESSAGE: "REJECT MESSAGE",
            ADD_PRODUCT: "ADD PRODUCT",
            ADVACE_SETTING: "ADVANCED SETTINGS",
            TITLE:"TITLE",
            PRICE:"PRICE",
            CATEGORY:"CATEGORY",
            ADD_PHOTO:"ADD PHOTO",
            DESCRIPTION:"DESCRIPTION",
            SKU:"SKU",
            STOCK:"STOCK",
            SALE_PRICE:"SALE PRICE",
            PROFILE_SETTINGS:"PROFILE SETTINGS",
            OPENING_HOURS:"OPENING HOURS",
            COMPANY_NAME:"COMPANY NAME",
            STREET:"STREET",
            ZIPCODE:"ZIPCODE",
            STATE:"STATE",
            SHORT_DESC:"SHORT DESCRIPTION OF YOUR COMPANY",
            LONG_DESC:"LONG DESCRIPTION OF YOUR COMPANY",
            OPEN:"OPEN",
            CLOSED:"CLOSED",
            MONDAY:"MONDAY",
            TUESDAY:"TUESDAY",
            WEDNESDAY:"WEDNESDAY",
            THURSDAY:"THURSDAY",
            FRIDAY:"FRIDAY",
            SATURDAY:"SATURDAY",
            SUNDAY:"SUNDAY",
            NEW_VIDEOS:"NEW VIDEO'S",
            PENDING_VIDEOS:"PENDING VIDEO'S",
            VIDEOS:"VIDEO'S",
            OPENING_HOURS_NOTES:"OPENING HOURS NOTES",
            PLACE_NOTES:"PLACE YOUR NOTES"
        });
        $translateProvider.translations('dt', {
            HEADER_NAV: "BLAIZ",
            MY_ACCOUNT: "asdasdsd",
            COMMUNICATION_AND_ORDERS: "",
            NEW_ORDERS: "",
            MANEGE_PRODUCTS: "",
            MY_PRODUCTS: "MY PRODUCTS",
            PRODUCTS: "",
            MY_DONATIONS: "",
            DONATIONS: "",
            PROFILE_SETTING_AND_OPENING_HOURS: "",
            SWITCH_STORE :"MY STORES",
            RESPONSE_SETTING: "",
            SEARCH: "",
            NEW_RESERVATIONS: "",
            PENDING_SUGGESTIONS: "",
            RESERVATIONS: "",
            REJECTS: "",
            NAME: "",
            MAIL: "",
            PHONE: "",
            PERSON: "",
            RESERVATION_DATE: "",
            TIME: "",
            ACCEPT: "",
            NEW_SUGGESTION: "",
            EDIT: "",
            REJECT: "",
            reject_placeholder: "",
            SEND: "",
            CHANGE_THE_NAME: "",
            CHANGE_THE_MAIL: "",
            CHANGE_THE_PHONE: "",
            CHANGE_THE_AMOUNT: "",
            CHANGE_DATE_OR_TIME: "",
            DAY: "",
            MONTH: "",
            YEAR: "",
            HOUR: "",
            MINUTE: "",
            SELECT_NEW_DATE_SUGGESTION: "",
            RESPONS: "",
            DONT_HAVE_TABLE_LEFT: "",
            DONT_HAVE_TABLE_LEFT_AT_MOMENT:"",
            TODAY_FULLY_BOOKED:"",
            MESSAGE: "",
            REJECT_MESSAGE: "",
            ADD_PRODUCT:"",
            ADVACE_SETTING: "",
            TITLE:"",
            PRICE:"",
            CATEGORY:"",
            ADD_PHOTO:"",
            DESCRIPTION:"",
            SKU:"",
            STOCK:"",
            SALE_PRICE:"",
            PROFILE_SETTINGS:"",
            OPENING_HOURS:"",
            COMPANY_NAME:"",
            STREET:"",
            ZIPCODE:"",
            STATE:"",
            SHORT_DESC:"",
            LONG_DESC:"",
            OPEN:"",
            CLOSED:"",
            MONDAY:"",
            TUESDAY:"",
            WEDNESDAY:"",
            THURSDAY:"",
            FRIDAY:"",
            SATURDAY:"",
            SUNDAY:"",
            NEW_VIDEOS:"",
            PENDING_VIDEOS:"",
            VIDEOS:"",
            OPENING_HOURS_NOTES:"",
            PLACE_NOTES:""

        });
        $translateProvider.preferredLanguage("en");
        $translateProvider.fallbackLanguage("en");
    })

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.factory('$exceptionHandler', function($injector) {
    return function(exception, cause) {
        console.log(["Custome Error:-",exception,cause]);
       /* var $rootScope = $injector.get("$rootScope");
        $rootScope.errors = $rootScope.errors || [];
        $rootScope.errors.push(exception.message);*/
    };
});



 
