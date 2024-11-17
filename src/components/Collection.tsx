import React from 'react';
import { BookOpen, Calendar, MapPin } from 'lucide-react';

const collections = [
  {
    title: 'Antik Uygarlıklar',
    description: 'İnsanlık tarihinin en eski medeniyetlerini keşfedin.',
    image: 'https://images.unsplash.com/photo-1608425234255-96a25a6c0f68?auto=format&fit=crop&q=80',
    count: 12
  },
  {
    title: 'Türk Tarihi',
    description: 'Orta Asya\'dan Anadolu\'ya Türk tarihinin izinde.',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80',
    count: 24
  },
  {
    title: 'Dünya Savaşları',
    description: 'İnsanlık tarihini değiştiren büyük savaşlar.',
    image: 'https://images.unsplash.com/photo-1580841129862-bc2afd2c7df1?auto=format&fit=crop&q=80',
    count: 8
  },
  {
    title: 'Bilim Tarihi',
    description: 'Bilimsel keşifler ve mucitler.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80',
    count: 15
  }
];

function Collection() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-white mb-8">Tarihi Koleksiyonlar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {collections.map((collection, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10" />
            <img
              src={collection.image}
              alt={collection.title}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="text-xl font-semibold text-white mb-2">{collection.title}</h3>
              <p className="text-gray-300 mb-3">{collection.description}</p>
              <div className="flex items-center text-yellow-400">
                <BookOpen className="w-4 h-4 mr-2" />
                <span>{collection.count} Olay</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;