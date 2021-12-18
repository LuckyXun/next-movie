/*
 * @Author: XunL
 * @Description:
 */
import { Box, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { MdMovie } from "react-icons/md";
import Link from "next/link";
import axios from "axios";
import { baseURL } from "../axios.config";

export default function Movie({ title, data }) {
  return (
    <Box maxW="1200" ml="auto" mr="auto">
      <HStack mt="20px" fontSize="24px">
        <MdMovie></MdMovie>
        <Heading as="h3" fontSize="20px">
          {title}
        </Heading>
      </HStack>
      <HStack mt="20px" spacing={4}>
        {data.map((movie) => {
          return <MovieItem movie={movie} key={movie.id}></MovieItem>;
        })}
      </HStack>
    </Box>
  );
}

const MovieItem = ({ movie }) => {
  return (
    <Box w="290px">
      <Image alt="" src={movie.url} maxW="100%"></Image>
      <Text mt="10px" fontSize="12px">
        <Link href="/detail/[id]" as={`/detail/${movie.vid}`}>
          <a>{movie.title}</a>
        </Link>
      </Text>
    </Box>
  );
};

export function loadMovie() {
  return axios.get("/movie", { baseURL: baseURL });
}
