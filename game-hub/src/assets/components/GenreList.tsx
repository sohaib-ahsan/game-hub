import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  // Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // if (isLoading) return <Spinner />;
  return (
    <>
      {isLoading && (
        <List>
          {skeleton.map((el) => (
            <ListItem key={el} paddingY="12px">
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
          <ListItem key={el.id} paddingY="12px">
            <HStack>
              <Image
                boxSize="32px"
                src={getCroppedImageUrl(el.image_background)}
                borderRadius={8}
              />
              <Text fontSize="lg" paddingLeft="10px">
                {el.name}
              </Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
