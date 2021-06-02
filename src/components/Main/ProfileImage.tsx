import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';


const PROFILE_IMAGE_LINK =
  'https://lh3.googleusercontent.com/-SnJtnhIwmoA/YLddTyqp-LI/AAAAAAAAAF8/Ahe9AsVCZCcET2FAqPfmvGDPtfndvvmRQCEwYBhgLKtMDAL1Ocqxjo3KZ9L6CHac--4J-XMr_BbYj3jU27m8eAn_d1YE0Gs3Lp_r7Ur6vZdc-YG8sJVW7zDWvJb0epzk_V2yDpogYXBiU43CWLHdUCO_l1VEvPdDddxXdVESJI_32ha1qc7iDNXy5Gb6dTFYEO_yDRxQkJGd_bIwEM0Sj4cIvs82WGOv7-2KNIrRto3adyT-qHC3DNb2foVmdfiIHhzyEfheF0oUwGQP3R2PlKamgLIp-4v0do6tGAX74RhTtebue3BWP0yqKIrbNp2bTvx30Nh3QUcuRBS-zDZylkupbWHn6WKh2NoUA-1FgNqPSUynk6nWfTbunwe-KO7jmXdDGfiCCx9J98RbsOa9HhLCiMhY4HQ9SxzvMe1LcAGbhIhJQSIGPkevCMf33GgpWNMO4U-10wAgCY_tKT4wbDsbW_1W8VvYatbpw94UIb9g9NPVvN2ek_Tgy7WM9pIOorIZD08VhMfTyrhnwOoIE5RweBFp1mJ4QYZE6H3E7ci05dNVWWWv7FUC7lMADjX1j93yEgEH-h_whtCKY0-onziF8D5W5PSUcXqJ1eRXjGe1Z5BMhbPmGz_RGF4bgfySNYAcHBfYFi0KzSMje6jSyxxn0NA0wsr_dhQY/w140-h140-p/won.png';

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
  
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />;
};

export default ProfileImage;