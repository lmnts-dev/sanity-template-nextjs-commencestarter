/**
 *
 * @author Alisha Garric
 * @description The website modal context to be able to open a modal from anywhere
 *
 */

// Core
import { createContext } from "react";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type CMNC_ModalContext = {
  component: any;
  props: any;
  showModal: () => void;
  hideModal: () => void;
};

export const ModalContext = createContext<CMNC_ModalContext>({
  component: null,
  props: {},
  showModal: () => {},
  hideModal: () => {},
});

// End Component
//////////////////////////////////////////////////////////////////////
