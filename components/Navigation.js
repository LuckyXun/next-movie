/*
 * @Author: XunL
 * @Description:
 */

import { Box, HStack } from "@chakra-ui/react";
import Link from "next/link";

export default function Navigation() {
  return (
    <Box w="100%" bg="#202020" h="52px" color="white">
      <HStack justifyContent="center" alignItems="center" h="52px" fontSize="12px">
        <Link href="#">
          <a>影片</a>
        </Link>
        <Link href="#">
          <a>漫画</a>
        </Link>
        <Link href="#">
          <a>电影</a>
        </Link>
        <Link href="#">
          <a>电视</a>
        </Link>
        <Link href="#">
          <a>新闻</a>
        </Link>
      </HStack>
    </Box>
  );
}
