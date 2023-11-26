import React from 'react';
import Whatsapp from '../../assets/images/whatsapp.png'

const WhatsappFloat = () => {

    const handleWhatappIconClick = () => {
        window.open("//api.whatsapp.com/send?phone=917050125182&text=Hii There", "_blank")
    }

    return(
        <div className='fixed bottom-6 right-14 text-blue-300 z-10'>
            <img src={Whatsapp} alt="Whatsapp" className='hover:animate-bounce w-10 z-20' onClick={handleWhatappIconClick} />
        </div>
    )
}

export default WhatsappFloat
