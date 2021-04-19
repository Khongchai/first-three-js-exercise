import * as THREE from "three";
import { sizes } from "./values/sizes";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { initArray } from "./objects/meshArray";
import { enableTestEnv } from "./testing/enableTestEnv";
import { variables } from "./values/camera";
import { getCameraAndSetPosition } from "./objects/camera";

const scene = new THREE.Scene();
const meshArray = initArray(1000);

const camera = getCameraAndSetPosition(
  75,
  sizes.width / sizes.height,
  variables.camera.near,
  variables.camera.far,
  meshArray[0].position
);

const ambientLight = new THREE.AmbientLight("white", 0.5);
const pointLight = new THREE.PointLight("white", 0.5);

const canvas = document.querySelector("canvas.webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(sizes.width, sizes.height);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

const testObjects = enableTestEnv({ camera, ambientLight, pointLight });
window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
addAllToScene();
tick();

/////////////////functions/////////////////////////////////

function tick() {
  renderer.render(scene, camera);

  //requires because controls.enableDamping
  controls.update();

  camera.updateProjectionMatrix();

  requestAnimationFrame(tick);
}

function addAllToScene() {
  scene.add(ambientLight);
  scene.add(pointLight);
  meshArray.forEach((mesh) => {
    scene.add(mesh);
  });
  scene.add(camera);
  if (testObjects.length > 0) {
    for (let i = 0, length = testObjects.length; i < length; i++) {
      scene.add(testObjects[i]);
    }
  }
}
