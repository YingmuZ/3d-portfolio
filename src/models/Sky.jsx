import { useGLTF } from "@react-three/drei";

import skyScene from "../assets/3d/sky.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function Sky() {
  const sky = useGLTF(skyScene);

  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  // It ensures smooth animations by making the rotation frame rate-independent.
  // 'delta' represents the time in seconds since the last frame.

  return (
    <mesh>
      <primitive object={sky.scene} />
    </mesh>
  );
}

export default Sky;
