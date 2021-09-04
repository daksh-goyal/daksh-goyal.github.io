import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, mixins } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.navy};
  color: ${colors.slate};
  text-align: center;
  height: 50px;
  min-height: 50px;
`;
const StyledMetadata = styled.div`
  margin: 10px 0;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  line-height: 1;
`;
const StyledGitHubLink = styled.a`
  color: ${colors.slate};
`;
const Footer = () => (
  <StyledContainer>
    <StyledMetadata>
      <StyledGitHubLink
        href="https://github.com/bchiang7/v4"
        target="_blank"
        rel="nofollow noopener noreferrer">
        <div>Inspired by Brittany Chiang</div>
      </StyledGitHubLink>
    </StyledMetadata>
  </StyledContainer>
);
Footer.propTypes = {
  githubInfo: PropTypes.object,
};
export default Footer;
