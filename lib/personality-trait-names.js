/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';


const _ = require('underscore'),
  extend = _.extend,
  pick   = _.pick,
  pairs  = _.pairs;

const I18nData = require('./i18n');


module.exports = class {

  constructor(options) {
    this._options = extend(this.defaultOptions(), pick(options, 'locale'));
    this._i18n = new I18nData(this._options.locale);
    this._data = this._i18n.data();
  }

  defaultOptions() {
    return {
      locale : 'en'
    };
  }

  name(traitId) {
    return this._data[traitId];
  }

  names() {
    return pairs(this._data).map(p => p[1]);
  }

};