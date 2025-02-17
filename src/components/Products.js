import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";
import { CircularProgress, TextField, Pagination } from "@mui/material";
const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 8;
    useEffect(() => {
        setLoading(true);
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setProducts(data);
                    setFilteredProducts(data);
                    setLoading(false);
                }, 1000);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);
    useEffect(() => {
        if (searchQuery.trim() === "") {
            setFilteredProducts(products);
        } else {

            const filtered = products.filter((product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    }, [searchQuery, products]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const paginatedProducts = filteredProducts.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );
    if (loading) {
        return (
            <div >
                <CircularProgress />
            </div>
        );
    }


    return (
        <div style={{ padding: "20px" }}>
            <TextField
                label="Search Products"
                variant="outlined"
                value={searchQuery}
                onChange={handleSearchChange}
                style={{ marginBottom: "10px", float: "right" }}
            />
            <Grid container spacing={1}  >
                {paginatedProducts.length > 0 ? (
                    paginatedProducts.map((product) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} sx={{ padding: "10px!important" }}>
                            <ProductCard
                                product={product} />
                        </Grid>
                    ))) : (
                    <p>No products found</p>
                )
                }
            </Grid>
            {filteredProducts.length > itemsPerPage && (
            <Pagination
                count={Math.ceil(filteredProducts.length / itemsPerPage)}
                page={page}
                onChange={handlePageChange}
                color="primary"
                style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
            />
            )}
        </div>
    );
};

export default Products;
