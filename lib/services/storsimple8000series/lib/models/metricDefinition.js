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
 * The monitoring metric definition.
 *
 */
class MetricDefinition {
  /**
   * Create a MetricDefinition.
   * @member {object} [name] The metric name.
   * @member {string} [name.value] The metric name.
   * @member {string} [name.localizedValue] The localized metric name.
   * @member {string} [unit] The metric unit. Possible values include: 'Bytes',
   * 'BytesPerSecond', 'Count', 'CountPerSecond', 'Percent', 'Seconds'
   * @member {string} [primaryAggregationType] The metric aggregation type.
   * Possible values include: 'Average', 'Last', 'Maximum', 'Minimum', 'None',
   * 'Total'
   * @member {string} [resourceId] The metric source ID.
   * @member {array} [metricAvailabilities] The available metric granularities.
   * @member {array} [dimensions] The available metric dimensions.
   * @member {string} [category] The category of the metric.
   * @member {string} [type] The metric definition type.
   */
  constructor() {
  }

  /**
   * Defines the metadata of MetricDefinition
   *
   * @returns {object} metadata of MetricDefinition
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MetricDefinition',
      type: {
        name: 'Composite',
        className: 'MetricDefinition',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'Composite',
              className: 'MetricName'
            }
          },
          unit: {
            required: false,
            serializedName: 'unit',
            type: {
              name: 'Enum',
              allowedValues: [ 'Bytes', 'BytesPerSecond', 'Count', 'CountPerSecond', 'Percent', 'Seconds' ]
            }
          },
          primaryAggregationType: {
            required: false,
            serializedName: 'primaryAggregationType',
            type: {
              name: 'Enum',
              allowedValues: [ 'Average', 'Last', 'Maximum', 'Minimum', 'None', 'Total' ]
            }
          },
          resourceId: {
            required: false,
            serializedName: 'resourceId',
            type: {
              name: 'String'
            }
          },
          metricAvailabilities: {
            required: false,
            serializedName: 'metricAvailabilities',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MetricAvailablityElementType',
                  type: {
                    name: 'Composite',
                    className: 'MetricAvailablity'
                  }
              }
            }
          },
          dimensions: {
            required: false,
            serializedName: 'dimensions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MetricDimensionElementType',
                  type: {
                    name: 'Composite',
                    className: 'MetricDimension'
                  }
              }
            }
          },
          category: {
            required: false,
            serializedName: 'category',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MetricDefinition;