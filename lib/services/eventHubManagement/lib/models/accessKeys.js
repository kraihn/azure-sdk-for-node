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
 * Namespace/EventHub Connection String
 *
 */
class AccessKeys {
  /**
   * Create a AccessKeys.
   * @member {string} [primaryConnectionString] Primary connection string of
   * the created namespace AuthorizationRule.
   * @member {string} [secondaryConnectionString] Secondary connection string
   * of the created namespace AuthorizationRule.
   * @member {string} [aliasPrimaryConnectionString] Primary connection string
   * of the alias if GEO DR is enabled
   * @member {string} [aliasSecondaryConnectionString] Secondary  connection
   * string of the alias if GEO DR is enabled
   * @member {string} [primaryKey] A base64-encoded 256-bit primary key for
   * signing and validating the SAS token.
   * @member {string} [secondaryKey] A base64-encoded 256-bit primary key for
   * signing and validating the SAS token.
   * @member {string} [keyName] A string that describes the AuthorizationRule.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AccessKeys
   *
   * @returns {object} metadata of AccessKeys
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AccessKeys',
      type: {
        name: 'Composite',
        className: 'AccessKeys',
        modelProperties: {
          primaryConnectionString: {
            required: false,
            readOnly: true,
            serializedName: 'primaryConnectionString',
            type: {
              name: 'String'
            }
          },
          secondaryConnectionString: {
            required: false,
            readOnly: true,
            serializedName: 'secondaryConnectionString',
            type: {
              name: 'String'
            }
          },
          aliasPrimaryConnectionString: {
            required: false,
            readOnly: true,
            serializedName: 'aliasPrimaryConnectionString',
            type: {
              name: 'String'
            }
          },
          aliasSecondaryConnectionString: {
            required: false,
            readOnly: true,
            serializedName: 'aliasSecondaryConnectionString',
            type: {
              name: 'String'
            }
          },
          primaryKey: {
            required: false,
            readOnly: true,
            serializedName: 'primaryKey',
            type: {
              name: 'String'
            }
          },
          secondaryKey: {
            required: false,
            readOnly: true,
            serializedName: 'secondaryKey',
            type: {
              name: 'String'
            }
          },
          keyName: {
            required: false,
            readOnly: true,
            serializedName: 'keyName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AccessKeys;
