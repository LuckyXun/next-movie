/* eslint-disable @next/next/no-img-element */
/*
 * @Author: XunL
 * @Description:
 */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { css } from "@emotion/react";
import axios from "axios";
import { baseURL } from "../axios.config";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

const swiperContainer = css`
  position: relative;
  background: red;
  & > .carousel:last-child {
    position: absolute;
    left: 0;
    bottom: 0;
    & > .thumbs-wrapper > .thumbs {
      display: flex;
      justify-content: center;
    }
  }
`;

const carouselItem = css`
  color: white;
  padding-top: 180px;
  left: 50%;
`;

export default function Swiper({ data }) {
  console.log(data);
  return (
    <>
      <Carousel
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={true}
        css={swiperContainer}
      >
        {data.map((movie) => {
          return (
            <Box key={movie.id} pos="relative">
              <Box pos="absolute" css={carouselItem}>
                <Heading as="h2">{movie.title}</Heading>
                <Text as="h2">{movie.description}</Text>
                <Button>CHECK DETAIL</Button>
              </Box>
              <img src={movie.url} alt="" />
            </Box>
          );
        })}
      </Carousel>
    </>
  );
}
export function loadCarousel() {
  return axios.get("/swiper", { baseURL: baseURL });
}
