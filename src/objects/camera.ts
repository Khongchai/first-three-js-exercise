import * as THREE from "three";
export function getCameraAndSetPosition(
  fov: number,
  aspect: number,
  near: number,
  far: number,
  pos = { x: 0, y: 0, z: 0 }
) {
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(pos.x, pos.y, pos.z);
  return camera;
}
