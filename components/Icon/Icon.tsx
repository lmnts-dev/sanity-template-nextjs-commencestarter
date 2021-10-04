/**
 *
 * Icon.tsx
 * @author Alisha Garric
 * @description Simple Icon component to store & locate your icons cleanly.
 * @example Default: <Icon Name="Facebook" />
 * @example Optional: Add an extra className - <Icon Name="Facebook" addClass="ico-fb" />
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from "react";

// Social Media Icons
import Facebook from "./SVG/Social/Facebook";
import Instagram from "./SVG/Social/Instagram";
import YouTube from "./SVG/Social/YouTube";
import Wordpress from "./SVG/Social/Wordpress";
import Snapchat from "./SVG/Social/Snapchat";
import Intercom from "./SVG/Social/Intercom";
import Pinterest from "./SVG/Social/Pinterest";
import LinkedIn from "./SVG/Social/LinkedIn";
import Twitter from "./SVG/Social/Twitter";

// Custom Icons
import Hamburger from "./SVG/Custom/Hamburger";
import Search from "./SVG/Custom/Search";
import Brandmark from "./SVG/Custom/Brandmark";
import Logotype from "./SVG/Custom/Logotype";
import Triangle from "./SVG/Custom/Triangle";
import Logo from "./SVG/Custom/Logo";
import Exit from "./SVG/Custom/Exit";

// Begin Component
//////////////////////////////////////////////////////////////////////

interface Props {
  name: string;
  addClass?: string;
}

export const Icon = (props: Props) => {
  // Our className string
  let defaultClassName = props.addClass ? "ico " + props.addClass + " " : "ico";

  // Our switch to decide on which Icon to display.
  switch (props.name) {
    /**
     * Custom Icons
     */
    case "brandmark":
      return (
        <span className={defaultClassName + " ico-brandmark"}>
          <Brandmark />
        </span>
      );
    case "logotype":
      return (
        <span className={defaultClassName + " ico-logotype"}>
          <Logotype />
        </span>
      );
    case "logo":
      return (
        <span className={defaultClassName + " ico-logo"}>
          <Logo />
        </span>
      );
    case "hamburger":
      return (
        <span className={defaultClassName + " ico-hamburger"}>
          <Hamburger />
        </span>
      );
    case "exit":
      return (
        <span className={defaultClassName + " ico-exit"}>
          <Exit />
        </span>
      );
    case "search":
      return (
        <span className={defaultClassName + " ico-search"}>
          <Search />
        </span>
      );
    case "triangle":
      return (
        <span className={defaultClassName + " ico-search"}>
          <Triangle />
        </span>
      );

    /**
     * Social Media Icons
     */
    case "intercom":
      return (
        <span className={defaultClassName + " ico-intercom"}>
          <Intercom />
        </span>
      );
    case "facebook":
      return (
        <span className={defaultClassName + " ico-facebook"}>
          <Facebook />
        </span>
      );
    case "twitter":
      return (
        <span className={defaultClassName + " ico-twitter"}>
          <Twitter />
        </span>
      );
    case "instagram":
      return (
        <span className={defaultClassName + " ico-instagram"}>
          <Instagram />
        </span>
      );
    case "youTube":
      return (
        <span className={defaultClassName + " ico-youtube"}>
          <YouTube />
        </span>
      );
    case "wordpress":
      return (
        <span className={defaultClassName + " ico-wordpress"}>
          <Wordpress />
        </span>
      );
    case "snapchat":
      return (
        <span className={defaultClassName + " ico-snapchat"}>
          <Snapchat />
        </span>
      );
    case "pinterest":
      return (
        <span className={defaultClassName + " ico-pinterest"}>
          <Pinterest />
        </span>
      );
    case "linkedIn":
      return (
        <span className={defaultClassName + " ico-linkedin"}>
          <LinkedIn />
        </span>
      );

    // Fallback if not found
    default:
      return <span className={defaultClassName}>Icon Not Found</span>;
  }
};

///////////////
