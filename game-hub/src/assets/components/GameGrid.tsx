import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [game, setGame] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        console.log(res.data.results);
        setGame(res.data.results);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, []);
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
