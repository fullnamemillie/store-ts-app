import React, { FC, PropsWithChildren } from 'react';

interface ContactDetailsProps {
  href: string;
}

const ContactDetails: FC<ContactDetailsProps & PropsWithChildren> = ({
  href,
  children,
}) => {
  return (
    <>
      <a
        href={href}
        className="text-gray-400 hover:text-gray-300 hover:underline"
      >
        {children}
      </a>
    </>
  );
};

export default ContactDetails;
