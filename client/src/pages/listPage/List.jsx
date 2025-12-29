import ItemsGrid from "../../components/itemsGrid/ItemsGrid.jsx";
import ShopItemCard from "../../components/shopItemCard/ShopItemCard.jsx";

import photo1 from "../../assets/games/split_fiction_universal.jpg";
import photo2 from "../../assets/games/split_fiction_nintendo.jpg";

const items = [
  {
    id: 1,
    photo: photo1,
    platform: "platform",
    title: "title",
    region: "region",
    fullprice: "fullprice",
    price: "price",
    cashback: "cashback",
    wishlisted: "wishlisted",
  },
  {
    id: 2,
    photo: photo2,
    platform: "platform",
    title: "title",
    region: "region",
    fullprice: "fullprice",
    price: "price",
    cashback: "cashback",
    wishlisted: "wishlisted",
  },
  {
    id: 3,
    photo: photo2,
    platform: "platform",
    title: "title",
    region: "region",
    fullprice: "fullprice",
    price: "price",
    cashback: "cashback",
    wishlisted: "wishlisted",
  },
  {
    id: 4,
    photo: photo2,
    platform: "platform",
    title: "title",
    region: "region",
    fullprice: "fullprice",
    price: "price",
    cashback: "cashback",
    wishlisted: "wishlisted",
  },
  {
    id: 5,
    photo: photo2,
    platform: "platform",
    title: "title",
    region: "region",
    fullprice: "fullprice",
    price: "price",
    cashback: "cashback",
    wishlisted: "wishlisted",
  },
];

const List = () => {
  return (
    <>
      <div>Results found: 12</div>
      <div>
        <ItemsGrid>
          {items.map((item) => (
            <ShopItemCard
              key={item.id}
              photo={item.photo}
              platform={item.platform}
              title={item.title}
              region={item.region}
              fullprice={item.fullprice}
              price={item.price}
              cashback={item.cashback}
              wishlisted={item.wishlisted}
            />
          ))}
        </ItemsGrid>
      </div>
    </>
  );
};

export default List;
