const SHOP_DATA = [
  {
    title: "Cleaners",
    items: [
      {
        id: 1,
        name: "Pore Cleansing Foam",
        imageUrl:
          "https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/10/20100013/7e8fdd78809612864329_1-560x560.jpeg?tr=w-400",
        price: 13,
      },
      {
        id: 2,
        name: "Foaming Cleanser",
        imageUrl:
          "https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/10/20100020/rich-moist-foaming-cleanser-3-478x560.jpeg?tr=w-400",
        price: 28,
      },
      {
        id: 3,
        name: "Rice Cleanser",
        imageUrl:
          "https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/10/20100027/6197e9a1-1111-4f00-84cd-436466eecc481646300300655-the-face-shop-rice-water-bright-cleansing-foam-100ml-5771646-1-420x560.jpeg?tr=w-400",
        price: 10,
      },
      {
        id: 4,
        name: "Low PH Cleanser",
        imageUrl:
          "https://cdn11.bigcommerce.com/s-6c800/images/stencil/1280x1280/products/7529/16242/COSRX-Low-pH-Good-Morning-Gel-Cleanser__08467__40332.1652269476.gif?c=2",
        price: 7,
      },
      {
        id: 5,
        name: "Whip Cleanser",
        imageUrl: "https://m.media-amazon.com/images/I/418+JDr+DSL.jpg",
        price: 12,
      },
      {
        id: 6,
        name: "Matcha Cleanser",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0111/9309/0106/products/B-LAB-Matcha-Hydrating-Foam-Cleanser-main-oo35mm.jpg?v=1640388598&width=1080",
        price: 14,
      },
      {
        id: 7,
        name: "Green Plum Cleanser",
        imageUrl:
          "https://d1flfk77wl2xk4.cloudfront.net/Assets/80/931/XXL_p0165993180.jpg",
        price: 10,
      },
      {
        id: 8,
        name: "Clean Dew Cleanser",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/1531/1435/products/grapefruit_1200x.jpg?v=1518216521",
        price: 10,
      },
      {
        id: 9,
        name: "Acne Clear Foam",
        imageUrl: "https://m.media-amazon.com/images/I/61NYarGQtrL.jpg",
        price: 14,
      },
    ],
  },
  {
    title: "Toners",
    items: [
      {
        id: 10,
        name: "Miracle Toner",
        imageUrl:
          "https://cdn.stylevana.com/media/catalog/product/cache/1/image/1000x1231/17f82f742ffe127f42dca9de82fb58b1/s/o/some-by-mi-aha-bha-pha-30-days-miracle-toner-30ml-831.jpg",
        price: 13,
      },
      {
        id: 11,
        name: "Skin Barrier Toner",
        imageUrl:
          "https://www.drjart.com/media/export/cms/products/1000x1000/dj_sku_H6ML01_1000x1000_0.jpg",
        price: 16,
      },
      {
        id: 12,
        name: "Heartleaf Toner",
        imageUrl:
          "https://cdn.stylevana.com/media/catalog/product/cache/1/image/1000x1231/17f82f742ffe127f42dca9de82fb58b1/a/n/anua-heartleaf-77-soothing-toner-250ml-444.jpg",
        price: 13,
      },
      {
        id: 13,
        name: "Rice Toner",
        imageUrl: "https://m.media-amazon.com/images/I/51LFeahEdNL.jpg",
        price: 10,
      },
      {
        id: 14,
        name: "Propolis Toner",
        imageUrl: "https://m.media-amazon.com/images/I/61F9V2PYkaL.jpg",
        price: 160,
      },
      {
        id: 15,
        name: "Cica Mist Toner",
        imageUrl:
          "https://www.naturerepublicusa.com/cdn/shop/products/Frame35_2_00d888d1-405b-46d4-8dde-33144859b8ee_900x.png?v=1673489971",
        price: 10,
      },
      {
        id: 16,
        name: "Ginseng Toner",
        imageUrl: "https://m.media-amazon.com/images/I/51sy56bO7lL.jpg",
        price: 11,
      },
      {
        id: 17,
        name: "Dokdo Toner",
        imageUrl: "https://m.media-amazon.com/images/I/418IQtaXRZL.jpg",
        price: 8,
      },
    ],
  },
  {
    title: "Serums",
    items: [
      {
        id: 18,
        name: "Vitamin C Serum",
        imageUrl: "https://m.media-amazon.com/images/I/61ZeHWaqV0L.jpg",
        price: 12,
      },
      {
        id: 19,
        name: "Rice Serum",
        imageUrl: "https://m.media-amazon.com/images/I/51c1IHyWPcS.jpg",
        price: 9,
      },
      {
        id: 20,
        name: "Black Tea Serum",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0579/6338/0889/products/boostingserum.jpg?v=1647646521",
        price: 11,
      },
      {
        id: 21,
        name: "Propolis Serum",
        imageUrl: "https://m.media-amazon.com/images/I/61tH-zg3rNL.jpg",
        price: 19,
      },
      {
        id: 22,
        name: "Centella Ampoule",
        imageUrl: "https://m.media-amazon.com/images/I/414jDIUrXEL.jpg",
        price: 18,
      },
    ],
  },
  {
    title: "Lotions",
    items: [
      {
        id: 23,
        name: "Snail Cream",
        imageUrl: "https://m.media-amazon.com/images/I/7135DSnMj+L.jpg",
        price: 13,
      },
      {
        id: 24,
        name: "Oil Free Lotion",
        imageUrl: "https://m.media-amazon.com/images/I/51jI1dL0+NL.jpg",
        price: 12,
      },
      {
        id: 25,
        name: "Barrier Repair Cream",
        imageUrl: "https://m.media-amazon.com/images/I/41tw9Q1q8LS.jpg",
        price: 15,
      },
      {
        id: 26,
        name: "Dynasty Cream",
        imageUrl:
          "https://m.media-amazon.com/images/I/41ZD-ZXDgCL._AC_UF1000,1000_QL80_.jpg",
        price: 11,
      },
      {
        id: 27,
        name: "Jelly Cream",
        imageUrl:
          "https://cdn11.bigcommerce.com/s-46kq7/images/stencil/1280x1280/products/2201/4606/29302_l_S_450__37354.1658822576.png?c=2?imbypass=on",
        price: 12,
      },
      {
        id: 28,
        name: "Ceramidin Cream",
        imageUrl:
          "https://i5.walmartimages.com/asr/f135ee37-3d2a-434f-83ae-83f6a0afaa70.f25acf7f2d2881f9b0f6b522175ae5a2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        price: 13,
      },
      {
        id: 29,
        name: "Nutrition Cream",
        imageUrl: "https://m.media-amazon.com/images/I/51S-j1tHm5L.jpg",
        price: 20,
      },
    ],
  },
  {
    title: "Sunscreens",
    items: [
      {
        id: 30,
        name: "Cica Sunscreen",
        imageUrl: "https://m.media-amazon.com/images/I/51mEmDBAqFL.jpg",
        price: 16,
      },
      {
        id: 31,
        name: "Watery Sun Gel",
        imageUrl: "https://m.media-amazon.com/images/I/41B8vDMnHHL.jpg",
        price: 12,
      },
      {
        id: 32,
        name: "Aloe Sun Cream",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0046/3211/7351/products/cosrx-sunscreen-cosrx-aloe-soothing-sun-cream-spf50-pa-13434974306407_1200x.jpg?v=1627973590",
        price: 12,
      },
      {
        id: 33,
        name: "Vitamin E Sunscreen",
        imageUrl:
          "https://m.media-amazon.com/images/I/61dcOPONM2L._AC_UF1000,1000_QL80_.jpg",
        price: 10,
      },
      {
        id: 34,
        name: "Black Rice Sunscreen",
        imageUrl: "https://m.media-amazon.com/images/I/41i256t8+3L.jpg",
        price: 40,
      },
      {
        id: 35,
        name: "Birch Juice Suncreen",
        imageUrl: "https://m.media-amazon.com/images/I/51udQ7AgX5L.jpg",
        price: 25,
      },
    ],
  },
];

export default SHOP_DATA;
