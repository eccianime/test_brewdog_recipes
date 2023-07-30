import { useRoute } from "@react-navigation/native";
import { HStack, ScrollView, VStack } from "native-base";
import { useEffect } from "react";
import { BeerParamList } from "../../@types/navigator";
import {
  BasicsCard,
  BrewersTipCard,
  CardWrapper,
  FoodPairingCard,
  Header,
  IngredientsCard,
  Loader,
  MethodCard,
  PackagingCard,
  Text,
} from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getSingleBeerAction } from "../../redux/details/actions";

export default function BeerDetails() {
  const { loading, details } = useAppSelector((state) => state.details);
  const { beer_id } = useRoute().params as BeerParamList["Beer Details"];
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSingleBeerAction(beer_id));
  }, [beer_id]);

  return (
    <VStack flex={1}>
      <Header />
      {loading && <Loader />}

      {!loading && details && (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <VStack flexGrow={1} px={3}>
            <HStack justifyContent={"space-between"}>
              <Text fontSize={"2xl"} fontFamily={"heading"} mb={-3}>
                {`#${details.id}`}
              </Text>
              <Text
                fontSize={"2xl"}
                color={"gray.300"}
                fontFamily={"heading"}
                mb={-3}
              >
                {details.first_brewed}
              </Text>
            </HStack>
            <Text fontSize={"4xl"} fontFamily={"heading"}>
              {details.name}
            </Text>
            <VStack w={"full"} bg="black" h={1} my={1} />
            <Text fontSize={"2xl"} fontFamily={"heading"}>
              {details.tagline}
            </Text>
            <VStack w={"full"} bg="black" h={1} my={1} />
            <PackagingCard image={details.image_url} />
            <CardWrapper text="THIS BEER IS">
              <Text color={"gray.400"}>{details.description}</Text>
            </CardWrapper>
            <BasicsCard details={details} />
            <MethodCard details={details} />
            <IngredientsCard details={details} />
            <FoodPairingCard details={details} />
            <BrewersTipCard details={details} />
          </VStack>
        </ScrollView>
      )}
    </VStack>
  );
}
