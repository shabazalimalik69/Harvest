import { useEffect, useRef, useState } from "react";

import { Box, Button, Image, Text } from "@chakra-ui/react";

// const fixTime=(time)=>(time<10?'0'+time:time);
// const formateTimeToString=(time)=>{
//   const second=time%60;
//   const min= Math.floor((time/60)%60);
//   const hour= Math.floor((time/3600)%60);
//   return `${fixTime(hour)}:${fixTime(min)}:${fixTime(second)}`
// }
const Time = () => {
  const [time, setTime] = useState(3610);
  const [checkit,setCheckit]=useState(false)

  // const timeRef = useRef(null);

  // const handlePlay = () => {
  //   if (timeRef.current !== null) return;

  //   timeRef.current = setInterval(() => {
  //     setTime((time) => time + 1);
  //   }, 1000);
  // };

  // const handleStop = () => {
  //   clearInterval(timeRef.current);
  //   timeRef.current = null;
  // };

  // const handleReset = () => {
  //   handleStop();
  //   setTime(0);
  // };

  // useEffect(() => {
  //   handleStop();
  // }, []);

  {
    /* <h1>TimeCount:{formateTimeToString(time)}</h1>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button> */
  }

  return (
    <Box mt="50px" w="100%" border="1px solid red"  display="flex"  justifyContent="center">
      <Box w="90%" display="flex" flexDirection="column" justifyContent="center" border="1px solid black">
        {/* hidden box */}
        <Box><Image src=""/></Box>
        {/* 1st box */}
        <Box w="100%" display="flex" justifyContent="space-between" border="1px solid green">
          <Box display="flex">
         <Box><Button>{"<"}</Button><Button>{">"}</Button></Box>
        <Box display="flex"><Text>Today</Text><Text>Friday,30 Sep</Text></Box>
        </Box>
        <Box ><button >C</button><button >Day</button></Box>

        </Box>
        {/* 1st box end */}

        {/* 2nd box */}
        <Box display="flex" border="1px solid blue">
          <Box w="10%"  border="1px solid teal">
            <Button>+</Button>
          </Box>

          <Box w="90%"  border="1px solid orange">
            <Box  h={["90px"]}>
              <Box display="flex" justifyContent="space-between">
                <Box> <Text>Mon</Text><Text>00:00</Text></Box>
                <Box><Text>Tue</Text><Text>00:00</Text></Box>
                <Box> <Text>Wes</Text><Text>00:00</Text></Box>
                <Box><Text>Thu</Text><Text>00:00</Text></Box>
                <Box><Text>Fri</Text><Text>00:00</Text></Box>
                <Box><Text>Sat</Text><Text>00:00</Text></Box>
                <Box><Text>Sun</Text><Text>00:00</Text></Box>

              </Box>
            </Box>

            {/* mapping here */}
            <Box>
              {checkit?"data":
                <Box>
                    <Box border="1px solid red" display="flex" justifyContent="space-between" h={["90px"]}>
                      <Box w="max-content"><Text>Project name</Text><Text>category</Text></Box>
                      <Box display="flex" justifyContent="center" w="max-content"><button disabled>{time}</button><button>{"start"}</button><button>Edit</button></Box>
                    </Box>
                </Box>
              }
            </Box>
            {/* mapping box end */}
          </Box>
        </Box>
        {/* 2nd box end */}
      </Box>
    </Box>
  );
};

export default Time;
