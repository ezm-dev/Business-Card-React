
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

export default function Social(){
    return(
    <section  class="social">
        <FaTwitterSquare className="icon" />
        <FaFacebookSquare className="icon"/>
        <FaInstagramSquare className="icon" />
        <FaSquareGithub className="icon" />
    </section>
    )
}