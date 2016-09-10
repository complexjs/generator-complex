'use strict';

let cxComponent = require('complex-engine').cxComponent

/**
 *
 */
module.exports =  class <%= name %>Component extends cxComponent
{
    /**
     * @param  {cxScript} script [description]
     */
    constructor ( script )
    {
        super()
        this.tag = 'component.<%= name %>';

    }
}
