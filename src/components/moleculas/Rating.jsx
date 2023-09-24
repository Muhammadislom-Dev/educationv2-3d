import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Rating() {
  const [count, setCount] = useState(false);
  return (
    <Box {...css.box}>
      <Box className="container">
        <ScrollTrigger
          onEnter={() => setCount(true)}
          onExit={() => setCount(false)}>
          <Flex align="center" justify="space-between">
            <Flex flexDirection="column" align="center">
              <Heading {...css.title} size="h3">
                {count && (
                  <CountUp start={0} duration={2.75} end="9999" delay={0} />
                )}
              </Heading>
              <Text {...css.text}>Total Items</Text>
            </Flex>
            <Flex flexDirection="column" align="center">
              <Heading {...css.title} size="h3">
                {count && (
                  <CountUp start={0} duration={2.75} end="3.9" delay={0} />
                )}
                k+
              </Heading>
              <Text {...css.text}>Total Owners</Text>
            </Flex>
            <Flex flexDirection="column" align="center">
              <Heading {...css.title} size="h3">
                {count && (
                  <CountUp start={0} duration={2.75} end="2.4" delay={0} />
                )}
                k
              </Heading>
              <Text {...css.text}>Floor Price (ETH)</Text>
            </Flex>
            <Flex flexDirection="column" align="center">
              <Heading {...css.title} size="h3">
                {count && (
                  <CountUp start={0} duration={2.75} end="144" delay={0} />
                )}
                k+
              </Heading>
              <Text {...css.text}>Volume Traded (ETH)</Text>
            </Flex>
          </Flex>
        </ScrollTrigger>
      </Box>
    </Box>
  );
}

export default Rating;

const css = {
  box: {
    padding: "60px 0",
    background: "#181124",
  },
  title: {
    width: "fix-content",
    color: "#160f1a",
    filter: "drop-show(0 5px 20px rgba(204,0,255,0.15))",
    background: "linear-gradient(to right, #c0f, #7100FF)",
    fontSize: "60px",
    lineHeight: "65px",
    fontWeight: 600,
  },
  text: {
    color: "#f2f2f2",
    textAlign: "center",
    margin: "5px 0",
  },
};
