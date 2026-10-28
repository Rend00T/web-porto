import React from 'react';
import { 
  Users, CheckCircle2, Database, ShieldCheck, 
  ArrowRight, CloudRain
} from 'lucide-react';

interface PreviewProps {
  projectId: string;
  isCompact?: boolean;
}

export const ProjectVisualPreview: React.FC<PreviewProps> = ({ projectId, isCompact = false }) => {
  // SIAW Interactive Mockup (Monochrome CRM)
  if (projectId === 'siaw') {
    return (
      <div className={`w-full bg-[#171717] text-[#EDEDED] rounded-xl overflow-hidden border border-[#2E2E2E] font-sans ${isCompact ? 'p-3 text-xs' : 'p-4 md:p-5'}`}>
        {/* Browser / App Header */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#2E2E2E]">
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#444444]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#555555]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#666666]"></div>
            <span className="text-[11px] font-mono text-[#888888] pl-2">siaw.app/dashboard • Agency Borobudur</span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider bg-[#262626] text-[#A3A3A3] px-2 py-0.5 rounded border border-[#333333]">
            Illustrative Mockup
          </span>
        </div>

        {/* Dashboard layout */}
        <div className="grid grid-cols-12 gap-3">
          {/* Mini Sidebar */}
          <div className="hidden sm:flex col-span-3 flex-col space-y-1.5 border-r border-[#2A2A2A] pr-3">
            <div className="text-[10px] font-mono text-[#858585] uppercase tracking-wider mb-1">Navigation</div>
            <div className="flex items-center space-x-2 px-2.5 py-1.5 rounded-md bg-[#2A2A2A] text-white text-xs font-medium border border-[#383838]">
              <Users className="w-3.5 h-3.5 text-neutral-300" />
              <span>Prospects</span>
            </div>
            <div className="flex items-center space-x-2 px-2.5 py-1.5 rounded-md text-[#888888] hover:text-[#EDEDED] text-xs">
              <CalendarDays className="w-3.5 h-3.5" />
              <span>Follow-ups</span>
            </div>
            <div className="flex items-center space-x-2 px-2.5 py-1.5 rounded-md text-[#888888] hover:text-[#EDEDED] text-xs">
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Meeting Notes</span>
            </div>
            <div className="mt-auto pt-2 border-t border-[#262626] text-[10px] text-[#666666] font-mono">
              Role: Agent Borobudur
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-12 sm:col-span-9 space-y-2.5">
            {/* Stat Cards */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-[#1F1F1F] p-2.5 rounded-lg border border-[#2E2E2E]">
                <div className="text-[10px] text-[#888888]">Total Prospects</div>
                <div className="text-sm md:text-base font-bold text-white mt-0.5">48</div>
                <div className="text-[9px] text-[#AAAAAA] mt-0.5 font-mono">+12 active</div>
              </div>
              <div className="bg-[#1F1F1F] p-2.5 rounded-lg border border-[#2E2E2E]">
                <div className="text-[10px] text-[#888888]">Scheduled Follow-ups</div>
                <div className="text-sm md:text-base font-bold text-neutral-200 mt-0.5">7 Due</div>
                <div className="text-[9px] text-[#888888] mt-0.5 font-mono">3 high priority</div>
              </div>
              <div className="bg-[#1F1F1F] p-2.5 rounded-lg border border-[#2E2E2E]">
                <div className="text-[10px] text-[#888888]">Active Pipeline</div>
                <div className="text-sm md:text-base font-bold text-white mt-0.5">Proposal</div>
                <div className="text-[9px] text-[#888888] mt-0.5 font-mono">5 in review</div>
              </div>
            </div>

            {/* Prospect Table Preview */}
            <div className="bg-[#1F1F1F] rounded-lg border border-[#2E2E2E] overflow-hidden">
              <div className="px-3 py-2 border-b border-[#2E2E2E] text-[11px] font-medium text-[#CCCCCC] flex justify-between items-center">
                <span>Recent Prospect Pipeline</span>
                <span className="text-[10px] text-[#777777] font-mono">Prisma / PostgreSQL</span>
              </div>
              <div className="divide-y divide-[#2A2A2A] text-[11px]">
                <div className="px-3 py-2 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-medium text-[#E5E5E5]">Budi Santoso</span>
                    <span className="text-[10px] text-[#777777]">Education Plan</span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#2A2A2A] text-[#E0E0E0] border border-[#383838]">
                    Needs Analysis
                  </span>
                  <span className="text-[10px] font-mono text-[#888888]">Today 14:00</span>
                </div>
                <div className="px-3 py-2 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-medium text-[#E5E5E5]">Siti Nurhaliza</span>
                    <span className="text-[10px] text-[#777777]">Health Protection</span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#2A2A2A] text-[#E0E0E0] border border-[#383838]">
                    Proposal Sent
                  </span>
                  <span className="text-[10px] font-mono text-[#888888]">Tomorrow 10:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // AI Review Detection Interactive Preview (Monochrome Benchmark & Classifier)
  if (projectId === 'ai-review-detection') {
    return (
      <div className={`w-full bg-[#171717] text-[#EDEDED] rounded-xl overflow-hidden border border-[#2E2E2E] font-sans ${isCompact ? 'p-3 text-xs' : 'p-4 md:p-5'}`}>
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#2E2E2E]">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-neutral-400"></span>
            <span className="text-xs font-mono font-medium text-neutral-200">XLM-RoBERTa vs. TF-IDF Baseline (Indonesian NLP)</span>
          </div>
          <span className="text-[10px] font-mono bg-[#262626] text-[#A3A3A3] px-2 py-0.5 rounded border border-[#333333]">
            150 Test Split
          </span>
        </div>

        {/* Accuracy Comparison Cards */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="p-3 rounded-lg bg-[#222222] border border-[#383838] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white">XLM-RoBERTa (Deep)</span>
                <span className="text-[10px] font-mono text-neutral-300 bg-[#303030] px-1.5 py-0.5 rounded border border-[#404040]">Fine-Tuned</span>
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-white mt-1">94.0%</div>
              <div className="text-[10px] text-[#888888] mt-0.5">Test Accuracy (150 rows)</div>
            </div>
            <div className="w-full bg-[#333333] h-1.5 rounded-full overflow-hidden mt-2.5">
              <div className="bg-white h-full rounded-full" style={{ width: '94%' }}></div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#1F1F1F] border border-[#2E2E2E] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-neutral-300">Logistic Regression</span>
                <span className="text-[10px] font-mono text-[#888888] bg-[#2A2A2A] px-1.5 py-0.5 rounded border border-[#333333]">TF-IDF</span>
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-neutral-300 mt-1">80.0%</div>
              <div className="text-[10px] text-[#888888] mt-0.5">Baseline Accuracy (150 rows)</div>
            </div>
            <div className="w-full bg-[#333333] h-1.5 rounded-full overflow-hidden mt-2.5">
              <div className="bg-neutral-400 h-full rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>

        {/* Sample Inference Workbench */}
        <div className="bg-[#1F1F1F] rounded-lg p-3 border border-[#2E2E2E] space-y-2 text-xs">
          <div className="flex justify-between items-center text-[10px] font-mono text-[#888888]">
            <span>SAMPLE REVIEW INFERENCE (ILLUSTRATIVE)</span>
            <span className="text-neutral-300 flex items-center font-mono">
              <CheckCircle2 className="w-3 h-3 mr-1 text-neutral-400" /> Confidence: 96.8%
            </span>
          </div>
          <div className="p-2.5 rounded bg-[#141414] border border-[#2A2A2A] font-mono text-[11px] text-[#CCCCCC] leading-relaxed">
            "Pelayanan driver sangat cepat dan ramah, makanan sampai dalam kondisi hangat tanpa cacat sedikitpun. Sangat merekomendasikan aplikasi ini untuk kebutuhan harian."
          </div>
          <div className="flex items-center justify-between text-[11px] pt-0.5">
            <span className="text-[#888888]">Predicted Classification:</span>
            <span className="px-2 py-0.5 rounded font-mono text-xs font-semibold bg-[#2A2A2A] text-white border border-[#3D3D3D]">
              Synthetic (AI-Generated Review)
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Big Data Lakehouse Pipeline Diagram (Monochrome Medallion)
  if (projectId === 'data-lakehouse') {
    return (
      <div className={`w-full bg-[#171717] text-[#EDEDED] rounded-xl overflow-hidden border border-[#2E2E2E] p-4 md:p-5 font-sans ${isCompact ? 'text-xs' : ''}`}>
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#2E2E2E]">
          <div className="flex items-center space-x-2">
            <Database className="w-4 h-4 text-neutral-400" />
            <span className="font-mono text-xs font-semibold text-neutral-200">Medallion Data Lakehouse Architecture (PySpark)</span>
          </div>
          <span className="text-[10px] font-mono bg-[#262626] text-[#A3A3A3] px-2 py-0.5 rounded border border-[#333333]">
            fuaddary/Big-Data-Data-Lakehouse
          </span>
        </div>

        {/* Pipeline Stages Diagram */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 relative">
          {/* Bronze Stage */}
          <div className="p-3 rounded-lg bg-[#202020] border border-[#303030] relative">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-white">Bronze Layer</span>
              <span className="text-[9px] font-mono bg-[#2E2E2E] text-neutral-300 px-1 rounded border border-[#3D3D3D]">Raw</span>
            </div>
            <p className="text-[10px] text-[#999999] mb-2">Immutable landing zone preserving raw schema fidelity &amp; timestamps.</p>
            <div className="font-mono text-[9px] text-neutral-400 bg-[#141414] p-1.5 rounded border border-[#262626]">
              Format: Parquet / JSON<br />
              Status: Append-Only
            </div>
          </div>

          {/* Silver Stage */}
          <div className="p-3 rounded-lg bg-[#202020] border border-[#303030] relative">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-white">Silver Layer</span>
              <span className="text-[9px] font-mono bg-[#2E2E2E] text-neutral-300 px-1 rounded border border-[#3D3D3D]">Cleaned</span>
            </div>
            <p className="text-[10px] text-[#999999] mb-2">Deduplicated, null-imputed, type-cast, schema-enforced records.</p>
            <div className="font-mono text-[9px] text-neutral-400 bg-[#141414] p-1.5 rounded border border-[#262626]">
              Transform: PySpark ETL<br />
              Partitions: Daily Keys
            </div>
          </div>

          {/* Gold Stage */}
          <div className="p-3 rounded-lg bg-[#202020] border border-[#303030] relative">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-white">Gold Layer</span>
              <span className="text-[9px] font-mono bg-[#2E2E2E] text-neutral-300 px-1 rounded border border-[#3D3D3D]">Curated</span>
            </div>
            <p className="text-[10px] text-[#999999] mb-2">Aggregated business metrics, KPIs, dimensional analytical tables.</p>
            <div className="font-mono text-[9px] text-neutral-400 bg-[#141414] p-1.5 rounded border border-[#262626]">
              Target: Analytics Ready<br />
              Query: Columnar Fast
            </div>
          </div>

          {/* Analytics / BI Consumer */}
          <div className="p-3 rounded-lg bg-[#242424] border border-[#3D3D3D] relative">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-white">Analytics &amp; BI</span>
              <span className="text-[9px] font-mono bg-[#303030] text-white px-1 rounded border border-[#444444]">Query</span>
            </div>
            <p className="text-[10px] text-[#999999] mb-2">Downstream dashboards, reporting workloads, and exploratory SQL.</p>
            <div className="font-mono text-[9px] text-neutral-300 bg-[#141414] p-1.5 rounded border border-[#262626]">
              Clients: BI &amp; Notebooks<br />
              Latency: Sub-second
            </div>
          </div>
        </div>

        {/* Data flow indicators */}
        <div className="mt-3 pt-3 border-t border-[#2E2E2E] flex items-center justify-between text-[11px] text-[#888888] font-mono">
          <span className="flex items-center">
            Raw Ingest <ArrowRight className="w-3 h-3 mx-1 text-[#666666]" /> Spark Cleaning <ArrowRight className="w-3 h-3 mx-1 text-[#666666]" /> Metric Aggregation
          </span>
          <span className="text-[#666666]">Spark 3.x / Google Colab</span>
        </div>
      </div>
    );
  }

  // WeatherPulse Dashboard Preview (Monochrome Multi-City)
  if (projectId === 'weatherpulse') {
    const cities = [
      { name: 'Surabaya', temp: '32°C', humidity: '72%', wind: '14 km/h', cond: 'Sunny / Warm' },
      { name: 'Jakarta', temp: '30°C', humidity: '78%', wind: '11 km/h', cond: 'Partly Cloudy' },
      { name: 'Bandung', temp: '23°C', humidity: '84%', wind: '8 km/h', cond: 'Mild Rain' },
      { name: 'Yogyakarta', temp: '29°C', humidity: '76%', wind: '9 km/h', cond: 'Clear Sky' },
      { name: 'Semarang', temp: '31°C', humidity: '74%', wind: '12 km/h', cond: 'Humid' },
      { name: 'Malang', temp: '24°C', humidity: '80%', wind: '10 km/h', cond: 'Cool Breeze' },
    ];

    return (
      <div className={`w-full bg-[#171717] text-[#EDEDED] rounded-xl overflow-hidden border border-[#2E2E2E] p-4 md:p-5 font-sans ${isCompact ? 'text-xs' : ''}`}>
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#2E2E2E]">
          <div className="flex items-center space-x-2">
            <CloudRain className="w-4 h-4 text-neutral-400" />
            <span className="font-mono text-xs font-semibold text-neutral-200">WeatherPulse Multi-City Ingestion Monitor</span>
          </div>
          <span className="text-[10px] font-mono bg-[#262626] text-[#A3A3A3] px-2 py-0.5 rounded border border-[#333333]">
            Open-Meteo API • ~10m Interval
          </span>
        </div>

        <div className="text-[10px] text-[#888888] mb-2 font-mono flex items-center justify-between">
          <span>MONITORED REGIONS (6 CITIES)</span>
          <span className="italic text-[#666666]">*Illustrative sample readings</span>
        </div>

        {/* 6 City Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
          {cities.map((c) => (
            <div key={c.name} className="p-2.5 rounded-lg bg-[#202020] border border-[#2E2E2E]">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-xs">{c.name}</span>
                <span className="text-white font-mono font-bold text-xs">{c.temp}</span>
              </div>
              <div className="text-[10px] text-[#999999] mt-0.5">{c.cond}</div>
              <div className="flex justify-between items-center text-[9px] font-mono text-[#777777] mt-1.5 pt-1 border-t border-[#2A2A2A]">
                <span>Hum: {c.humidity}</span>
                <span>Wind: {c.wind}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-2.5 rounded-lg bg-[#141414] border border-[#262626] text-[10px] text-[#888888] font-mono flex justify-between items-center">
          <span>Collector Service: Scheduled Python Async Worker</span>
          <span className="text-neutral-300">Status: Active Loop (~10m)</span>
        </div>
      </div>
    );
  }

  // RSA Verification Cryptographic Workflow (Monochrome Workflow)
  if (projectId === 'rsa-verification') {
    return (
      <div className={`w-full bg-[#171717] text-[#EDEDED] rounded-xl overflow-hidden border border-[#2E2E2E] p-4 md:p-5 font-sans ${isCompact ? 'text-xs' : ''}`}>
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#2E2E2E]">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-neutral-400" />
            <span className="font-mono text-xs font-semibold text-neutral-200">RSA First-Principles Mathematical Verification Flow</span>
          </div>
          <span className="text-[10px] font-mono bg-[#262626] text-[#A3A3A3] px-2 py-0.5 rounded border border-[#333333]">
            Educational Cryptography
          </span>
        </div>

        {/* Workflow Diagram */}
        <div className="space-y-2.5 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 items-center">
            <div className="p-2.5 rounded bg-[#202020] border border-[#2E2E2E] text-center">
              <div className="text-[10px] text-[#888888] font-mono">Input Binary</div>
              <div className="font-semibold text-white mt-0.5 text-xs truncate">update_pkg.bin</div>
            </div>
            
            <div className="p-2.5 rounded bg-[#202020] border border-[#2E2E2E] text-center">
              <div className="text-[10px] text-[#888888] font-mono">Digest Calc</div>
              <div className="font-mono text-[10px] text-neutral-300 mt-0.5 truncate">SHA256 Hash</div>
            </div>

            <div className="p-2.5 rounded bg-[#202020] border border-[#2E2E2E] text-center">
              <div className="text-[10px] text-[#888888] font-mono">Private Key (d, n)</div>
              <div className="font-mono text-[10px] text-neutral-300 mt-0.5 truncate">s = m^d mod n</div>
            </div>

            <div className="p-2.5 rounded bg-[#202020] border border-[#2E2E2E] text-center">
              <div className="text-[10px] text-[#888888] font-mono">Public Key (e, n)</div>
              <div className="font-mono text-[10px] text-neutral-300 mt-0.5 truncate">v = s^e mod n</div>
            </div>

            <div className="p-2.5 rounded bg-[#262626] border border-[#444444] text-center">
              <div className="text-[10px] text-neutral-400 font-mono">Verdict</div>
              <div className="font-bold text-white mt-0.5 flex items-center justify-center text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-white" /> VALID
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded bg-[#141414] border border-[#262626] font-mono text-[10px] text-[#888888] leading-relaxed">
            <span className="text-[#CCCCCC] font-semibold">Mathematical Components:</span> Extended Euclidean Algorithm (gcd(a,b) = ax + by), Miller-Rabin Primality, Modular Exponentiation, Python unittest suite.
          </div>
        </div>
      </div>
    );
  }

  // Traffic Light IoT Simulation (Monochrome Simulation)
  if (projectId === 'traffic-light-iot') {
    return (
      <div className={`w-full bg-[#171717] text-[#EDEDED] rounded-xl overflow-hidden border border-[#2E2E2E] p-4 font-sans ${isCompact ? 'text-xs' : ''}`}>
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#2E2E2E] text-xs">
          <span className="font-mono font-medium text-neutral-200">Tinkercad 3-Way Intersection &amp; Train Override</span>
          <span className="text-[10px] font-mono text-[#A3A3A3] bg-[#262626] px-2 py-0.5 rounded border border-[#333333]">
            Arduino Simulation
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2.5 rounded bg-[#202020] border border-[#2E2E2E]">
            <div className="text-[10px] text-[#888888]">Normal Cycle</div>
            <div className="text-sm font-bold text-white mt-0.5">3s Timing</div>
            <div className="text-[9px] text-[#666666] font-mono">Non-blocking</div>
          </div>
          <div className="p-2.5 rounded bg-[#202020] border border-[#2E2E2E]">
            <div className="text-[10px] text-[#888888]">Train Sensor</div>
            <div className="text-sm font-bold text-neutral-200 mt-0.5">Override</div>
            <div className="text-[9px] text-[#666666] font-mono">Red Priority</div>
          </div>
          <div className="p-2.5 rounded bg-[#202020] border border-[#2E2E2E]">
            <div className="text-[10px] text-[#888888]">Ventilation Fan</div>
            <div className="text-sm font-bold text-neutral-200 mt-0.5">DC Motor</div>
            <div className="text-[9px] text-[#666666] font-mono">State-linked</div>
          </div>
        </div>
      </div>
    );
  }

  // CloudSim Task Scheduling (Monochrome Systems)
  if (projectId === 'cloudsim-scheduling') {
    return (
      <div className={`w-full bg-[#171717] text-[#EDEDED] rounded-xl overflow-hidden border border-[#2E2E2E] p-4 font-sans ${isCompact ? 'text-xs' : ''}`}>
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#2E2E2E] text-xs">
          <span className="font-mono font-medium text-neutral-200">CloudSim 4.0 Task Scheduling Simulation</span>
          <span className="text-[10px] font-mono text-[#A3A3A3] bg-[#262626] px-2 py-0.5 rounded border border-[#333333]">
            Systems Experiment
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2 rounded bg-[#202020] border border-[#2E2E2E]">
            <div className="text-[10px] text-[#888888]">DataCenter</div>
            <div className="font-mono text-xs font-semibold text-white mt-0.5">Heterogeneous</div>
          </div>
          <div className="p-2 rounded bg-[#202020] border border-[#2E2E2E]">
            <div className="text-[10px] text-[#888888]">Allocation</div>
            <div className="font-mono text-xs font-semibold text-neutral-200 mt-0.5">Time &amp; Space</div>
          </div>
          <div className="p-2 rounded bg-[#202020] border border-[#2E2E2E]">
            <div className="text-[10px] text-[#888888]">Evaluation</div>
            <div className="font-mono text-xs font-semibold text-white mt-0.5">Makespan</div>
          </div>
        </div>
      </div>
    );
  }

  // gRPC Chat System (Monochrome Topology)
  if (projectId === 'grpc-chat') {
    return (
      <div className={`w-full bg-[#171717] text-[#EDEDED] rounded-xl overflow-hidden border border-[#2E2E2E] p-4 font-sans ${isCompact ? 'text-xs' : ''}`}>
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#2E2E2E] text-xs">
          <span className="font-mono font-medium text-neutral-200">Client-Server Communication Topology</span>
          <span className="text-[10px] font-mono text-[#A3A3A3] bg-[#262626] px-2 py-0.5 rounded border border-[#333333]">
            gRPC + WebSockets
          </span>
        </div>
        <div className="flex items-center justify-around text-xs p-2.5 rounded bg-[#202020] border border-[#2E2E2E]">
          <div className="text-center">
            <div className="text-[10px] text-[#888888]">Browser Clients</div>
            <div className="font-mono text-[11px] text-white">ws://localhost:8765</div>
          </div>
          <ArrowRight className="w-4 h-4 text-[#666666]" />
          <div className="text-center">
            <div className="text-[10px] text-[#888888]">gRPC Server</div>
            <div className="font-mono text-[11px] text-white">:50051 (Protobuf)</div>
          </div>
        </div>
      </div>
    );
  }

  // Customer Billing Analytics (Monochrome ML)
  if (projectId === 'customer-billing-analytics') {
    return (
      <div className={`w-full bg-[#171717] text-[#EDEDED] rounded-xl overflow-hidden border border-[#2E2E2E] p-4 font-sans ${isCompact ? 'text-xs' : ''}`}>
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#2E2E2E] text-xs">
          <span className="font-mono font-medium text-neutral-200">Golden Dragon Telecom Billing Modeling</span>
          <span className="text-[10px] font-mono text-[#A3A3A3] bg-[#262626] px-2 py-0.5 rounded border border-[#333333]">
            CatBoost vs LightGBM
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 rounded bg-[#202020] border border-[#2E2E2E]">
            <div className="text-[10px] text-[#888888]">Validation</div>
            <div className="font-semibold text-white mt-0.5 text-xs">Stratified KFold</div>
            <div className="text-[9px] text-[#666666] font-mono">Generalization</div>
          </div>
          <div className="p-2.5 rounded bg-[#202020] border border-[#2E2E2E]">
            <div className="text-[10px] text-[#888888]">Features</div>
            <div className="font-semibold text-neutral-200 mt-0.5 text-xs">Billing Ratios</div>
            <div className="text-[9px] text-[#666666] font-mono">Signal Ranking</div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

// Supporting icon components for mockups
const CalendarDays: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
);

const FileSpreadsheet: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M8 13h2"/><path d="M14 13h2"/><path d="M8 17h2"/><path d="M14 17h2"/></svg>
);
