import React from "react";

interface DesignFooterProps {
  itemData: any;
}

export const DesignFooter = () => {
  return (
    <footer className="footer ">
      <section className="columns" >
        <div className="column is-6 is-offset-1">
          <div className="content has-text-left">
            <p>
              The Avian Database Project, envisioned by Professor Allen Hurlbert of
              UNC’s Department of Biology, provides user-friendly access to the data
              Prof. Hurlbert and his team collect on avian diet from various
              studies. This is one of the largest collections on this subject, with
              over 56,000 records up to date.
          </p>
          </div>
        </div>
        <div className="column is-4">
          <div className="content">
            <p className="has-text-right">hurlbert@bio.unc.edu</p>
            <p className="has-text-right">331 Wilson Hall</p>
            <p className="has-text-right">(919) 843-9930 (office)</p>
          </div>
        </div>
      </section >
    </footer>
  );
};
