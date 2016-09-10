'use strict';

var cxScene = require('complex-engine-scene');
var cxEntity = require('complex-engine-entity');

class MainScene extends cxScene {
    constructor() {
        super("MainScene");
    }

    load() {
        this.world.initSystems();
    }
}

module.exports = MainScene;
