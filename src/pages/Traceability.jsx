import React from 'react';
import { TraceabilityScanner } from '../components/common/TraceabilityScanner';
import { ShieldCheck, Award, FileText, CheckCircle2 } from 'lucide-react';

export function Traceability() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-[#1C160F] text-[#D4A359] text-xs font-bold uppercase tracking-wider font-mono">
            VERIFIED BATCH TRANSPARENCY
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#1C160F]">
            Farm-to-Fork Batch Traceability
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            We believe in total transparency. Every Harvestora order features a unique batch code scanned at harvest. Inspect exact field GPS coordinates, zero-pesticide lab reports, and harvest timestamps below.
          </p>
        </div>

        {/* Interactive Scanner Component */}
        <TraceabilityScanner />

        {/* Lab Certification Guarantees */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EFEBE4] shadow-sm space-y-6">
          <div className="flex items-center gap-3 text-[#4E5D36]">
            <Award className="w-8 h-8 text-[#4E5D36]" />
            <div>
              <h2 className="font-serif-display text-2xl font-bold text-[#1C160F]">Our 4-Pillar Organic Verification Standard</h2>
              <p className="text-xs text-gray-500">Every harvest batch undergoes strict dual NABL lab testing before packaging.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#EFEBE4]">
              <CheckCircle2 className="w-6 h-6 text-[#4E5D36] mb-2" />
              <h3 className="font-bold text-sm text-[#1C160F]">0.00 ppm Synthetic Residue</h3>
              <p className="text-xs text-gray-600 mt-1">Verified free of organophosphates, carbamates, and synthetic weedicides.</p>
            </div>

            <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#EFEBE4]">
              <CheckCircle2 className="w-6 h-6 text-[#4E5D36] mb-2" />
              <h3 className="font-bold text-sm text-[#1C160F]">GPS Farm Origin Audit</h3>
              <p className="text-xs text-gray-600 mt-1">Direct geo-tagging ensures every grain & vegetable comes strictly from registered organic plots.</p>
            </div>

            <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#EFEBE4]">
              <CheckCircle2 className="w-6 h-6 text-[#4E5D36] mb-2" />
              <h3 className="font-bold text-sm text-[#1C160F]">Soil Organics & pH Test</h3>
              <p className="text-xs text-gray-600 mt-1">Tested for organic carbon density, micro-flora activity, and heavy metal clearance.</p>
            </div>

            <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#EFEBE4]">
              <CheckCircle2 className="w-6 h-6 text-[#4E5D36] mb-2" />
              <h3 className="font-bold text-sm text-[#1C160F]">Cold-Chain Timestamp</h3>
              <p className="text-xs text-gray-600 mt-1">Continuous temperature tracking logs guarantee sub-18°C freshness during dispatch.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
