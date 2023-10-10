import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../../hooks/usePlatforms";
import { Platform } from "../../hooks/useGames";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  SelectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectedPlatform, SelectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Box paddingLeft={6} paddingRight={3}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {SelectedPlatform?.name ? SelectedPlatform.name : "Platform"}
        </MenuButton>
        <MenuList>
          {data.map((el) => (
            <MenuItem
              key={el.id}
              onClick={() => {
                onSelectedPlatform(el);
              }}
            >
              {el.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
