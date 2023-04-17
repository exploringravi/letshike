import config from "../config";
import * as Polyline from "esri/geometry/Polyline";
import State from "../State";
export default class Trail {

  geometry: Polyline;
  state: State;

  constructor(feature, state) {

    this.geometry = feature.geometry;
    this.state = state;
    // add attribute data based on the mapping in the configuration file
    const attributeMap = config.data.trailAttributes;
    for (const prop in attributeMap) {
      this[prop] = feature.attributes[attributeMap[prop]];
    }

  }

}
