import insta from '../../assets/icons/instagram_icon.png'
import whatapp from '../../assets/icons/whatapp_icon.png'
import './Footer.css'
export default function Footer() {
    return (
    <footer>
        <ul className="footer__list">
            <li className="footer__list__card">
                <h4 className="">Contact</h4>
                <h6 className="footer__list--subtitle">Phone/Text</h6>
                <h6>905-320-0764</h6>
            </li>
            <li className="footer__list__card">
                <h4 className="">Hours</h4>
                <ul className="footer__list__card__sublist">
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
    );
}