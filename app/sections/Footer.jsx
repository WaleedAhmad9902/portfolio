import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 w-full py-6">
      {/* Social Links */}
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://www.linkedin.com/in/waleed-ahmad-54abab26b/"
          target="_blank"
          className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full hover:bg-pink-500 transition-all duration-300"
        >
          <FaLinkedin className="text-gray-700 hover:text-white transition-all duration-300" />
        </a>
        <a
          href="https://github.com/WaleedAhmad9902"
          target="_blank"
          className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full hover:bg-pink-500 transition-all duration-300"
        >
          <FaGithub className="text-gray-700 hover:text-white transition-all duration-300" />
        </a>
        <a
          href="https://www.instagram.com/waleed_ahmad78/"
          target="_blank"
          className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full hover:bg-pink-500 transition-all duration-300"
        >
          <FaInstagram className="text-gray-700 hover:text-white transition-all duration-300" />
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-center text-sm">
        © 2024 Waleed Ahmad. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
