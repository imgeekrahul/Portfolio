import React, {useState} from 'react'
import axios from 'axios';

const API_REQUEST = process.env.REACT_APP_API;

const Contact = () => { 
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        const data = {
            name: name,
            email: email,
            subject: subject,
            message: message
        }
        if(name != "") {
            axios.post(`${API_REQUEST}/add_request`, data)
            .then(resData => {
                alert(`Thanks `+ resData.data.name + " !! I'll get back to you soon !!")
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            alert("Please Enter details !!");
        }
    }

  return (
    <section id="contact" className="pb-16">
        <div className="container">
            <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>Get in touch</h2>
            <div className='md:flex justify-between items-center'>
                <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
                    <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116935.61555168715!2d86.03654869667365!3d23.66744582326513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4230341010871%3A0xf89f21d9001d5036!2sBokaro%20Steel%20City%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1693899967202!5m2!1sen!2sin" className='border-0 w-full h-full' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
                    <form className='w-full' onSubmit={handleSubmit}>
                        <div className='mb-5'>
                            <input type='text' placeholder='Enter your name' className='w-full p-3 focus:outline-none rounded-[5px]' onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='mb-5'>
                            <input type='email' placeholder='Enter your email' className='w-full p-3 focus:outline-none rounded-[5px]' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='mb-5'>
                            <input type='text' placeholder='Subject' className='w-full p-3 focus:outline-none rounded-[5px]' onChange={(e) => setSubject(e.target.value)} />
                        </div>
                        <div className='mb-5'>
                            <textarea type='text' rows={3} placeholder='Write your message' className='w-full p-3 focus:outline-none rounded-[5px]' onChange={(e) => setMessage(e.target.value)} />
                        </div>
                        <button className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-in duration-300'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact