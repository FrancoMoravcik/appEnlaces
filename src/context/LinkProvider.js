import React, { createContext, useContext, useState } from 'react';

const LinkContext = createContext();

export const LinkProvider = ({ children }) => {
  const [linkSections, setLinkSections] = useState([{ id: 1, platform: '', link: '', selectedPlatform: '' }, { id: 2, platform: '', link: '', selectedPlatform: '' }, { id: 3, platform: '', link: '', selectedPlatform: '' }]);

  const updateLinkSections = (newLinkSections) => {
    setLinkSections(newLinkSections);
  };

  const updateProfileDetails = (newProfileDetails) => {
    setProfileDetails(newProfileDetails);
  };

  const [profileDetails, setProfileDetails] = useState({
    firstName: '',
    lastName: '',
    email: ''
    // ... otros detalles del perfil
  });

  return (
    <LinkContext.Provider value={{ linkSections, updateLinkSections, profileDetails, updateProfileDetails  }}>
      {children}
    </LinkContext.Provider>
  );
};

export const useLinkContext = () => useContext(LinkContext);