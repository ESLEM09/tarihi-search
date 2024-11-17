import React from 'react';
import { BookOpen, Calendar, MapPin } from 'lucide-react';

interface SearchResultsProps {
  query: string;
}

const historicalEvents = [
  {
    title: 'İstanbul\'un Fethi',
    date: '29 Mayıs 1453',
    category: 'Önemli Olaylar',
    description: 'Osmanlı İmparatorluğu\'nun İstanbul\'u fethetmesi ve Bizans İmparatorluğu\'nun sonu.',
    location: 'İstanbul'
  },
  {
    title: 'Malazgirt Savaşı',
    date: '26 Ağustos 1071',
    category: 'Savaşlar',
    description: 'Büyük Selçuklu İmparatorluğu ile Bizans İmparatorluğu arasında yapılan meydan savaşı.',
    location: 'Malazgirt'
  },
  {
    title: 'Kurtuluş Savaşı',
    date: '1919-1923',
    category: 'Dönemler',
    description: 'Türk milletinin bağımsızlık mücadelesi ve modern Türkiye\'nin kuruluşu.',
    location: 'Anadolu'
  },
  {
    title: 'Çanakkale Savaşı',
    date: '1915-1916',
    category: 'Savaşlar',
    description: 'I. Dünya Savaşı sırasında Gelibolu Yarımadası\'nda gerçekleşen muharebeler.',
    location: 'Çanakkale'
  },
  {
    title: 'Cumhuriyet\'in İlanı',
    date: '29 Ekim 1923',
    category: 'Önemli Olaylar',
    description: 'Türkiye Cumhuriyeti\'nin kuruluşu ve yeni devletin ilanı.',
    location: 'Ankara'
  },
  {
    title: 'Sümerler',
    date: 'MÖ 4000-2000',
    category: 'Antik Uygarlıklar',
    description: 'Yazıyı icat eden, tekerleği geliştiren ve ilk şehir devletlerini kuran medeniyet.',
    location: 'Mezopotamya'
  },
  {
    title: 'Hitit İmparatorluğu',
    date: 'MÖ 1600-1180',
    category: 'Antik Uygarlıklar',
    description: 'Anadolu\'da kurulmuş, demir işlemeciliğinde ileri bir medeniyet.',
    location: 'Anadolu'
  },
  {
    title: 'Uygur Devleti',
    date: '744-840',
    category: 'Türk Devletleri',
    description: 'İlk yerleşik Türk devleti, matbaayı kullanan ve tarımla uğraşan medeniyet.',
    location: 'Orta Asya'
  },
  {
    title: 'Büyük İskender\'in Seferleri',
    date: 'MÖ 334-323',
    category: 'Seferler',
    description: 'Makedonya\'dan Hindistan\'a kadar uzanan büyük fetih hareketi.',
    location: 'Asya'
  },
  {
    title: 'Türk-İslam Bilim Çağı',
    date: '8-13. yüzyıl',
    category: 'Bilim',
    description: 'El-Harezmi, İbn-i Sina, Farabi gibi bilim insanlarının öncülük ettiği dönem.',
    location: 'Orta Doğu'
  },
  {
    title: 'Rönesans',
    date: '14-17. yüzyıl',
    category: 'Kültürel Dönemler',
    description: 'Avrupa\'da sanat, bilim ve kültürde yeniden doğuş dönemi.',
    location: 'Avrupa'
  },
  {
    title: 'Sanayi Devrimi',
    date: '1760-1840',
    category: 'Ekonomik Dönemler',
    description: 'Buhar gücüyle başlayan endüstriyel üretim dönemi.',
    location: 'İngiltere'
  }
];

function SearchResults({ query }: SearchResultsProps) {
  const filteredResults = historicalEvents.filter(event => 
    event.title.toLowerCase().includes(query.toLowerCase()) ||
    event.description.toLowerCase().includes(query.toLowerCase()) ||
    event.category.toLowerCase().includes(query.toLowerCase()) ||
    event.location.toLowerCase().includes(query.toLowerCase())
  );

  if (query.length === 0) {
    return null;
  }

  if (filteredResults.length === 0) {
    return (
      <div className="w-full max-w-4xl mt-12 text-center text-white">
        <p className="text-xl">Aramanızla eşleşen sonuç bulunamadı.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mt-12 space-y-6">
      {filteredResults.map((result, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:border-yellow-400/50 transition-all transform hover:-translate-y-1 cursor-pointer"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{result.title}</h3>
              <div className="flex items-center gap-4 text-gray-300 text-sm mb-3 flex-wrap">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {result.date}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  {result.category}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {result.location}
                </span>
              </div>
              <p className="text-gray-200">{result.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;