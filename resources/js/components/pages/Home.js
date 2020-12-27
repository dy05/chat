import React from 'react'
import Head from '../common/Head'

function Home() {
    const categories = [
        'je taime encore',
        'Tu dis que cest fini',
        'alors que ca commence',
        'ou me paniquer',
        'tu me stressed',
        'Je vais mourir oh',
        'Je taime tres fort',
        'cheri ne me dis pas',
    ]

    const products = [
        {
            name: "women's wool Runner Mizzles",
            description: "Our weather-ready sneaker made with merino wool and Puddle Guard",
            styles: [
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
            ]
        },
        {
            name: "women's wool Runner Mizzles",
            description: "Our weather-ready sneaker made with merino wool and Puddle Guard",
            styles: [
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
            ]
        },
        {
            name: "women's wool Runner Mizzles",
            description: "Our weather-ready sneaker made with merino wool and Puddle Guard",
            styles: [
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
            ]
        },
        {
            name: "women's wool Runner Mizzles",
            description: "Our weather-ready sneaker made with merino wool and Puddle Guard",
            styles: [
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
                {
                    name: "Natural Gray (Cream Sole",
                    price: '$215'
                },
            ]
        },
    ]
    return (
        <div>
            <Head>
                <title>Rebuilding Allbirds</title>
            </Head>
            <div className="px-4 py-1 bg-green-700 text-white">
                <p className="text-xs font-medium text-center">
                    We're raising prices on all products by $1 today in support of the planet.{' '}
                    <a href="#" className="underline">Learn More.</a>
                </p>
            </div>
            <header className="relative px-5 py-3 flex items-center justify-between bg-white">
                <div className="absolute inset-0 shadow-lg opacity-50"></div>
                <div className="flex">
                    <button className="h-8 w-8">
                        <svg
                            className="h-8 w-8"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
                <div className="flex">
                    <span className="h-8">
                        Logo
                    </span>
                </div>
                <div className="flex">
                    <button className="h-8 w-8">
                        <svg
                            className="h-8 w-8"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                    </button>
                </div>
            </header>
            <main>
                <div>
                    <div className="flex justify-between px-6 pt-4 pb-3">
                        <div>
                            <div className="text-xs font-medium text-gray-900 space-x-1">
                                <a href="#" className="underline">Home</a>
                                <span>/</span>
                            </div>
                            <div className="text-lg font-bold text-gray-900">
                                Women's shoes
                            </div>
                        </div>
                        <div>
                            <button className="h-6 w-6">
                                <svg
                                    className="transform rotate-90"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1}
                                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-100 overflow-x-auto scrollbars-hidden">
                        <div className="px-6 text-sm flex space-x-5">
                            {categories.map((category, index) => (
                                <a href="#" className="text-gray-800 capitalize whitespace-no-wrap py-3 pr-2" key={index}>{category}</a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="py-8">
                    <div className="flex space-x-4 bg-green-100 bg-opacity-20 px-6 py-3">
                        <div>
                            <svg
                                className="transform -rotate-12 h-16 w-16 text-gray-900"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={0.5}
                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                />
                            </svg>
                        </div>
                        <div>
                            <div className="flex space-x-2">
                                <h2 className="text-sm font-semibold text-gray-900">
                                    Pay It to the Planet
                                </h2>
                                <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <p className="mt-1 text-sm text-gray-900 text-opacity-90">
                                Every Black Friday purchase support Fridays For Future
                            </p>
                        </div>
                    </div>
                    <div className="py-12 px-6">
                        {products.map((product, index) => (
                            <div>
                                <h2 className="text-base font-semibold">{product.name}</h2>
                                <p className="text-sm text-gray-800">{product.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;

