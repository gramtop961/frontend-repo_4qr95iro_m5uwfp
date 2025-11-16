import { motion } from "framer-motion";

function Halo({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} style={{
      background:
        "radial-gradient(120px 80px at 40% 30%, rgba(255,255,255,0.75), transparent 70%), radial-gradient(220px 120px at 70% 60%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(200px 120px at 30% 80%, rgba(16,185,129,0.16), transparent 60%)"
    }} />
  );
}

function Landmark({ label, children, delay = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.6, ease: "easeOut" }} className="relative">
      <div className="absolute -inset-2 rounded-2xl bg-white/10 blur-xl" />
      <div className="absolute -inset-6 rounded-full bg-emerald-400/10 blur-2xl" />
      <motion.div whileHover={{ y: -4 }} className="relative">
        {children}
      </motion.div>
      <div className="absolute left-1/2 -bottom-7 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-wider text-slate-700/80 bg-white/70 px-2 py-1 rounded-full ring-1 ring-white/60 shadow">
        {label}
      </div>
    </motion.div>
  );
}

export default function Diorama() {
  return (
    <div className="relative mx-auto max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg pt-24 pb-36">
      <div className="relative mx-auto aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] w-full rounded-[32px] bg-gradient-to-b from-sky-50 via-emerald-50 to-amber-50 p-[1px] shadow-[0_40px_80px_rgba(16,24,40,0.12)]">
        <div className="relative h-full w-full rounded-[32px] overflow-hidden bg-gradient-to-b from-white via-white/90 to-white/70">
          <Halo />
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(99,102,241,0.08),transparent)]" />

          {/* Terrain base plate */}
          <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 120, damping: 14 }} className="absolute left-1/2 top-1/2 w-[86%] sm:w-[80%] md:w-[70%] -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 translate-y-2 blur-2xl bg-emerald-300/20 rounded-[40px]" />
              <div className="relative rounded-[40px] bg-gradient-to-b from-emerald-200 to-amber-100 p-1 ring-1 ring-white/70">
                <div className="rounded-[36px] bg-gradient-to-b from-emerald-50 to-amber-50 p-4">
                  {/* Plate rim highlight */}
                  <div className="absolute inset-x-8 -top-1 h-2 bg-white/70 blur-xl rounded-full" />

                  {/* Stylized Korea silhouette as layered elevations */}
                  <div className="relative h-[320px] sm:h-[380px] md:h-[420px]">
                    {/* lowland */}
                    <div className="absolute left-[24%] top-[30%] h-[50%] w-[44%] rounded-[36%_64%_48%_52%/44%_40%_60%_56%] bg-gradient-to-b from-emerald-200 to-emerald-300 shadow-[inset_0_10px_20px_rgba(255,255,255,0.6),0_30px_60px_rgba(16,24,40,0.14)]" />
                    {/* hills */}
                    <div className="absolute left-[22%] top-[18%] h-[46%] w-[40%] rounded-[46%_54%_50%_50%/40%_50%_50%_60%] bg-gradient-to-b from-emerald-300 to-emerald-400 shadow-[inset_0_12px_24px_rgba(255,255,255,0.55),0_36px_70px_rgba(16,24,40,0.16)]" />
                    {/* mountains */}
                    <div className="absolute left-[20%] top-[8%] h-[40%] w-[36%] rounded-[50%] bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-600 shadow-[inset_0_14px_28px_rgba(255,255,255,0.55),0_40px_80px_rgba(16,24,40,0.2)]" />

                    {/* rocky ridges */}
                    <div className="absolute left-[33%] top-[26%] h-[18%] w-[22%] rounded-[50%] bg-gradient-to-b from-neutral-200 to-neutral-300 shadow-[inset_0_6px_12px_rgba(255,255,255,0.6),0_10px_20px_rgba(16,24,40,0.16)]" />
                    <div className="absolute left-[42%] top-[40%] h-[12%] w-[16%] rounded-[50%] bg-gradient-to-b from-neutral-200 to-neutral-300 shadow-[inset_0_6px_12px_rgba(255,255,255,0.6),0_10px_20px_rgba(16,24,40,0.16)]" />

                    {/* soft trees dots */}
                    {Array.from({ length: 28 }).map((_, i) => (
                      <div key={i} className="absolute h-2.5 w-2.5 rounded-full bg-emerald-700/80 shadow-[0_2px_6px_rgba(0,0,0,0.2)]" style={{
                        left: `${24 + Math.sin(i * 1.3) * 18 + (i % 5) * 2}%`,
                        top: `${28 + Math.cos(i * 1.2) * 14 + (i % 7)}%`
                      }} />
                    ))}

                    {/* cliffs highlight edges */}
                    <div className="absolute left-[20%] top-[8%] h-[40%] w-[36%] rounded-[50%] ring-2 ring-white/30" />
                    <div className="absolute left-[22%] top-[18%] h-[46%] w-[40%] rounded-[46%_54%_50%_50%/40%_50%_50%_60%] ring-2 ring-white/30" />

                    {/* water edge glow */}
                    <div className="absolute inset-0">
                      <div className="absolute left-[18%] top-[6%] h-[80%] w-[60%] rounded-[42%] bg-gradient-to-b from-sky-200/40 to-sky-300/20 blur-xl" />
                    </div>

                    {/* Landmarks */}
                    <div className="absolute left-[38%] top-[24%]">
                      <Landmark label="Dolharubang" delay={0.2}>
                        <div className="h-14 w-12 rounded-[12px] bg-gradient-to-b from-stone-200 to-stone-400 ring-1 ring-white/60 shadow-[inset_0_4px_8px_rgba(255,255,255,0.6),0_10px_24px_rgba(0,0,0,0.2)] flex items-end justify-center">
                          <div className="mb-1 h-1.5 w-7 rounded-full bg-stone-500/70" />
                          <div className="absolute -top-1 left-1 right-1 h-2 rounded-b-full bg-white/70 blur" />
                        </div>
                      </Landmark>
                    </div>

                    <div className="absolute left-[50%] top-[36%]">
                      <Landmark label="Booster Pack" delay={0.35}>
                        <div className="relative h-16 w-10 rounded-[10px] bg-gradient-to-br from-white via-blue-50 to-emerald-50 ring-1 ring-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_12px_30px_rgba(0,0,0,0.2)]">
                          <div className="absolute inset-0 rounded-[10px]" style={{
                            background: "conic-gradient(from 0deg, rgba(255,255,255,0.9), rgba(250,250,255,0.7), rgba(16,185,129,0.25), rgba(99,102,241,0.3), rgba(250,250,255,0.7), rgba(255,255,255,0.9))",
                            mixBlendMode: "overlay",
                            opacity: 0.6
                          }} />
                          <div className="absolute inset-0 rounded-[10px] ring-1 ring-white/80" />
                          <div className="absolute -top-1 left-1 right-1 h-2 rounded-b-full bg-white/80 blur" />
                        </div>
                      </Landmark>
                    </div>

                    <div className="absolute left-[28%] top-[42%]">
                      <Landmark label="Stone Gate" delay={0.5}>
                        <div className="relative h-12 w-14 rounded-[10px] bg-gradient-to-b from-stone-200 to-stone-400 ring-1 ring-white/60 shadow-[inset_0_3px_6px_rgba(255,255,255,0.6),0_10px_20px_rgba(0,0,0,0.2)]">
                          <div className="absolute left-3 right-3 bottom-2 top-2 rounded-[8px] bg-gradient-to-b from-stone-300 to-stone-500" />
                          <div className="absolute left-4 right-4 bottom-2 top-5 rounded-[6px] bg-gradient-to-b from-stone-100 to-stone-300" />
                          <div className="absolute -top-1 left-1 right-1 h-2 rounded-b-full bg-white/70 blur" />
                        </div>
                      </Landmark>
                    </div>

                    {/* subtle mist and DOF */}
                    <div className="absolute -inset-6 rounded-[44px] bg-white/20 blur-2xl" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/60" />

                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* vignette and rays */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_0%,rgba(255,255,255,0.0),rgba(255,255,255,0.5))]" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.0)_0%,rgba(255,255,255,0.3)_40%,rgba(255,255,255,0.0)_60%)] mix-blend-overlay" />
          </div>
        </div>
      </div>
    </div>
  );
}
