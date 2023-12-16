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
  });


  const updateProfileImage = (newProfileImage) => {
    setProfileImage(newProfileImage);
  };

  const [profileImage, setProfileImage] = useState(null);


  return (
    <LinkContext.Provider value={{ linkSections, updateLinkSections, profileDetails, updateProfileDetails, profileImage, updateProfileImage }}>
      {children}
    </LinkContext.Provider>
  );
};

export const useLinkContext = () => useContext(LinkContext);