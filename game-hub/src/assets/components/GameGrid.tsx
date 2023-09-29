import { Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";

const GameGrid = () => {
  const { game, error } = useGames();
  return (
    <>
      {error && <Text> {error}</Text>}
      <ul>
        {game.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
