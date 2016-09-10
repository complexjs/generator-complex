'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Create new '+chalk.bgBlue('complexjs')+' module'
    ));

    var prompts = [
        {
            type: 'input',
            name: 'Name',
            message: 'Name'
        },
        {
            type: 'input',
            name: 'modulepath',
            message: 'Where to store your modules',
            default: this.config.get('modules_path') || "./modules"
        },
        {
            type:'list',
            name: "type",
            message:"Choose system kind",
            choices:['void', 'entity', 'none']
        }

    ];

    return this.prompt(prompts).then(function (props) {
     this.config.set('modules_path', props.modulepath);
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
            this.destinationPath(this.props.modulepath+"/System/"+this.props.name+'.js'),
            {
                name : this.props.name
            }
        );

        this.fs.copyTpl(
            this.templatePath("Component.js"),
            this.destinationPath(this.props.modulepath+"/Component/"+this.props.name+'.js'),
            {
                name : this.props.name
            }
        );
    },

});
