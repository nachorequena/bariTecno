import { Button } from "@mui/material";

const ItemCount = ({ counter, addOne, subOne, onAdd }) => {
  return (
    <>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",

          gap: "30px",
        }}
      >
        <Button
          variant="contained"
          onClick={addOne}
          sx={{ bgcolor: "black", color: "#fafafa" }}
        >
          +
        </Button>
        <h2> {counter} </h2>
        <Button
          variant="contained"
          onClick={subOne}
          disabled={counter === 1 ? true : false}
          sx={{ bgcolor: "black", color: "#fafafa" }}
        >
          -
        </Button>
        <div>
          <Button
            variant="contained"
            onClick={() => onAdd(counter)}
            sx={{
              borderRadius: 3,
              color: "#fafafa",
              bgcolor: "black",
            }}
          >
            agregar al carrito
          </Button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
