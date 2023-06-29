const Footer = () => {
  var today = new Date();
  return (
    <footer className="container">
      <h3>Team Allocation App : {today.getFullYear()}</h3>
    </footer>
  );
};

export default Footer;
