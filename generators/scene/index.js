'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Create new '+chalk.bgBlue('complexjs')+' scene'
    ));

    var prompts = [
        {
            type: 'input',
            name: 'Name',
            message: 'Name'
        },
        {
            type: 'input',
            name: 'scenepath',
            message: 'Where to store your scene',
            default: this.config.get('scenepath') || "./src/Scene"
        },
    ];

    return this.prompt(prompts).then(function (props) {
     this.config.set('scenepath', props.scenepath);
      this.props = props;
    }.bind(this));
  },

    writing: function () {

        this.fs.copyTpl(
            this.templatePath('Scene.js'),
            this.destinationPath(this.props.scenepath+"/"+this.props.name+'.js'),
            {
                name : this.props.name
            }
        );
    },

});
