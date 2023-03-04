import React, { useState } from "react";
import ProductCard from "./product/product-card";

const Home = () => {
  const [productsList, setProductsList] = useState([
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20210805/szLx/610ae723f997ddce8994e350/voxati_maroon__jacket_with_insert_pockets.jpg",
      title: "Voxati",
      description: "Jacket with insert pockets",
      originalPrice: 2599,
      discountPercent: 67,
      salePrice: 857,
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20210805/szLx/610ae723f997ddce8994e350/voxati_maroon__jacket_with_insert_pockets.jpg",
      title: "Voxati",
      description: "Jacket with insert pockets",
      originalPrice: 2599,
      discountPercent: 67,
      salePrice: 857,
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20210805/szLx/610ae723f997ddce8994e350/voxati_maroon__jacket_with_insert_pockets.jpg",
      title: "Voxati",
      description: "Jacket with insert pockets",
      originalPrice: 2599,
      discountPercent: 67,
      salePrice: 857,
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20210805/szLx/610ae723f997ddce8994e350/voxati_maroon__jacket_with_insert_pockets.jpg",
      title: "Voxati",
      description: "Jacket with insert pockets",
      originalPrice: 2599,
      discountPercent: 67,
      salePrice: 857,
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20210805/szLx/610ae723f997ddce8994e350/voxati_maroon__jacket_with_insert_pockets.jpg",
      title: "Voxati",
      description: "Jacket with insert pockets",
      originalPrice: 2599,
      discountPercent: 67,
      salePrice: 857,
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20210805/szLx/610ae723f997ddce8994e350/voxati_maroon__jacket_with_insert_pockets.jpg",
      title: "Voxati",
      description: "Jacket with insert pockets",
      originalPrice: 2599,
      discountPercent: 67,
      salePrice: 857,
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20210805/szLx/610ae723f997ddce8994e350/voxati_maroon__jacket_with_insert_pockets.jpg",
      title: "Voxati",
      description: "Jacket with insert pockets",
      originalPrice: 2599,
      discountPercent: 67,
      salePrice: 857,
    },
  ]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {productsList.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default Home;
