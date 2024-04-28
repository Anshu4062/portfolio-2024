import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { TYPING_TEXTS } from "../../data/home";
import { useTranslation } from "react-i18next";
import playSound from "../Utils/playSound";
import TypingLabel from "../../components/TypingLabel";
import useExperienceStore from "../Stores/useExperienceStore";
import { CameraFocus } from "../Data/cameraPositions";
import { GiAppleSeeds, GiDumpling } from "react-icons/gi";

export default function About() {
    const [cameraFocus, setCameraFocus] = useExperienceStore((state) => [
        state.cameraFocus,
        state.setCameraFocus,
    ]);

    const { t, i18n } = useTranslation();

    const onClick = () => {
        if (
            cameraFocus !== CameraFocus.AboutMe &&
            cameraFocus !== CameraFocus.Contact
        ) {
            setCameraFocus(CameraFocus.AboutMe);
        }
    };

    return (
        <>
            {/* mask */}
            <div
                className={`absolute duration-500 w-full h-full z-10 flex flex-col items-center justify-start ${
                    cameraFocus === CameraFocus.AboutMe ||
                    cameraFocus === CameraFocus.Contact
                        ? "opacity-0 pointer-events-none"
                        : "opacity-100"
                } py-6 px-8 bg-indigo-900`}
                onClick={onClick}
            >
                <header className="w-full border-b-4 pb-4">
                    <h1 className="text-6xl font-bold flex items-center justify-center gap-8">
                        <GiAppleSeeds className="w-12 h-12 text-red-600" />
                        Jia's Market
                        <GiDumpling className="w-12 h-12 text-yellow-600" />
                    </h1>
                    <h2 className="text-4xl font-semibold ">{t("welcome!")}</h2>
                </header>

                <ul className="text-4xl mt-4 font-semibold flex flex-col gap-4 px-8 list-disc">
                    {/* Turn off air conditioning by clicking on the AC fans. */}
                    <li>{t("3d_welcome_1")}</li>
                    <li>{t("3d_welcome_2")}</li>
                </ul>
            </div>
            <div className="border-8 rounded-lg border-blue-300 w-full h-full p-3 flex flex-col">
                <h1 className="text-xl">{t("hello").toUpperCase()}</h1>
                <p className="font-semibold text-6xl">
                    {t("I am")} <span className="text-indigo-300">Jia</span>
                </p>
                <span className="text-xl block">
                    {t("a")}{" "}
                    <TypingLabel
                        className="text-indigo-300"
                        words={TYPING_TEXTS.map((t) => t[i18n.language])}
                    />
                </span>
                <hr className="my-4 mx-4" />
                <p className="text-base">{t("home_desc")}</p>
                <section className="mt-4 flex flex-col gap-4 mx-auto">
                    <a
                        href="mailto: jiaxuanli.6231@gmail.com"
                        className="p-1 flex gap-6 font-semibold hover:text-indigo-400 duration-300 cursor-pointer items-center"
                    >
                        <SiGmail
                            className="h-8 w-8 bg-white rounded-md p-0.5 cursor-pointer"
                            color="#d14836"
                        />
                        <span>jiaxuanli.6231@gmail.com</span>
                    </a>
                    <a
                        href="https://github.com/Jxl-s"
                        target="_blank"
                        className="p-1 flex gap-6 font-semibold hover:text-indigo-400 duration-300 cursor-pointer items-center"
                    >
                        <SiGithub
                            className="h-8 w-8 bg-white rounded-md p-0.5 cursor-pointer"
                            color="#000"
                        />
                        <span>@Jxl_s</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/li-jiaxuan"
                        target="_blank"
                        className="p-1 flex gap-6 font-semibold hover:text-indigo-400 duration-300 cursor-pointer items-center"
                    >
                        <SiLinkedin
                            className="h-8 w-8 bg-white rounded-md p-0.5 cursor-pointer"
                            color="#0077b5"
                        />
                        <span>@li-jiaxuan</span>
                    </a>
                </section>

                <div className="flex-grow flex items-end justify-center mb-2">
                    <p
                        className="col-span-2 font-semibold text-indigo-500 text-lg lg:text-base hover:text-indigo-700 duration-300 cursor-pointer"
                        onClick={() => {
                            playSound("clickAudio");
                            setCameraFocus(CameraFocus.Home);
                        }}
                    >
                        {t("Back")}
                    </p>
                </div>
            </div>
        </>
    );
}
