import insta from '../../assets/icons/instagram_icon.png'
import whatapp from '../../assets/icons/whatapp_icon.png'
import './Footer.css'
export default function Footer() {
    return (
    <>
    <p className='prompt'>Unlock your inner brilliance. See the <a href='https://www.instagram.com/janesclair_rib/' className='anchor_format' >Instagram Page</a></p>
    <footer>
        <ul className="footer__list">
            <li className="footer__list__card fullwidth">
                <h4 className="">Location</h4>
                <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9773.917366377196!2d-79.76527013815725!3d43.25555000561859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9f4aaa89762d%3A0x5a51bfdd8c03e7c6!2sConfederation%20Park%20A%2C%20Hamilton%2C%20ON!5e0!3m2!1sen!2sca!4v1713407545874!5m2!1sen!2sca" width="100%" height="400" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </li>
            <li className="footer__list__card">
                <h4 className="">Contact</h4>
                <h6 className="footer__list--subtitle">Phone/Text</h6>
                <h6>905-320-0764</h6>
            </li>
            <li className="footer__list__card">
                <h4 className="">Hours</h4>
                <ul className="footer__list__card__sublist" id="hours">
                    <li>
                        <h6 className="footer__list--subtitle">MONDAY - FRIDAY</h6>
                        <h6>by appointment only</h6>
                    </li>
                    <li>
                        <h6 className="footer__list--subtitle">SATURDAY</h6>
                        <h6>by appointment only</h6>
                    </li>
                    <li>
                        <h6 className="footer__list--subtitle">SUNDAY</h6>
                        <h6>Closed</h6>
                    </li>
                </ul>
            </li>
            <li className="footer__list__card--centered">
                <h4 className="">Social</h4>
                <ul className="footer__list__card__sublist--icons">
                    <li><a href='https://www.instagram.com/janesclair_rib/'                     target='_blank' rel="noreferrer"><img src={insta} alt="instagram"/></a></li>
                    <li><a href="https://www.whatsapp.com/catalog/19053200764/?app_absent=0"    target='_blank' rel="noreferrer"><img src={whatapp} alt="whatapp"/></a></li>
                </ul>
            </li>
        </ul>
    </footer>
    </>
    );
}