/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 melon.gltf --transform
Author: STUDIO DUCKBILL (https://sketchfab.com/DuckbillStudio)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/melon-a1d755dc91a24124be2cfab253664601
Title: Melon
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/melon-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Melon_u0_v0} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Melon_u0_v1} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Melon_u1_v0} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Melon_u1_v1} />
      </group>
    </group>
  )
}

useGLTF.preload('/melon-transformed.glb')