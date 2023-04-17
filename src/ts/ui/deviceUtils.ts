import { State, Device } from "../types";

const mqDesktop = window.matchMedia("(min-width: 601px)");

function getMedia(): Device  {
  if (mqDesktop.matches) {
    return "desktop";
  }
  return "mobilePortrait";
}

export default {
  init(state: State) {
    state.device = getMedia();
    mqDesktop.addEventListener("change", () => {
      const media: Device = getMedia();
      state.device = media;
    });
  }
};
