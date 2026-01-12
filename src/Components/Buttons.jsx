import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Buttons(){
    return(
     <section className="btn">
        <button className='email'> <MdEmail size={20} /> Email</button>
        <button className='linkedin'><FaLinkedin size={20} /> Linkedin</button>
      </section>
    )
}