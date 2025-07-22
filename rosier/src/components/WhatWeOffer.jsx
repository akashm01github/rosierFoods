import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WhatWeOffer = () => {
    const products = [
        {
            id: 1,
            title: 'A2 Ghee',
            description:
                'A2 Gir Cow Ghee is made from fresh, free-grazed Gir cow milk. The milk is boiled, cooled, and cultured naturally overnight to form curd.',
            image:
                'https://www.rosierfoods.com/cdn/shop/files/Untitled_Artwork64.jpg?v=1749285565&width=713',
        },
        {
            id: 2,
            title: 'Better Bars Berry & Coconut',
            description:
                'Packed with 12g protein, tropical coconut, tangy berries, and sweet dates—this guilt-free snack is gluten-free, preservative-free, and perfect for your active lifestyle.',
            image:
                'https://www.rosierfoods.com/cdn/shop/files/7_Berry_Coconut.jpg?v=1743769781&width=713',
        },
        {
            id: 3,
            title: 'Nut Butter Dark Chocolate',
            description:
                'Rich, creamy nut butter with almonds, peanuts, cashews, dark chocolate, honey, and a hint of pistachio. Pure indulgence in every spoonful.',
            image:
                'https://www.rosierfoods.com/cdn/shop/files/dark_choco_front_65d098de-da74-46fe-8524-d15caa20a2bf.jpg?v=1743062114&width=713',
        },
        {
            id: 4,
            title: 'Wild Forest Honey',
            description:
                `Wild Flower Honey is a 100% natural, multi-floral honey collected from Himalayan forest bees. Rich in vitamins, minerals, and amino acids for better health.
Ayurvedic | No Added Sugar`,
            image:
                'https://www.rosierfoods.com/cdn/shop/files/honey500front.jpg?v=1743060344&width=713',
        },
    ];

    useEffect(() => {
        // Background Parallax Effect
        gsap.to('.section-bg', {
            backgroundPosition: '50% 100%',
            ease: 'none',
            scrollTrigger: {
                trigger: '.section-bg',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        });

        // Header Animation (Fade + Scale)
        gsap.fromTo(
            '.section-header',
            { opacity: 0, scale: 0.9, y: -50 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1.2,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: '.section-header',
                    start: 'top 85%',
                },
            }
        );

        // Product Cards Animation (Staggered with Parallax Image)
        gsap.utils.toArray('.product-card').forEach((card, index) => {
            // Card Animation
            gsap.fromTo(
                card,
                { opacity: 0, y: 80, rotation: index % 2 === 0 ? -5 : 5 },
                {
                    opacity: 1,
                    y: 0,
                    rotation: 0,
                    duration: 1,
                    ease: 'elastic.out(1, 0.7)',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                    },
                    delay: index * 0.15,
                }
            );

            // Image Parallax Effect
            const image = card.querySelector('.product-image');
            gsap.fromTo(
                image,
                { y: -20 },
                {
                    y: 20,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    },
                }
            );

            // Title and Description Animation
            gsap.fromTo(
                card.querySelector('.product-title'),
                { opacity: 0, x: -30 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                    },
                    delay: index * 0.15 + 0.2,
                }
            );
            gsap.fromTo(
                card.querySelector('.product-description'),
                { opacity: 0, x: 30 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                    },
                    delay: index * 0.15 + 0.3,
                }
            );

            // Hover Animation for Image and Card
            card.addEventListener('mouseenter', () => {
                gsap.to(image, {
                    scale: 1.15,
                    duration: 0.4,
                    ease: 'power3.out',
                });
                gsap.to(card, {
                    y: -10,
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
                    duration: 0.4,
                    ease: 'power3.out',
                });
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(image, {
                    scale: 1,
                    duration: 0.4,
                    ease: 'power3.out',
                });
                gsap.to(card, {
                    y: 0,
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    duration: 0.4,
                    ease: 'power3.out',
                });
            });
        });

        // CTA Button Animation (Fade + Pulse on Hover)
        gsap.fromTo(
            '.cta-button',
            { opacity: 0, scale: 0.7 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'back.out(2)',
                scrollTrigger: {
                    trigger: '.cta-button',
                    start: 'top 90%',
                },
            }
        );

        // CTA Button Hover Animation (Pulsing Glow)
        const ctaButton = document.querySelector('.cta-button');
        ctaButton.addEventListener('mouseenter', () => {
            gsap.to(ctaButton, {
                scale: 1.1,
                boxShadow: '0 0 20px rgba(234, 179, 8, 0.7)',
                duration: 0.5,
                ease: 'power3.out',
                repeat: -1,
                yoyo: true,
            });
        });
        ctaButton.addEventListener('mouseleave', () => {
            gsap.to(ctaButton, {
                scale: 1,
                boxShadow: '0 0 0 rgba(234, 179, 8, 0)',
                duration: 0.5,
                ease: 'power3.out',
                clearProps: 'all',
            });
        });

        // Cleanup ScrollTriggers on component unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section className="py-16 px-4 bg-gray-50 section-bg relative overflow-hidden">
            {/* Subtle Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/20 to-white pointer-events-none" />
            <div className="max-w-6xl mx-auto relative">
                {/* Header */}
                <div className="section-header text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Our Best Products
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our premium collection of dairy products, crafted with care
                        and sourced from the finest ingredients to bring you exceptional
                        quality and taste.
                    </p>
                </div>

                {/* Product Cards */}
                <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="product-card bg-white rounded-lg p-6 text-center shadow-md transition-shadow duration-300"
                        >
                            {/* Circular Image */}
                            <div className="mb-6 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="product-image w-40 h-40 rounded-full mx-auto object-cover border-4 border-gray-100"
                                />
                            </div>

                            {/* Product Title */}
                            <h3 className="product-title text-xl font-bold text-gray-800 mb-3">
                                {product.title}
                            </h3>

                            {/* Product Description */}
                            <p className="product-description text-gray-600 text-sm leading-relaxed">
                                {product.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call to Action Button */}
                <div className="text-center">
                    <button className="cta-button bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                        VIEW ALL PRODUCTS
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhatWeOffer;