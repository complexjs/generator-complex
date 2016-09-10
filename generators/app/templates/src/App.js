'use strict';

var Complex = require('complex-engine');
var MainScene = require('./Scene/MainScene');

let cx = new Complex();
window.onload = function() {
    let scene = new MainScene();
    cx.loadScene(scene);

    run();
}

function run() {
    // shim layer with setTimeout fallback
    window.requestAnimFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    (function loop() {
        requestAnimFrame(loop);
        cx.update();
    })();
}
