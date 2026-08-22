import React, {
  useRef,
  
} from "react";

import {
  Canvas,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber";

import { TextureLoader,  } from "three";
import * as THREE from "three";

import {
  useGLTF,
} from "@react-three/drei";

import "./hero3d.css";

/* =========================================================
   PARTICLES
========================================================= */

function Particles() {
  const particlesRef = useRef();

  const particleCount = 250;

  const positions = new Float32Array(
    particleCount * 3
  );

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] =
      (Math.random() - 0.5) * 7;

    positions[i * 3 + 1] =
      (Math.random() - 0.5) * 5;

    positions[i * 3 + 2] =
      (Math.random() - 0.5) * 4;
  }

  useFrame(({ clock }) => {
    if (!particlesRef.current) return;

    particlesRef.current.rotation.y =
      clock.elapsedTime * 0.022;

    particlesRef.current.rotation.x =
      Math.sin(clock.elapsedTime * 0.15) * 0.03;
  });

  return (
    <points ref={particlesRef}>

      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#22a6e8"
      
        size={0.035}
        transparent
        opacity={0.45}
        sizeAttenuation
      />

    </points>
  );
}


/* =========================================================
   FLOATING VISA CARD
========================================================= */

function VisaCard({ position, rotation = [0, 0, 0] }) {
  const passportRef = useRef();

  const { scene } = useGLTF(
    "/models/passport.glb"
  );

  const passportModel = React.useMemo(() => {
    const model = scene.clone(true);

    // Calculate model size
    const box = new THREE.Box3().setFromObject(model);

    const size = new THREE.Vector3();

    box.getSize(size);

    const largestDimension = Math.max(
      size.x,
      size.y,
      size.z
    );

    // Passport size in the hero
    const desiredSize = 0.65;

    const scale =
      desiredSize / largestDimension;

    model.scale.set(
      scale,
      scale,
      scale
    );

    // Center the passport
    const centeredBox =
      new THREE.Box3().setFromObject(model);

    const center =
      new THREE.Vector3();

    centeredBox.getCenter(center);

    model.position.sub(center);

    // Make model visible
    model.traverse((child) => {
      if (child.isMesh) {
        child.visible = true;
        child.frustumCulled = false;

        if (child.material) {
          child.material.needsUpdate = true;
        }
      }
    });

    return model;

  }, [scene]);


  const initialY = position[1];


  useFrame(({ clock }) => {
    if (!passportRef.current) return;

    const t = clock.elapsedTime;

    // Gentle floating
    passportRef.current.position.y =
      initialY +
      Math.sin(t * 1.2) * 0.08;

    // Natural floating rotation
    passportRef.current.rotation.x =
      rotation[0] +
      Math.sin(t * 0.7) * 0.035;

    passportRef.current.rotation.y =
      rotation[1] +
      Math.sin(t * 0.5) * 0.05;

    passportRef.current.rotation.z =
      rotation[2] +
      Math.sin(t * 0.8) * 0.025;


      passportRef.current.children.forEach((child) => {
  if (child.isMesh && child.material) {
    child.material.emissiveIntensity =
      0.08 +
      Math.sin(t * 1.5) * 0.04;
  }
});
  });


  return (
    <group
      ref={passportRef}
      position={position}
      rotation={rotation}
    >
      <primitive
        object={passportModel}
        rotation={[0, 0, 0]}
      />

      {/* Subtle passport glow */}
     <pointLight
  position={[0, 0, 0.35]}
  intensity={2}
  distance={1.5}
  decay={1.8}
  color="#4da3ff"
/>
    </group>
  );
}

useGLTF.preload(
  "/models/passport.glb"
);

/*=====================================
Graduation ican
=====================================*/

