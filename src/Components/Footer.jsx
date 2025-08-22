import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Twitter/X logo

const Footer = () => {
  return (
    <footer className="bg-indigo-500 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Country & Basic Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3">🌍 India</h2>
          <p className="text-sm text-gray-300">
            Greenpeace India 2025 © | Unless otherwise stated, 
            content is licensed under a <span className="underline cursor-pointer">
            CC-BY International License</span>.
          </p>
        </div>

        {/* Column 2: Links */}
        <div className="grid grid-cols-2 gap-6">
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Our Offices</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
            <li><a href="#" className="hover:underline">#Careers</a></li>
            <li><a href="#" className="hover:underline">Supporter Care</a></li>
          </ul>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">POSH Policy</a></li>
            <li><a href="#" className="hover:underline">Copyright & Terms</a></li>
            <li><a href="#" className="hover:underline">Community Policy</a></li>
            <li><a href="#" className="hover:underline">Sitemap</a></li>
          </ul>
        </div>

        {/* Column 3: Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><FaXTwitter size={20} /></a>
            <a href="#" className="hover:text-gray-300"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-gray-300"><FaYoutube size={20} /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-gray-400 text-sm border-t border-gray-600 pt-4">
        © Greenpeace India 2025 | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
