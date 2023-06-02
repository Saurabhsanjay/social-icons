
import {
  FaFacebookF,
  FaGoogle,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import styles from './SocialIcon.module.css'

const SocialIcons = () => {
  return (
    <div className={styles.social_icon}>
      <a href="#" className={styles.icon}>
        <FaFacebookF />
      </a>
      <a href="#" className={styles.icon}>
        <FaGoogle />
      </a>
      <a href="#" className={styles.icon}>
        <FaTwitter />
      </a>
      <a href="#" className={styles.icon}>
        <FaLinkedinIn />
      </a>
      <a href="#" className={styles.icon}>
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialIcons;
