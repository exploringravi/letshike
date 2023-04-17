import "../style/reset.scss";
import "../style/style.scss";

import esriConfig = require("esri/config");
esriConfig.request.useIdentity = false;

import State from "./State";
import deviceUtils from "./ui/deviceUtils";
import ConnectionManager from "./ui/ConnectionManager";
import SceneElement from "./scene/SceneElement";
import LoadingPage from "./ui/LoadingPage";
import trailManager from "./data/trailManager";
import MenuPanel from "./ui/MenuPanel";

import * as runtime from "serviceworker-webpack-plugin/lib/runtime";

if ("serviceWorker" in navigator) {
  runtime.register();
}

const state = new State();
deviceUtils.init(state);
new ConnectionManager(state);
new LoadingPage(state);
new SceneElement(state);

trailManager.initTrails(state)
  .then(() => {
    new MenuPanel(state);
  });
