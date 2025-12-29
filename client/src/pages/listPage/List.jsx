import ItemsGrid from "../../components/itemsGrid/ItemsGrid.jsx";
import ShopItemCard from "../../components/shopItemCard/ShopItemCard.jsx";

const List = () => {
  return (
    <>
      <div>Results found: 12</div>
      <div>
        <ItemsGrid>
          <ShopItemCard title="Item1" />
          <ShopItemCard title="Item2" />
          <ShopItemCard title="Item3" />
          <ShopItemCard title="Item4" />
          <ShopItemCard title="Item5" />
        </ItemsGrid>
      </div>
    </>
  );
};

export default List;
