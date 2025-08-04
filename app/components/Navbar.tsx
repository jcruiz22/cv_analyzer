import { Link } from "react-router";
import { RiUploadLine, RiHomeLine } from "react-icons/ri";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="flex items-center gap-2">
                <RiHomeLine size={24} className="text-gradient" />
                <p className="text-2xl font-bold text-gradient">RESUMIND.AI</p>
            </Link>
            <Link to="/upload" className="primary-button w-fit flex items-center gap-2">
                <RiUploadLine size={20} />
                <p>Upload Resume</p>
            </Link>
        </nav>
    );
};

export default Navbar;