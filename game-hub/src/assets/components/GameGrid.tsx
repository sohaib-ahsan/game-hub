import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text> {error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        spacing={10}
        padding={10}
      >
        {isLoading &&
          skeletons.map((sk) => (
            <GameCardContainer>
              <GameCardSkeleton key={sk} />
            </GameCardContainer>
          ))}
        {data.map((el) => (
          <GameCardContainer>
            <GameCard key={el.id} game={el} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
