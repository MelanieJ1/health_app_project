import React from "react"
import Results from "./Results";



const ResultsList = ({results}) => {
    const resultsNodes = results.map(result => {
      return <Results key={result._id}
        result={result}
      />
    });
  
    return (
      <section id="results">
        <h2>Medical Test Results</h2>
        <div id="results-wrapper">
          {resultsNodes}
        </div>
      </section>
    )
  };

export default ResultsList;
  