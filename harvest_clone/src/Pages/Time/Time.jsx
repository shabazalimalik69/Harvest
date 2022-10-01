import { useEffect, useRef, useState } from "react";

import { Box, Button, Image, Text } from "@chakra-ui/react";
import Common from "./Common";
import Modal1 from "./Modal1";
import style from "./Time.module.css"
import Data1 from "./Data1";
const fixTime=(time)=>(time<10?'0'+time:time);
const formateTimeToString=(time)=>{
  const second=time%60;
  const min= Math.floor((time/60)%60);
  const hour= Math.floor((time/3600)%60);
  return `${fixTime(hour)}:${fixTime(min)}:${fixTime(second)}`
}
const Time = () => {

  const [checkit,setCheckit]=useState(false);
  const [time,setTime]=useState(0);

  const iniValue={
       
    projects:"",
    category:""
}
  const [form1,setForm1]=useState(iniValue)
    const [addTask,setAddTask]=useState([])
 


  const timeRef = useRef(null);

  // const stoptimmerRef=useRef(id);

  const handlePlay = (id) => {

if(addTask.map((el)=>(el.id===id))){
  if (timeRef.current !== null) return;
   
  timeRef.current = setInterval(() => {
  
    setTime((time) => time + 1);
  }, 1000);
}
  };

  const handleStop = (id) => {
 

    clearInterval(timeRef.current);
    timeRef.current = null;

  
  };

 

  const handleSave=()=>{
    fetch(`http://localhost:8080/products`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
        id:Math.random()*435354343+Date.now()+Math.random()*10654+"abcd"+Math.random()*435354343,
        projects:form1.projects,
        category:form1.category,
        })
    }).then((res)=>res.json())
    .then((data)=>{
            setAddTask([...addTask,data])
            console.log(data)
            setForm1("")
    })
}

useEffect(()=>{
fetch(`http://localhost:8080/timeTracking`)
.then(res=>res.json())
.then((data)=>{
        setAddTask(data)
        console.log("Abcd",data);  
})
},[])

  useEffect(() => {
    handleStop();
  }, []);


  return (
    <Box pt="50px" pb="50px" h="93vh" w="100%"  display="flex"  justifyContent="center"  className={style.box1} overflow="auto"  bgImage="url('https://cache.harvestapp.com/static/aura-6Q7WJ4OE.jpg')" bgSize="cover">
      <Box w="90%" display="flex" flexDirection="column" overflow="auto" >
        {/* hidden box */}
        <Box><Image src=""/></Box>
        {/* 1st box */}
        <Box w="100%" display="none" justifyContent="space-between" >
          <Box display="flex">
         <Box><Button>{"<"}</Button><Button>{">"}</Button></Box>
        <Box display="flex"><Text>Today</Text><Text>Friday,30 Sep</Text></Box>
        </Box>
        <Box ><button >C</button><button >Day</button></Box>

        </Box>
        {/* 1st box end */}

        {/* 2nd box */}
        <Box display="flex">
          <Box w="10%">
            <Modal1 form1={form1} setForm1={setForm1} handleSave={handleSave}/>
          </Box>

          <Box w="90%"   >
            <Box  h={["90px"]} display="flex" alignItems="center" justifyContent="space-between"   borderBottom="1px solid lightGray">
             <Common/>
            </Box>

            {/* mapping here */}
            <Box>
              {checkit?"data":
                <Box>
                  {addTask?.map((el)=>(   
               <Data1 {...el } handlePlay={handlePlay} handleStop={handleStop} formateTimeToString={formateTimeToString} time={time} />
  ))}
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
