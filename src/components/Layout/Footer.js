import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <h4>CUSTOMER SERVICES</h4>
        <ul>
          <li>Help & Contact Us</li>
          <li>Returns & Refunds</li>
          <li>Online Stores</li>
          <li>Tearms & Conditions</li>
        </ul>
      </div>
      <div>
        <h4>COMPANY</h4>
        <ul>
          <li>What We Do</li>
          <li>Available Services</li>
          <li>Latest Posts</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div>
        <h4>SOCIAL MEDIA</h4>
        <ul>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Pinterest</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
