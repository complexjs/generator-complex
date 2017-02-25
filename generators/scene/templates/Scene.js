'use strict';

let cxScene = require('complex-engine').cxScene;
let cxEntity = require('complex-engine').cxEntity;

class <%= name %> extends cxScene {
    constructor() {
        super("<%= name %>");
    }

    load() {
        this.world.initSystems();
    }
}

module.exports = MainScene;
