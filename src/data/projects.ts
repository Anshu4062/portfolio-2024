export interface Project {
    year: number;
    name: string;
    tech: string[];
    tags: string[];
    desc: string[];
    source: string;
    demo: string | null;
    image: string;
}

const projects: Project[] = [
    {
        year: 2024,
        name: "Algorithm Visualizer",
        tech: ["React", "TypeScript", "TailwindCSS", "ThreeJS"],
        tags: ["Demo", "3D", "Algorithms", "Visualization"],
        desc: [
            "A 3D website to help computer science students visualize common algorithms, such as searching, sorting, and graphs.",
            "Optimized to support up to thousands of meshes without issues.",
        ],
        source: "https://github.com/Jxl-s/algo-visualizations",
        demo: "https://algo-visualizations.vercel.app/",
        image: "/images/projects/2024/algo-visualizations.png",
    },
    {
        year: 2024,
        name: "Vanier Robotics Homepage",
        tech: [
            "React",
            "JavaScript",
            "ThreeJS",
            "WebGL",
            "Blender",
            "TailwindCSS",
        ],
        tags: ["Demo", "3D", "Education"],
        desc: [
            "A WebGL experience with many interactions, made for the home page of Vanier's 2024 robotics home page.",
            "Made with custom shaders to make the website more immersive.",
            "Highly optimized on all devices, supports Safari.",
        ],
        source: "https://github.com/Jxl-s/vanier-robotics-2024-home",
        demo: "https://vanier-robotics-2024-home.vercel.app/",
        image: "/images/projects/2024/robotics-2024.png",
    },
    {
        year: 2024,
        name: "Multi-window Canvas",
        tech: ["HTML5", "JavaScript"],
        tags: ["Demo", "Fun"],
        desc: [
            "A demo of inter-window communication through the browser's local storage.",
        ],
        source: "https://github.com/Jxl-s/multi-window-canvas",
        demo: "https://jxl-s.github.io/multi-window-canvas/",
        image: "/images/projects/2024/multiwindow-canvas.png",
    },
    {
        year: 2023,
        name: "IntelliHouse",
        tech: ["HTML5", "JavaScript", "CSS3", "Python", "Flask", "Arduino"],
        tags: ["IoT"],
        desc: [
            "A responsive and intuitive web application that allows users to monitor and control IoT devices, made without a web framework.",
            "Runs on a Raspberry Pi, ESP8266, and sensors and IoT protocols like MQTT and Bluetooth.",
        ],
        source: "https://gituhb.com/Jxl-s/iot-dashboard",
        demo: null,
        image: "/images/projects/2023/intellihouse.png",
    },
    {
        year: 2023,
        name: "Color Switcher",
        tech: ["React", "JavaScript", "TailwindCSS", "ThreeJS"],
        tags: ["Demo", "3D", "Game"],
        desc: [
            "A simple 3D game where you switch colors and avoid obstacles to pass levels.",
            "Uses a physics engine to simulate gravity and collisions.",
        ],
        source: "https://github.com/Jxl-s/r3f-color-switcher",
        demo: "https://color-switcher-jxl-s.vercel.app/",
        image: "/images/projects/2023/color-switcher.png",
    },
    {
        year: 2023,
        name: "Crimes API",
        tech: ["PHP", "MySQL"],
        tags: ["API"],
        desc: [
            "A RESTful API that provides information about crimes in Los Angeles.",
            "Follows the MVC pattern and adheres to RESTful principles.",
        ],
        source: "https://github.com/Jxl-s/crimes-api",
        demo: null,
        image: "/images/projects/2023/crimes-api.png",
    },
    {
        year: 2023,
        name: "PinPoint",
        tech: ["Flutter", "Firebase"],
        tags: ["Mobile"],
        desc: [
            "A mobile application that allows users to share pins on a map.",
        ],
        source: "https://github.com/Jxl-s/pinpoint",
        demo: null,
        image: "/images/projects/2023/pinpoint.png",
    },
    {
        year: 2023,
        name: "Ghostly Echoes",
        tech: ["Unity", "Blender"],
        tags: ["3D", "Game"],
        desc: [
            "A game in Unity 3D, in a school horror setting.",
            "The player must escape the school while they might encounter creatures on their way.",
        ],
        source: "https://github.com/Jxl-s/ghostly-echoes",
        demo: null,
        image: "/images/projects/2023/ghostly-echoes.png",
    },
    {
        year: 2022,
        name: "Vanier Schedule Builder",
        tech: ["React", "TypeScript", "TailwindCSS", "Rust"],
        tags: ["Demo", "Scheduling", "Education", "Utility"],
        desc: [
            "Generates all possible schedules with the courses you want to take, with same format as Omnivox's.",
            "Could previously fetch courses in real-time, but due to restrictions, it now uses a periodic dump.",
        ],
        source: "https://github.com/Jxl-s/vanier-courses-api",
        demo: "https://vanier-schedule-maker-2.vercel.app/",
        image: "/images/projects/2022/vanier-schedule-builder.png",
    },
    {
        year: 2022,
        name: "LuaJoin",
        tech: ["Lua", "Rust"],
        tags: ["Utility"],
        desc: [
            "A blazing fast Lua project bundler that allows you to bundle Lua projects into a single file.",
            "Supports relative and absolute imports, and static type checking from Luau.",
        ],
        source: "https://github.com/Jxl-s/luajoin",
        demo: null,
        image: "/images/projects/2022/luajoin.png",
    },
];

export default projects;
