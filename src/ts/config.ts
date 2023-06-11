export default {
  scene: {
    websceneItemId: "fbcf15a280544502a0390be05d9c9dde"
  },
  data: {
    trailsServiceUrl: "https://services.arcgis.com/e1pS810f3WpYRd0K/arcgis/rest/services/trails/FeatureServer/0",
    trailAttributes: {
      name: "Name",
      id: "RouteId",
      difficulty: "Difficulty",
      walktime: "Hiketime",
      status: "Access",
      ascent: "Ascent",
      description: "Description"
    },
    filterOptions: {
      singleChoice: ["difficulty", "status"], // have string values
      range: ["walktime", "ascent"] // have numeric values
    }
  },
  colors: {
    defaultTrail: "#7a2d2d",
    selectedTrail: "#f9a352"
  }
};