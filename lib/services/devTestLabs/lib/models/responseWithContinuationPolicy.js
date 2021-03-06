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
 * The response of a list operation.
 */
class ResponseWithContinuationPolicy extends Array {
  /**
   * Create a ResponseWithContinuationPolicy.
   * @member {string} [nextLink] Link for next set of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ResponseWithContinuationPolicy
   *
   * @returns {object} metadata of ResponseWithContinuationPolicy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResponseWithContinuation[Policy]',
      type: {
        name: 'Composite',
        className: 'ResponseWithContinuationPolicy',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PolicyElementType',
                  type: {
                    name: 'Composite',
                    className: 'Policy'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ResponseWithContinuationPolicy;
