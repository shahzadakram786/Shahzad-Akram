import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'

function CursorGlow() {
  const glowRef = useRef<THREE.Mesh>(null!)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const targetMouse = useRef({ x: 0, y: 0 })
  const { viewport } = useThree()

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      targetMouse.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state) => {
    if (!glowRef.current) return

    setMouse((prev) => ({
      x: THREE.MathUtils.lerp(prev.x, targetMouse.current.x, 0.08),
      y: THREE.MathUtils.lerp(prev.y, targetMouse.current.y, 0.08)
    }))

    glowRef.current.position.x = mouse.x * viewport.width / 2
    glowRef.current.position.y = mouse.y * viewport.height / 2

    const t = state.clock.getElapsedTime()
    glowRef.current.scale.setScalar(1.2 + Math.sin(t * 1.5) * 0.15)
  })

  return (
    <mesh ref={glowRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshBasicMaterial
        color="#6366F1"
        transparent
        opacity={0.15}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  )
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.3} />
        <pointLight position={[-10, -10, -10]} color="#6366F1" intensity={0.2} />
        
        <Stars radius={100} depth={50} count={1500} factor={3} saturation={0} fade speed={0.5} />
        
        <CursorGlow />
      </Canvas>
    </div>
  )
}
