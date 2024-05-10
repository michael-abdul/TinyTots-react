import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Container, Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Badge from "@mui/material/Badge";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const products = [
  { productName: "Teddy", imagePath: "/img/Image1.svg" },
  { productName: "puzzle", imagePath: "/img/Image2.svg" },
  { productName: "familygames", imagePath: "/img/Image3.svg" },
  { productName: "teethers", imagePath: "/img/Image4.svg" },
  { productName: "learning games", imagePath: "/img/Image5.svg" },
  { productName: "puzzle", imagePath: "/img/puzzle.jpg" },
  { productName: "softPlush", imagePath: "/img/softPlush.jpeg" },
  { productName: "teethers", imagePath: "/img/teethers.webp" },
  { productName: "learning games", imagePath: "/img/Image5.svg" },
  { productName: "softPlush", imagePath: "/img/softPlush.jpeg" },


];

export default function Products() {
  return (
    <div className={"products"}>
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"avatar-big-box"}>
            <Box className={"search-big-box"}>
              <form className={"search-form"} action={""} method={""}>
                <input
                  type={"search"}
                  className={"single-search-input"}
                  name={"single-resSearch"}
                  placeholder={"Search for your favorite toys"}
                />
                <Button
                  className={"single-button-search"}
                  variant="contained"
                  endIcon={<SearchIcon />}
                >
                  Search
                </Button>
              </form>
            </Box>

            <Box className={"top-text"}>
              <p>Categories</p>
            </Box>
          </Stack>
          <Stack className={"product-category"}>
            <div className={"category-main"}>
              <Button variant={"contained"} color={"secondary"}>
                Baby playmats
                <img src= "/icons/preschool.svg"  />
              </Button>
              <Button variant={"contained"} color={"secondary"}>
                Baby teethers
                <img src= "/icons/teethe.svg"  />

              </Button>
              <Button variant={"contained"} color={"secondary"}>
                Learning toys
                <img src= "/icons/learn.svg"  />

              </Button>
              <Button variant={"contained"} color={"secondary"}>
                Soft & Plush toys
                <img src= "/icons/plush.svg"  />

              </Button>
              <Button variant={"contained"} color={"primary"}>
                Music & Sound toys
                <img src= "/icons/todler.svg"  />

              </Button>
            </div>
          </Stack>
          <Stack>
            <Stack
              // display={"flex"}
              // flexDirection={"row"}
              // justifyContent={"flex-start"}
              // width={"250%"}
              sx={{ mt: "65px", mr: "900px" }}
            >
              <Box className={"dishes-filter-box"}>
                <Button
                  variant={"contained"}
                  color="primary"
                  className={"order"}
                >
                  New
                </Button>
                <Button
                  variant={"contained"}
                  color="secondary"
                  className={"order"}
                >
                  Price
                </Button>
                <Button
                  variant={"contained"}
                  color="secondary"
                  className={"order"}
                >
                  Views
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Stack>

        <Stack className={"list-category-section"}>
          <Stack className={"product-wrapper"}>
            {products.length !== 0 ? (
              products.map((product, index) => {
                return (
                  <Stack key={index} className={"product-card"}>
                    <Stack
                      className={"product-img"}
                      sx={{ backgroundImage: `url(${product.imagePath})` }}
                    >
                      <Button className={"view-btn"} sx={{ right: "5px" }}>
                        <Badge badgeContent={20} color="secondary">
                          <RemoveRedEyeIcon
                            sx={{ color: 20 ? "gray" : "white" }}
                          />
                        </Badge>
                      </Button>
                    </Stack>
                    <Box className={"product-desc"}>
                      <span className={"product-title"}>
                        {product.productName}
                      </span>

                      <div className={"product-desc-text"}>
                        <MonetizationOnIcon />
                        {12}
                      </div>
                      <Button className={"shop-btn"}>
                        <div style={{ display: "flex" }}> Add to cart</div>
                      </Button>
                    </Box>
                  </Stack>
                );
              })
            ) : (
              <Box className="no-data">Products are not available!</Box>
            )}
          </Stack>
        </Stack>
        <Stack className={"pagination-section"}>
          <Pagination
            count={3}
            page={1}
            renderItem={(item) => (
              <PaginationItem
                components={{
                  previous: ArrowBackIcon,
                  next: ArrowForwardIcon,
                }}
                {...item}
                color={"secondary"}
              />
            )}
          />
        </Stack>
      </Container>

      <div className={"brands-logo"}>
        <Container
          sx={{ mt: "80px" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box className={"category-title"}>Visit our blog</Box>
          <Stack
            sx={{ mt: "80px" }}
            flexDirection={"row"}
            display={"flex"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Stack className="catergory-card">
              <Box display={"flex"} justifyContent={"center"}>
                <img src={"/img/baby1.svg"} className={"review-img"} />
              </Box>
              <Box className="review-txt">Tips for Choosing Safe Baby Toys</Box>
              <Box className="review-text">
                Learn about toy safety and age-appropriate play for babies
              </Box>
              <img src="/icons/default-user.svg" className="review-icon" />
            </Stack>
            <Stack className="catergory-card">
              <Box display={"flex"} justifyContent={"center"}>
                <img src={"/img/baby2.svg"} className={"review-img"} />
              </Box>
              <Box className="review-txt">
                Tips for Encouraging Baby's Development
              </Box>
              <Box className="review-text">
              Discover ways to support your baby's growth and learning

              </Box>
              <img src="/icons/default-user.svg" className="review-icon" />
            </Stack>
            <Stack className="catergory-card">
              <Box display={"flex"} justifyContent={"center"}>
                <img src={"/img/baby3.svg"} className={"review-img"} />
              </Box>
              <Box className="review-txt">Tips for Creating a Stimulating Play Environment</Box>
              <Box className="review-text">
              Find out how to set up a play area that promotes development',
              </Box>
              <img src="/icons/default-user.svg" className="review-icon" />
            </Stack>
          </Stack>
        </Container>
      </div>

      <div className={"address"}>
        <Container>
          <Stack
            className={"address-area"}
            sx={{ mt: "60px" }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box className={"title"}>Our address</Box>
            <iframe
              style={{ marginTop: "60px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.363734762081!2d692267250514616!3d41.322703307863044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9a0a33281d%3A0x9c5015eab678e435!2z0KDQsNC50YXQvtC9!5e0!3m2!1sko!2skr!4v1655461169573!5m2!1sko!skr"
              width="1320"
              height="500"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
