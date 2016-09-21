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
            name: 'name',
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
            this.destinationPath(this.props.modulepath+"/"+this.props.name+"/System/System.js"),
            {
                name : this.props.name
            }
        );

        this.fs.copyTpl(
            this.templatePath("Component.js"),
            this.destinationPath(this.props.modulepath+"/"+this.props.name+"/Component/Component.js"),
            {
                name : this.props.name
            }
        );

        this.fs.copyTpl(
            this.templatePath("Module.js"),
            this.destinationPath(this.props.modulepath+"/"+this.props.name+"/Module.js"),
            {
                name : this.props.name
            }
        );

        this.fs.copyTpl(
            this.templatePath("package.json"),
            this.destinationPath(this.props.modulepath+"/"+this.props.name+"/package.json"),
            {
                name : this.props.name
            }
        );
    },

});
