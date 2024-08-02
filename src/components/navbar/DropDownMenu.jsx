import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';

const DropDownMenu = () => {
  return (
    <div className="flex justify-center bg-white px-3 py-2">
      <ChevronUpDownIcon aria-hidden="true" className="relative top-0.5 h-5 w-5 text-gray-400" />
      <FlyoutLink href="#" FlyoutContent={OtherMenu}>
        More
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-black">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out "
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%", zIndex: 50 }} // Add zIndex here
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white " />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const OtherMenu = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl ">
      <div className="mb-3 space-y-3 ">
        <Link to={'/blog'} className="block text-sm hover:underline">
          Blog
        </Link>
        <Link to={'/report'} className="block text-sm hover:underline">
          Report
        </Link>
      </div>
      <div className="mb-6 space-y-3">
        <Link to={'/cart'} className="block text-sm hover:underline">
          Cart
        </Link>
        <Link to={'/share'} className="block text-sm hover:underline">
          Share With Friends
        </Link>
        <Link to={'/feedback'} className="block text-sm hover:underline">
          Feedback
        </Link>
      </div>
    </div>
  )
}

export default DropDownMenu;
