"use client"
import { useRouter } from 'next/navigation';
import Footer from '../footer/page';
import Navbar from '../navbar/page';
import SponsorCard from './sponsercard';
const sponsors = [
    {
        name: 'ASPIRE',
        imageUrl: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=400',
        websiteUrl: 'https://aspire.com',
        description: 'Title Sponsor of Vayudoot'
    },
    {
        name: 'Alana Foundation',
        imageUrl: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=400',
        websiteUrl: 'https://alana.org',
        description: 'Supporting Partner'
    },
    {
        name: 'All Nippon Airways (ANA)',
        imageUrl: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=400',
        websiteUrl: 'https://ana.co.jp',
        description: 'Supporting Partner'
    },
    {
        name: 'Amazon',
        imageUrl: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=400',
        websiteUrl: 'https://amazon.com',
        description: 'Supporting Partner'
    }
];
export default function sponser(){
    const Router=useRouter()
    return(
        <main>
            <div>
                <section>
                    <Navbar></Navbar>
                </section>
                <section className='w-full h-[45vh] flex mt-12 '>
                    <section className='w-[50%]  h-full flex  justify-center'>
                        <h1 className='font-bold text-[3rem] pt-5 text-white font-Manrope'>Prize Sponsors</h1>
                    </section>
                    <section className='w-[50%]  h-full flex  justify-center'>
                        <p className='font-light  text-[1.5rem] pt-5 text-white font-manrope pr-10'>
                            Our generous Sponsors and Benefactors support each competition by providing prize purse and operational funding as well as contributing mentorship and industry knowledge.
                        </p>

                    </section>

                </section>
                <section>
                    <div className="min-h-screen  p-4 sm:p-6 md:p-8">
                        <div className="max-w-6xl mx-auto">
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                {sponsors.map((sponsor) => (
                                    <SponsorCard
                                        key={sponsor.name}
                                        name={sponsor.name}
                                        imageUrl={sponsor.imageUrl}
                                        websiteUrl={sponsor.websiteUrl}
                                        description={sponsor.description}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section className='flex items-center mt-[1rem] justify-center'>
                    <p className='text-[3rem] font-bold '>Sponser Us</p>
                </section>
                <section className='flex mt-[1.7rem] justify-center'>
                    <button className ="h-[3rem] w-[15rem] font-bold rounded-md bg-white text-black p-4 flex item-center justify-center  "onClick={(e)=>Router.push("")}>Contact Us</button>
                </section>
                <section>
                    <Footer></Footer>
                </section>
            </div>
        </main>
    )
}