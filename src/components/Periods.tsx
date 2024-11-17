import React from 'react';
import { Calendar } from 'lucide-react';

const periods = [
  {
    era: 'Antik Çağ',
    timespan: 'MÖ 3000 - MS 476',
    events: [
      'Sümer Uygarlığı',
      'Mısır Medeniyeti',
      'Antik Yunan',
      'Roma İmparatorluğu'
    ],
    color: 'from-purple-500 to-blue-500'
  },
  {
    era: 'Orta Çağ',
    timespan: '476 - 1453',
    events: [
      'Bizans İmparatorluğu',
      'İslam\'ın Doğuşu',
      'Haçlı Seferleri',
      'Viking Çağı'
    ],
    color: 'from-blue-500 to-green-500'
  },
  {
    era: 'Yeni Çağ',
    timespan: '1453 - 1789',
    events: [
      'İstanbul\'un Fethi',
      'Coğrafi Keşifler',
      'Rönesans',
      'Reform'
    ],
    color: 'from-green-500 to-yellow-500'
  },
  {
    era: 'Yakın Çağ',
    timespan: '1789 - Günümüz',
    events: [
      'Fransız Devrimi',
      'Sanayi Devrimi',
      'Dünya Savaşları',
      'Uzay Çağı'
    ],
    color: 'from-yellow-500 to-red-500'
  }
];

function Periods() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-white mb-8">Tarih Dönemleri</h2>
      <div className="space-y-6">
        {periods.map((period, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden cursor-pointer group"
          >
            <div className={`h-2 bg-gradient-to-r ${period.color}`} />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{period.era}</h3>
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{period.timespan}</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {period.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="bg-white/5 rounded p-3 hover:bg-white/10 transition-colors"
                  >
                    <p className="text-gray-200">{event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Periods;