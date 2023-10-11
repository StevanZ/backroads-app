import { socialLinks } from '../data';
import logo from '../images/logo.svg';
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';

const Navbar = ({ setShowSidebar, showSidebar }) => {
  const handleToggle = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button
            onClick={handleToggle}
            type="button"
            className="nav-toggle"
            id="nav-toggle"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <PageLinks parentClass={'nav-links'} itemClass={'nav-link'} />
        <ul className="nav-icons">
          {socialLinks.map(({ id, icon, href }) => (
            <SocialLink key={id} icon={icon} href={href} itemClass="nav-icon" />
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
