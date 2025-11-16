import { motion } from "framer-motion";
import { Play, PackageOpen, Trophy } from "lucide-react";

const Button = ({ icon: Icon, label, primary }) => (
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className={`relative flex flex-col items-center justify-center h-20 w-[32%] rounded-3xl overflow-hidden ${
      primary
        ? "bg-gradient-to-br from-white to-emerald-50"
        : "bg-gradient-to-br from-white to-sky-50"
    } ring-1 ring-white/70 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_30px_rgba(0,0,0,0.08)]`}
  >
    <div className="absolute inset-0 opacity-70" style={{
      background:
        "radial-gradient(120px 60px at 30% 10%, rgba(255,255,255,0.9), transparent), radial-gradient(180px 100px at 80% 120%, rgba(16,185,129,0.25), transparent)"
    }} />
    <Icon className={`z-10 h-7 w-7 ${primary ? "text-emerald-600" : "text-sky-600"}`} />
    <span className="z-10 mt-1 text-sm font-semibold text-slate-800 tracking-wide">{label}</span>
    <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/5 to-transparent" />
    <div className="absolute inset-0 ring-1 ring-white/60 rounded-3xl pointer-events-none" />
  </motion.button>
);

export default function BottomActions() {
  return (
    <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-30 pb-6 px-5 sm:px-6">
      <div className="pointer-events-auto mx-auto max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg flex items-center justify-between gap-3 rounded-[28px] bg-white/30 backdrop-blur-xl border border-white/40 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_12px_40px_rgba(0,0,0,0.12)]">
        <Button icon={Trophy} label="Arena" />
        <Button icon={PackageOpen} label="Packs" />
        <Button icon={Play} label="Play" primary />
      </div>
    </div>
  );
}
