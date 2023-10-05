import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((el) => (
        <ListItem key={el.id} paddingY="10px">
          <HStack>
            <Image
              boxSize="32px"
              src={getCroppedImageUrl(el.image_background)}
              borderRadius={8}
            />
            <Text fontSize="lg">{el.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
