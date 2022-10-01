import { Box, Button, Image, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import styles from "../Home.module.css";

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({ slides }) => {
  const navigate = useNavigate();
  return (
    <>
        <Carousel infiniteLoop >
      {slides.map((slide) => {
        return <Box  className={styles.customer_Section_car_box}>
            <Box className={styles.customer_Section_car_box_sb1} >

                <Text className={styles.customer_Section_car_box_txt1}>
                    <span style={{color:"#FA5D00",fontSize:"30px", fontWeight:'700'}} >"</span>
                    {slide.story}
                    <span style={{color:"#FA5D00",fontSize:"30px", fontWeight:'700'}} >"</span>
                    </Text>
                <Text className={styles.customer_Section_car_box_txt2}>
                    {slide.user} 
                    </Text>
                    <Button bg='#1D1E1C' color='#ffff' size='lg' className={styles.customer_Section_car_box_btn} onClick={()=>{navigate("/customers")}}> Meet our customers </Button>
            </Box>
            <Box className={styles.customer_Section_car_box_sb2}>
                <Image src={slide.image} height="auto" className={styles.customer_Section_car_box_sb2_img}/>
            </Box>

            </Box> ;
      })}
    </Carousel>
    </>
  );
};

export default ImageSlider;
