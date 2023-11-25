import React, {useState, useEffect} from 'react'
import data from '../../assets/data/portfolioData'
import Modal from './Modal'

const Portfolio = () => {

    const [nextItems, setNextItems] = useState(6);
    const [portfolios, setPortfolios] = useState(data);
    const [selectTabs, setSelectTabs] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [activeId, setActiveId] = useState(null);

    const loadMoreHandler = () => {
        setNextItems(prev => prev + 3)
    }

    const showModalHandler = (id) => {
        setShowModal(true);
        setActiveId(id)
    }

    useEffect(() => {
        
        if(selectTabs === 'all') {
            setPortfolios(data)
        }

        if(selectTabs === 'Web-Dev') {
            const filteredData = data.filter(items => items.category === 'Web-Dev')
            setPortfolios(filteredData)
        }

        if(selectTabs === 'App-Dev') {
            const filteredData = data.filter(items => items.category === 'App-Dev')
            setPortfolios(filteredData)
        }

    }, [selectTabs]);

  return (
    <section id="project">
        <div className="container">

            <div className='flex items-center justify-between flex-wrap'>
                <div className="mb-7 sm:mb-0">
                    <h3 className='text-headingColor text-[2rem] font-[700]'>My Recent Projects</h3>
                </div>

                <div className='flex gap-3'>
                    <button onClick={()=> setSelectTabs('all')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>All</button>
                    <button onClick={()=> setSelectTabs('Web-Dev')}  className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>Web Dev</button>
                    <button onClick={()=> setSelectTabs('App-Dev')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>App Dev</button>
                </div>
            </div>
            
            <div className='flex items-center gap-4 flex-wrap mt-12'>
                {
                    portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
                        <div key={index} data-aos="fade-zoom" data-aos-delay="50" data-aos-duration="1000" className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'>
                            <figure>
                                <img className='rounded-[8px]' src={portfolio.imgUrl} alt='' />
                            </figure>

                            <div className='w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                                <div className='w-full h-full flex items-center justify-center'> 
                                    <button onClick={() => showModalHandler(portfolio.id)} className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px]
                                        font-[500] ease-in duration-200'
                                    >
                                        See Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='text-center mt-6'>

                {
                    
                    nextItems < portfolios.length && data.length > 6 && (
                        <button onClick={loadMoreHandler} className='text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px]
                            font-[500] ease-in duration-200'
                        >
                            Load More
                        </button>
                    )
                }

            </div>
        </div>

        {
            showModal && <Modal activeId={activeId} setShowModal={setShowModal} /> 
        }
    </section>
  )
}

export default Portfolio