"use strict";

const composer = require('../../src/core/composer');
const MVPTheme = require('./MVPTheme');
const MVPPlugin = require('./MVPPlugin');

const unit = require('botbuilder-unit');

fdescribe('MVP Specification', function () {
  it('Test Hello World', (done) => {
    let settings = {
      name : 'HelloBot',
      apiEntryPoint : '/hello/api/messages'
    }
    let script = require('./script');
    let botApplication = composer.build( settings, MVPTheme, [MVPPlugin]);
    unit(botApplication.getBot(), script,{
      title : 'Testing Hello Wolrd script'
    }).then(done);
  })

});