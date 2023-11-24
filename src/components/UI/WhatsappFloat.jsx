import React from 'react';
import Whatsapp from '../../assets/images/whatsapp.png'

const WhatsappFloat = () => {

    const handleWhatappIconClick = () => {
        window.open("//api.whatsapp.com/send?phone=917050125282&text=Hii There", "_blank")
    }

    return(
        <div className='fixed bottom-6 right-14 text-blue-300'>
            <img src={Whatsapp} alt="Whatsapp" className='hover:animate-bounce w-10' onClick={handleWhatappIconClick} />
        </div>
    )
}

export default WhatsappFloat
