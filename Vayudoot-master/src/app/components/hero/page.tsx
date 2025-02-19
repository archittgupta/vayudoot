import { Info } from "lucide-react"
import Footer from "../footer/page"
export default function Hero(){
    return(
        <main>
            <div>
                <section className="pt-10">
                    <section className="w-full  ml-[5rem] mb-[5rem]">
                        <h1 className="font-bold text-[3rem] pl-[2rem] mx-auto pt-5 text-white font-Manrope">WE ARE VAYUDOOT</h1>
                        <p className="font-semibold pr-[15rem] pt-[2.5rem] pl-[2rem] leading-8">Our mission is to inspire and equip the next generation of engineers and innovators to push the boundaries of drone technology. Through hands-on competition, collaboration, and real-world problem-solving, we aim to foster creativity, technical excellence, and a spirit of innovation.</p>
                        
                    </section>
                    <section>
                        <div className="min-h-screen  text-white p-8">
                            <div className="max-w-7xl mx-auto">
                                <div className="flex items-center gap-2 mb-12">
                                    <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-5">IMPACT BY THE NUMBERS</h1>
                                    <Info className="w-6 h-6 text-blue-600" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                                    <div className="space-y-2">
                                        <div className="text-6xl md:text-7xl font-bold text-blue-600">3</div>
                                        <div className="text-xl md:text-2xl font-bold tracking-wider">LAUNCHED PRIZES</div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="text-6xl md:text-7xl font-bold text-blue-600">50<span className="text-4xl align-top">+</span></div>
                                        <div className="text-xl md:text-2xl font-bold tracking-wider">COMPETITORS</div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="text-6xl md:text-7xl font-bold text-blue-600">30</div>
                                        <div className="text-xl md:text-2xl font-bold tracking-wider">STATES</div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="text-6xl md:text-7xl font-bold text-blue-600">10<span className="text-4xl align-top">+</span></div>
                                        <div className="text-xl md:text-2xl font-bold tracking-wider">Sponsers</div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="text-6xl md:text-7xl font-bold text-blue-600">
                                            ₹50,000<span className="text-4xl align-top">+</span>
                                        </div>
                                        <div className="text-xl md:text-2xl font-bold tracking-wider">CUMULATIVE PRIZE PURSE LAUNCHED</div>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>

                    </section>
                    <section>
                        <div className="min-h-screen text-white ">
                            <div className="max-w-7xl mx-auto">
                                <div className=" items-center gap-2 mb-12">
                                    <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-5">WE BELIEVE IN POWER OF COMPETITION</h1>
                                    <p className="font-semibold pr-[15rem] pt-[2.5rem] pl-[2rem] leading-8">Without a target you’ll miss every time. Vayudoot has clear, objective and measurable goals and at their most powerful capture the imaginations of people all over the world inspiring everyone into action.</p>
                                    <p className="font-semibold pr-[15rem] pt-[2.5rem] pl-[2rem] leading-8">The world needs crazy ideas. Solutions can come from anyone, anywhere on the planet; engineers, scientists, garage tinkerers, entrepreneurs, innovators, citizen scientists and high school students have embraced the spirit of competition, won millions of rupees in prize purses and helped shape a better future for all.</p>
                                    <p className="font-semibold pr-[15rem] pt-[2.5rem] pl-[2rem] leading-8">Every one of us has the power to make a difference. Follow us on socials and enter your email to stay up to date with the latest competition news and bite-size content.</p>
                                    
                                </div>


                            </div>

                        </div>
                    </section>
                    <section>
                        <Footer></Footer>
                    </section>
                </section>
            </div>
        </main>
    )
}