import { View } from "@react-three/drei";
import PageLayout from "./PageLayout";
import { useTranslation } from "react-i18next";
import { GiJourney } from "react-icons/gi";
import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import useJourneyStore from "../stores/useJourneyStore";
import FadeInText from "../components/FadeIn";
import useVisibleHook from "../hooks/useVisibleHook";
import journey from "../data/journey";

interface JobCardProps {
    title: string;
    company: string;
    location: string;
    date: string;
    scene: ReactNode;

    // For the bar
    educEnd?: boolean;
    educMiddle?: boolean;
    educStart?: boolean;

    educBg?: string;
    bg: string;

    hoverId: string;
    educHoverId: string;

    reverse?: boolean;
}

function JobCard({
    title,
    company,
    location,
    date,
    scene,

    educEnd,
    educMiddle,
    educStart,
    educHoverId,
    hoverId,
    educBg,
    bg,

    reverse,
    children,
}: PropsWithChildren<JobCardProps>) {
    const hoveredCard = useJourneyStore((state) => state.hoveredCard);
    const setHoveredCard = useJourneyStore((state) => state.setHoveredCard);

    const onCardHover = () => setHoveredCard(hoverId);
    const onCardLeave = () => setHoveredCard(null);

    const onLineHover = () => setHoveredCard(educHoverId);
    const onLineLeave = () => setHoveredCard(null);

    const isSelected = hoveredCard === hoverId;
    const transparentCard = hoveredCard !== null && hoveredCard !== hoverId;
    const transparentLine = hoveredCard !== null && hoveredCard !== educHoverId;

    return (
        <div
            className={`w-full flex gap-2 ${reverse && "xl:flex-row-reverse"}`}
        >
            {/* container for the card */}
            <div
                className={`${bg} p-4 rounded-lg flex-grow w-full my-2 duration-300 ${
                    transparentCard && "opacity-20"
                } ${isSelected && "-translate-y-2"}`}
                style={{
                    zIndex: 1,
                }}
                onPointerEnter={onCardHover}
                onPointerLeave={onCardLeave}
            >
                {/* Title */}
                <div className="flex justify-between">
                    <h1>
                        <span className="text-xs lg:text-base font-semibold block">
                            {title}
                        </span>
                        <span className="text-xs lg:text-base block">
                            {company}
                        </span>
                    </h1>
                    <h1 className="text-right">
                        <span className="text-xs lg:text-base font-semibold block">
                            {date}
                        </span>
                        <span className="text-xs lg:text-base block">
                            {location}
                        </span>
                    </h1>
                </div>

                {/* Body */}
                <ul className="hidden lg:block list-disc px-4 mt-2 text-sm">
                    {children}
                </ul>
            </div>

            <div
                className="flex gap-2"
                onPointerEnter={onLineHover}
                onPointerLeave={onLineLeave}
            >
                <div
                    className={`w-3 flex items-center justify-center duration-300 ${
                        educMiddle || educStart || educEnd ? educBg : ""
                    } ${educStart ? "rounded-b-lg mb-2" : ""} ${
                        educEnd ? "rounded-t-lg mt-2" : ""
                    } ${transparentLine && "opacity-20"}`}
                >
                    {/* a white ball placed at the middle too */}
                    <div className={`w-2 h-2 bg-white rounded-full`}></div>
                    {/* <div
                        className={`w-5 h-0.5 absolute bg-white border-none ${
                            reverse
                                ? "-translate-x-3 xl:translate-x-3"
                                : "-translate-x-3"
                        }`}
                    ></div> */}
                </div>
            </div>

            {/* Insert a 3D Model here */}
            <View className="hidden xl:block flex-grow w-full my-2 p-4">
                {scene}
            </View>
        </div>
    );
}

