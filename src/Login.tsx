import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Grid,
} from "@chakra-ui/react";
import { TriangleAlert } from "lucide-react";

export default function Login() {
  return (
    <Stack
      flex={1}
      // borderColor={"red"}
      // borderWidth={"3px"}
      width={{ base: "180%", md: "100%" }}
    >
      <Stack maxH={{ md: "100vh" }} direction={{ base: "column", md: "row" }}>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            height={{ base: "50%", md: "110%" }}
            width={{ base: "100%", md: "70%" }}
            src={"https://cdn.wallpapersafari.com/76/88/7XKHcV.jpg"}
            objectFit={"fill"}
          />
        </Flex>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Text textAlign={"right"} mr={"-150px"}>
              Already a member?{" "}
              <span style={{ color: "#5E4DB2" }}> Sign in</span>
            </Text>
            <Heading fontSize={"4xl"} fontWeight={"bold"} textAlign={"left"}>
              Sign up to Dribble
            </Heading>
            <Text color={"red"} textAlign={"left"}>
              . Username has already been taken
            </Text>
            <Grid templateColumns="1fr 1fr" gap={4}>
              <FormControl id="firstName">
                <FormLabel fontWeight={"bold"}>Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="lastName">
                <FormLabel fontWeight={"bold"}>
                  <Flex alignItems="center">
                    <TriangleAlert
                      size={"20px"}
                      color="#F15B50"
                      strokeWidth="1.33"
                    />
                    <span style={{ marginLeft: "8px" }}>Username</span>
                  </Flex>
                </FormLabel>
                <Input type="text" />
              </FormControl>
            </Grid>
            <FormControl id="email">
              <FormLabel fontWeight={"bold"}>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel fontWeight={"bold"}>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox size={"lg"} textAlign={"left"}>
                  Creating an account means you're okay with our{" "}
                  <span style={{ color: "#5E4DB2" }}>
                    {" "}
                    Terms of Service, Privacy Policy
                  </span>
                  , and our default{" "}
                  <span style={{ color: "#5E4DB2" }}>
                    Notification Settings.
                  </span>
                </Checkbox>
              </Stack>
              <Button
                style={{ width: "210px", height: "50px" }}
                size={"md"}
                color={"white"}
                backgroundColor={"#AE4787"}
                _hover={{ bg: "#AE4787" }}
              >
                Create Account
              </Button>
            </Stack>
            <Text textAlign={"left"}>
              This site is protected by reCAPTCHA and the Google{" "}
              <span style={{ color: "#5E4DB2" }}> Privacy Policy</span>
              and <span style={{ color: "#5E4DB2" }}>
                {" "}
                Terms of Service
              </span>{" "}
              apply
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </Stack>
  );
}
