// Core
import React from "react";

// Types
import { CMNC_Project } from "../../constants/Types";
//@ts-ignore
import Pagination from "react-sanity-pagination";

// Styles

// Begin Component
// __________________________________________________________________________________________

export type CMNC_ProjectListings = {
  projects: CMNC_Project[] | null;
  addClass?: string;
};

export const ProjectListings: React.FunctionComponent<CMNC_ProjectListings> =
  ({}) => {
    return <></>;
  };

ProjectListings.displayName = "ProjectListings";

// End Component
// __________________________________________________________________________________________
