import { Html } from "@react-three/drei";
import Welcome from "../Interfaces/Welcome";
import { useThree } from "@react-three/fiber";
import { moveTo, positions } from "../Data/positions";
import type { OrbitControls } from "three/examples/jsm/Addons.js";

export default function ScreenMenu(props: JSX.IntrinsicElements["mesh"]) {
    const camera = useThree((s) => s.camera);
    const controls = useThree((s) => s.controls) as OrbitControls | null;

    return (
        <mesh {...props}>
            <Html
                center
                transform
                distanceFactor={0.75}
                position={[0, 0, -0.001]}
                rotation-y={Math.PI}
                occlude={"blending"}
                className="text-white text-3xl bg-blue-700 rounded-lg text-center p-2 select-none"
                style={{
                    width: "366px",
                    height: "530px",
                }}
            >
                {/* Temporary */}
                <Welcome
                    onHomeClick={() => {
                        if (!controls) return;
                        moveTo(camera, controls, positions.home);
                    }}
                    onAboutClick={() => {
                        if (!controls) return;
                        moveTo(camera, controls, positions.aboutMe);
                    }}
                    onProjectsClick={() => {
                        if (!controls) return;
                        moveTo(camera, controls, positions.projects);
                    }}
                    onJourneyClick={() => {
                        if (!controls) return;
                        moveTo(camera, controls, positions.journey);
                    }}
                    onContactClick={() => {
                        if (!controls) return;
                        moveTo(camera, controls, positions.contact);
                    }}
                />
            </Html>
        </mesh>
    );
}
