'use strict';

let cxComponent = require('complex-engine').cxComponent;

/**
 *
 */
module.exports =  class <%= name %>Component extends cxComponent
{
    constructor (  )
    {
        super()
        this.tag = 'component.<%= name %>';

    }
}