function Graduation() {
  const graduationRef = useRef();

  const { scene } = useGLTF(
    "/models/graduation.glb"
  );

  const graduationModel = React.useMemo(() => {
    const model = scene.clone(true);

    // Calculate actual model size
    const box = new THREE.Box3().setFromObject(model);

    const size = new THREE.Vector3();

    box.getSize(size);

    const largestDimension = Math.max(
      size.x,
      size.y,
      size.z
    );

    // Size for the hero
    const desiredSize = 0.87;

    const scale =
      desiredSize / largestDimension;

    model.scale.set(
      scale,
      scale,
      scale
    );

    // Center the actual model
    const centeredBox =
      new THREE.Box3().setFromObject(model);

    const center =
      new THREE.Vector3();

    centeredBox.getCenter(center);

    model.position.sub(center);

    // Ensure meshes are visible
    // model.traverse((child) => {
    //   if (child.isMesh) {
    //     child.visible = true;
    //     child.frustumCulled = false;

    //     if (child.material) {
    //       child.material.needsUpdate = true;
    //     }
    //   }
    // });
    model.traverse((child) => {
  if (!child.isMesh) return;

  child.visible = true;
  child.frustumCulled = false;

  if (child.material) {
    child.material = child.material.clone();

    const color = child.material.color;

    if (color) {
      const r = color.r;
      const g = color.g;
      const b = color.b;

      /*
       * Dark / purple / black material
       * → WCI navy
       */
      if (
        r < 0.35 &&
        g < 0.35 &&
        b < 0.45
      ) {
        child.material.color.set("#0B1F4B");
      }

      /*
       * Red / yellow / gold material
       * → WCI orange
       */
      else if (
        r > g &&
        r > b &&
        g < 0.65
      ) {
        child.material.color.set("#FF8517");
      }

      /*
       * Keep light diploma material white.
       */
      else if (
        r > 0.7 &&
        g > 0.7 &&
        b > 0.7
      ) {
        child.material.color.set("#FFFFFF");
      }
    }

    child.material.needsUpdate = true;
  }

  child.castShadow = true;
  child.receiveShadow = true;
});

    return model;

  }, [scene]);


  useFrame(({ clock }) => {
    if (!graduationRef.current) return;

    const t = clock.elapsedTime;

    // Gentle floating
    graduationRef.current.position.y =
      0.9 +
      Math.sin(t * 1.1) * 0.08;

    // Natural 3D rotation
    graduationRef.current.rotation.x =
      Math.sin(t * 0.6) * 0.035;

    graduationRef.current.rotation.y =
      Math.sin(t * 0.5) * 0.08;

    graduationRef.current.rotation.z =
      Math.sin(t * 0.8) * 0.025;
  });


  return (
    <group
      ref={graduationRef}
      position={[-2.0, 0.9, 0.3]}
    >
      <primitive
        object={graduationModel}
      />

      {/* <pointLight
        position={[0, 0, 0.25]}
        intensity={0.3}
        distance={1.2}
        decay={2}
        color="#ff8517"
      /> */}
      <pointLight
  position={[0, 0, 0.35]}
  intensity={1}
  distance={1.5}
  decay={1.5}
  color="#0c539f"
/>
    </group>
  );
}

useGLTF.preload(
  "/models/graduation.glb"
);

/* =========================================================
   AIRPLANE
========================================================= */

