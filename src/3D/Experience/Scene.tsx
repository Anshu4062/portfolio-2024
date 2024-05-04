/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
// import { Sparkles } from "@react-three/drei";
import Fan from "../Objects/Fan";
import PowerBank from "../Objects/PowerBank";
import ScreenWelcome from "../Objects/ScreenWelcome";
import ScreenMenu from "../Objects/ScreenMenu";
import ScreenVending from "../Objects/ScreenVending";
import { getAsset } from "../Stores/useLoaderStore";
import { GLTF } from "three/examples/jsm/Addons.js";
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { useMemo } from "react";
import ImageBoard from "../Objects/ImageBoard";
import ScreenAbout from "../Objects/ScreenAbout";
import BannerText from "../Objects/BannerText";
import BannerNeon from "../Objects/BannerNeon";
import SceneDecorations from "./SceneDecorations";

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
        DecoLight: THREE.Mesh;
        BottomLight: THREE.Mesh;
        ShopOutDecoration: THREE.Mesh;
        Circle1: THREE.Mesh;
        Circle2: THREE.Mesh;
        Circle3: THREE.Mesh;
        Circle4: THREE.Mesh;
        BallsBlue: THREE.Mesh;
        BallsPurple: THREE.Mesh;
        ShopBannerText: THREE.Mesh;
        PowerBank: THREE.Mesh;
        Ground: THREE.Mesh;
        ShopBannerNeon: THREE.Mesh;
        BarrelYellowTop: THREE.Mesh;
        BarrelWhiteTop: THREE.Mesh;
        WelcomeScreen: THREE.Mesh;
        MenuScreen: THREE.Mesh;
        MonitorScreen1: THREE.Mesh;
        MonitorScreen2: THREE.Mesh;
        MonitorScreen3: THREE.Mesh;
        VendingScreen: THREE.Mesh;
    };
    materials: {};
};

interface Props {
    material: THREE.Material;
}

export default function Scene({ material }: Props) {
    // Load the scene and extract the nodes
    const sceneModel = getAsset("sceneModel") as GLTF;
    const nodes = useMemo(() => {
        const nodes = {} as GLTFResult["nodes"];
        sceneModel.scene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                nodes[child.name as keyof GLTFResult["nodes"]] = child;
            }
        });

        return nodes;
    }, [sceneModel]);

    // Combine geometries into a single geometry
    const combinedGeometry = useMemo(() => {
        const meshData = [
            {
                geometry: nodes.Cylinder019.geometry.clone(),
                position: [0.02, 2.461, -0.149],
                rotation: [0, 0, -Math.PI / 2],
            },
            {
                geometry: nodes.ShopBanner.geometry.clone(),
                position: [-0.982, 3.17, 0],
                rotation: [Math.PI / 2, Math.PI / 2, 0],
            },
            {
                geometry: nodes.ShopDecoration.geometry.clone(),
                position: [-0.389, 1.051, -0.028],
                rotation: [0, 0, 0],
            },
            {
                geometry: nodes.ShopBody.geometry.clone(),
                position: [-0.56, 1.982, -0.351],
                rotation: [0, 0, 0],
            },
            {
                geometry: nodes.PowerStuff.geometry.clone(),
                position: [-1.515, 2.104, 0.702],
                rotation: [0, 0, -Math.PI / 2],
            },
            {
                geometry: nodes.DecoLight.geometry.clone(),
                position: [0.187, 1.676, -0.031],
                rotation: [0, 0, 0],
            },
            {
                geometry: nodes.ShopOutDecoration.geometry.clone(),
                position: [-1.52, 1.463, -0.295],
                rotation: [0, 0, 0],
            },
        ];

        return BufferGeometryUtils.mergeGeometries(
            meshData.map((mesh) => {
                const geometry = mesh.geometry;
                geometry.rotateX(mesh.rotation[0]);
                geometry.rotateY(mesh.rotation[1]);
                geometry.rotateZ(mesh.rotation[2]);

                geometry.translate(
                    mesh.position[0],
                    mesh.position[1],
                    mesh.position[2]
                );

                return geometry;
            })
        );
    }, []);

    // Create a single mesh using the combined geometry and shared materia
    return (
        <group dispose={null}>
            {/* Add the 3 fans */}
            <Fan
                geometry={nodes.Fan1.geometry}
                material={material}
                position={[-2.011, 2.524, 1.19]}
            />
            <Fan
                geometry={nodes.Fan1.geometry}
                material={material}
                position={[-2.011, 2.537, -0.018]}
            />
            <Fan
                geometry={nodes.Fan1.geometry}
                material={material}
                position={[-2.011, 2.524, -1.305]}
            />
            {/* Add the power bank, to turn off lights */}
            <PowerBank
                geometry={nodes.PowerBank.geometry}
                material={material}
                position={[-1.515, 2.104, 0.702]}
                rotation={[0, 0, -Math.PI / 2]}
            />
            {/* Screens */}
            <ScreenWelcome
                geometry={nodes.WelcomeScreen.geometry}
                position={[1.973, 0.933, 2.23]}
                rotation={[0, -0.919, 0]}
            />
            <ScreenMenu
                geometry={nodes.MenuScreen.geometry}
                position={[-0.247, 1.621, -2.354]}
                rotation={[0, -Math.PI / 2, 0]}
            />
            <ScreenVending
                geometry={nodes.VendingScreen.geometry}
                position={[-2.23, 1.065, 1.209]}
                rotation={[-Math.PI, 0, -Math.PI]}
            />
            <BannerText
                geometry={nodes.ShopBannerText.geometry}
                position={[-0.97, 3.151, -0.004]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <BannerNeon
                geometry={nodes.ShopBannerNeon.geometry}
                position={[-0.982, 3.17, 0]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <ImageBoard
                meshProps={{
                    geometry: nodes.MonitorScreen1.geometry,
                    position: [-1.469, 4.279, 1.021],
                    rotation: [0, -1.144, Math.PI / 2],
                }}
                image="tvGithub"
                // link="https://github.com/Jxl-s"
            />
            <ScreenAbout
                geometry={nodes.MonitorScreen2.geometry}
                position={[-1.469, 4.045, -0.099]}
                rotation={[0, -1.532, Math.PI / 2]}
            />
            <ImageBoard
                meshProps={{
                    geometry: nodes.MonitorScreen3.geometry,
                    position: [-1.523, 4.279, -1.262],
                    rotation: [-Math.PI, -1.266, -Math.PI / 2],
                }}
                image="tvLinkedin"
                // link="https://www.linkedin.com/in/li-jiaxuan"
            />
            {/* Scene decoration and sparkles */}
            <SceneDecorations nodes={nodes} />

            {/* Other decoration */}
            <mesh geometry={combinedGeometry} material={material} />
        </group>
    );
}
