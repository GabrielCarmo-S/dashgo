import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Gabriel Carmo</Text>
        <Text color="gray.300" fontSize="small">gabriekcarmk@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Gabriel Carmo" src="https://avatars.githubusercontent.com/u/70289493?s=400&u=9ef711cced6b061195c95e507dee5835be08d49c&v=4" />
    </Flex>
  );
}