import { ProductsContainer, ProductSingleWrapper, ProductsWrapper, Square, Text } from './ProductsElements';
import React, { useState, useEffect } from 'react';

const Products = () => {

    const [imagesOption, setImagesOption] = useState(["/images/letterR.png", "/images/letterC.png", "/images/letterL.png", "/images/letter.png"]);

    return (
        <>
            <ProductsContainer>
                <ProductsWrapper>
                    <ProductSingleWrapper>
                        <Square imgBg={imagesOption[0]} />
                        <Text>
                            CKING A UNIQUE COLOR PALETTE FOR YOUR BRAND
                        </Text>
                    </ProductSingleWrapper>
                    <ProductSingleWrapper>
                        <Square imgBg={imagesOption[1]} />
                        <Text>
                            CKING A UNIQUE COLOR PALETTE FOR YOUR BRAND
                        </Text>
                    </ProductSingleWrapper>
                    <ProductSingleWrapper>
                        <Square imgBg={imagesOption[2]} />
                        <Text>
                            CKING A UNIQUE COLOR PALETTE FOR YOUR BRAND
                        </Text>
                    </ProductSingleWrapper>
                    <ProductSingleWrapper>
                        <Square imgBg={imagesOption[3]} />
                        <Text>
                            CKING A UNIQUE COLOR PALETTE FOR YOUR BRAND
                        </Text>
                    </ProductSingleWrapper>
                </ProductsWrapper>
            </ProductsContainer>

        </>
    );
};

export default Products;
