import React, { useState } from 'react';
import { 
  Users, CheckCircle2, AlertCircle, Database, Cpu, 
  Terminal, ShieldCheck, ArrowRight, CloudRain, 
  Layers, HardDrive, BarChart3, Radio
} from 'lucide-react';

interface PreviewProps {
  projectId: string;
  isCompact?: boolean;
}

export const ProjectVisualPreview: React.FC<PreviewProps> = ({ projectId, isCompact = false }) => {
  // SIAW Interactive Mockup
  if (projectId === 'siaw') {
    return (
      <div className={`w-full bg-[#0F172A] text-slate-100 rounded-xl overflow-hidden border border-slate-800 shadow-xl font-sans ${isCompact ? 'p-3 text-xs' : 'p-4 md:p-5'}`}>
        {/* Browser / App Header */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
            <span className="text-[11px] font-mono text-slate-400 pl-2">siaw.app/dashboard • Agency Borobudur</span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
            Illustrative Mockup
          </span>
        </div>

        {/* Dashboard layout */}
        <div className="grid grid-cols-12 gap-3">
          {/* Mini Sidebar */}
          <div className="hidden sm:flex col-span-3 flex-col space-y-1.5 border-r border-slate-800 pr-3">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Navigation</div>
            <div className="flex items-center space-x-2 px-2.5 py-1.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-medium">
              <Users className="w-3.5 h-3.5" />
              <span>Prospects</span>
            </div>
            <div className="flex items-center space-x-2 px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-slate-200 text-xs">
              <CalendarDays className="w-3.5 h-3.5" />
              <span>Follow-ups</span>
            </div>
            <div className="flex items-center space-x-2 px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-slate-200 text-xs">
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Meeting Notes</span>
            </div>
            <div className="mt-auto pt-2 border-t border-slate-800/80 text-[10px] text-slate-500 font-mono">
              Role: Agent Borobudur
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-12 sm:col-span-9 space-y-3">
            {/* Stat Cards */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                <div className="text-[10px] text-slate-400">Total Prospects</div>
                <div className="text-sm md:text-base font-bold text-white">48</div>
                <div className="text-[9px] text-emerald-400 flex items-center mt-0.5">
                  <span>+12 active this week</span>
                </div>
              </div>
              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                <div className="text-[10px] text-slate-400">Scheduled Follow-ups</div>
                <div className="text-sm md:text-base font-bold text-amber-400">7 Due</div>
                <div className="text-[9px] text-amber-300/80">3 High Priority</div>
              </div>
              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                <div className="text-[10px] text-slate-400">Pipeline Stage</div>
                <div className="text-sm md:text-base font-bold text-blue-400">Proposal</div>
                <div className="text-[9px] text-slate-400">5 awaiting response</div>
              </div>
            </div>

            {/* Prospect Table Preview */}
            <div className="bg-slate-900/80 rounded-lg border border-slate-800 overflow-hidden">
              <div className="px-3 py-2 border-b border-slate-800 text-[11px] font-medium text-slate-300 flex justify-between items-center">
                <span>Recent Prospect Engagements</span>
                <span className="text-[10px] text-slate-500 font-mono">Prisma / PostgreSQL Model</span>
              </div>
              <div className="divide-y divide-slate-800/60 text-[11px]">
                <div className="px-3 py-2 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-medium text-slate-200">Budi Santoso</span>
                    <span className="text-[10px] text-slate-500">Unit Link Education Plan</span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Needs Analysis
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Today 14:00</span>
                </div>
                <div className="px-3 py-2 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-medium text-slate-200">Siti Nurhaliza</span>
                    <span className="text-[10px] text-slate-500">Critical Illness Protection</span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    Proposal Sent
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Tomorrow 10:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // AI Review Detection Interactive Preview
  if (projectId === 'ai-review-detection') {
    return (
      <div className={`w-full bg-[#0F172A] text-slate-100 rounded-xl overflow-hidden border border-slate-800 shadow-xl font-sans ${isCompact ? 'p-3 text-xs' : 'p-4 md:p-5'}`}>
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-xs font-mono font-medium text-slate-300">XLM-RoBERTa vs. TF-IDF Baseline (Bahasa Indonesia)</span>
          </div>
          <span className="text-[10px] font-mono bg-indigo-500/10 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/30">
            Documented 150 Test Split
          </span>
        </div>

        {/* Accuracy Comparison Cards */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-500/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-indigo-300">XLM-RoBERTa (Deep)</span>
                <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/20 px-1.5 py-0.5 rounded">Fine-Tuned</span>
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-white mt-1">94.0%</div>
              <div className="text-[10px] text-indigo-200/80 mt-0.5">Test Accuracy (150 rows)</div>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
              <div className="bg-indigo-500 h-full rounded-full" style={{ width: '94%' }}></div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-300">Logistic Regression</span>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">TF-IDF</span>
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-slate-300 mt-1">80.0%</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Baseline Accuracy (150 rows)</div>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
              <div className="bg-slate-400 h-full rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>

        {/* Sample Inference Workbench */}
        <div className="bg-slate-900/90 rounded-lg p-3 border border-slate-800 space-y-2 text-xs">
          <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
            <span>SAMPLE REVIEW INFERENCE (ILLUSTRATIVE)</span>
            <span className="text-emerald-400 flex items-center">
              <CheckCircle2 className="w-3 h-3 mr-1" /> Confidence: 96.8%
            </span>
          </div>
          <div className="p-2.5 rounded bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300 leading-relaxed">
            "Pelayanan driver sangat cepat dan ramah, makanan sampai dalam kondisi hangat tanpa cacat sedikitpun. Sangat merekomendasikan aplikasi ini untuk kebutuhan harian."
          </div>
          <div className="flex items-center justify-between text-[11px] pt-1">
            <span className="text-slate-400">Predicted Classification:</span>
            <span className="px-2 py-0.5 rounded font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Synthetic (AI-Generated Review)
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Big Data Lakehouse Pipeline Diagram
  if (projectId === 'data-lakehouse') {
    return (
      <div className={`w-full bg-[#0B0F19] text-slate-100 rounded-xl overflow-hidden border border-slate-800 p-4 md:p-5 font-sans ${isCompact ? 'text-xs' : ''}`}>
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <Database className="w-4 h-4 text-amber-400" />
            <span className="font-mono text-xs font-semibold text-slate-200">Medallion Data Lakehouse Architecture (PySpark)</span>
          </div>
          <span className="text-[10px] font-mono bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
            fuaddary/Big-Data-Data-Lakehouse
          </span>
        </div>

        {/* Pipeline Stages Diagram */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 relative">
          {/* Bronze Stage */}
          <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-800/40 relative">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-amber-300">Bronze Layer</span>
              <span className="text-[9px] font-mono bg-amber-500/20 text-amber-300 px-1 rounded">Raw</span>
            </div>
            <p className="text-[10px] text-slate-300 mb-2">Immutable landing zone preserving raw schema fidelity & ingestion timestamps.</p>
            <div className="font-mono text-[9px] text-amber-200/80 bg-slate-950/60 p-1.5 rounded border border-amber-900/30">
              Format: Parquet / JSON<br />
              Status: Append-Only
            </div>
          </div>

          {/* Silver Stage */}
          <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/60 relative">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-200">Silver Layer</span>
              <span className="text-[9px] font-mono bg-slate-700 text-slate-200 px-1 rounded">Cleaned</span>
            </div>
            <p className="text-[10px] text-slate-300 mb-2">Deduplicated, null-imputed, type-cast, and schema-enforced records.</p>
            <div className="font-mono text-[9px] text-slate-300 bg-slate-950/60 p-1.5 rounded border border-slate-800">
              Transform: PySpark ETL<br />
              Partitions: Daily Keys
            </div>
          </div>

          {/* Gold Stage */}
          <div className="p-3 rounded-lg bg-yellow-950/30 border border-yellow-500/40 relative">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-yellow-300">Gold Layer</span>
              <span className="text-[9px] font-mono bg-yellow-500/20 text-yellow-300 px-1 rounded">Curated</span>
            </div>
            <p className="text-[10px] text-slate-300 mb-2">Aggregated business metrics, KPIs, dimensional star schemas.</p>
            <div className="font-mono text-[9px] text-yellow-200/80 bg-slate-950/60 p-1.5 rounded border border-yellow-900/40">
              Target: Analytics Ready<br />
              Query: Columnar Fast
            </div>
          </div>

          {/* Analytics / BI Consumer */}
          <div className="p-3 rounded-lg bg-blue-950/30 border border-blue-500/40 relative">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-blue-300">Analytics & BI</span>
              <span className="text-[9px] font-mono bg-blue-500/20 text-blue-300 px-1 rounded">Insights</span>
            </div>
            <p className="text-[10px] text-slate-300 mb-2">Downstream dashboards, reporting workloads, and ad-hoc SQL queries.</p>
            <div className="font-mono text-[9px] text-blue-200/80 bg-slate-950/60 p-1.5 rounded border border-blue-900/40">
              Clients: BI & Notebooks<br />
              Latency: Sub-second
            </div>
          </div>
        </div>

        {/* Data flow indicators */}
        <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span className="flex items-center text-slate-400">
            Raw Ingest <ArrowRight className="w-3 h-3 mx-1 text-slate-500" /> Spark Filtering <ArrowRight className="w-3 h-3 mx-1 text-slate-500" /> Metric Aggregations
          </span>
          <span className="text-slate-500">Spark 3.x / Google Colab</span>
        </div>
      </div>
    );
  }

  // WeatherPulse Dashboard Preview
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
      <div className={`w-full bg-[#0B132B] text-slate-100 rounded-xl overflow-hidden border border-slate-800 p-4 md:p-5 font-sans ${isCompact ? 'text-xs' : ''}`}>
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <CloudRain className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-xs font-semibold text-slate-200">WeatherPulse Multi-City Ingestion Monitor</span>
          </div>
          <span className="text-[10px] font-mono bg-cyan-500/10 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30">
            Open-Meteo API • ~10m Interval
          </span>
        </div>

        <div className="text-[10px] text-slate-400 mb-2 font-mono flex items-center justify-between">
          <span>MONITORED REGIONS (6 CITIES)</span>
          <span className="text-slate-400 italic">*Illustrative sample readings</span>
        </div>

        {/* 6 City Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
          {cities.map((c) => (
            <div key={c.name} className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-200 text-xs">{c.name}</span>
                <span className="text-cyan-400 font-mono font-bold text-xs">{c.temp}</span>
              </div>
              <div className="text-[10px] text-slate-400 mt-1">{c.cond}</div>
              <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 mt-1.5 pt-1 border-t border-slate-800/80">
                <span>Hum: {c.humidity}</span>
                <span>Wind: {c.wind}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-[10px] text-slate-400 font-mono flex justify-between items-center">
          <span>Collector Service: Scheduled Python Async Worker</span>
          <span className="text-emerald-400">Status: Active Loop (~10m)</span>
        </div>
      </div>
    );
  }

  // RSA Verification Cryptographic Workflow
  if (projectId === 'rsa-verification') {
    return (
      <div className={`w-full bg-[#0A0D14] text-slate-100 rounded-xl overflow-hidden border border-slate-800 p-4 md:p-5 font-sans ${isCompact ? 'text-xs' : ''}`}>
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-xs font-semibold text-slate-200">RSA First-Principles Mathematical Verification Flow</span>
          </div>
          <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
            Educational Cryptography
          </span>
        </div>

        {/* Workflow Diagram */}
        <div className="space-y-2.5 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 items-center">
            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-center">
              <div className="text-[10px] text-slate-400 font-mono">Input Binary</div>
              <div className="font-semibold text-slate-200 mt-0.5">update_pkg.bin</div>
            </div>
            
            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-center">
              <div className="text-[10px] text-slate-400 font-mono">Digest Calc</div>
              <div className="font-mono text-[10px] text-emerald-400 mt-0.5 truncate">SHA256 Hash</div>
            </div>

            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-center">
              <div className="text-[10px] text-slate-400 font-mono">Private Key (d, n)</div>
              <div className="font-mono text-[10px] text-blue-400 mt-0.5">s = m^d mod n</div>
            </div>

            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-center">
              <div className="text-[10px] text-slate-400 font-mono">Public Key (e, n)</div>
              <div className="font-mono text-[10px] text-purple-400 mt-0.5">v = s^e mod n</div>
            </div>

            <div className="p-2.5 rounded bg-emerald-950/40 border border-emerald-500/50 text-center">
              <div className="text-[10px] text-emerald-300 font-mono">Verdict</div>
              <div className="font-bold text-emerald-400 mt-0.5 flex items-center justify-center">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> VALID
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded bg-slate-950 border border-slate-800/80 font-mono text-[10px] text-slate-400 leading-relaxed">
            <span className="text-slate-200 font-semibold">Mathematical Components Implemented:</span> Extended Euclidean Algorithm (gcd(a,b) = ax + by), Miller-Rabin Primality Testing, Modular Exponentiation, Python unittest suite.
          </div>
        </div>
      </div>
    );
  }

  // Traffic Light IoT Simulation
  if (projectId === 'traffic-light-iot') {
    return (
      <div className={`w-full bg-[#111827] text-slate-100 rounded-xl overflow-hidden border border-slate-800 p-4 font-sans ${isCompact ? 'text-xs' : ''}`}>
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-xs">
          <span className="font-mono font-medium text-slate-300">Tinkercad 3-Way Intersection & Train Override</span>
          <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
            Arduino Simulation
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
            <div className="text-[10px] text-slate-400">Normal Cycle</div>
            <div className="text-sm font-bold text-emerald-400 mt-0.5">3s Timing</div>
            <div className="text-[9px] text-slate-500">Non-blocking loop</div>
          </div>
          <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
            <div className="text-[10px] text-slate-400">Train Sensor</div>
            <div className="text-sm font-bold text-rose-400 mt-0.5">Priority Override</div>
            <div className="text-[9px] text-slate-500">Auto Red Signal</div>
          </div>
          <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
            <div className="text-[10px] text-slate-400">Ventilation Motor</div>
            <div className="text-sm font-bold text-blue-400 mt-0.5">DC Fan Active</div>
            <div className="text-[9px] text-slate-500">Traffic-synchronized</div>
          </div>
        </div>
      </div>
    );
  }

  // CloudSim Task Scheduling
  if (projectId === 'cloudsim-scheduling') {
    return (
      <div className={`w-full bg-[#0F172A] text-slate-100 rounded-xl overflow-hidden border border-slate-800 p-4 font-sans ${isCompact ? 'text-xs' : ''}`}>
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-xs">
          <span className="font-mono font-medium text-slate-300">CloudSim 4.0 Task Scheduling Simulation</span>
          <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
            Systems Experiment
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2 rounded bg-slate-900 border border-slate-800">
            <div className="text-[10px] text-slate-400">DataCenter</div>
            <div className="font-mono text-xs font-semibold text-slate-200 mt-0.5">Heterogeneous Hosts</div>
          </div>
          <div className="p-2 rounded bg-slate-900 border border-slate-800">
            <div className="text-[10px] text-slate-400">VM Allocation</div>
            <div className="font-mono text-xs font-semibold text-purple-300 mt-0.5">Time & Space Shared</div>
          </div>
          <div className="p-2 rounded bg-slate-900 border border-slate-800">
            <div className="text-[10px] text-slate-400">Metrics</div>
            <div className="font-mono text-xs font-semibold text-slate-200 mt-0.5">Makespan & Utilization</div>
          </div>
        </div>
      </div>
    );
  }

  // gRPC Chat System
  if (projectId === 'grpc-chat') {
    return (
      <div className={`w-full bg-[#0B0F17] text-slate-100 rounded-xl overflow-hidden border border-slate-800 p-4 font-sans ${isCompact ? 'text-xs' : ''}`}>
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-xs">
          <span className="font-mono font-medium text-slate-300">Client-Server Communication Topology</span>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            gRPC + WebSockets
          </span>
        </div>
        <div className="flex items-center justify-around text-xs p-2 rounded bg-slate-900/80 border border-slate-800">
          <div className="text-center">
            <div className="text-[10px] text-slate-400">Browser Clients</div>
            <div className="font-mono text-[11px] text-blue-400">ws://localhost:8765</div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-500" />
          <div className="text-center">
            <div className="text-[10px] text-slate-400">gRPC Server</div>
            <div className="font-mono text-[11px] text-emerald-400">:50051 (Protobuf)</div>
          </div>
        </div>
      </div>
    );
  }

  // Customer Billing Analytics
  if (projectId === 'customer-billing-analytics') {
    return (
      <div className={`w-full bg-[#0F172A] text-slate-100 rounded-xl overflow-hidden border border-slate-800 p-4 font-sans ${isCompact ? 'text-xs' : ''}`}>
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-xs">
          <span className="font-mono font-medium text-slate-300">Golden Dragon Telecom Billing Modeling</span>
          <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
            CatBoost vs LightGBM
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
            <div className="text-[10px] text-slate-400">Validation Method</div>
            <div className="font-semibold text-slate-200 mt-0.5">Stratified KFold Splits</div>
            <div className="text-[9px] text-slate-500">Generalization control</div>
          </div>
          <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
            <div className="text-[10px] text-slate-400">Feature Insights</div>
            <div className="font-semibold text-blue-300 mt-0.5">Billing & Tenure Ratios</div>
            <div className="text-[9px] text-slate-500">Churn signal ranking</div>
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
