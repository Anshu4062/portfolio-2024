import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function Effects() {
    return (
        <EffectComposer multisampling={8}>
            <Bloom
                luminanceThreshold={1.5}
                luminanceSmoothing={1.5}
                intensity={1}
                height={200}
            />
        </EffectComposer>
    );
}
