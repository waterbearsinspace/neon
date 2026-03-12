import { useState } from "react";
import heroSectionData from "../../data/heroSectionData";

export function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slide = heroSectionData?.[currentSlide];
    const previousSlideData =
        heroSectionData?.[currentSlide - 1] ||
        heroSectionData?.[heroSectionData.length - 1];
    const nextSlideData =
        heroSectionData?.[currentSlide + 1] || heroSectionData?.[0];

    const slides = [previousSlideData, slide, nextSlideData];

    console.log(slides);

    return (
        <>
            <section className="hero-section">
                <nav className="navbar sticky">
                    <section className="sticky-left">
                        <div className="placeholder-image" />
                        <span className="text">Lorem Ipsum</span>
                    </section>
                    <span className="text">→</span>
                </nav>
                <section className="hero-container">
                    {slides.map((slide, index) => (
                        <section className="hero-middle" key={index}>
                            <section className="hero-content">
                                {slide?.theaters && (
                                    <p className="in-theaters">In Theaters</p>
                                )}
                                <h1 className="title">{slide?.title}</h1>
                                <p>{slide?.year}</p>
                            </section>
                        </section>
                    ))}
                </section>
            </section>
        </>
    );
}
