import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";
import ReactPlayer from "react-player";

const Home = () => {
  const data = useSelector((store) => store.data.posts);
  const dispatch = useDispatch();

  const [active, setActive] = useState("");

  const handlePlay = (id) => {
    setActive(id);
  };

  useEffect(() => {
    dispatch(getData());
  }, []);

  console.log("Data is", data);

  return (
    <Box>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(1, 1fr)",
        }}
        w="95%"
        m="auto"
        gap="20px"
        mt="40px"
      >
        {data?.length > 0 &&
          data.map((elem, index) => (
            <Box key={elem.postId} alignItems={"center"} m="auto">
              <Box  >
                <ReactPlayer
                  url={elem.submission.mediaUrl}
                  controls={true}
                  light={elem.submission.thumbnail}
                  width="300px"
                  height={"82vh"}
                  onClickPreview={() => handlePlay(elem.postId)}
                  onPlay={() => handlePlay(elem.postId)}
                  playing={active === elem.postId}
                  margin="auto"
                  style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}}
                />
              </Box>
              <Text>When Your GF is Way Too Beautiful 🤣</Text>
            </Box>
          ))}
      </Grid>
    </Box>
  );
};

export default Home;
