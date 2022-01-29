import React, { useState } from 'react';
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
  const [output, setOutput] = useState("");
  const [value, setValue] = React.useState("1")

  const handleInputChange = e => {
    const inputValue = e.target.value;
    const headerPtn = /^〔\S+〕$/;
    const namePtn = /^\s+\d+\s+(?<name>\S+　\S+)\s+(?<type>\S+)\s+.*$/;
    let lines = [];
    let isFirstLine = true;

    inputValue.split("\n").forEach(line => {
      if (line.match(headerPtn)) {
        if (isFirstLine) {
          isFirstLine = false;
        } else {
          lines.push("");
        }
        lines.push(line);
        return;
      }
      const m = line.match(namePtn);
      if (m) {
        lines.push(`${m.groups.type}${"\t".repeat(Number(value))}${m.groups.name}`);
        return;
      }
    });

    setOutput(lines.join("\n"));
  };

  return (
    <SimpleGrid columns={2} spacing={4} {...props}>
      <VStack>
        <Flex w='100%'>
          <Text>ここに貼り付け</Text>
          <Spacer />
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction='row'>
              <Radio value='1'>1</Radio>
              <Radio value='2'>2</Radio>
              <Radio value='3'>3</Radio>
            </Stack>
          </RadioGroup>
        </Flex>
        <Textarea h="480px" border='2px' onChange={handleInputChange} />
      </VStack>
      <VStack>
        <Box w='100%' textAlign="left">
          <Text>結果表示</Text>
        </Box>
        <Textarea h="480px" border='2px' defaultValue={output} />
      </VStack>
    </SimpleGrid>
  );
};
