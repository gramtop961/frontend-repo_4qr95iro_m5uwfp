import { User, Settings, Coins } from "lucide-react";
import { motion } from "framer-motion";

export default function TopBar() {
  return (
    <div className="pointer-events-none fixed top-0 left-0 right-0 z-30 py-4 px-5 sm:px-6">
      <div className="pointer-events-auto mx-auto max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg flex items-center justify-between rounded-2xl bg-white/30 backdrop-blur-xl border border-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_8px_30px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-3 py-3 pl-4">
          <motion.div initial={{opacity:0, y:-6}} animate={{opacity:1, y:0}} transition={{delay:0.1, type:"spring", stiffness:260, damping:20}} className="h-10 w-10 rounded-xl bg-gradient-to-br from-white/90 to-white/60 shadow-[0_2px_10px_rgba(0,0,0,0.06)] flex items-center justify-center ring-1 ring-white/60">
            <User className="h-5 w-5 text-slate-700"/>
          </motion.div>
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-500">trainer</div>
            <div className="font-semibold text-slate-800">Guest</div>
          </div>
        </div>
        <div className="flex items-center gap-2 pr-3">
          <motion.div whileHover={{scale:1.05}} className="flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2 ring-1 ring-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_8px_rgba(0,0,0,0.06)]">
            <Coins className="h-4 w-4 text-amber-500"/>
            <span className="text-sm font-semibold text-slate-800">1,240</span>
          </motion.div>
          <motion.button whileHover={{scale:1.05}} className="rounded-xl bg-white/70 p-2 ring-1 ring-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_8px_rgba(0,0,0,0.06)]">
            <Settings className="h-5 w-5 text-slate-700"/>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
