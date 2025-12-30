import ItemsGrid from "../../components/itemsGrid/ItemsGrid.jsx";
import ShopItemCard from "../../components/shopItemCard/ShopItemCard.jsx";

import photo1 from "../../assets/games/split_fiction_universal.jpg";
import photo2 from "../../assets/games/split_fiction_nintendo.jpg";

const items = [
  {
    id: 1,
    photo: photo1,
    platformIcon: null,
    platform: "Xbox Live",
    title: "Split Fiction (Xbox Series X|S) XBOX LIVE Key EUROPE",
    regionLabel: "EUROPE",
    regionOk: true,
    hasDiscount: true,
    basePrice: "49.99",
    discount: "30.00",
    currentPrice: "35.06",
    priceInfo: null,
    hasCashback: true,
    cashback: "4.91",
    wishlisted: 572,
    available: true,
  },
  {
    id: 2,
    photo: photo2,
    platformIcon: null,
    platform: "PlayStation Network",
    title: "Elden Ring (PS5) PSN Key GLOBAL",
    regionLabel: "GLOBAL",
    regionOk: true,
    hasDiscount: true,
    basePrice: "69.99",
    discount: "20.00",
    currentPrice: "55.99",
    priceInfo: "Includes VAT",
    hasCashback: false,
    cashback: null,
    wishlisted: 1243,
    available: true,
  },
  {
    id: 3,
    photo: photo1,
    platformIcon: null,
    platform: "Steam",
    title: "Cyberpunk 2077 (PC) Steam Key EUROPE",
    regionLabel: "EUROPE",
    regionOk: true,
    hasDiscount: false,
    basePrice: "59.99",
    discount: null,
    currentPrice: "59.99",
    priceInfo: null,
    hasCashback: true,
    cashback: "6.00",
    wishlisted: 3210,
    available: true,
  },
  {
    id: 4,
    photo: photo2,
    platformIcon: null,
    platform: "EA App",
    title: "EA Sports FC 24 (PC) EA App Key EUROPE",
    regionLabel: "EUROPE",
    regionOk: false,
    hasDiscount: true,
    basePrice: "69.99",
    discount: "50.00",
    currentPrice: "34.99",
    priceInfo: null,
    hasCashback: false,
    cashback: null,
    wishlisted: 888,
    available: true,
  },
  {
    id: 5,
    photo: photo1,
    platformIcon: null,
    platform: "Nintendo eShop",
    title: "The Legend of Zelda: Tears of the Kingdom Switch Key EUROPE",
    regionLabel: "EUROPE",
    regionOk: true,
    hasDiscount: false,
    basePrice: "69.99",
    discount: null,
    currentPrice: "69.99",
    priceInfo: "No discounts available",
    hasCashback: false,
    cashback: null,
    wishlisted: 5421,
    available: false,
  },
  {
    id: 6,
    photo: photo2,
    platformIcon: null,
    platform: "Steam",
    title: "Baldur's Gate 3 (PC) Steam Key GLOBAL",
    regionLabel: "GLOBAL",
    regionOk: true,
    hasDiscount: true,
    basePrice: "59.99",
    discount: "10.00",
    currentPrice: "53.99",
    priceInfo: null,
    hasCashback: true,
    cashback: "5.40",
    wishlisted: 8123,
    available: true,
  },
  {
    id: 7,
    photo: photo1,
    platformIcon: null,
    platform: "Ubisoft Connect",
    title: "Assassin’s Creed Mirage (PC) Ubisoft Key EUROPE",
    regionLabel: "EUROPE",
    regionOk: false,
    hasDiscount: true,
    basePrice: "49.99",
    discount: "40.00",
    currentPrice: "29.99",
    priceInfo: null,
    hasCashback: false,
    cashback: null,
    wishlisted: 233,
    available: false,
  },
  {
    id: 8,
    photo: photo2,
    platformIcon: null,
    platform: "Xbox Live",
    title: "Forza Horizon 5 (Xbox Series X|S) XBOX LIVE Key GLOBAL",
    regionLabel: "GLOBAL",
    regionOk: true,
    hasDiscount: true,
    basePrice: "59.99",
    discount: "25.00",
    currentPrice: "44.99",
    priceInfo: "Price may vary by seller",
    hasCashback: true,
    cashback: "4.50",
    wishlisted: 1765,
    available: true,
  },
  {
    id: 9,
    photo: photo1,
    platformIcon: null,
    platform: "Battle.net",
    title: "Diablo IV (PC) Battle.net Key EUROPE",
    regionLabel: "EUROPE",
    regionOk: true,
    hasDiscount: true,
    basePrice: "69.99",
    discount: "35.00",
    currentPrice: "45.49",
    priceInfo: null,
    hasCashback: true,
    cashback: "6.80",
    wishlisted: 2941,
    available: true,
  },
  {
    id: 10,
    photo: photo2,
    platformIcon: null,
    platform: "Steam",
    title: "Hades II (PC) Steam Key GLOBAL",
    regionLabel: "GLOBAL",
    regionOk: true,
    hasDiscount: false,
    basePrice: "29.99",
    discount: null,
    currentPrice: "29.99",
    priceInfo: null,
    hasCashback: false,
    cashback: null,
    wishlisted: 912,
    available: true,
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
              platformIcon={item.platformIcon}
              platform={item.platform}
              title={item.title}
              regionLabel={item.regionLabel}
              regionOk={item.regionOk}
              hasDiscount={item.hasDiscount}
              basePrice={item.basePrice}
              discount={item.discount}
              currentPrice={item.currentPrice}
              priceInfo={item.priceInfo}
              hasCashback={item.hasCashback}
              cashback={item.cashback}
              wishlisted={item.wishlisted}
              available={item.available}
            />
          ))}
        </ItemsGrid>
      </div>
    </>
  );
};

export default List;
