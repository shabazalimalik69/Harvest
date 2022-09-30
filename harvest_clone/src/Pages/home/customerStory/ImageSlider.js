import { Box, Button, Image, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({ slides }) => {
  return (
    <>
        <Carousel infiniteLoop >
      {slides.map((slide) => {
        return <Box display='flex' gap='30px'>
            <Box m='0 0 20px' w='43%' p='0 50px 0 25px' textAlign='start'>

                <Text fontSize="30px" fontWeight='400' mb='20px' color='#1D1E1C'>
                    <span style={{color:"#FA5D00",fontSize:"30px", fontWeight:'700'}} >"</span>
                    {slide.story}
                    <span style={{color:"#FA5D00",fontSize:"30px", fontWeight:'700'}} >"</span>
                    </Text>
                <Text fontSize="20px" fontWeight='700' mb='20px' color='black'>
                    {slide.user} 
                    </Text>
                    <Button bg='#1D1E1C' color='#ffff' margin='40px 0' size='lg' borderRadius='15px'> Meet our customers </Button>
            </Box>
            <Box w='45%'>
                <Image src={slide.image} height="auto"/>
            </Box>

            </Box> ;
      })}
    </Carousel>
    </>
  );
};

export default ImageSlider;
