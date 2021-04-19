import * as THREE from "three";

export function initArray(arraySize) {
  const textureLoader = new THREE.TextureLoader();
  const meshArray = [];
  for (let i = 0; i < arraySize; i++) {
    const geometry = new THREE.SphereGeometry(1, 20, 30);
    const material = new THREE.MeshStandardMaterial({
      side: THREE.DoubleSide,
      roughness: 0.45,
      metalness: 1,
    });
    const newBall = new THREE.Mesh(geometry, material);
    const arbitraryThreshold = 300;

    newBall.position.set(
      Math.floor(Math.random() * arbitraryThreshold - 100),
      Math.floor(Math.random() * arbitraryThreshold - 100),
      Math.floor(Math.random() * arbitraryThreshold - 140)
    );
    meshArray.push(newBall);
  }
  return meshArray;
}
