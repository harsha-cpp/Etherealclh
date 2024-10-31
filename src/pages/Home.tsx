import { ArrowRight, Snowflake } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import { Product } from '../types';

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Winter Cashmere Coat',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80',
    category: 'Outerwear',
    description: 'Luxurious cashmere coat for the coldest winter days'
  },
  {
    id: '2',
    name: 'Wool Blend Sweater',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1624456735729-03594a40c5fb?auto=format&fit=crop&q=80',
    category: 'Knitwear',
    description: 'Cozy wool blend sweater perfect for layering'
  },
  {
    id: '3',
    name: 'Winter Boots',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80',
    category: 'Footwear',
    description: 'Waterproof winter boots with faux fur lining'
  },
  {
    id: '4',
    name: 'Cashmere Scarf',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1584613617310-a5c15828b371?auto=format&fit=crop&q=80',
    category: 'Accessories',
    description: 'Soft cashmere scarf in winter white'
  }
];

export default function Home() {
  const handleAddToCart = (product: Product) => {
    // Cart logic will be implemented later
    console.log('Added to cart:', product);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[90vh]">
        <img
          src="https://images.unsplash.com/photo-1418985991508-e47386d96a71?auto=format&fit=crop&q=80"
          alt="Winter Scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-6">
            <div className="flex justify-center">
              <Snowflake className="h-12 w-12 animate-spin-slow" />
            </div>
            <h1 className="text-5xl md:text-7xl font-lexend font-light">Winter Collection</h1>
            <p className="text-lg md:text-xl font-lexend font-light max-w-xl mx-auto">
              Discover our curated selection of luxury winter essentials, designed for both style and warmth
            </p>
            <Link
              to="/collections"
              className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-colors font-lexend text-sm"
            >
              Explore Collection <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-lexend font-light mb-4">Winter Essentials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Embrace the season with our carefully curated selection of winter essentials,
            crafted from the finest materials for unparalleled comfort and style.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>

      {/* Collection Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80"
              alt="ETHEREAL STITCH Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Link
                to="/collections/women"
                className="px-8 py-4 bg-white/90 hover:bg-white text-black font-lexend text-sm transition-colors"
              >
                ETHEREAL STITCH
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&q=80"
              alt="Men's Winter Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Link
                to="/collections/men"
                className="px-8 py-4 bg-white/90 hover:bg-white text-black font-lexend text-sm transition-colors"
              >
                Men's Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}