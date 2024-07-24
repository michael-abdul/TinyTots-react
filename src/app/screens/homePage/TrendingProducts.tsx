import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import CardOverflow from "@mui/joy/CardOverflow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Product } from "../../../lib/types/product";
import { retrieveTrendingProducts } from "./selector";
import { serverApi } from "../../../lib/types/config";


const trendingProductsRetriever = createSelector(
  retrieveTrendingProducts,
  (trendingProducts) => ({trendingProducts})
);

export default function TrendingProducts() {
  const { trendingProducts } = useSelector(trendingProductsRetriever);

  console.log("trendingProducts", trendingProducts);
  return (
    <div className="popular-dishes-frame ">
      <Container>
        <Stack className="popular-section">
          <Box className="category-title">Trending Products</Box>
          <Stack className="cards-frame">
          {trendingProducts.length !== 0 ? (
              trendingProducts.map((product: Product) => {
                const imagePath = `${serverApi}/${product.productImages[0]}`;

              return (
                <CssVarsProvider key={product._id}>
                  <Card className={"card"}>
                    <CardCover>
                      <img src={imagePath} alt="" />
                    </CardCover>
                    <CardCover className={"card-cover"} />
                    <CardContent sx={{ justifyContent: "flex-end" }}>
                      <Stack
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                      >
                        <Typography
                          level="h2"
                          fontSize="lg"
                          textColor="#f8f8f8"
                          mb={1}
                        >
                          {product.productName}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "md",
                            color: "#f8f8f8",
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          {product.productViews}
                          <VisibilityIcon
                            sx={{ fontSize: 25, marginLeft: "5px" }}
                          />
                        </Typography>
                      </Stack>
                    </CardContent>
                    <CardOverflow
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        py: 1.5,
                        px: "var (--Card-padding)",
                        borderTop: "1px solid",
                        height: "60px",
                      }}
                    >
                      <Typography
                        startDecorator={<DescriptionOutlinedIcon />}
                        textColor="#f8f8f8"
                      >
                        {product.productDesc}
                      </Typography>
                    </CardOverflow>
                  </Card>
                </CssVarsProvider>
              );
            })
          ):(
            <Box className={"data-no"}>
            Trending products are not available!
          </Box>
          )}
          </Stack>
        </Stack>
      </Container>
    </div>
          
  );
}
