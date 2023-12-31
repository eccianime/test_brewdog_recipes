import { Center, HStack } from "native-base";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks";
import { setCurrentPage } from "../../redux/list/actions";
import Text from "../common/Text";
import PaginationButton from "./PaginationButton";

export default function Pagination() {
  const { currentPage } = useAppSelector((state) => state.list);
  const dispatch = useDispatch();

  const handleChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };
  return (
    <HStack
      testID="pagination-component"
      justifyContent={"space-between"}
      px={2}
      py={3}
    >
      <PaginationButton
        isDisabled={currentPage === 1}
        onPress={() => handleChangePage(currentPage - 1)}
        text="Previous"
      />
      <Center
        bg="primary.500"
        w={"1/4"}
        borderRadius={"md"}
        alignItems={"center"}
        justifyContent={"center"}
        h={10}
      >
        <Text
          color={"white"}
          fontFamily={"mono"}
          fontSize={"lg"}
        >{`Page ${currentPage}`}</Text>
      </Center>
      <PaginationButton
        // There's no other parameter that tells me when to stop getting more items
        isDisabled={currentPage === 13}
        onPress={() => handleChangePage(currentPage + 1)}
        text="Next"
      />
    </HStack>
  );
}
