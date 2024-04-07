import { useQuery } from "@tanstack/react-query";

const About = () => {
    const { data: userInfo = [] } = useQuery({
        queryKey: ["userInfo"], // Pass an array as the query key
        queryFn: () => {
            return fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
                .then((res) => res.json())
        },
    });
    console.log(userInfo);
    return (
        <div>
            {
                userInfo.user && (
                    <div className="flex justify-between gap-10 text-white items-center text-[#d5d5d5]">
                        <div className="w-[50%] h-[550px]">
                            <img className="w-full h-full" src={userInfo.user?.about?.avatar?.url} alt="" />
                        </div>
                        <div className="w-[50%] space-y-5">
                            <h2 className="text-[#d5d5d5]">{userInfo.user?.about?.title}</h2>
                            <h1 className="text-white text-3xl font-semibold">{userInfo.user?.about?.name}</h1>
                            <p>{userInfo.user?.about?.description}</p>
                            <button className="border-2 border-[#ff714a] py-2 px-5">Contact</button>
                        </div>
                    </div>
                )
            }
            {/* <div>
                <h1>What I do</h1>
                <div>
                    <div>
                        <h2>App Development</h2>
                    </div>
                </div>
            </div> */}
            <div className="bg-[#333333] p-10 py-20 pb-28 h-full">
                <div>
                    <h1 className="text-3xl border-b-2 border-b-[#ff714a] text-white font-semibold w-40 mb-5 pb-2">Testimonial</h1>
                    {
                        userInfo.user && (
                            <div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[#d5d5d5]">
                                    {userInfo.user.testimonials.map((testimonial, index) => (
                                        <div key={index} className="relative mb-20">
                                            <div className="border border-gray-600 bg-[#434343] h-40 rounded p-5 flex-grow overflow-hidden">
                                                <p className="h-full line-clamp-3">{testimonial.review}</p>
                                            </div>
                                            <div className="flex gap-2 items-center absolute -left-10 top-[140px]">
                                                <img className="w-28 rounded-full" src={testimonial.image.url} alt={testimonial.name} />
                                                <div className="">
                                                    <h2>{testimonial.name}</h2>
                                                    <p>{testimonial.position}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default About;