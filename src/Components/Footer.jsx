import DHLogo from '/images/DH.png';

const Footer = () => {
  return (
    <footer>
      <p>Powered by</p>
      <img src={DHLogo} alt='DH-logo' />
      <p>Developed by <span>Ignacio Gibbs & Javier Ramos</span></p>
    </footer>
  );
}

export default Footer;
