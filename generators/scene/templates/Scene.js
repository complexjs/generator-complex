'use strict';

let cxScene = require('complex-engine').cxScene;
let cxEntity = require('complex-engine').cxEntity;

class MainScene extends cxScene {
    constructor() {
        super("MainScene");
    }

    load() {
        this.world.initSystems();
    }
}

module.exports = MainScene;
