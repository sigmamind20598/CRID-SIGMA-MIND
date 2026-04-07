import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BrainBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Brain Particles
    const particleCount = 4000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const brainGeometry = new THREE.BufferGeometry();
    
    // Create brain shape (two hemispheres)
    for (let i = 0; i < particleCount; i++) {
      const isLeft = Math.random() > 0.5;
      const phi = Math.acos(-1 + 2 * Math.random());
      const theta = 2 * Math.PI * Math.random();
      
      const r = 2 + Math.random() * 0.5;
      
      // Basic sphere
      let x = r * Math.sin(phi) * Math.cos(theta);
      let y = r * Math.sin(phi) * Math.sin(theta);
      let z = r * Math.cos(phi);

      // Flatten and shape into brain
      x *= 0.7; // Narrower
      y *= 1.1; // Longer
      z *= 0.8; // Flatter

      // Add some "folds" using noise-like functions
      const fold = Math.sin(x * 4) * Math.cos(y * 4) * 0.1;
      x += fold;
      y += fold;
      z += fold;

      // Split into hemispheres
      if (isLeft) {
        x -= 0.1;
      } else {
        x += 0.1;
      }

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Colors (Emerald/Teal theme)
      colors[i * 3] = 0.06;     // R
      colors[i * 3 + 1] = 0.72; // G
      colors[i * 3 + 2] = 0.51; // B

      sizes[i] = Math.random() * 2;
    }

    brainGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    brainGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    brainGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const brainMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const brainPoints = new THREE.Points(brainGeometry, brainMaterial);
    scene.add(brainPoints);

    // Firing Neurons (Glowing particles)
    const firingCount = 100;
    const firingGeometry = new THREE.BufferGeometry();
    const firingPositions = new Float32Array(firingCount * 3);
    const firingSpeeds = new Float32Array(firingCount);
    const firingIndices = new Int32Array(firingCount);

    for (let i = 0; i < firingCount; i++) {
      const idx = Math.floor(Math.random() * particleCount);
      firingIndices[i] = idx;
      firingPositions[i * 3] = positions[idx * 3];
      firingPositions[i * 3 + 1] = positions[idx * 3 + 1];
      firingPositions[i * 3 + 2] = positions[idx * 3 + 2];
      firingSpeeds[i] = 0.01 + Math.random() * 0.05;
    }

    firingGeometry.setAttribute('position', new THREE.BufferAttribute(firingPositions, 3));
    
    const firingMaterial = new THREE.PointsMaterial({
      size: 0.08,
      color: 0x10b981,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
    });

    const firingPoints = new THREE.Points(firingGeometry, firingMaterial);
    scene.add(firingPoints);

    // Neural Connections (Lines)
    const lineCount = 1000;
    const linePositions = new Float32Array(lineCount * 2 * 3);
    const lineGeometry = new THREE.BufferGeometry();

    for (let i = 0; i < lineCount; i++) {
      const idx1 = Math.floor(Math.random() * particleCount);
      const idx2 = Math.floor(Math.random() * particleCount);
      
      // Only connect nearby points
      const p1 = new THREE.Vector3(positions[idx1 * 3], positions[idx1 * 3 + 1], positions[idx1 * 3 + 2]);
      const p2 = new THREE.Vector3(positions[idx2 * 3], positions[idx2 * 3 + 1], positions[idx2 * 3 + 2]);
      
      if (p1.distanceTo(p2) < 0.5) {
        linePositions[i * 6] = p1.x;
        linePositions[i * 6 + 1] = p1.y;
        linePositions[i * 6 + 2] = p1.z;
        linePositions[i * 6 + 3] = p2.x;
        linePositions[i * 6 + 4] = p2.y;
        linePositions[i * 6 + 5] = p2.z;
      }
    }

    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.1,
      blending: THREE.AdditiveBlending,
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Animation
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) / 100;
      mouseY = (event.clientY - window.innerHeight / 2) / 100;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth parallax
      const targetRotationY = mouseX * 0.1;
      const targetRotationX = mouseY * 0.1;
      
      brainPoints.rotation.y += (targetRotationY - brainPoints.rotation.y) * 0.05 + 0.002;
      brainPoints.rotation.x += (targetRotationX - brainPoints.rotation.x) * 0.05;
      
      firingPoints.rotation.y = brainPoints.rotation.y;
      firingPoints.rotation.x = brainPoints.rotation.x;
      
      lines.rotation.y = brainPoints.rotation.y;
      lines.rotation.x = brainPoints.rotation.x;

      // Animate firing neurons
      const firingPosAttr = firingGeometry.getAttribute('position') as THREE.BufferAttribute;
      for (let i = 0; i < firingCount; i++) {
        // Occasionally reset a firing neuron to a new random point
        if (Math.random() > 0.97) {
          const newIdx = Math.floor(Math.random() * particleCount);
          firingIndices[i] = newIdx;
          firingPosAttr.setXYZ(i, positions[newIdx * 3], positions[newIdx * 3 + 1], positions[newIdx * 3 + 2]);
        }
        
        // Pulse effect (size and opacity)
        const pulse = Math.sin(Date.now() * 0.005 + i) * 0.5 + 0.5;
        // We can't easily change individual point sizes in PointsMaterial without a custom shader,
        // but we can simulate it with the whole material or by moving points slightly.
        // For now, let's just keep the rotation and random resets.
      }
      firingPosAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden opacity-40"
      style={{ background: 'radial-gradient(circle at center, #050505 0%, #000000 100%)' }}
    />
  );
};

export default BrainBackground;
