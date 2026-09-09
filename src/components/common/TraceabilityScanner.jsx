import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BATCH_DATA } from '../../data/traceabilityData';
import { Search, ShieldCheck, MapPin, Calendar, Clock, Award, CheckCircle, ArrowRight, UserCheck, Activity } from 'lucide-react';

export function TraceabilityScanner() {
  const { searchedBatch, setSearchedBatch, showToast } = useApp();
  const [inputCode, setInputCode] = useState(searchedBatch);
  const [activeTab, setActiveTab] = useState('timeline'); // 'timeline', 'lab', 'farmer'

  const currentBatch = BATCH_DATA[searchedBatch] || BATCH_DATA["#BIO-HARVEST-8942"];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const formatted = inputCode.trim().toUpperCase();
    if (BATCH_DATA[formatted]) {
      setSearchedBatch(formatted);
      showToast(`Verified Batch ${formatted} loaded!`);
    } else {
      showToast(`Batch code "${inputCode}" not found. Try sample codes below.`);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-10 shadow-xl border border-[#EFEBE4]">
      {/* Header & Search Input */}
      <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4E8D1] text-[#4E5D36] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-[#4E5D36] shrink-0" />
          <span>100% Transparent Farm-to-Fork Batch Verifier</span>
        </div>
        <h2 className="font-serif-display text-2xl sm:text-4xl text-[#1C160F] font-bold">
          Enter Your Product Batch Code
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
          Every Harvestora package carries a unique QR batch code stamped at harvest. Verify farm GPS coordinates, pesticide lab reports, and exact harvest timestamps.
        </p>

        {/* Search Bar Form */}
        <form onSubmit={handleSearchSubmit} className="relative max-w-xl mx-auto pt-2">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3.5 sm:left-4 text-gray-400" />
            <input
              type="text"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              placeholder="e.g. #BIO-HARVEST-8942"
              className="w-full pl-10 sm:pl-12 pr-28 sm:pr-36 py-3 sm:py-3.5 bg-[#FAF7F2] border-2 border-[#D4A359]/40 rounded-full font-mono text-xs sm:text-sm uppercase text-[#1C160F] focus:outline-none focus:border-[#4E5D36] transition shadow-inner"
            />
            <button
              type="submit"
              className="absolute right-1.5 px-4 sm:px-6 py-2 bg-[#4E5D36] hover:bg-[#3B4729] text-white text-[11px] sm:text-xs font-bold rounded-full transition flex items-center gap-1 shadow-md"
            >
              <span>Verify</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>

        {/* Sample Pills */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 pt-1 text-xs">
          <span className="text-stone-500 font-medium text-[11px]">Try sample batch codes:</span>
          {Object.keys(BATCH_DATA).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => {
                setInputCode(code);
                setSearchedBatch(code);
                showToast(`Loaded ${code}`);
              }}
              className={`px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full font-mono text-[10px] sm:text-[11px] transition ${
                searchedBatch === code
                  ? 'bg-[#1C160F] text-[#F4E8D1] font-bold shadow-xs'
                  : 'bg-[#FAF7F2] text-stone-700 hover:bg-[#EFEBE4] border border-stone-200'
              }`}
            >
              {code}
            </button>
          ))}
        </div>
      </div>

      {/* Verification Card Results */}
      {currentBatch && (
        <div className="bg-[#FAF7F2] rounded-2xl p-4 sm:p-8 border border-[#EFEBE4] space-y-4 sm:space-y-6">
          {/* Top Banner Status */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 bg-[#1C160F] text-white rounded-xl border border-[#D4A359]/30">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#4E5D36] flex items-center justify-center text-white flex-shrink-0">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#F4E8D1]" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] sm:text-xs text-[#D4A359]">
                  <span>BATCH: {currentBatch.batchCode}</span>
                  <span className="bg-[#4E5D36] text-white text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full uppercase font-bold">Verified Organic</span>
                </div>
                <h3 className="font-serif-display text-lg sm:text-xl text-[#F4E8D1] font-bold">{currentBatch.productName}</h3>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-300">
              <div className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-lg text-[11px]">
                <Calendar className="w-3.5 h-3.5 text-[#D4A359]" />
                <span>{currentBatch.harvestDate}</span>
              </div>
              <div className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-lg text-[11px]">
                <Clock className="w-3.5 h-3.5 text-[#D4A359]" />
                <span>{currentBatch.harvestTime}</span>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid - 2x2 on Mobile 360px */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
            <div className="p-3 sm:p-4 bg-white rounded-xl border border-[#EFEBE4] shadow-xs">
              <div className="text-[10px] sm:text-xs text-stone-500 font-medium truncate">Lab Test Status</div>
              <div className="font-bold text-xs sm:text-sm text-[#4E5D36] mt-0.5 flex items-center gap-1 truncate">
                <Award className="w-3.5 h-3.5 text-[#4E5D36] shrink-0" />
                <span className="truncate">0.00 ppm</span>
              </div>
            </div>

            <div className="p-3 sm:p-4 bg-white rounded-xl border border-[#EFEBE4] shadow-xs">
              <div className="text-[10px] sm:text-xs text-stone-500 font-medium truncate">Farm Origin & GPS</div>
              <div className="font-bold text-xs sm:text-sm text-[#1C160F] mt-0.5 flex items-center gap-1 truncate">
                <MapPin className="w-3.5 h-3.5 text-[#B85C38] shrink-0" />
                <span className="truncate">{currentBatch.farmName}</span>
              </div>
            </div>

            <div className="p-3 sm:p-4 bg-white rounded-xl border border-[#EFEBE4] shadow-xs">
              <div className="text-[10px] sm:text-xs text-stone-500 font-medium truncate">Primary Grower</div>
              <div className="font-bold text-xs sm:text-sm text-[#1C160F] mt-0.5 flex items-center gap-1 truncate">
                <UserCheck className="w-3.5 h-3.5 text-[#4E5D36] shrink-0" />
                <span className="truncate">{currentBatch.farmerName}</span>
              </div>
            </div>

            <div className="p-3 sm:p-4 bg-white rounded-xl border border-[#EFEBE4] shadow-xs">
              <div className="text-[10px] sm:text-xs text-stone-500 font-medium truncate">Soil Health Index</div>
              <div className="font-bold text-xs sm:text-sm text-[#1C160F] mt-0.5 flex items-center gap-1 truncate">
                <Activity className="w-3.5 h-3.5 text-[#D4A359] shrink-0" />
                <span className="truncate">{currentBatch.soilHealth.split('|')[0]}</span>
              </div>
            </div>
          </div>

          {/* Tab Navigation - Responsive Horizontal Scrollable / Compact Mobile */}
          <div className="flex overflow-x-auto no-scrollbar border-b border-[#EFEBE4] gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 text-xs font-bold transition border-b-2 whitespace-nowrap shrink-0 ${
                activeTab === 'timeline'
                  ? 'border-[#4E5D36] text-[#4E5D36]'
                  : 'border-transparent text-stone-500 hover:text-[#1C160F]'
              }`}
            >
              <span className="hidden sm:inline">Harvest & Transit Timeline</span>
              <span className="sm:hidden">🌱 Timeline</span>
            </button>
            <button
              onClick={() => setActiveTab('farmer')}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 text-xs font-bold transition border-b-2 whitespace-nowrap shrink-0 ${
                activeTab === 'farmer'
                  ? 'border-[#4E5D36] text-[#4E5D36]'
                  : 'border-transparent text-stone-500 hover:text-[#1C160F]'
              }`}
            >
              <span className="hidden sm:inline">Farmer & Farm Story</span>
              <span className="sm:hidden">👨‍🌾 Farmer Story</span>
            </button>
            <button
              onClick={() => setActiveTab('lab')}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 text-xs font-bold transition border-b-2 whitespace-nowrap shrink-0 ${
                activeTab === 'lab'
                  ? 'border-[#4E5D36] text-[#4E5D36]'
                  : 'border-transparent text-stone-500 hover:text-[#1C160F]'
              }`}
            >
              <span className="hidden sm:inline">Soil & Lab Audit Certificate</span>
              <span className="sm:hidden">🧪 Lab Audit</span>
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'timeline' && (
            <div className="space-y-4 py-2">
              <h4 className="font-serif-display font-bold text-base sm:text-lg text-[#1C160F]">Step-by-Step Field-to-Fork Journey</h4>
              <div className="relative border-l-2 border-[#4E5D36]/30 ml-3 sm:ml-4 space-y-4 sm:space-y-6 pl-4 sm:pl-6 pt-1">
                {currentBatch.journeyTimeline.map((step, idx) => (
                  <div key={idx} className="relative">
                    {/* Dot */}
                    <div className={`absolute -left-[23px] sm:-left-[31px] top-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-white ${
                      step.status === 'completed' ? 'bg-[#4E5D36]' : 'bg-[#D4A359] animate-pulse'
                    }`} />

                    <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-[#EFEBE4] shadow-xs">
                      <div className="flex justify-between items-start mb-1 gap-2">
                        <span className="font-bold text-xs sm:text-sm text-[#1C160F]">{step.stage}</span>
                        <span className="text-[10px] sm:text-[11px] font-mono font-medium text-[#4E5D36] bg-[#FAF7F2] px-2 py-0.5 rounded-md whitespace-nowrap">
                          {step.time}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-stone-600 mb-1 leading-relaxed">{step.description}</p>
                      <div className="text-[10px] sm:text-[11px] text-stone-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#B85C38] shrink-0" />
                        <span className="truncate">{step.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'farmer' && (
            <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#EFEBE4] flex flex-col md:flex-row gap-4 sm:gap-6 items-center">
              <img
                src={currentBatch.farmerPhoto}
                alt={currentBatch.farmerName}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-[#F4E8D1] shadow-md flex-shrink-0"
              />
              <div className="space-y-2 text-center md:text-left">
                <span className="px-3 py-1 bg-[#F4E8D1] text-[#4E5D36] text-[10px] sm:text-[11px] font-bold rounded-full uppercase">
                  {currentBatch.farmerRole}
                </span>
                <h4 className="font-serif-display text-xl sm:text-2xl font-bold text-[#1C160F]">{currentBatch.farmerName}</h4>
                <p className="text-xs text-stone-600 leading-relaxed max-w-xl font-light">
                  Grows crops at <strong>{currentBatch.farmName}</strong> situated in {currentBatch.farmLocation}. Uses natural Panchagavya, heirloom seeds, and zero synthetic weedicides.
                </p>
                <div className="text-[11px] sm:text-xs text-[#4E5D36] font-medium pt-1">
                  🌱 Water Source: {currentBatch.waterSource}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'lab' && (
            <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#EFEBE4] space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-stone-200">
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#1C160F]">Lab Certification ID</h4>
                  <p className="font-mono text-[11px] sm:text-xs text-[#4E5D36]">{currentBatch.labReportNumber}</p>
                </div>
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-[10px] sm:text-xs font-bold rounded-full">
                  100% Pesticide Free
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-[#FAF7F2] rounded-lg">
                  <span className="font-semibold text-stone-700 block mb-1">Pesticide Residue Analysis:</span>
                  <p className="text-emerald-700 font-bold">{currentBatch.pesticideStatus}</p>
                </div>
                <div className="p-3 bg-[#FAF7F2] rounded-lg">
                  <span className="font-semibold text-stone-700 block mb-1">Soil Health Audit:</span>
                  <p className="text-[#1C160F]">{currentBatch.soilHealth}</p>
                </div>
              </div>

              <div className="text-[10px] sm:text-[11px] text-stone-400 italic pt-1">
                * Test performed by NABL accredited Harvestora Food Safety & Organic Certification Labs.
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
