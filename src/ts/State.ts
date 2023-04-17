import Accessor = require("esri/core/Accessor");
import SceneView = require("esri/views/SceneView");
import Graphic = require("esri/Graphic");
import { Device, Trail } from "./types";
import { subclass, declared, property } from "esri/core/accessorSupport/decorators";

@subclass()
export default class State extends Accessor {

  @property()
  displayLoading: boolean = true;

  @property()
  selectedTrailId: number = null;

  @property()
  selectedTrail: Trail = null;

  setSelectedTrail(id: number) {
    this.selectedTrailId = id;
    this.selectedTrail = this.trails.filter((trail: Trail) => {
      return (trail.id === id);
    })[0];

    if (this.selectedTrailId && this.visiblePanel !== "detailPanel") {
      this.visiblePanel = "detailPanel";
    }
  }

  @property()
  filteredTrailIds: Array<number> = [];
  setFilteredTrailIds(ids: Array<number>) {
    this.filteredTrailIds = ids;
    // deselect trail if it is in the filtered out trails
    if (this.filteredTrailIds.indexOf(this.selectedTrailId) === -1) {
      this.selectedTrailId = null;
    }
  }

  @property()
  filters = {};
  setFilter(property: string, value: string | Array<number>): void {
    this.filters = {
      ...this.filters
    };
    this.filters[property] = value;
  }

  @property()
  visiblePanel: "selectionPanel" | "detailPanel" | "basemapPanel";

  @property()
  device: Device = null;

  @property()
  currentBasemapId: string = null;

  @property()
  view: SceneView = null;

  @property()
  trails: Array<Trail> = null;

  @property()
  online: boolean = true;
}
