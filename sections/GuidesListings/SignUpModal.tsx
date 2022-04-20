import React from "react";
import { CMNC_SignUpModal } from ".";
import { sectionSpacing } from "../../utils/sectionSpacing";
import { SignUpModalClassName, SignUpModalStyle } from "./styles.scss";
import { useForm } from "@formspree/react";

//@ts-ignore
import Image from "next/image";
import { Icon } from "../../components/Icon";
import { Settings } from "../../constants/site/Settings";
import { generatePath } from "../../utils/generatePath";
import { LockBody } from "../../constants/styles/Global";

export const SignUpModal: React.FunctionComponent<CMNC_SignUpModal> = ({
  onRequestClose,
  title,
  image,
  formspreeLink,
}) => {
  const [state, handleSubmit] = useForm(
    `${formspreeLink.substring(formspreeLink.lastIndexOf("/") + 1)}`
  );

  return (
    <>
      <LockBody />
      <SignUpModalStyle
        className={`${SignUpModalClassName} __theme-light-gray`}
        //@ts-ignore
        onRequestClose={onRequestClose}
      >
        <div className={`${SignUpModalClassName}__content`}>
          <div className={`${SignUpModalClassName}__content__image`}>
            <Image src={image.url} layout="fill" objectFit="cover" />
          </div>
          <div
            className={`${SignUpModalClassName}__content__text ${sectionSpacing()}`}
          >
            <button
              onClick={() => {
                onRequestClose();
              }}
              aria-label={`Exit`}
              className={`${SignUpModalClassName}__content__text__exit`}
            >
              <Icon name="exit" />
            </button>
            <div>
              {state.succeeded && (
                <>
                  <h2 className="h3 __fnt-med">Thank you for signing up!</h2>
                  <p>
                    Here is your registered account link to access our guides.
                    It has also been emailed to you. Please use this link to
                    access our guides in the future.
                  </p>
                  <div
                    className={`${SignUpModalClassName}__content__text__link`}
                  >
                    <a
                      className="h5"
                      href={`${generatePath({
                        _type: "guides",
                      })}?registered=23953`}
                    >
                      {Settings.siteUrl.replace(/\/$/, "")}
                      {generatePath({ _type: "guides" })}?registered=23953
                    </a>
                  </div>
                </>
              )}
              {!state.succeeded && (
                <>
                  <h2
                    className={`${SignUpModalClassName}__content__text__title h3 __fnt-med`}
                  >
                    {title}
                  </h2>
                  <p>
                    Enter your email address to gain access to this exclusive
                    content and more resources.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className={`${SignUpModalClassName}__content__text__form`}
                  >
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      name="_replyto"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe to newsletter"
                      disabled={state.submitting}
                      className={`btn`}
                    >
                      Subscribe to newsletter
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </SignUpModalStyle>
    </>
  );
};
