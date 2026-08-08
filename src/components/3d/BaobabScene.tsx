/**
 * Lightweight 3D baobab-inspired element using R3F + drei.
 * Can be dropped into Hero or Biodiversity for extra immersion.
 */
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Environment } from '@react-three/drei'
import { Suspense } from 'react'

function StylizedBaobab() {
  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
      {/* Trunk */}
      <mesh position={[0, 0.6, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.55, 1.4, 8]} />
        <meshStandardMaterial color="#5c4033" roughness={0.85} />
      </mesh>
      {/* Canopy */}
      <mesh position={[0, 1.7, 0]} castShadow>
        <sphereGeometry args={[1.1, 16, 12]} />
        <meshStandardMaterial color="#2d5a3d" roughness={0.7} />
      </mesh>
      <mesh position={[0.5, 1.9, 0.3]}>
        <sphereGeometry args={[0.6, 12, 10]} />
        <meshStandardMaterial color="#3a7a4f" roughness={0.7} />
      </mesh>
    </Float>
  )
}

export default function BaobabScene({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full h-64 md:h-80 ${className}`}>
      <Canvas camera={{ position: [0, 1.5, 4], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 3]} intensity={1.1} castShadow />
        <Suspense fallback={null}>
          <StylizedBaobab />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  )
}
