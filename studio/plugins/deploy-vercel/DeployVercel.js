// Core
import React, { useState, useEffect, useRef } from "react";
import fetch from "node-fetch";

// Styles
import styles from "./DeployVercel.css";

// Constants
import siteSettings from "../../config/siteSettings";

// Utils
import { slugify } from "./utils/slugify";

// Begin Plugin
// __________________________________________________________________________________________

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
  const savedCallback = useRef();
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const DeployVercel = () => {
  const [productionDeploying, setProductionDeploying] = useState(false);
  const [stagingDeploying, setStagingDeploying] = useState(false);
  const [jobId, setJobId] = useState(null);
  const [deployments, setDeployments] = useState([]);
  const [teamId, setTeamId] = useState([]);

  const updateList = () => {
    // @TODO SET UP ENVIRONMENT VARIABLES
    // https://vercel.com/docs/api?query=api#endpoints/deployments/list-deployments
    fetch(
      "https://api.zeit.co/v5/now/deployments?limit=15&teamId=team_dV55NRZ47RgSi0Nh9DVaxcoB",
      {
        headers: {
          Authorization: `Bearer 6Sld6nsRtlDk4ozdqOao6i21`,
        },
      }
    )
      .then((res) => res.json())
      .then((json) => setDeployments(json.deployments));

    fetch("https://api.zeit.co/v1/teams", {
      headers: {
        Authorization: `Bearer 6Sld6nsRtlDk4ozdqOao6i21`,
      },
    })
      .then((res) => res.json())
      .then((json) => setTeamId(json));
  };

  const showState = () => {
    updateList();

    console.log(teamId);
    console.log(deployments);
  };

  useEffect(() => {
    updateList();
  }, []); // update the list initially

  useInterval(() => {
    if (!jobId) {
      return;
    }
    updateList();
  }, 5000);

  /**
   *
   * @name productionDeploy
   * @description Trigger a production build.
   *
   */
  const productionDeploy = () => {
    setProductionDeploying(true);
    // https://vercel.com/docs/v2/more/deploy-hooks?query=deploy%20hoo#triggering-a-deploy-hook
    fetch(siteSettings.baseUrlHook, { method: "POST" })
      .then((res) => res.json())
      .then((json) => {
        setJobId(json.job.id);
        updateList();
      });

    updateList();
  };

  /**
   *
   * @name stagingDeploy
   * @description Trigger a production build.
   *
   */
  const stagingDeploy = () => {
    setStagingDeploying(true);
    // https://vercel.com/docs/v2/more/deploy-hooks?query=deploy%20hoo#triggering-a-deploy-hook
    fetch(siteSettings.stagingUrlHook, { method: "POST" })
      .then((res) => res.json())
      .then((json) => {
        setJobId(json.job.id);
        // updateList();
      });

    updateList();
  };

  return (
    <div className={styles.container}>
      {/* __________________________________________________________________________________________ */}
      {/* Production column */}
      <div className={styles.column}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            Deploy Latest Published Content to Production
          </h2>
        </header>
        <div className={styles.content}>
          <h4>Trigger a Production build with the freshest published data.</h4>
          <p>
            Your <strong>Production</strong> site is your <strong>live</strong>{" "}
            site. Publish to <strong>staging</strong> to review your changes
            before publishing to <strong>production</strong>.
          </p>
          <button
            className={`${styles.lmntsButton} ${
              productionDeploying ? styles.lmntsAltButton : ""
            }`}
            type="button"
            onClick={productionDeploy}
            disabled={productionDeploying}
          >
            {productionDeploying
              ? "Please wait, see status below 👇"
              : "Deploy"}
          </button>
          <a
            href={siteSettings.baseUrl}
            className={`${styles.lmntsButton} ${styles.lmntsAltButton}`}
            target="_blank"
            rel="nofollow noreferrer"
          >
            View Production
          </a>
        </div>
        {deployments ? (
          <div className={styles.content}>
            <ul className={styles.deploymentList}>
              {deployments.map((deployment, idx) => {
                if (
                  deployment.target == "production" &&
                  deployment.name == siteSettings.vercelProjectId
                ) {
                  return (
                    <li key={idx}>
                      <span className={styles.deploymentLabel}>
                        <strong>PRODUCTION BUILD </strong>
                        <span>
                          {new Date(deployment.created).toLocaleString()}
                        </span>
                      </span>
                      {deployment.state &&
                      slugify(deployment.state) !== "ready" ? (
                        <span
                          className={styles.deploymentStatus}
                          data-status={slugify(deployment.state)}
                        >
                          {deployment.state}
                        </span>
                      ) : (
                        <a
                          href={siteSettings.baseUrl}
                          target="_blank"
                          rel="nofollow noreferrer"
                          className={styles.deploymentStatus}
                          data-status={slugify(deployment.state)}
                        >
                          {deployment.state} →
                        </a>
                      )}
                    </li>
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          </div>
        ) : null}
      </div>

      {/* __________________________________________________________________________________________ */}
      {/* Staging column */}
      <div className={styles.column}>
        <header className={styles.header} onClick={showState}>
          <h2 className={styles.title}>
            Deploy Latest Published Content to Staging
          </h2>
        </header>
        <div className={styles.content}>
          <h4>Trigger a Staging build with the freshest published data.</h4>
          <p>
            Your <strong>Staging</strong> site is your private site and should
            be used to preview the site with the most recent content or dev
            changes, before publishing the changes live.
          </p>
          <button
            className={`${styles.lmntsButton} ${
              stagingDeploying ? styles.lmntsAltButton : ""
            }`}
            type="button"
            onClick={stagingDeploy}
            disabled={stagingDeploying}
          >
            {stagingDeploying ? "Please wait, see status below 👇" : "Deploy"}
          </button>
          <a
            href={siteSettings.stagingUrl}
            className={`${styles.lmntsButton} ${styles.lmntsAltButton}`}
            target="_blank"
            rel="nofollow noreferrer"
          >
            View Staging
          </a>
        </div>
        {deployments ? (
          <div className={styles.content}>
            <ul className={styles.deploymentList}>
              {deployments.map((deployment, idx) => {
                if (
                  deployment.target !== "production" &&
                  deployment.name == siteSettings.vercelProjectId
                ) {
                  return (
                    <li key={idx}>
                      <span className={styles.deploymentLabel}>
                        <strong>STAGING BUILD </strong>
                        <span>
                          {new Date(deployment.created).toLocaleString()}
                        </span>
                      </span>
                      {deployment.state &&
                      slugify(deployment.state) !== "ready" ? (
                        <span
                          className={styles.deploymentStatus}
                          data-status={slugify(deployment.state)}
                        >
                          {deployment.state}
                        </span>
                      ) : (
                        <a
                          href={siteSettings.stagingUrl}
                          target="_blank"
                          rel="nofollow noreferrer"
                          className={styles.deploymentStatus}
                          data-status={slugify(deployment.state)}
                        >
                          {deployment.state} →
                        </a>
                      )}
                    </li>
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DeployVercel;