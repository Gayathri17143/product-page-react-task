


import { Star, StarBorder, StarHalf } from "@mui/icons-material";

import "./Product.css";

import {
    Card,
    CardContent,
    CardMedia,
    Container,
    Typography,

} from "@mui/material";

const ProductCard = ({ product }) => {




    const renderRating = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStars = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;

        return (
            <>
                {Array(fullStars)
                    .fill()
                    .map((_, index) => (
                        <Star key={index} style={{ color: "#FFD700" }} />
                    ))}
                {halfStars === 1 && <StarHalf style={{ color: "#FFD700" }} />}
                {Array(emptyStars)
                    .fill()
                    .map((_, index) => (
                        <StarBorder key={index} style={{ color: "#FFD700" }} />
                    ))}
            </>
        );
    };
    return (
        <Container sx={{paddingTop:"5%", }}>
            <Card sx={{ padding: "3%", }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.title}
                    sx={{ objectFit: "contain" }}
                />
                <CardContent>
                    <Typography variant="h5" className="title" gutterBottom>
                        {product.title}
                    </Typography>
                    <Typography variant="p" className="product-name" gutterBottom>
                        {product.category}
                    </Typography>
                    <Typography className="product-price"

                    >
                        ₹{product.price}
                    </Typography>
                    <Typography className="rating">
                        {renderRating(product.rating.rate)}
                    </Typography>
                </CardContent>

            </Card>
        </Container>
    );
};

export default ProductCard;
