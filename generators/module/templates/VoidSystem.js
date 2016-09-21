'use strict';

let cxVoidSystem = require('complex-engine').cxVoidSystem;

module.exports = class <%= name %>System extends cxVoidSystem
{
    constructor( container, width, height )
    {
        super();
        this.tag = '<%= name %>.system';
    }

    /**
     * Called when a entity is added
     * @param  {cxEntity} cxEntity [description]
     */
    added ( cxEntity ){

    }

    /**
     * Called when a entity is removed
     * @param {cxENtity} cxEntity
     */
    removed(cxEntity){

    }

    /**
     * [update description]
     */
    update ()
    {

    }
}
