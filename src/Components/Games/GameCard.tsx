import { Game } from '../../hooks/useGame';
import { Card, CardBody, Stack, Box, Image, HStack, Heading } from '@chakra-ui/react';
import getCroppedImageUrl from '../../service/image-url';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';

interface Props{
    game:Game;
    key:number;
}

export default function GameCard({game}:Props) {
  return (
      <Box minHeight={"19rem"} maxWidth="25rem">
          <Card borderRadius={"1rem"} height={"100%"} _hover={{transform:"scale(1.02)"}} transition={"all .2s ease-in-out"}>
              <CardBody backgroundColor={"#212121"} p="0" color="white" borderRadius={".8rem"}  >
                  <Image
                     height="10.7rem"
                     width="100%"
                      src={getCroppedImageUrl(game.background_image)}
                      alt={game.name}    
                      borderTopRadius={".8rem"}              
                  />
                  <Stack mt="5px" p="15px" spacing='3'>
                     <HStack justifyContent="space-between">
                          <PlatformIconList platforms={game.parent_platforms?.map(x => x.platform)} />
                          <CriticScore score={game.metacritic} />
                     </HStack>
                      <Heading as="h2" fontWeight="bold" py="3" size="md">{game.name}</Heading>
                  </Stack>
              </CardBody>
          </Card>
      </Box>
  )
}
