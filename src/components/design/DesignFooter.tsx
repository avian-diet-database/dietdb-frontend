import React from "react";

interface DesignFooterProps {
  itemData: any;
}

export const DesignFooter = () => {
  return (
    <footer className="footer ">
      <div className="container has-text-centered">
        <h1 className="is-text-white" id="footerInfo">
          About + Contact Information
        </h1>
        <p className="is-text-white">
          The Avian Database Project, envisioned by Professor Allen Hurlbert of
          UNC’s Department of Biology, provides user-friendly access to the data
          Prof. Hurlbert and his team collect on avian diet from various
          studies. This is one of the largest collections on this subject, with
          over 56,000 records up to date. This type of data is of interest to
          many different types people like scientist, ecologists, hobbyists, or
          just the curious. Prof. Hurlbert himself also would love use this
          project to explore through the database. Whether the scientist and the
          ecologist want to explore how climate and land changes affect bird
          species and their prey over time, or whether the hobbyist and the
          curious simply want to know the diet of specific species, there are
          many users who would benefit from being able to explore the data.
          However, getting relevant information from the current database is not
          easy or straightforward, but requires some technical skill. This
          project addresses this problem and provides a solution by aiming to
          create a desktop and mobile-friendly website that allows the
          beforementioned users to explore the database in an intuitive manner
          and provides easy to digest visualizations. This includes new ways to
          query data, easy-to-apply filters, search functionalities , and
          graphical data summaries.
        </p>
      </div>
      <h2 className="columns is-text-white" id="contactInfo">
        <p className="column">hurlbert@bio.unc.edu</p>
        <p className="column">331 Wilson Hall</p>
        <p className="column">(919) 843-9930 (office)</p>
      </h2>
    </footer>
  );
};
