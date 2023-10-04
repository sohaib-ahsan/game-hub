import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { game, error } = useGames();
  return (
    <>
      {error && <Text> {error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        spacing={10}
        padding={10}
      >
        {game.map((el) => (
          <GameCard key={el.id} game={el} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
