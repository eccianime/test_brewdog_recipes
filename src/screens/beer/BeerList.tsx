import { FlatList, VStack } from "native-base";
import { useEffect } from "react";
import { BeerItem, Header, Loader, Pagination } from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getBeersAction } from "../../redux/list/actions";

export default function BeerList() {
  const { beers, currentPage, loading } = useAppSelector((state) => state.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBeersAction(currentPage));
  }, [currentPage]);

  return (
    <VStack flex={1}>
      <Header />
      {loading && <Loader />}
      {!loading && beers.length > 0 && (
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <BeerItem {...item} />}
          data={beers}
        />
      )}
      <Pagination />
    </VStack>
  );
}
