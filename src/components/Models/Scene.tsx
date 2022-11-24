/*
  Auto-generated by Spline
*/

import { PerspectiveCamera } from "@react-three/drei";
import { useLoader, useGraph } from "@react-three/fiber";
import SplineLoader from "@splinetool/loader";
import useSpline from "@splinetool/r3f-spline";

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/31ObfNcD2RryJ11v/scene.splinecode"
  );

  return (
    <>
      <color attach="background" args={["#5e6063"]} />
      <group {...props} dispose={null}>
        <group
          name="node-3d"
          position={[28.98, 36.25, -30.74]}
          rotation={[-1.52, -0.03, -0.75]}
          scale={[0.05, 0.02, 0.05]}
        >
          <mesh
            name="Curve"
            geometry={nodes.Curve.geometry}
            material={nodes.Curve.material}
            castShadow
            receiveShadow
            position={[0.74, -52.86, 5.25]}
            rotation={[0.06, -0.01, 0]}
            scale={11.85}
          />
        </group>
        <PerspectiveCamera
          name="Camera"
          makeDefault={true}
          far={100000}
          near={5}
          fov={45}
          up={[0, 1, 0]}
          position={[82.45, 102.98, -100.37]}
          rotation={[-2.36, 0.48, 2.71]}
          scale={1}
        />
        <group name="Group">
          <group name="scene" rotation={[0, Math.PI / 2, 0]}>
            <group
              name="Group1"
              position={[-30.57, 43.09, 35.58]}
              rotation={[-1.61, 0.05, -1]}
              scale={0.05}
            >
              <mesh
                name="Ellipse 5"
                geometry={nodes["Ellipse 5"].geometry}
                material={materials["Ellipse 5 Material"]}
                castShadow
                receiveShadow
                position={[-2.59, -1.43, 3.16]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={1}
              />
              <mesh
                name="Ellipse 7"
                geometry={nodes["Ellipse 7"].geometry}
                material={materials["Ellipse 7 Material"]}
                castShadow
                receiveShadow
                position={[-0.17, -4.92, 1.33]}
                rotation={[-Math.PI / 2, 0, 1.51]}
                scale={1}
              />
              <mesh
                name="Ellipse 6"
                geometry={nodes["Ellipse 6"].geometry}
                material={materials["Ellipse 6 Material"]}
                castShadow
                receiveShadow
                position={[-0.17, -4.92, 1.33]}
                rotation={[-Math.PI / 2, 0, 0.46]}
                scale={1}
              />
              <mesh
                name="Ellipse 4"
                geometry={nodes["Ellipse 4"].geometry}
                material={materials["Ellipse 4 Material"]}
                castShadow
                receiveShadow
                position={[-0.17, -4.92, 1.33]}
                rotation={[-Math.PI / 2, 0, 2.57]}
                scale={1}
              />
            </group>
            <group
              name="Sketchfab_model"
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            >
              <group
                name="5dd040ad759e483c8caab1b1648f4ca4fbx"
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}
              >
                <group name="RootNode">
                  <group
                    name="body"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                  >
                    <mesh
                      name="body_Material001_0"
                      geometry={nodes.body_Material001_0.geometry}
                      material={nodes.body_Material001_0.material}
                      castShadow
                      receiveShadow
                    />
                    <mesh
                      name="body_Material002_0"
                      geometry={nodes.body_Material002_0.geometry}
                      material={nodes.body_Material002_0.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group
                    name="waves"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[100, 100, 1.89]}
                  >
                    <mesh
                      name="waves_Material002_0"
                      geometry={nodes.waves_Material002_0.geometry}
                      material={nodes.waves_Material002_0.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group
                    name="waves1"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[100, 100, 1.89]}
                  >
                    <mesh
                      name="waves1_Material002_0"
                      geometry={nodes.waves1_Material002_0.geometry}
                      material={nodes.waves1_Material002_0.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group
                    name="waves2"
                    position={[893.09, 149.99, 20.4]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[100, 100, 1.89]}
                  >
                    <mesh
                      name="waves2_Material002_0"
                      geometry={nodes.waves2_Material002_0.geometry}
                      material={nodes.waves2_Material002_0.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group
                    name="particles"
                    position={[4729.79, 7667.22, 3431.68]}
                    rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                    scale={20.41}
                  >
                    <mesh
                      name="particles_Material002_0"
                      geometry={nodes.particles_Material002_0.geometry}
                      material={nodes.particles_Material002_0.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group
                    name="Sphere"
                    position={[3626.56, 4133.44, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={62.4}
                  >
                    <mesh
                      name="Sphere_Material001_0"
                      geometry={nodes.Sphere_Material001_0.geometry}
                      material={nodes.Sphere_Material001_0.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group
                    name="Sphere001"
                    position={[3626.56, 4133.44, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={60.32}
                  >
                    <mesh
                      name="Sphere001_Material002_0"
                      geometry={nodes.Sphere001_Material002_0.geometry}
                      material={nodes.Sphere001_Material002_0.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group
                    name="Sphere004"
                    position={[3626.56, 4133.44, 0]}
                    rotation={[-0.69, 0, 0]}
                    scale={[104.13, 81.61, 0]}
                  >
                    <mesh
                      name="Sphere004_Material002_0"
                      geometry={nodes.Sphere004_Material002_0.geometry}
                      material={nodes.Sphere004_Material002_0.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group
                    name="Sphere005"
                    position={[-3303.18, 4444.92, -1130.35]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={62.4}
                  >
                    <mesh
                      name="Sphere005_Material001_0"
                      geometry={nodes.Sphere005_Material001_0.geometry}
                      material={nodes.Sphere005_Material001_0.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group
                    name="Sphere006"
                    position={[-3303.18, 4444.92, -1130.35]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={60.32}
                  >
                    <mesh
                      name="Sphere006_Material002_0"
                      geometry={nodes.Sphere006_Material002_0.geometry}
                      material={nodes.Sphere006_Material002_0.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group
                    name="Sphere009"
                    position={[4902.03, 6448.12, -2071.56]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={16.88}
                  >
                    <mesh
                      name="Sphere009_Material002_0"
                      geometry={nodes.Sphere009_Material002_0.geometry}
                      material={nodes.Sphere009_Material002_0.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group
                    name="Sphere010"
                    position={[-2776.33, 5658.02, -3012.15]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={16.88}
                  >
                    <mesh
                      name="Sphere010_Material002_0"
                      geometry={nodes.Sphere010_Material002_0.geometry}
                      material={nodes.Sphere010_Material002_0.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group
                    name="Sphere011"
                    position={[-5345.75, 3197.76, -3661.31]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={11.44}
                  >
                    <mesh
                      name="Sphere011_Material002_0"
                      geometry={nodes.Sphere011_Material002_0.geometry}
                      material={nodes.Sphere011_Material002_0.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group
                    name="Cube"
                    position={[0, -982.03, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[20000, 20000, 100]}
                  >
                    <mesh
                      name="Cube_Material001_0"
                      geometry={nodes.Cube_Material001_0.geometry}
                      material={nodes.Cube_Material001_0.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group
                    name="Sphere002"
                    position={[-3452.08, 3792.47, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={39.71}
                  >
                    <mesh
                      name="Sphere002_Material001_0"
                      geometry={nodes.Sphere002_Material001_0.geometry}
                      material={nodes.Sphere002_Material001_0.material}
                      castShadow
                      receiveShadow
                    />
                    <mesh
                      name="Sphere002_Material002_0"
                      geometry={nodes.Sphere002_Material002_0.geometry}
                      material={nodes.Sphere002_Material002_0.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group
                    name="Sphere003"
                    position={[-3452.08, 3792.47, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={41.07}
                  >
                    <mesh
                      name="Sphere003_Material002_0"
                      geometry={nodes.Sphere003_Material002_0.geometry}
                      material={nodes.Sphere003_Material002_0.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group
                    name="Sphere007"
                    position={[1928.21, 5475.38, -2134.59]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={39.71}
                  >
                    <mesh
                      name="Sphere007_Material001_0"
                      geometry={nodes.Sphere007_Material001_0.geometry}
                      material={nodes.Sphere007_Material001_0.material}
                      castShadow
                      receiveShadow
                    />
                    <mesh
                      name="Sphere007_Material002_0"
                      geometry={nodes.Sphere007_Material002_0.geometry}
                      material={nodes.Sphere007_Material002_0.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                  <group
                    name="Sphere008"
                    position={[1928.21, 5475.38, -2134.59]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={41.07}
                  >
                    <mesh
                      name="Sphere008_Material002_0"
                      geometry={nodes.Sphere008_Material002_0.geometry}
                      material={nodes.Sphere008_Material002_0.material}
                      castShadow
                      receiveShadow
                    />
                  </group>
                </group>
              </group>
            </group>
            <group
              name="Group2"
              position={[49.95, 46.71, 8.13]}
              rotation={[3.08, 0.06, 2.72]}
              scale={0.1}
            >
              <group
                name="Cube_0"
                position={[-5.68, 6.37, -2.33]}
                rotation={[1.48, 0.29, -1.28]}
                scale={1.61}
              >
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={nodes.Object_4.material}
                  castShadow
                  receiveShadow
                />
              </group>
              <group
                name="Text_1"
                position={[7.27, -25.3, 23.13]}
                rotation={[1.48, 0.29, -1.28]}
                scale={1.61}
              >
                <mesh
                  name="Object_6"
                  geometry={nodes.Object_6.geometry}
                  material={nodes.Object_6.material}
                  castShadow
                  receiveShadow
                />
              </group>
            </group>
            <group
              name="css3_2"
              position={[-10, 45.07, -28.97]}
              rotation={[-2.69, -0.87, 0.03]}
              scale={0.1}
            >
              <mesh
                name="Object_8"
                geometry={nodes.Object_8.geometry}
                material={nodes.Object_8.material}
                castShadow
                receiveShadow
              />
              <mesh
                name="Object_9"
                geometry={nodes.Object_9.geometry}
                material={nodes.Object_9.material}
                castShadow
                receiveShadow
              />
              <group
                name="hmtl5_3"
                position={[-420.65, -188.95, -636.45]}
                rotation={[2.88, -0.26, 2.82]}
                scale={1}
              >
                <mesh
                  name="Object_11"
                  geometry={nodes.Object_11.geometry}
                  material={nodes.Object_11.material}
                  castShadow
                  receiveShadow
                />
                <mesh
                  name="Object_12"
                  geometry={nodes.Object_12.geometry}
                  material={nodes.Object_12.material}
                  castShadow
                  receiveShadow
                />
              </group>
            </group>
          </group>
        </group>
        <hemisphereLight
          name="Default Ambient Light"
          intensity={0.75}
          color="#eaeaea"
        />
      </group>
    </>
  );
}