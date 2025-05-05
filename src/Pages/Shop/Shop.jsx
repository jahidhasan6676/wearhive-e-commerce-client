import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ShopProductCard from "./ShopProductCard";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import { useState } from "react";
import {
    FiFilter,
    FiX,
    FiChevronDown,
    FiSearch,
} from "react-icons/fi";
import Cover from "../Shared/Cover";

const Shop = () => {
    const axiosPublic = useAxiosPublic();

    const [activeCategory, setActiveCategory] = useState("all");
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [showFilters, setShowFilters] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [sortOption, setSortOption] = useState("featured");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 16;

    const { data = {}, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await axiosPublic.get("/allProduct");
            return res?.data;
        },
    });

    console.log("products:", data)
    const allProducts = data?.products || [];
    const total = data?.total || 0;
    //console.log("all products",allProducts)

    // Filter, Search, Sort
    const filteredProducts = allProducts
        .filter((product) => {
            const matchesCategory =
                activeCategory === "all" || product?.manCategory === activeCategory;
            const matchesPrice =
                product?.price >= priceRange[0] && product?.price <= priceRange[1];
            const matchesSearch = product?.productName
                .toLowerCase()
                .includes(searchText.toLowerCase());
            return matchesCategory && matchesPrice && matchesSearch;
        })
        .sort((a, b) => {
            if (sortOption === "price-low") return a.price - b.price;
            if (sortOption === "price-high") return b.price - a.price;
            return 0;
        });

    console.log("filterProduct", filteredProducts)

    // Pagination
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginatedProducts = filteredProducts?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    if (isLoading) return <LoadingSpinner />;
    if (error) return <p>Failed to load products!</p>;

    return (
        <div className="w-full">
            <div className="pb-20">
                <Cover />
            </div>
            <div className="w-11/12 mx-auto pb-20">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50"
                        >
                            {showFilters ? <FiX size={18} /> : <FiFilter size={18} />}
                            <span>{showFilters ? "Hide Filters" : "Filters"}</span>
                        </button>

                        <div className="relative">
                            <select
                                onChange={(e) => setSortOption(e.target.value)}
                                className="appearance-none px-4 py-2 pr-8 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:border-gray-400">
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                            </select>
                            <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                        <div className="relative w-full md:">
                            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:border-gray-400"
                            />
                        </div>

                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
                            <span className="text-gray-600">Showing</span>
                            <span className="font-medium">{filteredProducts?.length}</span>
                            <span className="text-gray-600">of</span>
                            <span className="font-medium">{total}</span>
                            <span className="text-gray-600">products</span>
                        </div>
                    </div>
                </div>

                {/* Filters and Grid */}
                <div className="flex flex-col md:flex-row gap-8">
                    {showFilters && (
                        <div className="w-full md:w-64 bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-fit sticky top-4 z-40">
                            <h3 className="font-bold text-lg mb-6">Filters</h3>

                            {/* Category Filter */}
                            <div className="mb-6">
                                <h4 className="font-medium mb-3">Category</h4>
                                <div className="space-y-2">
                                    {["all", "Men", "Women", "Kids"].map((category) => (
                                        <div key={category} className="flex items-center">
                                            <input
                                                type="radio"
                                                id={`category-${category}`}
                                                name="category"
                                                checked={activeCategory === category}
                                                onChange={() => {
                                                    setActiveCategory(category);
                                                    setCurrentPage(1);
                                                }}
                                                className="h-4 w-4 text-primary"
                                            />
                                            <label htmlFor={`category-${category}`} className="ml-2 capitalize">
                                                {category === "all"
                                                    ? "All Categories"
                                                    : `${category}'s Clothing`}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Price Filter */}
                            <div className="mb-6">
                                <h4 className="font-medium mb-3">Price Range</h4>
                                <div className="mb-2 flex justify-between text-sm text-gray-600">
                                    <span>${priceRange[0]}</span>
                                    <span>${priceRange[1]}</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    value={priceRange[1]}
                                    onChange={(e) =>
                                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                                    }
                                    className="w-full"
                                />
                                <div className="flex justify-between mt-4">
                                    <input
                                        type="number"
                                        min="0"
                                        max="1000"
                                        value={priceRange[0]}
                                        onChange={(e) =>
                                            setPriceRange([parseInt(e.target.value), priceRange[1]])
                                        }
                                        className="w-24 px-2 py-1 border border-gray-300 rounded text-sm"
                                    />
                                    <input
                                        type="number"
                                        min="0"
                                        max="1000"
                                        value={priceRange[1]}
                                        onChange={(e) =>
                                            setPriceRange([priceRange[0], parseInt(e.target.value)])
                                        }
                                        className="w-24 px-2 py-1 border border-gray-300 rounded text-sm"
                                    />
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    setActiveCategory("all");
                                    setPriceRange([0, 1000]);
                                    setSearchText("");
                                }}
                                className="w-full py-2 text-sm font-medium text-primary border border-primary rounded hover:bg-primary hover:text-white"
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}

                    {/* Product Grid */}
                    <div className={`${showFilters ? "md:w-[calc(100%-288px)]" : "w-full"}`}>
                        {paginatedProducts.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {paginatedProducts.map((product) => (
                                        <ShopProductCard key={product._id} product={product} />
                                    ))}
                                </div>

                                {/* Pagination */}
                                <div className="flex justify-center mt-10 gap-2 flex-wrap">
                                    <button
                                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                        className={`px-4 py-2 rounded border ${currentPage === 1
                                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                            : "bg-white text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        Prev
                                    </button>

                                    {Array.from({ length: totalPages }).map((_, idx) => {
                                        const page = idx + 1;
                                        const isActive = currentPage === page;
                                        return (
                                            <button
                                                key={page}
                                                onClick={() => setCurrentPage(page)}
                                                className={`px-4 py-2 rounded border ${isActive
                                                    ? "bg-primary text-white"
                                                    : "bg-white text-gray-600 hover:bg-gray-100"
                                                    }`}
                                            >
                                                {page}
                                            </button>
                                        );
                                    })}

                                    <button
                                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className={`px-4 py-2 rounded border ${currentPage === totalPages
                                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                            : "bg-white text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        Next
                                    </button>
                                </div>

                            </>
                        ) : (
                            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                                <h3 className="text-xl font-medium text-gray-700 mb-2">
                                    No products found
                                </h3>
                                <p className="text-gray-500 mb-4">
                                    Try adjusting your filters to find what you're looking for.
                                </p>
                                <button
                                    onClick={() => {
                                        setActiveCategory("all");
                                        setPriceRange([0, 1000]);
                                        setSearchText("");
                                        setCurrentPage(1);
                                    }}
                                    className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
