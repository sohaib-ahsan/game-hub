import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  // Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const { data, isLoading } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // if (isLoading) return <Spinner />;
  return (
    <>
      {isLoading && (
        <List>
          {skeleton.map((el) => (
            <ListItem key={el} paddingY="10px">
              <HStack>
                <Skeleton height="200px" boxSize="32px" borderRadius={8} />
                <SkeletonText fontSize="lg" width="80px" noOfLines={2} />
              </HStack>
            </ListItem>
          ))}
        </List>
      )}
      <List>
        {data.map((el) => (
          <ListItem key={el.id} paddingY="10px">
            <HStack>
              <Image
                boxSize="32px"
                src={getCroppedImageUrl(el.image_background)}
                borderRadius={8}
              />
              <Button
                fontSize="md"
                paddingLeft="6px"
                variant="link"
                whiteSpace="pre-wrap"
                textAlign="left"
                onClick={() => onSelectedGenre(el)}
              >
                {el.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
