import React, { useState } from 'react';
import { Search, Clock, BookOpen, MapPin } from 'lucide-react';
import SearchResults from './components/SearchResults';
import Collection from './components/Collection';
import Periods from './components/Periods';
import HistoricalBackground from './components/HistoricalBackground';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentView, setCurrentView] = useState<'search' | 'collection' | 'periods'>('search');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentView('search');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'collection':
        return <Collection />;
      case 'periods':
        return <Periods />;
      default:
        return (
          <>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
              Tarihi Keşfet
            </h1>
            <p className="text-xl text-gray-200 mb-12 text-center max-w-2xl">
              Geçmişin derinliklerinde yolculuğa çıkın. Tarihi olayları, kişileri ve dönemleri keşfedin.
            </p>
            
            <form onSubmit={handleSearch} className="w-full max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tarihi olay, kişi veya dönem ara..."
                  className="w-full px-6 py-4 pr-12 rounded-full bg-white/10 backdrop-blur-md text-white placeholder-gray-300 border-2 border-white/20 focus:border-yellow-400 focus:outline-none text-lg"
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-yellow-400 transition-colors"
                >
                  <Search className="w-6 h-6" />
                </button>
              </div>
            </form>

            <SearchResults query={searchQuery} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen relative">
      <HistoricalBackground />
      
      <div className="relative min-h-screen flex flex-col items-center">
        <header className="w-full p-6 flex justify-between items-center text-white">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setCurrentView('search')}
          >
            <Clock className="w-6 h-6" />
            <span className="text-xl font-semibold">TarihArama</span>
          </div>
          <nav className="flex gap-6">
            <button
              onClick={() => setCurrentView('collection')}
              className={`flex items-center gap-2 transition-colors ${
                currentView === 'collection' ? 'text-yellow-400' : 'text-white hover:text-yellow-300'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span>Koleksiyon</span>
            </button>
            <button
              onClick={() => setCurrentView('periods')}
              className={`flex items-center gap-2 transition-colors ${
                currentView === 'periods' ? 'text-yellow-400' : 'text-white hover:text-yellow-300'
              }`}
            >
              <MapPin className="w-5 h-5" />
              <span>Dönemler</span>
            </button>
          </nav>
        </header>

        <main className="flex-1 w-full max-w-6xl px-4 flex flex-col items-center justify-center -mt-20">
          {renderContent()}
        </main>

        <footer className="w-full text-center p-6 text-gray-300">
          <p>© 2024 TarihArama. Tüm hakları saklıdır.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;