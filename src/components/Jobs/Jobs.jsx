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

  let tabContent = "";

  if (selectedJob) {
    tabContent = (
      <div id="tab-content">
        <h3>{selectedJob.title}</h3>
        <p>{selectedJob.description}</p>
        <pre>
          <h3>Technologies & Skills</h3>
          <code>{selectedJob.code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Section title="Job History" id="examples">
        <TabList
          ButtonsContainer="div"
          buttons={
            <>
              {EXAMPLES.map((job) => (
                <TabsButton
                  key={job.nickname}
                  onClick={() => handleSelect(job)}
                  iSelected={selectedJob === job}
                  tabContent={tabContent}
                >
                  <span className="title">{job.company}</span>
                  <span className="title-date">{job.date}</span>
                </TabsButton>
              ))}
            </>
          }
        ></TabList>
      </Section>
    </>
  );
}
