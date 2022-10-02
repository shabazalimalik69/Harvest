import { Box, Text } from "@chakra-ui/react";
import React from "react";
import style from "./Time.module.css";

const Data1 = ({
  id,
  projects,
  category,
  handlePlay,
  handleStop,
  formateTimeToString,
  time,
}) => {
  return (
    <Box
      className={style.box12}
      borderBottom="1px solid lightGray"
      display="flex"
      justifyContent="space-between"
      h={["90px"]}
      alignItems="center"
      pl={4}
      pr={2}
    >
      <Box w="max-content">
        <Text fontSize={18} fontWeight={500}>
          {projects}
        </Text>
        <Text>{category}</Text>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        w="max-content"
        gap={5}
        fontSize={18}
      >
        <button disabled style={{ fontWeight: "500" }}>
          {formateTimeToString(time)}
        </button>
        <button
          onClick={() => handlePlay(id)}
          style={{
            border: "1px solid lightGray",
            padding: "4px 10px",
            borderRadius: "8px",
          }}
        >
          {"Start"}
        </button>
        <button
          onClick={() => handleStop(id)}
          style={{
            border: "1px solid lightGray",
            padding: "4px 10px",
            borderRadius: "8px",
          }}
        >
          {"Stop"}
        </button>
      </Box>
    </Box>
  );
};

export default Data1;
