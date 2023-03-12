/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 peach.gltf --transform
Author: masanaga (https://sketchfab.com/tasklong)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/peach-akatsuki-0637543be6bc42a89d8c76b08395b6eb
Title: Peach "Akatsuki" / 桃（あかつき）
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/peach-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.akatsuki02_Model_6_u0_v0} position={[1.45, -16.78, 5.94]} rotation={[-Math.PI, 0.27, 0]} />
    </group>
  )
}

useGLTF.preload('/peach-transformed.glb')