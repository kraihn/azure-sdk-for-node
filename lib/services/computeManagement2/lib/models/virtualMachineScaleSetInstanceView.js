/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.13.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the VirtualMachineScaleSetInstanceView class.
 * @constructor
 * The instance view of a virtual machine scale set.
 * @member {object} [virtualMachine] Gets the instance view status summary for
 * the virtual machine scale set.
 * 
 * @member {array} [virtualMachine.statusesSummary] Gets the extensions
 * information.
 * 
 * @member {array} [extensions] Gets the extensions information.
 * 
 * @member {array} [statuses] Gets or sets the resource status information.
 * 
 */
function VirtualMachineScaleSetInstanceView(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.virtualMachine) {
      this.virtualMachine = new models['VirtualMachineScaleSetInstanceViewStatusesSummary'](parameters.virtualMachine);
    }
    if (parameters.extensions) {
      var tempParametersextensions = [];
      parameters.extensions.forEach(function(element) {
        if (element) {
          element = new models['VirtualMachineScaleSetVMExtensionsSummary'](element);
        }
        tempParametersextensions.push(element);
      });
      this.extensions = tempParametersextensions;
    }
    if (parameters.statuses) {
      var tempParametersstatuses = [];
      parameters.statuses.forEach(function(element1) {
        if (element1) {
          element1 = new models['InstanceViewStatus'](element1);
        }
        tempParametersstatuses.push(element1);
      });
      this.statuses = tempParametersstatuses;
    }
  }    
}


/**
 * Validate the payload against the VirtualMachineScaleSetInstanceView schema
 *
 * @param {JSON} payload
 *
 */
VirtualMachineScaleSetInstanceView.prototype.serialize = function () {
  var payload = {};
  if (this['virtualMachine']) {
    payload['virtualMachine'] = this['virtualMachine'].serialize();
  }

  if (util.isArray(this['extensions'])) {
    payload['extensions'] = [];
    for (var i = 0; i < this['extensions'].length; i++) {
      if (this['extensions'][i]) {
        if (payload['extensions'] === null || payload['extensions'] === undefined) {
          payload['extensions'] = {};
        }
        payload['extensions'][i] = this['extensions'][i].serialize();
      }
    }
  }

  if (util.isArray(this['statuses'])) {
    payload['statuses'] = [];
    for (var i1 = 0; i1 < this['statuses'].length; i1++) {
      if (this['statuses'][i1]) {
        if (payload['statuses'] === null || payload['statuses'] === undefined) {
          payload['statuses'] = {};
        }
        payload['statuses'][i1] = this['statuses'][i1].serialize();
      }
    }
  }

  return payload;
};

/**
 * Deserialize the instance to VirtualMachineScaleSetInstanceView schema
 *
 * @param {JSON} instance
 *
 */
VirtualMachineScaleSetInstanceView.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['virtualMachine']) {
      this['virtualMachine'] = new models['VirtualMachineScaleSetInstanceViewStatusesSummary']().deserialize(instance['virtualMachine']);
    }

    if (instance['extensions']) {
      var tempInstanceextensions = [];
      instance['extensions'].forEach(function(element2) {
        if (element2) {
          element2 = new models['VirtualMachineScaleSetVMExtensionsSummary']().deserialize(element2);
        }
        tempInstanceextensions.push(element2);
      });
      this['extensions'] = tempInstanceextensions;
    }

    if (instance['statuses']) {
      var tempInstancestatuses = [];
      instance['statuses'].forEach(function(element3) {
        if (element3) {
          element3 = new models['InstanceViewStatus']().deserialize(element3);
        }
        tempInstancestatuses.push(element3);
      });
      this['statuses'] = tempInstancestatuses;
    }
  }

  return this;
};

module.exports = VirtualMachineScaleSetInstanceView;