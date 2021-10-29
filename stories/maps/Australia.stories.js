import { VectorMap } from "@react-jvectormap/core";
import { auMill, auMerc } from "@react-jvectormap/maps";
import { MapTemplate } from "../components/MapContainer/MapTemplate";

export default {
  title: "maps/Map/Australia",
  component: VectorMap,
  argTypes: {},
};

export const Miller = MapTemplate.bind({});
Miller.args = {
  map: auMill,
  fileName: "auMill",
};

export const Mercator = MapTemplate.bind({});
Mercator.args = {
  map: auMerc,
  fileName: "auMerc",
};
