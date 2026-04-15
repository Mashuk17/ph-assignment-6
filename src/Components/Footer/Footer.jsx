import {
  faInstagram,
  faSquareFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <div className="py-10 bg-black text-white px-12">
      <div className="flex gap-3 justify-around">
        <div>
          <h1 className="text-4xl font-bold">DigiTools</h1>
          <p className="text-white/50 my-3">
            Premium digital tools for creators,<br></br> professionals, and
            businesses. Work smarter <br></br>with our suite of powerful tools.
          </p>
        </div>
        <div>
          <h3>Products</h3>
          <p className="text-white/50">Features</p>
          <p className="text-white/50">Pricing</p>
          <p className="text-white/50">Templates</p>
          <p className="text-white/50">Integrations</p>
        </div>
        <div>
          <h3>Company</h3>
          <p className="text-white/50">About</p>
          <p className="text-white/50">Blog</p>
          <p className="text-white/50">Careers</p>
          <p className="text-white/50">Press</p>
        </div>
        <div>
          <h3>Resources</h3>
          <p className="text-white/50">Documentation</p>
          <p className="text-white/50">Help Center</p>
          <p className="text-white/50">Community</p>
          <p className="text-white/50">Contact</p>
        </div>
        <div className="">
          <h3 className="my-2">Socia Links</h3>

          <FontAwesomeIcon
            className="bg-white text-black p-1 rounded-full"
            icon={faSquareFacebook}
          />

          <FontAwesomeIcon
            className="bg-white text-black p-1 rounded-full"
            icon={faInstagram}
          />
          <FontAwesomeIcon
            className="bg-white text-black p-1 rounded-full"
            icon={faXTwitter}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
