/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Wrapper>
        <UnstyledButton onClick={onDismiss}>
          <Icon id="close" strokeWidth={1} />
          <VisuallyHidden>Close</VisuallyHidden>
        </UnstyledButton>
        <Nav>
          <NavLink className="active" href="/sale">
            Sale
          </NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Wrapper>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  background-color: hsla(220, 5%, 40%, 0.8);
  display: none;

  @media ${QUERIES.tabletAndDown} {
    display: block;
  }
`;

const Wrapper = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  width: 80%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--color-white);

  & > *:first-child {
    position: absolute;
    top: 2rem;
    right: 1.375rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  font-size: 1.125rem;
  text-transform: uppercase;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  text-decoration: none;

  &.active {
    color: var(--color-secondary);
  }

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const Footer = styled.footer`
  position: absolute;
  left: 2rem;
  bottom: 2rem;
  font-size: 0.875rem;

  a {
    display: block;
    color: var(--color-gray-700);
    text-decoration: none;

    &:not(:last-child) {
      margin-bottom: 0.25rem;
    }
  }
`;

export default MobileMenu;
