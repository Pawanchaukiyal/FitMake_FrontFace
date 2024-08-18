import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleShare } from './HandleShare';

const DropDownMenu = () => {
  return (
    <div className="flex justify-center nav_bg px-3 py-2 text-white">
      <ChevronUpDownIcon aria-hidden="true" className="relative top-0.5 h-5 w-5 text-white-400" />
      <FlyoutLink href="#" FlyoutContent={OtherMenu}>
        More
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={toggleOpen}
      className="relative w-fit h-fit cursor-pointer"
    >
      <a href={href} className="relative text-white">
        {children}
        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%", zIndex: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-red-500 text-white"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-red-500" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const OtherMenu = () => {
  const handleClick = () => {
    toast.info('This feature is coming soon shortly', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="w-64 nav_bg p-6 shadow-xl rounded-lg">
      <div className="mb-3 space-y-3">
        <Link to={'#'} onClick={handleClick} className="block text-sm hover:underline hover:bg-gray-800  rounded-sm">
          Blog
        </Link>
        <Link to={'#'} onClick={handleClick} className="block text-sm hover:underline hover:bg-gray-800 rounded-sm">
          Report
        </Link>
      </div>
      <div className="mb-6 space-y-3">
        <Link to={'#'} onClick={handleShare} className="block text-sm hover:underline hover:bg-gray-800 rounded-sm">
          Share With Friends
        </Link>
        <a
          href="mailto:pawanchaukiyal@gmail.com?subject=Share%20your%20opinion"
          className="block text-sm hover:underline hover:bg-gray-800 rounded-sm"
        >
          Feedback
        </a>
      </div>
    </div>
  );
}

export default DropDownMenu;