function Airplane() {
  const airplaneRef = useRef();

  const { scene } = useGLTF("/models/airplane.glb");

  /*
   * Prepare the airplane model once.
   *
   * This fixes:
   * - huge GLB scale differences
   * - incorrect model origin
   * - model being visually offset from the path
   */
  const airplaneModel = React.useMemo(() => {
    const model = scene.clone(true);

    // Calculate the actual size of the GLB
    const box = new THREE.Box3().setFromObject(model);

    const size = new THREE.Vector3();

    box.getSize(size);

    const largestDimension = Math.max(
      size.x,
      size.y,
      size.z
    );

    /*
     * Desired airplane size in our scene.
     *
     * Earth radius = 1.5
     * Flight path radius = 2.16
     *
     * So the airplane should be
     * noticeably smaller than the globe.
     */
    const desiredSize = 0.80;

    const normalizedScale =
      desiredSize / largestDimension;

    model.scale.set(
      normalizedScale,
      normalizedScale,
      normalizedScale
    );

    /*
     * Center the actual airplane geometry.
     *
     * This is important because the GLB's
     * origin may not be at the center of
     * the visible airplane.
     */
    const centeredBox =
      new THREE.Box3().setFromObject(model);

    const center =
      new THREE.Vector3();

    centeredBox.getCenter(center);

    model.position.sub(center);

    /*
     * Make all meshes render normally.
     */
    model.traverse((child) => {
      if (child.isMesh) {
        child.visible = true;
        child.frustumCulled = false;

        child.castShadow = true;
        child.receiveShadow = true;

        if (child.material) {
          child.material.needsUpdate = true;
        }
      }
    });

    return model;

  }, [scene]);


  // useFrame(({ clock }) => {
  //   if (!airplaneRef.current) return;

  //   /*
  //    * EXACT SAME SPEED
  //    * AS THE FLIGHT PATH
  //    */
  //   const angle =
  //     clock.elapsedTime * 0.35;


  //   /*
  //    * EXACT SAME VALUES
  //    * AS FlightPath()
  //    */
  //   const radius = 2.7;


  //   /*
  //    * Current point
  //    */
  //   const currentPoint =
  //     new THREE.Vector3(
  //       Math.cos(angle) * radius,
  //       Math.sin(angle * 2) * 0.15,
  //       Math.sin(angle) * radius
  //     );


  //   /*
  //    * Slightly ahead of the airplane.
  //    *
  //    * This gives us the direction
  //    * the airplane needs to face.
  //    */
  //   const nextAngle =
  //     angle + 0.015;


  //   const nextPoint =
  //     new THREE.Vector3(
  //       Math.cos(nextAngle) * radius,
  //       Math.sin(nextAngle * 2) * 0.15,
  //       Math.sin(nextAngle) * radius
  //     );


  //   /*
  //    * Position
  //    */
  //   airplaneRef.current.position.copy(
  //     currentPoint
  //   );


  //   /*
  //    * Face the direction of travel.
  //    *
  //    * Three.js lookAt points the object's
  //    * -Z axis toward the target.
  //    */
  //   airplaneRef.current.lookAt(
  //     nextPoint
  //   );


  //   /*
  //    * Small realistic banking effect.
  //    */
  //   airplaneRef.current.rotateZ(
  //     Math.sin(angle) * 0.035
  //   );
  // });

useFrame(({ clock }) => {
  if (!airplaneRef.current) return;

  const angle = clock.elapsedTime * 0.35;
  const radius = 2.6;

  // Position on the flight path
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle * 2) * 0.15;
  const z = Math.sin(angle) * radius;

  airplaneRef.current.position.set(
    x,
    y,
    z
  );

  /*
   * IMPORTANT:
   * Rotate ONLY left/right.
   *
   * The airplane follows the tangent
   * of the circular flight path.
   */
  airplaneRef.current.rotation.x = 0;

  airplaneRef.current.rotation.y =
    Math.PI / 2 - angle;

  /*
   * Keep the airplane level.
   */
  airplaneRef.current.rotation.z = 0;
});

  return (
    <group ref={airplaneRef}>

      {/*
        IMPORTANT:

        The GLB itself is rotated separately
        from the flight-path group.

        This prevents the airplane's own
        orientation from destroying the
        orbital rotation.
      */}
      <primitive
        object={airplaneModel}
        rotation={[
          0.15,
          -Math.PI/2,
          0,
        ]}
      />

    </group>
  );
}

useGLTF.preload(
  "/models/airplane.glb"
);

/* =========================================================
   LOCATION PIN
========================================================= */

