import React from 'react'
import HeroImg from '../../assets/images/rahulImage.jpeg';
import Resume from '../../assets/document/Rahul_Resume.pdf';
import KenUpdatedResume from '../../assets/document/Rahul_Tech_Resume.pdf';
// import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className='pt-0' id='about'>
        <div className="container pt-14">
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                {/* hero left content */}
                <div className="w-full md:basis-1/2">
                    <h5 
                        data-aos='fade-right' 
                        data-aos-duration='1500' 
                        className='text-headingColor font-[600] text-[16px]'
                    >
                        Hello Welcome
                    </h5>
                    <h1 
                        data-aos='fade-up' 
                        data-aos-duration='1500'
                        className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px]'
                    >
                        I'm Rahul Ranjan <br />
                        Software Engineer
                    </h1>
                    <div
                        data-aos='fade-up' 
                        data-aos-duration='1500'
                        data-aos-delay='200'
                        className='flex items-center gap-6 mt-7'
                    >
                        <a href={KenUpdatedResume} target="_blank"> 
                            <button className='bg-primaryColor text-white font-[500] flex items-center gap-2
                                hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'
                            >
                            <i class="ri-article-line"></i> Resume
                            </button>
                        </a>
                        <a href="https://calendly.com/rahul-ranjan11365/30min" target="_blank" className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'>
                            Schedule Meeting
                        </a>
                    </div>
                    <p 
                        data-aos='fade-left' 
                        data-aos-duration='1500'
                        className='flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'
                    >
                        <span><i class="ri-apps-2-line"></i></span>
                        I'm a tech enthusiast & an open-source contributor and always be open to utilise my skills and abilities to create something new which can make mark on the world.
                        <br />
                        "Always be open to learn new skills."
                    </p>

                    <div className="flex items-center gap-9 mt-14">
                        <span className='text-smallTextColor text-[15px] font-[600]'>Follow Me:</span>
                        {/* <span>
                            <a href='#youtube'
                                className='text-smallTextColor text-[18px] font-[600]'
                            >
                                <i class="ri-youtube-line"></i>
                            </a>
                        </span> */}
                        <span>
                            <a href='https://github.com/imgeekrahul' target="_blank"
                                className='text-smallTextColor text-[18px] font-[600]'
                            >
                                <i class="ri-github-fill"></i>
                            </a>
                        </span>
                        <span>
                            <a href='https://www.facebook.com/profile.php?id=100012308762040' target="_blank"
                                className='text-smallTextColor text-[18px] font-[600]'
                            >
                                <i class="ri-facebook-line"></i>
                            </a>
                        </span>
                        <span>
                            <a href='https://www.instagram.com/r_ranjan124/' target="_blank"
                                className='text-smallTextColor text-[18px] font-[600]'
                            >
                                <i class="ri-instagram-line"></i>
                            </a>
                        </span>
                        <span>
                            <a href='https://www.linkedin.com/in/imgeekrahul' target="_blank"
                                className='text-smallTextColor text-[18px] font-[600]'
                            >
                                <i class="ri-linkedin-fill"></i>
                            </a>
                        </span>
                    </div>
                </div>
                {/* hero left end */}

                {/* hero img */}
                <div className='basis-1/3 mt-10 sm:mt-0'>
                    <figure className='flex items-center justify-center'>
                        <img src={HeroImg} alt='' className='rounded-full' />
                    </figure>
                </div>
                {/* hero img end */}

                {/* hero content right */}
                {/* <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0
                    md:flex-col md:justify-end md:text-end'
                >
                    <div className="mb-10">
                        <h2 className='text-headingColor text-[32px] font-[700]'>
                            <CountUp start={0} end={6} duration={2} suffix='+' />
                        </h2>
                        <h2 className='text-headingColor text-[18px] font-[600]'>
                            Years of Experience
                        </h2>
                    </div>
                    <div className="mb-10">
                        <h2 className='text-headingColor text-[32px] font-[700]'>
                            <CountUp start={0} end={100} duration={2} suffix='%' />
                        </h2>
                        <h2 className='text-headingColor text-[18px] font-[600]'>
                            Success Rate
                        </h2>
                    </div>
                    <div className="mb-10">
                        <h2 className='text-headingColor text-[32px] font-[700]'>
                            <CountUp start={0} end={150} duration={2} suffix='+' />
                        </h2>
                        <h2 className='text-headingColor text-[18px] font-[600]'>
                            Happy Clients
                        </h2>
                    </div>
                    <div className="mb-10">
                        <h2 className='text-headingColor text-[32px] font-[700]'>
                            <CountUp start={0} end={249} duration={2} suffix='+' />
                        </h2>
                        <h2 className='text-headingColor text-[18px] font-[600]'>
                            Projects Completed
                        </h2>
                    </div>
                </div> */}
                {/* hero content right */}
            </div>
        </div>
    </section>
  )
}

export default Hero