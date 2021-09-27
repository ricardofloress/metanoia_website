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
                            Letras com flores preservadas <br /> Grande
                        </Text>
                    </ProductSingleWrapper>
                    <ProductSingleWrapper>
                        <Square imgBg={imagesOption[1]} />
                        <Text>
                            Letras com flores preservadas <br /> Pequena
                        </Text>
                    </ProductSingleWrapper>
                    <ProductSingleWrapper>
                        <Square imgBg={imagesOption[2]} />
                        <Text>
                            Letra de flores preservadas em moldura
                        </Text>
                    </ProductSingleWrapper>
                    <ProductSingleWrapper>
                        <Square imgBg={imagesOption[3]} />
                        <Text>
                            Cartão postal com flores preservadas
                        </Text>
                    </ProductSingleWrapper>
                </ProductsWrapper>
            </ProductsContainer>

        </>
    );
};

export default Products;
