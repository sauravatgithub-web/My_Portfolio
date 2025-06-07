import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const linkedIn = import.meta.env.VITE_LINKEDIN_PROFILE;
const email = import.meta.env.VITE_EMAIL;
const instagram = import.meta.env.VITE_INSTAGRAM_PROFILE;

function Contact() {
    const handleClick = (platform) => {
        switch (platform) {
            case 'LinkedIn':
                window.open(linkedIn, '_blank');
                break;
            case 'Email':
                window.open(email, "_blank");
                break;
            case 'Instagram':
                window.open(instagram, '_blank');
                break;
            default:
                break;
        }
    };

    return (
        <div className="contact-section" id='contact'>
            <label className="contact-header">Let's be friends</label>
            <div className="contact-section-main">
                <div className="contact-table">
                    <div className="contact-table-row">
                        <div className="contact-box" onClick={() => handleClick('Email')}>Email <MdEmail size={36}/> </div>
                        <div className="contact-box" onClick={() => handleClick('LinkedIn')}>Linked In <FaLinkedin size={36}/> </div>
                        <div className="contact-box" onClick={() => handleClick('Instagram')}>Instagram <FaInstagram size={36}/> </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;