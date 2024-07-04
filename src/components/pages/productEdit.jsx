import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { dataBase } from "../../firebaseConfig";
import { Button, TextField, Container, Typography, Box } from "@mui/material";
import Swal from "sweetalert2";

const ProductEdit = ({ productId, userRole }) => {
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    stock: 0,
    description: "",
    img: "",
    category: "",
  });

  useEffect(() => {
    if (userRole === "editor") {
      const fetchProduct = async () => {
        const docRef = doc(dataBase, "products", productId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct(docSnap.data());
        } else {
          console.log("No such document!");
        }
      };
      fetchProduct();
    }
  }, [productId, userRole]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSave = async () => {
    const docRef = doc(dataBase, "products", productId);
    try {
      await updateDoc(docRef, product);
      Swal.fire("Éxito", "Producto actualizado con éxito", "success");
    } catch (error) {
      console.error("Error al actualizar el producto", error);
      Swal.fire("Error", error.message, "error");
    }
  };

  if (userRole !== "editor") {
    return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            No tienes permisos para editar productos
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Editar Producto
        </Typography>
        <TextField
          margin="normal"
          fullWidth
          id="title"
          label="Título"
          name="title"
          value={product.title}
          onChange={handleInputChange}
        />
        <TextField
          margin="normal"
          fullWidth
          id="price"
          label="Precio"
          name="price"
          type="number"
          value={product.price}
          onChange={handleInputChange}
        />
        <TextField
          margin="normal"
          fullWidth
          id="stock"
          label="Stock"
          name="stock"
          type="number"
          value={product.stock}
          onChange={handleInputChange}
        />
        <TextField
          margin="normal"
          fullWidth
          id="description"
          label="Descripción"
          name="description"
          value={product.description}
          onChange={handleInputChange}
        />
        <TextField
          margin="normal"
          fullWidth
          id="img"
          label="Imagen"
          name="img"
          value={product.img}
          onChange={handleInputChange}
        />
        <TextField
          margin="normal"
          fullWidth
          id="category"
          label="Categoría"
          name="category"
          value={product.category}
          onChange={handleInputChange}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleSave}
        >
          Guardar
        </Button>
      </Box>
    </Container>
  );
};

export default ProductEdit;