function LocationPin({
  position,
  color = "#1769FF",
}) {
  const pinRef = useRef();

  const { scene } = useGLTF(
    "/models/location-pin.glb"
  );

  const pinModel = React.useMemo(() => {
    const model = scene.clone(true);

    // Find actual GLB size
    const box = new THREE.Box3().setFromObject(model);

    const size = new THREE.Vector3();

    box.getSize(size);

    const largestDimension = Math.max(
      size.x,
      size.y,
      size.z
    );

    // Desired size in the hero
    const desiredSize = 0.42;

    const scale =
      desiredSize / largestDimension;

    model.scale.set(
      scale,
      scale,
      scale
    );

    // Center model
    const centeredBox =
      new THREE.Box3().setFromObject(model);

    const center =
      new THREE.Vector3();

    centeredBox.getCenter(center);

    model.position.sub(center);

    // Make meshes visible
    model.traverse((child) => {
      if (!child.isMesh) return;

      child.visible = true;
      child.frustumCulled = false;

      // if (child.material) {
      //   child.material =
      //     child.material.clone();

      //   child.material.needsUpdate = true;
      // }

      if (child.material) {
  child.material =
    child.material.clone();

  child.material.color.set(color);

  child.material.needsUpdate = true;
}
    });

    return model;

  }, [scene, color]);


  useFrame(({ clock }) => {
    if (!pinRef.current) return;

    const t = clock.elapsedTime;

    // Gentle floating
    pinRef.current.position.y =
      position[1] +
      Math.sin(
        t * 1.3 + position[0]
      ) * 0.045;

    // Very subtle rotation
    pinRef.current.rotation.y =
      Math.sin(
        t * 0.7 + position[2]
      ) * 0.08;

    pinRef.current.rotation.z =
      Math.sin(
        t * 0.9 + position[0]
      ) * 0.025;
  });


  return (
    <group
      ref={pinRef}
      position={position}
    >
      <primitive
        object={pinModel}
      />

      {/* Soft blue/orange glow */}
      <pointLight
        color={color}
        intensity={4}
        distance={0.7}
        decay={2}
      />
    </group>
  );
}

useGLTF.preload(
  "/models/location-pin.glb"
);


/* =========================================================
   FLIGHT PATH
========================================================= */

function FlightPath() {

  const points = [];

  const radius = 2.16;

  const segments = 80;


  for (
    let i = 0;
    i <= segments;
    i++
  ) {

    const angle =
      (i / segments) *
      Math.PI *
      2;


    points.push([
      Math.cos(angle) *
      radius,

      Math.sin(
        angle * 2
      ) * 0.15,

      Math.sin(angle) *
      radius,
    ]);

  }


  return (

    <group>

      {points.map(
        (point, index) => {

          if (
            index % 3 !== 0
          ) {
            return null;
          }


          return (

            <mesh
              key={index}
              position={point}
            >

              <sphereGeometry
                args={[
                  0.012,
                  8,
                  8,
                ]}
              />

              <meshBasicMaterial
                color="#1769ff"
                transparent
                opacity={0.45}
              />

            </mesh>

          );

        }
      )}

    </group>

  );
}


/* =========================================================
   GLOBE
========================================================= */

