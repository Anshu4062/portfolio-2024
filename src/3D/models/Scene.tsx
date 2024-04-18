/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import { Html, Sparkles, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import Fan from "../objects/Fan";
import PowerBank from "../objects/PowerBank";
import SceneMaterial from "../materials/SceneMaterial";

type GLTFResult = GLTF & {
    nodes: {
        Cylinder019: THREE.Mesh;
        ShopBanner: THREE.Mesh;
        ShopDecoration: THREE.Mesh;
        ShopBody: THREE.Mesh;
        Fan3: THREE.Mesh;
        Fan2: THREE.Mesh;
        Fan1: THREE.Mesh;
        PowerStuff: THREE.Mesh;
        PowerBank: THREE.Mesh;
        DecoLight: THREE.Mesh;
        BarrelWhite: THREE.Mesh;
        BarrelYellow: THREE.Mesh;
        ShopOutDecoration: THREE.Mesh;
        Circle1: THREE.Mesh;
        Circle2: THREE.Mesh;
        Circle3: THREE.Mesh;
        Circle4: THREE.Mesh;
        ShopBannerText: THREE.Mesh;
        WelcomeScreen: THREE.Mesh;
        MenuScreen: THREE.Mesh;
        MonitorScreen1: THREE.Mesh;
        MonitorScreen2: THREE.Mesh;
        MonitorScreen3: THREE.Mesh;
        VendingScreen: THREE.Mesh;
    };
};

// Material for screens (glow with post-processing)
const screenMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaff });
export default function Scene(props: JSX.IntrinsicElements["group"]) {
    const sceneTexture = useTexture("/textures/baked_8192x8192.jpg");
    sceneTexture.flipY = false;
    sceneTexture.colorSpace = THREE.SRGBColorSpace;

    const sceneTextureNight = useTexture("/textures/bakedNight_8192x8192.jpg");
    sceneTextureNight.flipY = false;
    sceneTextureNight.colorSpace = THREE.SRGBColorSpace;

    const sceneMaterial = new SceneMaterial({
        // @ts-expect-error Ignore this
        uTextureDay: sceneTexture,
        uTextureNight: sceneTextureNight,
        uNightMix: 0,
    });

    const { nodes } = useGLTF("/models/scene.glb") as unknown as GLTFResult;

    return (
        <group {...props} dispose={null}>
            {/* Add the 3 fans */}
            <Fan
                geometry={nodes.Fan1.geometry}
                material={sceneMaterial}
                position={[-2.011, 2.524, 1.19]}
            />
            <Fan
                geometry={nodes.Fan1.geometry}
                material={sceneMaterial}
                position={[-2.011, 2.537, -0.018]}
            />
            <Fan
                geometry={nodes.Fan1.geometry}
                material={sceneMaterial}
                position={[-2.011, 2.524, -1.305]}
            />
            {/* Add the power bank, to turn off lights */}
            <PowerBank
                geometry={nodes.PowerBank.geometry}
                material={sceneMaterial}
                position={[-1.515, 2.104, 0.702]}
                rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
                geometry={nodes.Cylinder019.geometry}
                material={sceneMaterial}
                position={[0.02, 2.461, -0.149]}
                rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
                geometry={nodes.ShopBanner.geometry}
                material={sceneMaterial}
                position={[-0.982, 3.17, 0]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
                geometry={nodes.ShopDecoration.geometry}
                material={sceneMaterial}
                position={[-0.389, 1.051, -0.028]}
            />
            <mesh
                geometry={nodes.ShopBody.geometry}
                material={sceneMaterial}
                position={[-0.56, 1.982, -0.351]}
            />
            <mesh
                geometry={nodes.PowerStuff.geometry}
                material={sceneMaterial}
                position={[-1.515, 2.104, 0.702]}
                rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
                geometry={nodes.DecoLight.geometry}
                material={sceneMaterial}
                position={[0.187, 1.676, -0.031]}
            />
            <mesh
                geometry={nodes.BarrelWhite.geometry}
                material={sceneMaterial}
                position={[1.164, 0.51, 1.642]}
            />
            <mesh
                geometry={nodes.BarrelYellow.geometry}
                material={sceneMaterial}
                position={[1.039, 0.378, -2.078]}
            />
            <mesh
                geometry={nodes.ShopOutDecoration.geometry}
                material={sceneMaterial}
                position={[-1.52, 1.463, -0.295]}
            />
            <mesh
                geometry={nodes.Circle1.geometry}
                material={sceneMaterial}
                position={[-0.243, 2.032, -2.865]}
                rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
                geometry={nodes.Circle2.geometry}
                material={sceneMaterial}
                position={[-0.243, 1.762, -2.865]}
                rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
                geometry={nodes.Circle3.geometry}
                material={sceneMaterial}
                position={[-0.243, 1.486, -2.865]}
                rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
                geometry={nodes.Circle4.geometry}
                material={sceneMaterial}
                position={[-0.243, 1.202, -2.865]}
                rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
                geometry={nodes.ShopBannerText.geometry}
                material={sceneMaterial}
                position={[-0.97, 3.151, -0.004]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />

            <mesh
                geometry={nodes.WelcomeScreen.geometry}
                // material={sceneMaterial}
                material={screenMaterial}
                position={[1.973, 0.933, 2.23]}
                rotation={[0, -0.919, 0]}
            >
                <Html
                    center
                    transform
                    distanceFactor={1}
                    position={[0, 0, -0.001]}
                    rotation-y={Math.PI}
                    occlude={"blending"}
                >
                    <div
                        className="text-black text-3xl bg-white rounded-lg text-center p-4 select-none"
                        style={{
                            width: "378px",
                            height: "540px",
                        }}
                    >
                        <b>🍎 Jia's Market 🥟</b>
                        <ul className="mt-8">
                            <li>Open 24/7</li>
                            <li>Free Wi-Fi</li>
                            <li>ATM Available</li>
                            <li>Snacks & Drinks</li>
                            <li>Restrooms</li>
                            <li>Security Cameras</li>
                        </ul>
                    </div>
                </Html>
            </mesh>
            <mesh
                geometry={nodes.MenuScreen.geometry}
                // material={sceneMaterial}
                material={screenMaterial}
                position={[-0.247, 1.621, -2.354]}
                rotation={[0, -Math.PI / 2, 0]}
            />
            <mesh
                geometry={nodes.MonitorScreen1.geometry}
                // material={sceneMaterial}
                material={screenMaterial}
                position={[-1.469, 4.279, 1.021]}
                rotation={[0, -1.144, Math.PI / 2]}
            />
            <mesh
                geometry={nodes.MonitorScreen2.geometry}
                // material={sceneMaterial}
                material={screenMaterial}
                position={[-1.469, 4.045, -0.099]}
                rotation={[0, -1.532, Math.PI / 2]}
            />
            <mesh
                geometry={nodes.MonitorScreen3.geometry}
                // material={sceneMaterial}
                material={screenMaterial}
                position={[-1.523, 4.279, -1.262]}
                rotation={[-Math.PI, -1.266, -Math.PI / 2]}
            />
            <mesh
                geometry={nodes.VendingScreen.geometry}
                // material={sceneMaterial}
                material={screenMaterial}
                position={[-2.23, 1.065, 1.209]}
                rotation={[-Math.PI, 0, -Math.PI]}
            />
            <Sparkles
                count={100}
                color={"white"}
                scale={[8, 4, 8]}
                position-y={2}
                opacity={0.5}
            />
        </group>
    );
}

useGLTF.preload("/scene.glb");
