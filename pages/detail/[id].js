/*
 * @Author: XunL
 * @Description:
 */
import Layout from "../../components/Layout";
import { baseURL } from "../../axios.config";
import { css } from "@emotion/react";
import axios from "axios";
import { Box, Heading, Divider, Text } from "@chakra-ui/react";
const detailContainer = css`
  font-size: 14px;
  & > p,
  & > img {
    margin-bottom: 15px;
  }
`;

export default function Detail({ movie }) {
  return (
    <Layout>
      <Box w="1200px" mt="60px" ml="auto" mr="auto">
        <Heading as="h2" size="xl">
          {movie.title}
        </Heading>
        <Heading as="h4" size="lg" mt={4} color="gray.500" fontWeight="light">
          {movie.sub}
        </Heading>
        <Divider my={4} />
        <Box overflow="hidden">
          <Text float="left">作者: {movie.author}</Text>
          <Text float="right">发布时间: {movie.publish}</Text>
        </Box>
        <Divider my={4} />
        <Box
          css={detailContainer}
          dangerouslySetInnerHTML={{ __html: movie.content }}
        ></Box>
      </Box>
    </Layout>
  );
}

export async function getStaticPaths() {
  let { data } = await axios.get("/videos", { baseURL: baseURL });
  let paths = data.map((id) => ({ params: { id } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let { data } = await axios.get(`/detail?id=${params.id}`, {
    baseURL: baseURL,
  });
  return {
    props: {
      movie: data,
    },
  };
}
