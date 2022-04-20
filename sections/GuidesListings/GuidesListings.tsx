// Core
import React, { useState } from "react";
// Types
import { CMNC_GuideSimple, CMNC_Image } from "../../constants/Types";
//@ts-ignore
import Pagination from "react-sanity-pagination";

// Styles
import { GuidesListingsClassName, GuidesListingsStyle } from "./styles.scss";
import { sectionSpacing } from "../../utils/sectionSpacing";
import { PaginationStyle } from "../ArticleListings/styles.scss";
import { SimpleCard } from "../../components/SimpleCard";
import { generatePath } from "../../utils/generatePath";
import Arrow from "../../components/Icon/SVG/Custom/Arrow";
import { ModalContext } from "../../components/core/ModalContext";
//@ts-ignore
import Image from "next/image";
import { SignUpModal } from "./SignUpModal";

const ModalConsumer = ModalContext.Consumer;

// Begin Component
// __________________________________________________________________________________________

export type CMNC_GuidesListings = {
  guides: CMNC_GuideSimple[] | null;
  postsPerPage: number;
  addClass?: string;
  formspreeLink: string;
  verified?: boolean;
};

export type CMNC_SignUpModal = {
  onRequestClose: () => void;
  title: string;
  image: CMNC_Image;
  formspreeLink: string;
};

export const GuidesListings: React.FunctionComponent<CMNC_GuidesListings> = ({
  postsPerPage,
  guides,
  verified,
  formspreeLink,
  addClass,
}) => {
  //Pagination variables
  const itemsToSend = guides;
  const [items, setItems] = useState<any[]>([]);

  //Pagination set up
  const action = (page: any, range: any, items: any) => {
    console.log(page, range);
    // Update State
    setItems(items);
  };

  return (
    <>
      <GuidesListingsStyle
        className={`${GuidesListingsClassName} ${sectionSpacing()} ${
          addClass ? addClass : ""
        }`}
      >
        {items &&
          items.length > 0 &&
          items.map((guide, idx) => {
            if (verified) {
              return (
                <SimpleCard
                  image={guide.image}
                  headline={guide.title}
                  largeCard
                  body={guide.previewText}
                  link={generatePath({
                    slug: {
                      current: guide.slug.current,
                    },
                    _type: "guide",
                  })}
                  key={idx}
                />
              );
            } else {
              return (
                <ModalConsumer key={idx}>
                  {({ showModal }) => (
                    <button
                      key={idx}
                      className={`${GuidesListingsClassName}__modal-button`}
                      onClick={() => {
                        //@ts-ignore
                        showModal(SignUpModal, {
                          isOpen: true,
                          title: guide.title,
                          image: guide.image,
                          formspreeLink: formspreeLink,
                        });
                      }}
                    >
                      <SimpleCard
                        image={guide.image}
                        headline={guide.title}
                        largeCard
                        body={guide.previewText}
                        key={idx}
                      />
                    </button>
                  )}
                </ModalConsumer>
              );
            }
          })}
      </GuidesListingsStyle>

      {/* // pagination // */}
      <PaginationStyle className={sectionSpacing({ top: "none" })}>
        <Pagination
          nextButton={true}
          prevButton={true}
          nextButtonLabel={<Arrow />}
          prevButtonLabel={<Arrow />}
          action={action}
          items={itemsToSend}
          postsPerPage={postsPerPage}
        />
      </PaginationStyle>
    </>
  );
};

GuidesListings.displayName = "GuidesListings";

// End Component
// __________________________________________________________________________________________
