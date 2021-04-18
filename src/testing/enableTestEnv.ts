import * as THREE from "three";
import * as dat from "dat.gui";
import { PerspectiveCamera } from "three";

type ObjectsForTesting = {
  camera: PerspectiveCamera;
};

export const enableTestEnv = (objectsForTesting: ObjectsForTesting) => {
  const { camera } = objectsForTesting;
  const gui = new dat.GUI();
  gui.add(camera, "fov", 1, 100, 0.1);
  gui.add(camera, "near", 0, 100, 0.1);
  gui.add(camera, "far", 40, 400, 0.1);
  gui.add(camera, "focus", 5, 100, 0.1);

  const axesHelper = new THREE.AxesHelper(5);
  return [axesHelper];
};
