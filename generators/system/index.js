'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
    prompting: function () {
        // Have Yeoman greet the user.
        this.log(yosay(
            'Create new complexjs module'
        ));

        var prompts = [
            {
                type: 'input',
                name: 'name',
                message: 'Name'
            },
            {
                type: 'input',
                name: 'sourcepath',
                message: 'Where to store your modules',
                default: this.config.get('sourcepath') || "./src"
            },
            {
                type:'list',
                name: "type",
                message:"Choose system kind",
                choices:['void', 'entity', 'none']
            }
        ];

        return this.prompt(prompts).then(function (props) {
            this.config.set('sourcepath', props.sourcepath);
            this.props = props;
        }.bind(this));
    },

    writing: function () {
        var template = "";
        if(this.props.type === 'void'){
            template = 'VoidSystem.js'
        }
        if(this.props.type === 'entity'){
            template = 'EntitySystem.js'
        }

        this.fs.copyTpl(
            this.templatePath(template),
            this.destinationPath(this.props.sourcepath+"/System/"+this.props.name+'.js'),
            {
                name : this.props.name
            }
        );
    },

});