export default function Journey() {
    const { t, i18n } = useTranslation();

    const [visited, setVisited] = useState(false);
    const observed = useVisibleHook("journey-div", 0.5);

    useEffect(() => {
        if (observed) {
            setVisited(true);
        }
    }, [observed]);

    // check if the page was visited (scrolled to)
    return (
        <PageLayout
            icon={<GiJourney className="h-6 w-6 text-indigo-400" />}
            label={t("journey")}
            title={t("My Journey")}
            divId="journey-div"
            i={3}
        >
            <p className="mb-4 text-center">{t("journey_desc")}</p>

            {/* List here */}
            <div className="w-full">
                {journey.map((item, i) => {
                    const isReverse = i % 2 === 1;

                    // Check if this is the last, middle, or the first for this specific education ID
                    let isLast = false;
                    let isMiddle = false;
                    let isFirst = false;

                    const sameEducation = journey.filter(
                        (j) => j.educationId === item.educationId
                    );

                    const educBg =
                        sameEducation[sameEducation.length - 1].color;

                    // If it's single, then it's both first and last
                    if (sameEducation.length === 1) {
                        isFirst = true;
                        isLast = true;
                    } else {
                        if (sameEducation[0] === item) {
                            isFirst = true;
                        } else if (
                            sameEducation[sameEducation.length - 1] === item
                        ) {
                            isLast = true;
                        } else {
                            isMiddle = true;
                        }
                    }

                    const title =
                        i18n.language === "fr" ? item.titleFr! : item.title;

                    const subtitle =
                        i18n.language === "fr"
                            ? item.subtitleFr!
                            : item.subtitle;
                    const location =
                        i18n.language === "fr"
                            ? item.locationFr!
                            : item.location;
                    const description =
                        i18n.language === "fr"
                            ? item.descriptionFr!
                            : item.description;

                    return (
                        <FadeInText
                            key={i}
                            delay={0}
                            flag={visited}
                            fromX={isReverse ? 20 : -20}
                        >
                            <JobCard
                                title={title}
                                company={subtitle}
                                location={location}
                                date={item.date}
                                scene={item.scene}
                                educEnd={isFirst}
                                educMiddle={isMiddle}
                                educStart={isLast}
                                bg={item.color ?? "bg-indigo-700"}
                                educBg={educBg ?? "bg-indigo-700"}
                                hoverId={item.id!}
                                educHoverId={item.educationId ?? ""}
                                reverse={isReverse}
                            >
                                {description.map((desc, i) => (
                                    <li
                                        dangerouslySetInnerHTML={{
                                            __html: desc,
                                        }}
                                        key={i}
                                    />
                                ))}
                            </JobCard>
                        </FadeInText>
                    );
                })}
                {/* <FadeInText delay={0} flag={visited} fromX={-20}>
                    <JobCard
                        title="Software Developer Intern"
                        company="NDT Technologies"
                        location="Montreal, Canada"
                        date="Jan. 2024 - Now"
                        scene={<PreviewScene />}
                        educEnd={true}
                        bg={"bg-blue-700"}
                        educBg={"bg-red-600"}
                        hoverId="ndt_technologies"
                        educHoverId="vanier_college"
                    >
                        <li>
                            Reduced database query times by up to <b>99.96%</b>
                        </li>
                        <li>
                            Contribute to the development of{" "}
                            <b>8 web dashboards</b>
                        </li>
                        <li>
                            Revamp legacy systems to address common
                            vulnerabilities of <b>4 projects</b>
                        </li>
                    </JobCard>
                </FadeInText>
                <FadeInText delay={0.25} flag={visited} fromX={20}>
                    <JobCard
                        title="Full-Stack Developer"
                        company="Contract Work"
                        location="Remote"
                        date="Jan. 2023 - May 2023"
                        scene={
                            <StageLayout
                                box={[2, 1.5, 2]}
                                offset={[0, -1.5, 0]}
                            >
                                <KeyboardModel rotation-x={Math.PI * 0.25} />
                            </StageLayout>
                        }
                        reverse={true}
                        educMiddle={true}
                        bg={"bg-blue-700"}
                        educBg={"bg-red-600"}
                        hoverId="contract_work"
                        educHoverId="vanier_college"
                    >
                        <li>
                            Developed a full-stack <b>visually appealing</b> web
                            application in <b>PHP</b> for a client.
                        </li>
                        <li>
                            Programmed a system featuring a robust{" "}
                            <b>content management system.</b>
                        </li>
                        <li>
                            Used <b>agile and waterfall</b> methodologies to
                            develop and document the project.
                        </li>
                    </JobCard>
                </FadeInText>

                <FadeInText delay={0.5} flag={visited} fromX={-20}>
                    <JobCard
                        title="Vanier College"
                        company="Comp. Sci. DEC"
                        location="Montreal, Canada"
                        date="Aug. 2021 - Now"
                        scene={
                            <StageLayout
                                box={[1.5, 1.5, 1.5]}
                                offset={[0, 2, 0]}
                            >
                                <ShelvesModel />
                            </StageLayout>
                        }
                        educStart={true}
                        bg={"bg-red-600"}
                        educBg={"bg-red-600"}
                        hoverId="vanier_college"
                        educHoverId="vanier_college"
                    >
                        <li>
                            Achieved a computer science average of <b>97.7%</b>,
                            and math average of <b>99.8%</b>
                        </li>
                    </JobCard>
                </FadeInText> */}
            </div>
        </PageLayout>
    );
}
