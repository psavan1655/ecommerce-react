import React, { useState } from "react";
import ProductCard from "./product/product-card";
import { Button, Modal } from "antd";
// import { Box, Button, Modal, Typography } from "@mui/material";

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* <div style={{ display: "flex", flexWrap: "wrap" }}>
        {productsList.map((product) => (
          <ProductCard product={product} />
        ))}
      </div> */}
      {/* 
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={isModalOpen} onClose={handleClose}>
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal> */}

      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default Home;
