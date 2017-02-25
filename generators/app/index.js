'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Hi, you\'re about to create a new '+chalk.green('COMPLEXJS')+' project'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Name your project',
      default : this.appname // Default to current folder name
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath(this.props.name+'/package.json'),
      {
        name : this.props.name
      }
    );

    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath(this.props.name+'/index.html')
    );

    this.fs.copy(
      this.templatePath('gulpfile.js'),
      this.destinationPath(this.props.name+'/gulpfile.js')
    );

    this.fs.copy(
      this.templatePath('src/App.js'),
      this.destinationPath(this.props.name+'/src/App.js')
    );

    this.fs.copy(
      this.templatePath('src/Scene/MainScene.js'),
      this.destinationPath(this.props.name+'/src/Scene/MainScene.js')
    );
  }
});