function Globe() {
  const globeRef = useRef();

  const { mouse, } = useThree();
  // inside this {mouse, gl} i removed gl is not used

  const earthTexture = useLoader(
    TextureLoader,
    "/images/hero3d/earth.png"
  );

  const targetRotation = useRef({
    x: 0,
    y: 0,
  });

  const lastTouch = useRef({
    x: 0,
    y: 0,
  });

  const isDragging = useRef(false);


  /* =========================
     POINTER DOWN
  ========================= */

  const handlePointerDown = (event) => {
    isDragging.current = true;

    lastTouch.current = {
      x: event.clientX,
      y: event.clientY,
    };
  };


  /* =========================
     POINTER MOVE
  ========================= */

  const handlePointerMove = (event) => {
    if (!isDragging.current) return;

    const deltaX =
      event.clientX -
      lastTouch.current.x;

    const deltaY =
      event.clientY -
      lastTouch.current.y;


    targetRotation.current.y +=
      deltaX * 0.008;

    targetRotation.current.x +=
      deltaY * 0.004;


    lastTouch.current = {
      x: event.clientX,
      y: event.clientY,
    };
  };


  /* =========================
     POINTER UP
  ========================= */

  const handlePointerUp = () => {
    isDragging.current = false;
  };


  useFrame(() => {

    if (!globeRef.current) return;


    /* =========================
       AUTOMATIC ROTATION
    ========================= */

    if (!isDragging.current) {
      targetRotation.current.y += 0.0025;
    }


    /* =========================
       DESKTOP MOUSE
    ========================= */

    if (!isDragging.current) {

      targetRotation.current.x +=
        (
          mouse.y * 0.15 -
          targetRotation.current.x
        ) * 0.02;

    }


    /* =========================
       SMOOTH ROTATION
    ========================= */

    globeRef.current.rotation.x +=
      (
        targetRotation.current.x -
        globeRef.current.rotation.x
      ) * 0.08;


    globeRef.current.rotation.y +=
      (
        targetRotation.current.y -
        globeRef.current.rotation.y
      ) * 0.08;

  });


  return (
    <group>

      <mesh
        ref={globeRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >

        <sphereGeometry
          args={[1.5, 64, 64]}
        />

        <meshStandardMaterial
          map={earthTexture}
          roughness={0.85}
          metalness={0}
        />

      </mesh>


      {/* ATMOSPHERE */}

      <mesh
        scale={[1.06, 1.06, 1.06]}
      >

        <sphereGeometry
          args={[1.5, 64, 64]}
        />

        <meshBasicMaterial
          color="#4da3ff"
          transparent
          opacity={0.12}
          side={2}
        />

      </mesh>


      {/* OUTER GLOW */}

      <mesh
        scale={[1.12, 1.12, 1.12]}
      >

        <sphereGeometry
          args={[1.5, 64, 64]}
        />

        <meshBasicMaterial
          color="#1769ff"
          transparent
          opacity={0.035}
          side={2}
        />

      </mesh>

    </group>
  );
}



function ResponsiveScene() {
  const { viewport } = useThree();

  const isMobile = viewport.width < 6;

  const scale = isMobile ? .92 : 1;

  return (
    <group scale={scale}>

      <Particles />

      <FlightPath />

      <LocationPin
        position={[1, 0.9, 1]}
        color="#22C55E"

      />

      <LocationPin
        position={[-1.3, 0.4, 1]}
        color="#ff5517"
      />

      <LocationPin
        position={[0.2, -0.65, -1.25]}
        color="#ff8517"
      />

      {/* <VisaCard
        position={[-2.0, 0.9, 0.3]}
        rotation={[0.1, 0.2, -0.15]}
      /> */}
      <Graduation
      position={[-2.0, 0.9, 0.3]}
        rotation={[0.2, 0.5, -0.15]}
      />
     <VisaCard 
        position={[1.7, -0.9, 0.7]}
        rotation={[-0.1, -0.1, 0.1]}
        color="#f7f9fc"
      />

      <Globe />

      <Airplane />

    </group>
  );
}

/* =========================================================
   HERO 3D
========================================================= */

function Hero3d() {
  return (
    <section className="home-hero">

      {/* =========================
          HERO CONTENT
      ========================= */}

      <div className="home-hero-content">

        <span className="home-hero-label">
          WCI IMMIGRATION
        </span>

        <h1>
          Your Journey
          <span>Starts Here.</span>
        </h1>

        <p>
          Expert guidance for your travel,
          study, work and immigration journey.
        </p>

        <div className="home-hero-actions">

          <a
            href="/services"
            className="home-hero-primary"
          >
            Explore Services
            <span>→</span>
          </a>

          <a
            href="/contact"
            className="home-hero-secondary"
          >
            Talk to an Expert
          </a>

        </div>

      </div>


      {/* =========================
          3D VISUAL
      ========================= */}

      <div className="home-hero-visual">

        <div className="hero-3d">

          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 45,
            }}
          >
            <ambientLight intensity={0.7} />

            <directionalLight
              position={[4, 3, 5]}
              intensity={2.5}
            />

            <pointLight
              position={[-4, -2, 3]}
              intensity={0.5}
              color="#4da3ff"
            />

            <ResponsiveScene />
          </Canvas>

        </div>

      </div>

    </section>
  );
}

export default Hero3d;