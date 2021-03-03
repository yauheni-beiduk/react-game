import "./Footer.css";
import github from "./iconsFooter/github.svg";
import rsSchool from "./iconsFooter/rsSchool.svg";

const Footer = () => {
  return (
    <div className="wrapper_footer">
      <footer>
        <div className="footer-container">
          <p>© 2021</p>
          <a
            href="https://github.com/yauheni-beiduk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" />
          </a>
          <a
            href="https://rs.school/js/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={rsSchool} alt="github" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
