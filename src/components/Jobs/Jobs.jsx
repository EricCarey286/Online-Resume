import { useState } from "react";

import "./Jobs.css";
import TabsButton from "./../Tabs/TabsButton";
import TabList from "./../Tabs/TabList";
import Section from "./../Section/Section";
import { EXAMPLES } from "./../../data.js";

export default function Jobs() {
  const [selectedJob, setSelectedJob] = useState();

  function handleSelect(selectedButton) {
    setSelectedJob(selectedButton);
  }

  let tabContent = <p>Select each button to explore relevant positions.</p>;

  if (selectedJob) {
    tabContent = (
      <div id="tab-content">
        <h3>{selectedJob.title}</h3>
        <p className="job-date">{selectedJob.date}</p>
        <p>{selectedJob.description}</p>
        <pre>
          <code>{selectedJob.code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Section title="Job History" id="examples">
        <TabList
          ButtonsContainer="menu"
          buttons={
            <>
              {EXAMPLES.map((job) => (
                <TabsButton
                  key={job.nickname}
                  onClick={() => handleSelect(job)}
                  iSelected={selectedJob === job}
                >
                  {job.company}
                </TabsButton>
              ))}
            </>
          }
        >
          {tabContent}
        </TabList>
      </Section>
    </>
  );
}
