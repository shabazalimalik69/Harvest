import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

import { HashLink } from "react-router-hash-link";

import styles from "./Feature.module.css";

const ReportAnalysis = () => {
  return (
    <Box name="report_analysis">
      <Box mb="100px" mt="100px" name="time_tracking">
        <Grid className={styles.grid2}>
          <GridItem className={styles.gridItem4}>
            <Text className={styles.text4}>Reports & analysis</Text>
            <Text className={styles.text5}>
              A wide selection of visual reports keep projects running smoothly
              and your team supported.
            </Text>

            <HashLink textDecoration="none" to="/signup">
              {" "}
              <Button
                display="block"
                alignItems="flex-start"
                color="white"
                backgroundColor="#FA5D00"
                borderRadius="10px"
                _hover={{
                  outline: "#FA5D00",
                  bgColor: "#FA5D00",
                }}
                _focus={{
                  outline: "#FA5D00",
                  bgColor: "#FA5D00",
                }}
              >
                Start your free trial
              </Button>
            </HashLink>
          </GridItem>
          <GridItem className={styles.gridItem2}>
            <Image
              borderTopLeftRadius="10px"
              borderBottomRightRadius="10px"
              src="https://www.getharvest.com/hs-fs/hubfs/screenshot-features-projects.png?width=787&name=screenshot-features-projects.png"
            />
          </GridItem>
          <GridItem></GridItem>
          <GridItem>
            <HStack>
              <Image
                width="110px"
                height="110px"
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-budget.svg"
              />
              <Text textAlign="start" fontSize="xl">
                Keep budgets on target
              </Text>
            </HStack>
            <Text textAlign="start" fontSize="lg">
              Harvest updates budgets as your team tracks time, so you can keep
              your projects on track and profitable.
            </Text>
          </GridItem>
          <GridItem>
            <HStack>
              <Image
                width="110px"
                height="110px"
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-capacity.svg"
              />
              <Text textAlign="start" fontSize="xl">
                Visualize team capacity
              </Text>
            </HStack>
            <Text textAlign="start" fontSize="lg">
              See who’s overworked and who’s under-utilized at a glance with
              capacity reporting.
            </Text>
          </GridItem>
          <GridItem>
            <HStack>
              <Image
                width="110px"
                height="110px"
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-costs.svg"
              />
              <Text textAlign="start" fontSize="xl">
                Understand costs
              </Text>
            </HStack>
            <Text textAlign="start" fontSize="lg">
              Keep track of internal costs and review past project data to
              inform future project scope and estimates.
            </Text>
          </GridItem>
          <GridItem>
            <HStack>
              <Image
                width="110px"
                height="110px"
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-analyze.svg"
              />
              <Text textAlign="start" fontSize="xl">
                Analyze time spent
              </Text>
            </HStack>
            <Text textAlign="start" fontSize="lg">
              See which projects and tasks are consuming your team’s time and
              impacting costs.
            </Text>
          </GridItem>
          <GridItem>
            <HStack>
              <Image
                width="110px"
                height="110px"
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-details.svg"
              />
              <Text textAlign="start" fontSize="xl">
                Dive into the details
              </Text>
            </HStack>
            <Text textAlign="start" fontSize="lg">
              Powerful filters give you the detailed data needed to understand
              where your time goes and plan what’s next.
            </Text>
          </GridItem>
          <GridItem>
            <HStack>
              <Image
                width="110px"
                height="110px"
                src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-data.svg"
              />
              <Text textAlign="start" fontSize="xl">
                Do more with your data
              </Text>
            </HStack>
            <Text textAlign="start" fontSize="lg">
              It’s easy to export data from Harvest into the reporting tools you
              already use to gain additional insights.
            </Text>
          </GridItem>
        </Grid>
      </Box>

      <Divider mb="70px" borderColor={"#FA5D00"} orientation="horizontal" />

      <Box mb="100px" mt="100px">
        <Grid className={styles.grid3}>
          <GridItem>
            <Image
              borderTopLeftRadius="20px"
              borderBottomRightRadius="20px"
              src="https://www.getharvest.com/hs-fs/hubfs/site-images/features-quote-2.jpg?width=375&name=features-quote-2.jpg"
            />
          </GridItem>
          <GridItem className={styles.gridItem3}>
            <Text className={styles.text6}>
              We really focus on work-life balance in remote work… Time tracking
              reveals if somebody is overburdened and that becomes an immediate
              conversation.
            </Text>
            <Text className={styles.text7}>Noah Gedrich</Text>
            <Text className={styles.text8}>CTO, Zehner</Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default ReportAnalysis;
