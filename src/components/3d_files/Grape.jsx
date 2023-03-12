/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 grape.gltf --transform
Author: masanaga (https://sketchfab.com/tasklong)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/grape-king-delaware-50549a7af24f4ed68fe75a23bbf0c98b
Title: Grape "King Delaware" / 葡萄（キングデラウェア）
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/grape-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.grape02_Model_10_u0_v0} position={[1.14, -12.14, 11.61]} rotation={[-Math.PI / 2, 1.52, -Math.PI / 2]} />
    </group>
  )
}

useGLTF.preload('/grape-transformed.glb')
