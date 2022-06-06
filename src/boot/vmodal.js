import { boot } from "quasar/wrappers";
import { vfmPlugin } from "vue-final-modal";

export default boot(({ app }) => {
  app.use(
    vfmPlugin({
      key: "$vfm",
      componentName: "VueFinalModal",
      dynamicContainerName: "ModalsContainer",
    })
  );
});
