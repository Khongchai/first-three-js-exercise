import * as THREE from "three";
import * as dat from "dat.gui";
import { AmbientLight, PerspectiveCamera, PointLight } from "three";

type ObjectsForTesting = {
  camera: PerspectiveCamera;
  ambientLight: AmbientLight;
  pointLight: PointLight;
};

export const enableTestEnv = (objectsForTesting: ObjectsForTesting) => {
  const { camera, ambientLight, pointLight } = objectsForTesting;
  const gui = new dat.GUI();

  const cameraFolder = gui.addFolder("Camera");
  cameraFolder.add(camera, "fov", 1, 100, 0.1);
  cameraFolder.add(camera, "near", 0, 100, 0.1);
  cameraFolder.add(camera, "far", 40, 400, 0.1);

  const lightFolder = gui.addFolder("Light");
  lightFolder
    .add(ambientLight, "intensity", 0, 1, 0.01)
    .name("ambientLightIntensity");
  lightFolder.add(pointLight.position, "x", 0, 100, 0.01);
  lightFolder.add(pointLight.position, "z", 0, 100, 0.01);
  lightFolder.add(pointLight.position, "y", 0, 100, 0.01);
  const axesHelper = new THREE.AxesHelper(5);
  return [axesHelper];
};
