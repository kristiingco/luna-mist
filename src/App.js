import "./Categories.scss";
import Directory from "./components/Directory/Directory"

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Cleansers",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0111/9309/0106/products/00b32685030514f143ea4bed31742cb8_800x.jpg?v=1586810329",
    },
    {
      id: 2,
      title: "Toners",
      imageUrl:
        "https://m.media-amazon.com/images/I/21iXuOPrmZL.jpg",
    },
    {
      id: 3,
      title: "Serums",
      imageUrl: "https://m.media-amazon.com/images/I/51D0W7wjXGL.jpg",
    },
    {
      id: 4,
      title: "Lotions",
      imageUrl:
        "https://cafe24img.poxo.com/beautyboxkorea/web/product/big/ROUND-LAB-1025-Dokdo-Cream-80ml.jpg",
    },
    {
      id: 5,
      title: "Sunscreen",
      imageUrl: "https://m.media-amazon.com/images/I/31gK4s1-otL.jpg",
    },
  ];

  return <Directory categories={categories}/>;
};

export default App;
