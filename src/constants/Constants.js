'use strict';

const NetworkConstants = {


  RECIEVE_PRODUCTS:         'RECIEVE_PRODUCTS',
  RECIEVE_PRODUCTS_SUCCESS: 'RECIEVE_PRODUCTS_SUCCESS',
  RECIEVE_PRODUCTS_ERROR:   'RECIEVE_PRODUCTS_ERROR',

  RECIEVE_SERVICE_PART_PRODUCT:         'RECIEVE_SERVICE_PART_PRODUCT_SUCCESS',
  RECIEVE_SERVICE_PART_PRODUCT_SUCCESS: 'RECIEVE_SERVICE_PART_PRODUCT_SUCCESS',
  RECIEVE_SERVICE_PART_PRODUCT_ERROR:   'RECIEVE_SERVICE_PART_PRODUCT_ERROR',

  TOGGLE_EXPAND:            'TOGGLE_EXPAND',
  SELECT_PRODUCT:           'SELECT_PRODUCT',
  CLEAR_PRODUCTS:           'CLEAR_PRODUCTS',

  /*
  * Login
  */
  LOG_IN:  'LOG_IN',
  LOG_OUT: 'LOG_OUT',

  /**
  * Configuration
  */
  RECIEVE_CONFIGURATIONS:         'RECIEVE_CONFIGURATIONS',
  RECIEVE_CONFIGURATIONS_SUCCESS: 'RECIEVE_CONFIGURATIONS_SUCCESS',
  RECIEVE_CONFIGURATIONS_ERROR:   'RECIEVE_CONFIGURATIONS_ERROR',

  /**
  * Configuration details
  */
  RECIEVE_CONFIGURATION_DETAILS:         'RECIEVE_CONFIGURATION_DETAILS',
  RECIEVE_CONFIGURATION_DETAILS_ERROR:   'RECIEVE_CONFIGURATION_DETAILS_ERROR',
  RECIEVE_CONFIGURATION_DETAILS_SUCCESS: 'RECIEVE_CONFIGURATION_DETAILS_SUCCESS',

  /**
  * Categories
  */
  FETCH_CATEGORY:         'FETCH_CATEGORY',
  FETCH_CATEGORY_SUCCESS: 'FETCH_CATEGORY_SUCCESS',
  FETCH_CATEGORY_ERROR:   'FETCH_CATEGORY_ERROR',

  /**
  * Stock items
  */
  RECIEVE_STOCK_ITEMS:          'RECIEVE_STOCK_ITEMS',
  RECIEVE_STOCK_ITEMS_SUCCESS:  'RECIEVE_STOCK_ITEMS_SUCCESS',
  RECIEVE_STOCK_ITEMS_ERROR:    'RECIEVE_STOCK_ITEMS_ERROR',

  /**
  * Events
  */
  RECIEVE_EVENTS:         'RECIEVE_EVENTS',
  RECIEVE_EVENTS_SUCCESS: 'RECIEVE_EVENTS_SUCCESS',
  RECIEVE_EVENTS_ERROR:   'RECIEVE_EVENTS_ERROR',

  /**
  * Event details
  */
  RECIEVE_EVENT_DETAILS:         'RECIEVE_EVENT_DETAILS',
  RECIEVE_EVENT_DETAILS_SUCCESS: 'RECIEVE_EVENT_DETAILS_SUCCESS',
  RECIEVE_EVENT_DETAILS_ERROR:   'RECIEVE_EVENT_DETAILS_ERROR',

  /**
  * Orders
  */
  RECIEVE_ORDERS:          'RECIEVE_ORDERS',
  RECIEVE_ORDERS_SUCCESS:  'RECIEVE_ORDERS_SUCCESS',
  RECIEVE_ORDERS_ERROR:    'RECIEVE_ORDERS_ERROR',

  /**
  * Order details
  */
  RECIEVE_ORDER:          'RECIEVE_ORDER',
  RECIEVE_ORDER_SUCCESS:  'RECIEVE_ORDER_SUCCESS',
  RECIEVE_ORDER_ERROR:    'RECIEVE_ORDER_ERROR',

  /**
  * Order problems
  */
  RECIEVE_ORDER_PROBLEMS:         'RECIEVE_ORDER_PROBLEMS',
  RECIEVE_ORDER_PROBLEMS_SUCCESS: 'RECIEVE_ORDER_PROBLEMS_SUCCESS',
  RECIEVE_ORDER_PROBLEMS_ERROR:   'RECIEVE_ORDER_PROBLEMS_ERROR',

  /**
  * Post new order
  */
  POST_ORDER:          'POST_ORDER',
  POST_ORDER_SUCCESS:  'POST_ORDER_SUCCESS',
  POST_ORDER_ERROR:    'POST_ORDER_ERROR',

  /**
  * Categories for stock items
  */
  RECEIVE_CATEGORIES_FOR_STOCK:         'RECEIVE_CATEGORIES_FOR_STOCK',
  RECEIVE_CATEGORIES_FOR_STOCK_SUCCESS: 'RECEIVE_CATEGORIES_FOR_STOCK_SUCCESS',
  RECEIVE_CATEGORIES_FOR_STOCK_ERROR:   'RECEIVE_CATEGORIES_FOR_STOCK_ERROR',

  /**
  * Stock items for category
  */
  RECEIVE_STOCK_ITEMS_FOR_CATEGORY:         'RECEIVE_STOCK_ITEMS_FOR_CATEGORY',
  RECEIVE_STOCK_ITEMS_FOR_CATEGORY_SUCCESS: 'RECEIVE_STOCK_ITEMS_FOR_CATEGORY_SUCCESS',
  RECEIVE_STOCK_ITEMS_FOR_CATEGORY_ERROR:   'RECEIVE_STOCK_ITEMS_FOR_CATEGORY_ERROR',

  /**
  * Check stock availability
  */
  RECEIVE_STOCK_AVAILABILITY:         'RECEIVE_STOCK_AVAILABILITY',
  RECEIVE_STOCK_AVAILABILITY_SUCCESS: 'RECEIVE_STOCK_AVAILABILITY_SUCCESS',
  RECEIVE_STOCK_AVAILABILITY_ERROR:   'RECEIVE_STOCK_AVAILABILITY_ERROR',

};

