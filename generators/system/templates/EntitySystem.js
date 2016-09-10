'use strict';

let cxEntitySystem = require('complex-engine').cxEntitySystem;

/**
 *
 */
module.exports = class <%= name %>System extends cxEntitySystem
{
    constructor ()
    {
        super();
        this.components = [];
        this.tag = 'system.<%= name %>';
    }

    /**
     * @param  {cxEntity} entity
     * @param  {cxComponent[]} components
     */
    update (entity, components)
    {

    }
}
