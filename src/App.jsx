import { motion } from "framer-motion";
import TopBar from "./components/TopBar";
import Diorama from "./components/Diorama";
import BottomActions from "./components/BottomActions";
import Particles from "./components/Particles";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-amber-50 via-white to-sky-50">
      {/* soft background gradient and glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-white via-emerald-100 to-sky-100 blur-3xl opacity-70" />
        <div className="absolute bottom-[-160px] right-[-60px] h-[360px] w-[360px] rounded-full bg-gradient-to-br from-sky-100 to-indigo-100 blur-2xl opacity-70" />
      </div>

      <Particles count={70} />

      <TopBar />

      <main>
        <section>
          <Diorama />
        </section>
      </main>

      <div className="pointer-events-none fixed inset-x-0 top-[16%] z-10 flex justify-center">
        <motion.h1 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{delay:0.15, duration:0.6}} className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-900 via-slate-700 to-slate-500 drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]">
          Kingdoms of Korea
        </motion.h1>
      </div>

      <BottomActions />

      {/* cinematic top light */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_20%_at_50%_0%,rgba(255,255,255,0.6),transparent)]" />
    </div>
  );
}

export default App;
