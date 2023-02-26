/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 3dmoond.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/3dmoond.gltf')
  return (
    <group {...props} dispose={null} scale={3}>
      <mesh geometry={nodes.Sphere.geometry} material={materials.moon} />
    </group>
  )
}

useGLTF.preload('/3dmoond.gltf')
