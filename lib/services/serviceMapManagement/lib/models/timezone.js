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

/**
 * Describes a timezone.
 *
 */
class Timezone {
  /**
   * Create a Timezone.
   * @member {string} [fullName] Timezone full name.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Timezone
   *
   * @returns {object} metadata of Timezone
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Timezone',
      type: {
        name: 'Composite',
        className: 'Timezone',
        modelProperties: {
          fullName: {
            required: false,
            serializedName: 'fullName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Timezone;
