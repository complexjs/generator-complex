'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
    prompting: function () {
        // Have Yeoman greet the user.
        this.log(yosay(
            'Create new '+chalk.bgBlue('complexjs')+' component'
        ));

        var prompts = [
            {
                type: 'input',
                name: 'name',
                message: 'Name'
            },
            {
                type: 'input',
                name: 'componentspath',
                message: 'Where to store your component',
                default: this.config.get('componentspath') || "./src/Components"
            }
        ];

        return this.prompt(prompts).then(function (props) {
            this.config.set('componentspath', props.componentspath);
            this.props = props;
        }.bind(this));
    },

    writing: function () {

        this.fs.copyTpl(
            this.templatePath('Component.js'),
            this.destinationPath(this.props.componentspath+"/"+this.props.name+'.js'),
            {
                name : this.props.name
            }
        );
    },

});
