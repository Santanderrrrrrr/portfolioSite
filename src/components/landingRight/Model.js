import React, { useRef, useEffect } from "react"; /* highlight-line */
import { useGLTF, useAnimations } from "@react-three/drei"; /* highlight-line */

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model.glb");

  const { actions } = useAnimations(animations, group); /* highlight-line */

  // 'Armature|mixamo.com|Layer0' is the name of the animation we need to run.
  // console.log(actions);

  useEffect(() => {
    actions["Armature|mixamo.com|Layer0"].play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name="EyeLeft001"
            geometry={nodes.EyeLeft001.geometry}
            material={materials["Wolf3D_Eye.001"]}
            skeleton={nodes.EyeLeft001.skeleton}
            morphTargetDictionary={nodes.EyeLeft001.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft001.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight001"
            geometry={nodes.EyeRight001.geometry}
            material={materials["Wolf3D_Eye.001"]}
            skeleton={nodes.EyeRight001.skeleton}
            morphTargetDictionary={nodes.EyeRight001.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight001.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Head001"
            geometry={nodes.Wolf3D_Head001.geometry}
            material={materials["Wolf3D_Skin.001"]}
            skeleton={nodes.Wolf3D_Head001.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head001.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head001.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Teeth001"
            geometry={nodes.Wolf3D_Teeth001.geometry}
            material={materials["Wolf3D_Teeth.001"]}
            skeleton={nodes.Wolf3D_Teeth001.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth001.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth001.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear001"
            geometry={nodes.Wolf3D_Outfit_Footwear001.geometry}
            material={materials["Wolf3D_Outfit_Footwear.001"]}
            skeleton={nodes.Wolf3D_Outfit_Footwear001.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top001"
            geometry={nodes.Wolf3D_Outfit_Top001.geometry}
            material={materials["Wolf3D_Outfit_Top.001"]}
            skeleton={nodes.Wolf3D_Outfit_Top001.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom001"
            geometry={nodes.Wolf3D_Outfit_Bottom001.geometry}
            material={materials["Wolf3D_Outfit_Bottom.001"]}
            skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Body001"
            geometry={nodes.Wolf3D_Body001.geometry}
            material={materials["Wolf3D_Body.001"]}
            skeleton={nodes.Wolf3D_Body001.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/model.glb");
