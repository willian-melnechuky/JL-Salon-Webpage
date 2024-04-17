import insta from '../../assets/icons/instagram_icon.png'
export default function Footer() {
    return (
    <footer>
        <ul className="footer__list">
            <li className="footer__list__card">
                <h4 className="">Contact</h4>
                <h6 className="footer__list--subtitle">EMAIL</h6>
                <h6>info@travelsite.com</h6>
            </li>
            <li className="footer__list__card">
                <h4 className="">Hours</h4>
                <ul className="footer__list__card__sublist">
                    <li>
                        <h6 className="footer__list--subtitle">MONDAY - FRIDAY</h6>
                        <h6>9:00 AM - 5:00 PM</h6>
                    </li>
                    <li>
                        <h6 className="footer__list--subtitle">SATURDAY</h6>
                        <h6>10:00 AM - 4:00 PM</h6>
                    </li>
                    <li>
                        <h6 className="footer__list--subtitle">SUNDAY</h6>
                        <h6>Closed</h6>
                    </li>
                </ul>
            </li>
            <li className="footer__list__card">
                <h4 className="">Social</h4>
                <ul className="footer__list__card__sublist--icons">
                    <li><a href='https://www.instagram.com/janesclair_rib/' target='_blank'><img src={insta} alt="instagram"/></a></li>
                    <li><img src="./assets/Icons/icon-facebook.png" alt=""/></li>
                    <li><img src="./assets/Icons/icon-twitter.png" alt=""/></li>
                </ul>
            </li>
        </ul>
    </footer>
    );
}