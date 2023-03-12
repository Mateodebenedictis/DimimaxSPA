/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 cherries.gltf --transform
Author: Carissa (https://sketchfab.com/cclarke468)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/cherries-4d406299153c455f94564b49b56bd6a9
Title: Cherries
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/cherries-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.52}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.initialShadingGroup} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.initialShadingGroup} />
          <mesh geometry={nodes.defaultMaterial_2.geometry} material={materials.initialShadingGroup} />
          <mesh geometry={nodes.defaultMaterial_3.geometry} material={materials.initialShadingGroup} />
          <mesh geometry={nodes.defaultMaterial_4.geometry} material={materials.lambert2SG} />
          <mesh geometry={nodes.defaultMaterial_5.geometry} material={materials.lambert2SG} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/cherries-transformed.glb')
