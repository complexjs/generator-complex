'use strict';

var cxVoidSystem = require('complex-engine').cxVoidSystem;

class <%= name %>System extends cxVoidSystem
{
    constructor( container, width, height )
    {
        super();
        this.tag = 'system.<%= name %>';
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

module.exports = <%= name %>System;
