import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Game`;
  return (
    <Heading as="h1" paddingLeft={6} marginBottom={4} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
