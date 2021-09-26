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
                            Letras com flores preservadas (Tamanho Grande) para pousar
                        </Text>
                    </ProductSingleWrapper>
                    <ProductSingleWrapper>
                        <Square imgBg={imagesOption[1]} />
                        <Text>
                            Letras com flores preservadas (Tamanho pequeno) para pendurar
                        </Text>
                    </ProductSingleWrapper>
                    <ProductSingleWrapper>
                        <Square imgBg={imagesOption[2]} />
                        <Text>
                            Moldura com letra de flores preservadas
                        </Text>
                    </ProductSingleWrapper>
                    <ProductSingleWrapper>
                        <Square imgBg={imagesOption[3]} />
                        <Text>
                            Moldura com imagem em flores preservadas + texto
                        </Text>
                    </ProductSingleWrapper>
                </ProductsWrapper>
            </ProductsContainer>

        </>
    );
};

export default Products;
