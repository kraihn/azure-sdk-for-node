/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a JobCollectionProperties.
 */
class JobCollectionProperties {
  /**
   * Create a JobCollectionProperties.
   * @member {object} [sku] Gets or sets the SKU.
   * @member {string} [sku.name] Gets or set the SKU. Possible values include:
   * 'Standard', 'Free', 'P10Premium', 'P20Premium'
   * @member {string} [state] Gets or sets the state. Possible values include:
   * 'Enabled', 'Disabled', 'Suspended', 'Deleted'
   * @member {object} [quota] Gets or sets the job collection quota.
   * @member {number} [quota.maxJobCount] Gets or set the maximum job count.
   * @member {number} [quota.maxJobOccurrence] Gets or sets the maximum job
   * occurrence.
   * @member {object} [quota.maxRecurrence] Gets or set the maximum recurrence.
   * @member {string} [quota.maxRecurrence.frequency] Gets or sets the
   * frequency of recurrence (second, minute, hour, day, week, month). Possible
   * values include: 'Minute', 'Hour', 'Day', 'Week', 'Month'
   * @member {number} [quota.maxRecurrence.interval] Gets or sets the interval
   * between retries.
   */
  constructor() {
  }

  /**
   * Defines the metadata of JobCollectionProperties
   *
   * @returns {object} metadata of JobCollectionProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobCollectionProperties',
      type: {
        name: 'Composite',
        className: 'JobCollectionProperties',
        modelProperties: {
          sku: {
            required: false,
            serializedName: 'sku',
            type: {
              name: 'Composite',
              className: 'Sku'
            }
          },
          state: {
            required: false,
            serializedName: 'state',
            type: {
              name: 'Enum',
              allowedValues: [ 'Enabled', 'Disabled', 'Suspended', 'Deleted' ]
            }
          },
          quota: {
            required: false,
            serializedName: 'quota',
            type: {
              name: 'Composite',
              className: 'JobCollectionQuota'
            }
          }
        }
      }
    };
  }
}

module.exports = JobCollectionProperties;
