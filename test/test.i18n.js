/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
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

let assert = require('chai').assert;

describe('i18n', () => {

  it('translate trait name into english', (done) => {
    let i18n  = require('../src/i18n');
    i18n.setLocale('en');
    assert.equal(i18n.getLocale(), 'en');

    assert.equal(i18n.__('Agreeableness'), 'Agreeableness');
    assert.equal(i18n.getCatalog()['Neuroticism'], 'Emotional range');

    done();
  });

  it('translate trait name with unknown locale, defaults to English', (done) => {
    let i18n  = require('../src/i18n');
    i18n.setLocale('zz');
    assert.equal(i18n.getLocale(), 'zz');

    assert.equal(i18n.__('Agreeableness'), 'Agreeableness');
    assert.equal(i18n.getCatalog()['Neuroticism'], 'Emotional range');

    done();
  });

  it('translate trait name into spanish', (done) => {
    let i18n  = require('../src/i18n');
    i18n.setLocale('es');
    assert.equal(i18n.getLocale(), 'es');

    assert.equal(i18n.__('Agreeableness'), 'Amabilidad');
    assert.equal(i18n.getCatalog()['Neuroticism'], 'Rango emocional');

    done();
  });

});
