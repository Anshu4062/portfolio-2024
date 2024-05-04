import gsap from "gsap";
import * as THREE from "three";

const allMaterials: THREE.ShaderMaterial[] = [];
export const registerMaterial = (material: THREE.ShaderMaterial) => {
    allMaterials.push(material);
};

export const setDarkMode = (isDarkMode: boolean) => {
    const fromValue = isDarkMode ? 0 : 1;
    const toValue = isDarkMode ? 1 : 0;

    for (const material of allMaterials) {
        gsap.fromTo(
            material.uniforms.uNightMix,
            { value: fromValue },
            { value: toValue, duration: 0.5, ease: "power2.inOut" }
        );
    }
};
