import React from 'react';
import {
  Box,
  Flex,
  Radio,
  RadioGroup,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  Textarea,
  VStack
} from '@chakra-ui/react';

export const Editor = props => {
  return (
    <SimpleGrid columns={2} spacing={4} {...props}>
      <VStack>
        <Flex w='100%'>
          <Text>ここに貼り付け</Text>
          <Spacer />
          <RadioGroup defaultValue='1'>
            <Stack direction='row'>
              <Radio value='1'>1</Radio>
              <Radio value='2'>2</Radio>
              <Radio value='3'>3</Radio>
            </Stack>
          </RadioGroup>
        </Flex>
        <Textarea h="480px" border='2px'/>
      </VStack>
      <VStack>
        <Box w='100%' textAlign="left">
          <Text>結果表示</Text>
        </Box>
        <Textarea h="480px" border='2px'/>
      </VStack>
    </SimpleGrid>
  );
};
