'use strict';

/**
 * data-checkout service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::data-checkout.data-checkout');
