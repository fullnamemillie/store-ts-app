import React from 'react';
import ContactDetails from '../../components/ContactDetails/ContactDetails';

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-10 pb-8 px-6">
      <p className="text-gray-400 mb-4 uppercase font-bold">Contacts</p>
      <div className="mb-2">
        <ContactDetails href="tel:+0015555555555">555 555 55 55</ContactDetails>
      </div>
      <div>
        <ContactDetails href="mailto:electronics_store@gmail.com">
          electronics_store@gmail.com
        </ContactDetails>
      </div>
    </footer>
  );
};

export default Footer;

/* <div>
  <header className="bg-gradient-to-r from-custom-blue to-green-500 h-12 shadow-xl px-6">
    <div className="flex items-center h-full">
      <a href="/" className="text-white text-xl font-semibold">
        Electronics store
      </a>
    </div>
  </header>
</div>; */
