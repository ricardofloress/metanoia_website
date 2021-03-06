import React from 'react';
import Link from "next/link";
import { GalleryColumn, GalleryContainer, GallerySquare, GalleryWrapper, GalleryTitleContainer, GalleryTitle } from "./GalleryElements";

const Gallery = () => {
    return (
        <>
            <GalleryTitleContainer>
                <GalleryTitle>
                    TRABALHOS
            </GalleryTitle>
            </GalleryTitleContainer>
            <GalleryContainer>
                <GalleryWrapper>
                    <GalleryColumn>
                        <Link href="/">
                            <GallerySquare imgBg="/images/letterR.png" />
                        </Link>
                        <Link href="/">
                            <GallerySquare imgBg="/images/letterC.png" />
                        </Link>
                        <Link href="/">
                            <GallerySquare imgBg="/images/letter.png" />
                        </Link>
                    </GalleryColumn>
                    <GalleryColumn>
                        <Link href="/">
                            <GallerySquare imgBg="/images/letter.png" />
                        </Link>
                        <Link href="/">
                            <GallerySquare imgBg="/images/letter3.png" />
                        </Link>
                        <Link href="/">
                            <GallerySquare imgBg="/images/letter2.png" />
                        </Link>
                    </GalleryColumn>
                    <GalleryColumn>
                        <Link href="/">
                            <GallerySquare imgBg="/images/letterL.png" />
                        </Link>
                        <Link href="/">
                            <GallerySquare imgBg="/images/letterR.png" />
                        </Link>
                        <Link href="/">
                            <GallerySquare imgBg="/images/letter.png" />
                        </Link>
                    </GalleryColumn>
                </GalleryWrapper>
            </GalleryContainer>
        </>
    );
};

export default Gallery;
