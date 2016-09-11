'use strict';

var cxScene = require('complex-engine').cxScene;
var cxEntity = require('complex-engine').cxEntity;

class MainScene extends cxScene {
    constructor() {
        super("MainScene");
    }

    load() {
        this.world.initSystems();
    }
}

module.exports = MainScene;
