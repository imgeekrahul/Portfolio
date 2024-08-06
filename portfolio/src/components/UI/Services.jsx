import React from 'react'
import frontendImg from '../../assets/images/front-end.png' 
import backendImg from '../../assets/images/backend.png'
import uiImg from '../../assets/images/design.png'
import appsImg from '../../assets/images/apps.png'

const Services = () => {
  return (
    <section id="experience">
        <div className="container lg:pt-5">
            <div className='text-center'>
                <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>Experience</h2>
                <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'></p>
            </div>

            <div className='flex flex-col justify-center sm:py-12'>
                <div className='w-full py-3 sm:max-w-xl sm:mx-auto sm:px-0'>
                    <div className="relative text-gray-700 antialiased text-sm text-semibold">

                        {/* vertical line running through the middle */}
                        <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform translate-x-1/2'></div>

                        {/* right card apps */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>
                                
                                <div className='flex justify-end w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pl-8'>
                                        <div data-aos='fade-left' data-aos-delay='50' data-aos-duration='1300' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer
                                            ease-in duration-150'>
                                            <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white 
                                                group-hover:font-[600] text-xl'
                                            >The Kenverse</h3>

                                            <p>Full Stack Software Engineer | Jan 2024 - Aug 2024 </p>
                                            <p className='mt-3 text-[15px] text-smallTextColor group-hover:text-white
                                                group-hover:font-[500]'
                                            >
                                                <ul className="list-disc pl-3">
                                                    <li>Developed and maintained several institutional-level applications, including the Application Portal, Academics Portal, and PFS Portal.</li>
                                                    <li>Independently designed and launched the Certificate Management Application, enhancing document handling efficiency.</li>
                                                    <li>Led a team to drive product innovation and development within the organization.</li>
                                                    <li>Implemented performance optimisations and scalability improvements for existing applications.</li>
                                                </ul> 

                                                <span className="flex flex-wrap mt-3">
                                                    <p>Skills:</p>
                                                    <p className="mx-1">
                                                        <strong>•</strong> ReactJS
                                                    </p>
                                                    <p className="mx-1">
                                                        <strong>•</strong> NodeJS
                                                    </p>
                                                    <p className="mx-1">
                                                        <strong>•</strong> Salesforce
                                                    </p>
                                                    <p className="mx-1">
                                                        <strong>•</strong> AWS
                                                    </p>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                                    left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                                >
                                    <figure>
                                        <img src={appsImg} alt='' />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        {/* right card ends */}
                    
                        {/* left card Frontend */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>
                                
                                <div className='flex justify-start w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pr-8'>
                                        <div data-aos='fade-right' data-aos-delay='100' data-aos-duration='1400' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer
                                            ease-in duration-150'>
                                            <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white 
                                                group-hover:font-[600] text-xl'
                                            >One24</h3>
                                            <p>Co-Founder & Chief Product Officer | Jan 2023 - Dec 2023 </p>
                                            <p className='mt-3 text-[15px] text-smallTextColor group-hover:text-white
                                                group-hover:font-[500]'
                                            >
                                                <ul className="list-disc pl-3">
                                                    <li>Developing and executing a clear product strategy that aligns with the company's overall business goals and vision</li>
                                                    <li>Overseeing the end-to-end product development process from ideation and design to development, testing and launch.</li>
                                                    <li>Collaborating closely with engineering, design, marketing, sales and other teams to ensure product success.</li>
                                                </ul>    

                                                <span className="flex flex-wrap mt-3">
                                                    <p>Skills:</p>
                                                    <p className="mx-1">
                                                        <strong>•</strong> Asana
                                                    </p>
                                                    <p className="mx-1">
                                                        <strong>•</strong> Figma
                                                    </p>
                                                    <p className="mx-1">
                                                        <strong>•</strong> Excel
                                                    </p>
                                                    <p className="mx-1">
                                                        <strong>•</strong> JS
                                                    </p>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                                    left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                                >
                                    <figure>
                                        <img src={frontendImg} alt='' />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        {/* left card ends */}

                        {/* right card Backend */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>
                                
                                <div className='flex justify-end w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pl-8'>
                                        <div data-aos='fade-left' data-aos-delay='50' data-aos-duration='1300' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer
                                            ease-in duration-150'>
                                            <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white 
                                                group-hover:font-[600] text-xl'
                                            >One24</h3>
                                            <p>VP Engineering, Backend | Nov 2021 - Dec 2022 </p>
                                            <p className='mt-3 text-[15px] text-smallTextColor group-hover:text-white
                                                group-hover:font-[500]'
                                            >
                                                <ul className="list-disc pl-3">
                                                    <li>Build the overall In-flow and Out-flow of the system</li>
                                                    <li>Created the overall system architecture using one24 cross-platform products</li>
                                                    <li>Managed a team of Engineers in the design and implementation of complex software systems</li>
                                                </ul> 

                                                <span className="flex flex-wrap mt-3">
                                                    <p>Skills:</p>
                                                    <p className="mx-1">
                                                        <strong>•</strong> NodeJS
                                                    </p>
                                                    <p className="mx-1">
                                                        <strong>•</strong> Express
                                                    </p>
                                                    <p className="mx-1">
                                                        <strong>•</strong> Redis
                                                    </p>
                                                    <p className="mx-1">
                                                        <strong>•</strong> JS
                                                    </p>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                                    left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                                >
                                    <figure>
                                        <img src={backendImg} alt='' />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        {/* right card ends */}
                        
                        {/* left card UI */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>
                                
                                <div className='flex justify-start w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pr-8'>
                                        <div data-aos='fade-right' data-aos-duration='1200' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer
                                            ease-in duration-150'>
                                            <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white 
                                                group-hover:font-[600] text-xl'
                                            >Cognizant</h3>

                                            <p>Programmer Analyst Trainee | Feb 2022 - Jul 2022 </p>
                                            <p className='mt-3 text-[15px] text-smallTextColor group-hover:text-white
                                                group-hover:font-[500]'
                                            >
                                                <ul className="list-disc pl-3">
                                                    <li>Designed, implemented and maintained relational database systems using Oracle and MySQL </li>
                                                    <li>Utilised object-oriented programming techniques to create efficient and reusable code.</li>
                                                    <li>Setup and Monitored development environments to ensure that all stakeholders had access to the necessary tools</li>
                                                    <li>Developed and maintained web-based applications using HTML, CSS and JavaScript from the frontend and JAVA Springboot from the backend in our approval project.</li>
                                                </ul> 

                                                <span className="flex flex-wrap mt-3">
                                                    <p>Skills:</p>
                                                    <p className="mx-1">
                                                        <strong>•</strong> HTML5
                                                    </p>
                                                    <p className="mx-1">
                                                        <strong>•</strong> CSS3
                                                    </p>
                                                    <p className="mx-1">
                                                        <strong>•</strong> ReactJS
                                                    </p>
                                                    <p className="mx-1">
                                                        <strong>•</strong> Java
                                                    </p>
                                                    <p className="mx-1">
                                                        <strong>•</strong> Springboot
                                                    </p>
                                                    <p className="mx-1">
                                                        <strong>•</strong> SQL
                                                    </p>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                                    left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                                >
                                    <figure>
                                        <img src={uiImg} alt='' />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        {/* left card ends */}
                        
                        {/* right card apps */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>
                                
                                <div className='flex justify-end w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pl-8'>
                                        <div data-aos='fade-left' data-aos-delay='50' data-aos-duration='1300' className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer
                                            ease-in duration-150'>
                                            <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white 
                                                group-hover:font-[600] text-xl'
                                            >One24</h3>

                                            <p>Software Development Engineer | Jan 2021 - Nov 2021 </p>
                                            <p className='mt-3 text-[15px] text-smallTextColor group-hover:text-white
                                                group-hover:font-[500]'
                                            >
                                                <ul className="list-disc pl-3">
                                                    <li>Build a Web-based OS a.k.a One24OS</li>
                                                    <li>Created appplication for sales person which helps in onboardation of stores</li>
                                                    <li>Managed the in-flow and the out-flow of the system</li>
                                                    <li>Created RESTful APIs for one24 products.</li>
                                                </ul> 

                                                <span className="flex flex-wrap mt-3">
                                                    <p>Skills:</p>
                                                    <p className="mx-1">
                                                        <strong>•</strong> ReactJS
                                                    </p>
                                                    <p className="mx-1">
                                                        <strong>•</strong> NodeJS
                                                    </p>
                                                    <p className="mx-1">
                                                        <strong>•</strong> ExpressJS
                                                    </p>
                                                    <p className="mx-1">
                                                        <strong>•</strong> Flutter
                                                    </p>
                                                    <p className="mx-1">
                                                        <strong>•</strong> Firebase
                                                    </p>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute
                                    left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                                >
                                    <figure>
                                        <img src={appsImg} alt='' />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        {/* right card ends */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services