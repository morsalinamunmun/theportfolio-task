import { useQuery } from "@tanstack/react-query";
const Resume = () => {
    const formatDate = (dateString) => {
        const options = { month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };
    const { data: userInfo = [] } = useQuery({
        queryKey: ["userInfo"], // Pass an array as the query key
        queryFn: () => {
            return fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
                .then((res) => res.json())
        },
    });
    return (
        <div className="bg-[#333333]">
            <h1 className="border-b-2 border-b-gray-300 py-3 text-3xl text-white font-bold">Resume</h1>
            <p className="text-[#d5d5d5] text-right">5 years experience</p>
            <div className="mt-10 flex">
                <div>
                    <h1 className="font-bold text-2xl border-b-2 border-b-[#ff714a] pb-2 w-28 mb-5 text-white">Education</h1>
                    {userInfo.user?.timeline?.map((timelineItem, index) =>
                        timelineItem.forEducation && (
                            <div key={index}>
                                <div className="flex">
                                    <div className="mb-36 w-44 text-right mr-5">
                                        <p className="font-bold text-white">{formatDate(timelineItem?.startDate)}-{formatDate(timelineItem?.endDate)}</p>
                                        <p className="text-[#d5d5d5]">{timelineItem?.company_name}</p>
                                    </div>
                                    <div className="border-r border-r-gray-500"></div>
                                    <div className="space-y-3 ml-5 md:w-[60%] mb-5">
                                        <h2 className="text-white font-bold text-xl">{timelineItem?.jobTitle}</h2>
                                        <ul className="text-[#d5d5d5] ">
                                            {timelineItem.bulletPoints.map((bullet, bulletIndex) => (
                                                <li key={bulletIndex}>{bullet}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                    <h1 className="font-bold text-2xl border-b-2 border-b-[#ff714a] pb-2 w-32 mb-5 text-white">Experience</h1>
                    <div>
                        {
                            userInfo.user?.timeline?.map((timelineItem, index)=>
                            timelineItem.forEducation === false && (
                                <div key={index}>
                                <div className="flex">
                                    <div className="mb-36 w-44 text-right mr-5">
                                        <p className="font-bold text-white">{formatDate(timelineItem?.startDate)}-{formatDate(timelineItem?.endDate)}</p>
                                        <p className="text-[#d5d5d5]">{timelineItem?.company_name}</p>
                                    </div>
                                    <div className="border-r border-r-gray-500"></div>
                                    <div className="space-y-3 ml-5 md:w-[60%] mb-5">
                                        <h2 className="text-white font-bold text-xl">{timelineItem?.jobTitle}</h2>
                                        <ul className="text-[#d5d5d5] ">
                                            {timelineItem.bulletPoints.map((bullet, bulletIndex) => (
                                                <li key={bulletIndex}>{bullet}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>  
                            )
                        )
                        }
                    </div>
                </div>
                <div className="md:mr-20"> 
                    <h1 className="font-bold text-2xl border-b-2 border-b-[#ff714a] pb-2 w-16 text-white mb-5">Skills</h1>
                    {
                        userInfo.user?.skills?.map((skill, index) =>
                            <div key={index}>
                                <div className="flex text-white justify-between">
                                    <p className="text-white">{skill?.name}</p>
                                    <p>{skill?.percentage}%</p>
                                </div>
                                <progress className="progress progress-warning w-64" value={skill?.percentage} max="100"></progress>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Resume;