import React from "react";
import styles from "./IframePreview.css";

export default function BlogCategoryPreview(props) {
  const { displayed } = props.document;
  if (!displayed?.slug?.current) {
    return <div>The category needs a slug before it can be previewed.</div>;
  }
  const url =
    process.env.NODE_ENV === "production"
      ? `../../blog/category/${displayed?.slug?.current}?preview`
      : `http://localhost:3000/blog/category/${displayed?.slug?.current}?preview`;

  return (
    <div className={styles.componentWrapper}>
      <div className={styles.iframeContainer}>
        <iframe src={url} frameBorder={"0"} />
      </div>
    </div>
  );
}
