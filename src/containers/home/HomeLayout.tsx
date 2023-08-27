import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  TabProps,
  Box,
  Grid,
} from "@chakra-ui/react";
import React, { useState } from "react";

import {useData} from "./DataProvider";


import InterviewSettingsForm from "./InterviewSettingsForm";
import JobDetailsForm from "./JobDetailsForm";
import RequisitionDetailsForm from "./RequisitionDetailsForm";
// import DisplayCard from "./PreviewCard";

// import { IRequisitionDetails, IInterViewSettings, IJobDetails } from "../../interface/forms";

import { PageNumbers } from "../../interface/home";
import PreviewCard from "./PreviewCard";

const CustomTab: React.FC<TabProps> = ({ children, ...props }) => {
  return (
    <Tab p="1rem" fontFamily="Poppins" {...props}>
      {children}
    </Tab>
  );
};

const HomeLayout = () => {
  const [page, setPage] = useState<PageNumbers>(0);

  const {...state} = useData();
 

  const handlePage = (pageNumber: PageNumbers) => {
    setPage(pageNumber);
    
  };


 
  return (
    
    <Box w="100%">
      <Container maxW="1200px">
        <Heading fontFamily="Poppins" fontSize="1.5rem" my="2rem">
          Create Candidate Requisition
        </Heading>
        <Tabs index={page} isLazy lazyBehavior="keepMounted">
          <TabList>
            <CustomTab>Requistion Details</CustomTab>
            <CustomTab>Job Details</CustomTab>
            <CustomTab>Interview Settings</CustomTab>
          </TabList>
          <Grid display="grid" gridTemplateColumns="3fr 2fr" gap="24px">
            <TabPanels>
              <TabPanel>
                <RequisitionDetailsForm   handleTab={handlePage} />
              </TabPanel>
              <TabPanel>
                <JobDetailsForm  handleTab={handlePage} />
              </TabPanel>
              <TabPanel>
                <InterviewSettingsForm handleTab={handlePage} />
              </TabPanel>
            </TabPanels>
            {/* <DisplayCard /> */}
            <PreviewCard requisitionDetails={state.state.requisitionDetails}  interviewSettings={state.state.interviewSettings} jobDetails={state.state.jobDetails}  />
          </Grid>
        </Tabs>
      </Container>
    </Box>
  );
};

export default HomeLayout;
