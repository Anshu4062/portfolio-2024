import { Html } from "@react-three/drei";
import Welcome from "../Interfaces/Welcome";
import { playSound } from "../../util/sound";
import useExperienceStore from "../Stores/useExperienceStore";
import { CameraFocus } from "../Data/cameraPositions";

export default function ScreenWelcome(props: JSX.IntrinsicElements["mesh"]) {
    const setCameraFocus = useExperienceStore((state) => state.setCameraFocus);

    return (
        <mesh {...props}>
            <Html
                center
                transform
                position={[0, 0, -0.001]}
                rotation-y={Math.PI}
                occlude="blending"
                className="text-white text-3xl bg-blue-700 rounded-lg text-center p-2 select-none"
                style={{
                    width: "378px",
                    height: "540px",
                }}
                scale={[0.1, 0.1, 1]}
            >
                <Welcome
                    onHomeClick={() => {
                        playSound("click.mp3");
                        setCameraFocus(CameraFocus.Home);
                    }}
                    onAboutClick={() => {
                        playSound("click.mp3");
                        setCameraFocus(CameraFocus.AboutMe);
                    }}
                    onProjectsClick={() => {
                        playSound("click.mp3");
                        setCameraFocus(CameraFocus.Projects);
                    }}
                    onJourneyClick={() => {
                        playSound("click.mp3");
                        setCameraFocus(CameraFocus.Journey);
                    }}
                    on2DClick={() => {
                        playSound("click.mp3");
                        window.localStorage.setItem("DIMENSION", "2D");
                        window.location.reload();
                    }}
                />
            </Html>
        </mesh>
    );
}
