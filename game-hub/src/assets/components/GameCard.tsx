import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../../hooks/useGames";
import PlatformListIcons from "./PlatformListIcons";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformListIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
