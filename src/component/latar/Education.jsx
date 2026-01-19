import React from "react";
import {
    Timeline,
    TimelineBody,
    TimelineContent,
    TimelineItem,
    TimelinePoint,
    TimelineTime,
    TimelineTitle,
} from "flowbite-react";
import { FaCircle } from "react-icons/fa6";
import { educationData } from "../../data/education";


const Education = () => {
    const MyIcon = () => (
        <div className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full ring-2 ring-gray-300">
            <FaCircle className="text-[#B7B597]" size={16} />
        </div>
    )

    return (
        <div id="qualification">
            <p class="text-[#8B8858] text-lg font-bold">QUALIFICATION</p>
            <h1 class="font-semibold text-3xl my-1 mb-5 text-[#254336]">
                My Education
            </h1>
            <Timeline>
                {educationData.map((edu, index) => (
                    <TimelineItem key={index}>
                        <TimelinePoint icon={MyIcon} />
                        <TimelineContent>
                            <TimelineTime>{edu.period}</TimelineTime>
                            <TimelineTitle>{edu.title}</TimelineTitle>
                            <TimelineBody>
                                <p class="w-[90%] my-2 text-sm font-normal leading-normal text-gray-400">
                                    {edu.description}
                                </p>
                                <div className="mt-3 w-37.5 h-8 p-2 bg-[#b7b597]/40 rounded-full text-center text-[#8b8758] text-xs font-semibold">
                                    {edu.badge}
                                </div>
                            </TimelineBody>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>

    );
}

export default Education
