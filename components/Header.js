/*
 * @Author: XunL
 * @Description:
 */

import { Box, Button, Container, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { FaSignInAlt, FaSearch } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

const logo = css`
  width: 140px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const JoinAndRegister = styled.a`
  height: 52px;
  line-height: 52px;
  display: inline-block;
  color: #fff;
  border-right: 1px solid #393939;
  border-left: 1px solid #393939;
  padding: 0 6px;

  & > button:first-child:after {
    content: "";
    content: "";
    width: 1px;
    height: 10px;
    background: white;
    position: absolute;
    right: 0;
    top: 7px;
  }
`;

const Search = styled.span`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  height: 52px;
  line-height: 52px;
  color: #fff;
  border-right: 1px solid #393939;
  border-left: 1px solid #393939;
  right: 0;
  font-size: 16px;
  padding: 0 15px;
`;

export default function Layout() {
  return (
    <Box h="52px" bg="#202020" borderBottom="1px solid #393939">
      <Container
        maxW="1200px"
        h="52px"
        w="100%"
        pl="1rem"
        pr="1rem"
        pos="relative"
      >
        <JoinAndRegister>
          <Button
            size="xs"
            colorScheme="transparent"
            leftIcon={<FaSignInAlt></FaSignInAlt>}
          >
            登录
          </Button>

          <Button
            size="xs"
            colorScheme="transparent"
            leftIcon={<BsFillPersonFill></BsFillPersonFill>}
          >
            注册
          </Button>
        </JoinAndRegister>
        <Image src="/images/logo.png" alt="logo" css={logo}></Image>
        <Search>
          <FaSearch></FaSearch>
        </Search>
      </Container>
    </Box>
  );
}