const OrderWizardConstants = {

  SET_CONFIGURATION: 'OW/SET_CONFIGURATION',
  REMOVE_SELECTED_CONFIGURATION: 'OW/REMOVE_SELECTED_CONFIGURATION',

  SET_EVENT: 'OW/SET_EVENT',
  REMOVE_SELECTED_EVENT: 'OW/REMOVE_SELECTED_EVENT',

  SET_GRAPHICS_SET: 'OW/SET_GRAPHICS_SET',

  ADD_TO_RENATAL: 'OW/ADD_TO_RENATAL',
  REMOVE_FROM_RENTAL: 'OW/REMOVE_FROM_RENTAL',

  ADD_NECESSARY_TO_RENTED: 'OW/ADD_NECESSARY_TO_RENTED',

  ADD_ALL_STOCK_ITEM_BY_CATEGORY: 'OW/ADD_ALL_STOCK_ITEM_BY_CATEGORY',

  SET_STOCK_ITEM_IN_CATEGORY: 'OW/SET_STOCK_ITEM_IN_CATEGORY',

  UPDATE_RENTAL_MODAL: 'OW/UPDATE_RENTAL_MODAL',

  ADD_SELECTED_OPTION_FROM_OPTIONS: 'OW/ADD_SELECTED_OPTION_FROM_OPTIONS',
  SET_RENTAL_FILTER: 'OW/SET_RENTAL_FILTER',
  SET_REVIEW_FILTER: 'OW/SET_REVIEW_FILTER',

  SHOW_RENTAL_MODAL: 'OW/SHOW_RENTAL_MODAL',

  UPDATE_RENTALS_FROM_MODAL: 'OW/UPDATE_RENTALS_FROM_MODAL',

  SET_STATE_IN_MODAL_IN_RENTAL: 'OW/SET_STATE_IN_MODAL_IN_RENTAL',
  SET_DATA_IN_MODAL_RENTAL: 'OW/SET_DATA_IN_MODAL_RENTAL' ,
  ADD_TO_RESERVED_FOR_INVENTORY: 'OW/ADD_TO_RESERVED_FOR_INVENTORY'
};

export { NetworkConstants, OrderWizardConstants };
