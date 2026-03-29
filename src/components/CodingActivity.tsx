import { motion } from "framer-motion";
import { Info, Code2, Flame, Calendar, ChevronDown, ArrowRight } from "lucide-react";
import TiltCard from "./TiltCard";
import { useMemo, useState } from "react";

// --- Types ---
type ActivityLevel = 0 | 1 | 2 | 3 | 4;

interface DayActivity {
  date: Date;
  level: ActivityLevel;
  count: number;
}

// --- Constants & Colors ---
const WEEKS = 52;
const DAYS_PER_WEEK = 7;

// Colors matching the LeetCode/GitHub dark mode contribution graph
const LEVEL_COLORS: Record<ActivityLevel, string> = {
  0: "rgba(255, 255, 255, 0.05)", // Empty (dark grey)
  1: "#0e4429", // Level 1 (dark green)
  2: "#006d32", // Level 2
  3: "#26a641", // Level 3
  4: "#39d353", // Level 4 (bright green)
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// --- Helper Functions ---
// Generate a year of simulated "crazy" coding activity
const generateActivityData = (): DayActivity[][] => {
  const data: DayActivity[][] = [];
  const today = new Date();
  
  // Start from roughly a year ago
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - (WEEKS * DAYS_PER_WEEK - 1));

  let currentDate = new Date(startDate);

  for (let w = 0; w < WEEKS; w++) {
    const week: DayActivity[] = [];
    for (let d = 0; d < DAYS_PER_WEEK; d++) {
      // Simulate "crazy" activity: high chance of being active, clumps of intense days
      const rand = Math.random();
      let level: ActivityLevel = 0;
      let count = 0;

      // Make recent weeks more active to show current momentum
      const recencyBoost = w > 40 ? 0.2 : 0;
      
      if (rand < 0.2 - recencyBoost) {
        level = 0;
      } else if (rand < 0.5) {
        level = 1;
        count = Math.floor(Math.random() * 3) + 1;
      } else if (rand < 0.75) {
        level = 2;
        count = Math.floor(Math.random() * 4) + 4;
      } else if (rand < 0.9) {
        level = 3;
        count = Math.floor(Math.random() * 5) + 8;
      } else {
        level = 4;
        count = Math.floor(Math.random() * 10) + 15;
      }

      week.push({
        date: new Date(currentDate),
        level,
        count: level === 0 ? 0 : count,
      });

      // Advance one day
      currentDate.setDate(currentDate.getDate() + 1);
    }
    data.push(week);
  }

  return data;
};

// --- Components ---

const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    role="img"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.541l5.097 4.406c.368.323.749.56 1.146.714.399.155.814.216 1.25.176.435-.04.852-.164 1.254-.374a3.11 3.11 0 0 0 1.04-.847l4.372-5.746c.251-.33.32-.718.23-1.096-.089-.379-.327-.687-.674-.872-.347-.184-.736-.211-1.1-.077-.365.134-.658.423-.82.812l-3.793 4.98c-.145.19-.345.318-.58.371-.234.053-.478.026-.696-.078-.22-.103-.404-.265-.53-.464-.127-.199-.174-.439-.136-.677l3.794-4.98c.415-.544.512-1.256.26-1.89-.253-.633-.787-1.109-1.442-1.284a1.996 1.996 0 0 0-1.574.15l-4.14 2.72c-.417.274-.683.71-.741 1.21-.059.501.105 1.002.457 1.38l3.96 4.24a1.268 1.268 0 0 0 .867.382 1.26 1.26 0 0 0 .862-.373 1.223 1.223 0 0 0 .366-.864 1.233 1.233 0 0 0-.361-.861l-3.41-3.65c-.158-.17-.376-.264-.606-.264a.837.837 0 0 0-.616.273.882.882 0 0 0-.256.621c0 .236.09.462.251.628l4.14 4.43c.316.338.751.528 1.21.528.457 0 .891-.188 1.206-.525a1.72 1.72 0 0 0 .444-1.214c0-.462-.178-.9-.494-1.23l-3.96-4.24a1.054 1.054 0 0 1-.225-.972 1.025 1.025 0 0 1 .533-.715l4.14-2.72c.321-.21.723-.235 1.066-.067.342.169.587.48.653.849.066.368-.046.745-.297 1.01l-1.922 2.052A17.931 17.931 0 0 0 13.483 0z" />
  </svg>
);

const Tooltip = ({ activity, children }: { activity: DayActivity; children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-2 bg-[#1a1c23] border border-white/10 rounded-lg shadow-2xl z-50 pointer-events-none flex flex-col items-center">
          <span className="text-white text-xs font-bold mb-1">
            {activity.count === 0 ? "No" : activity.count} submissions
          </span>
          <span className="text-gray-400 text-[10px] font-medium">
            {activity.date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
          {/* Tooltip arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1a1c23]"></div>
        </div>
      )}
    </div>
  );
};

const CodingActivity = () => {
  const activityData = useMemo(() => generateActivityData(), []);

  // Extract month labels based on the first day of each week
  const monthLabels = useMemo(() => {
    const labels: { month: string; colIndex: number }[] = [];
    let currentMonth = -1;

    activityData.forEach((week, index) => {
      const month = week[0].date.getMonth();
      // Only add a label if the month changes and we're not at the very beginning
      if (month !== currentMonth && index > 0) {
        labels.push({ month: MONTHS[month], colIndex: index });
        currentMonth = month;
      } else if (index === 0) {
        currentMonth = month;
      }
    });
    return labels;
  }, [activityData]);

  // Framer motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: 0.2 },
    },
  };

  const colVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
  };

  return (
    <section id="activity" className="relative py-24 px-4 overflow-hidden">
      {/* Ambient glowing background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -mt-[400px] -ml-[400px]"
        >
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ffa116]/5 rounded-full blur-[120px]" />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-12 flex flex-col items-center md:items-start"
        >
          <div className="flex items-center gap-2 mb-3">
            <Code2 className="w-6 h-6 text-green-400" />
            <h2 className="text-3xl md:text-4xl font-black text-white">Coding Activity</h2>
          </div>
          <p className="text-gray-400 text-sm">Consistency is key. My daily contributions across platforms over the last year.</p>
        </motion.div>

        {/* Heatmap Card wrapped in TiltCard and Motion for entrance */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <TiltCard intensity={5} className="w-full" accent="#26a641">
            <div className="rounded-[24px] border border-white/[0.08] bg-[#0a0f1a]/80 backdrop-blur-2xl shadow-2xl p-6 md:p-8 overflow-hidden relative group">
              
              {/* Top Header stats area simulating LeetCode */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-white/5 pb-6">
                
                {/* Left Stats */}
                <div className="flex items-center gap-3">
                  <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-emerald-300 to-green-600 drop-shadow-sm tracking-tighter">
                    847
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-300">submissions</span>
                    <span className="text-xs font-semibold text-gray-500">in the past year</span>
                  </div>
                  <Info className="w-4 h-4 text-gray-500 cursor-pointer hover:text-white transition-colors ml-1 mt-1" />
                </div>

                {/* Right Stats panel */}
                <div className="flex flex-wrap items-center gap-6 md:gap-8 text-sm font-medium text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>Total active days: <span className="text-white font-bold">294</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-orange-500" />
                    <span>Max streak: <span className="text-white font-bold">42</span></span>
                  </div>
                  
                  {/* Dropdown mock */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer transition-colors text-white text-xs">
                    Current <ChevronDown className="w-3 h-3" />
                  </div>
                </div>
              </div>

              {/* Scrollable Graph Area */}
              <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
                <div className="min-w-[750px]">
                  
                  {/* The Grid */}
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex gap-[3px]"
                  >
                    {activityData.map((week, wIndex) => (
                      <motion.div key={wIndex} variants={colVariants} className="flex flex-col gap-[3px]">
                        {week.map((day, dIndex) => (
                          <Tooltip key={dIndex} activity={day}>
                            <motion.div
                              animate={day.level === 4 ? { scale: [1, 1.15, 1], opacity: [1, 0.8, 1] } : {}}
                              transition={{ repeat: Infinity, duration: 2 + (dIndex % 3), ease: "easeInOut" }}
                              className="w-[11px] h-[11px] md:w-[13px] md:h-[13px] rounded-[3px] transition-all duration-300 hover:scale-[1.8] hover:-translate-y-1 hover:ring-2 hover:ring-white/40 hover:shadow-2xl hover:z-30 relative z-10 cursor-pointer"
                              style={{ 
                                backgroundColor: LEVEL_COLORS[day.level],
                                // Subtle glow for high activity cells
                                boxShadow: day.level >= 3 ? `0 0 10px ${LEVEL_COLORS[day.level]}55` : 'none',
                                // Dark cells are slightly less opaque
                                opacity: day.level === 0 ? 0.35 : 1
                              }}
                            />
                          </Tooltip>
                        ))}
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Month Labels */}
                  <div className="relative h-6 mt-3 text-[10px] md:text-xs font-semibold text-gray-500">
                    {monthLabels.map((label, idx) => {
                      // Calculate position based on column index (width of col is 13px + 3px gap = 16px)
                      // We use percentage or direct offset. Since it's exactly 52 cols, we can place them absolutely.
                      // 100% width = WEEKS cols. So (colIndex / WEEKS) * 100 %
                      const leftPercent = (label.colIndex / WEEKS) * 100;
                      return (
                         <span 
                           key={idx} 
                           className="absolute top-0 transform -translate-x-1/2"
                           style={{ left: `${leftPercent}%` }}
                         >
                           {label.month}
                         </span>
                      );
                    })}
                  </div>

                </div>
              </div>

              {/* Bottom Actions Row: Legend + Button */}
              <div className="mt-8 relative flex flex-col md:flex-row items-center justify-center gap-6 border-t border-white/5 pt-6 p-2">
                
                {/* Check Real Activity CTA Button */}
                <div className="relative group/btn">
                  {/* Glowing background ring */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#ffa116] via-orange-500 to-[#ffa116] opacity-30 blur-md group-hover/btn:opacity-100 group-hover/btn:duration-200 transition-all duration-500" />
                  
                  <a 
                    href="https://leetcode.com/u/Kp_prajapati/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center gap-3 px-8 py-3 rounded-full bg-[#0a0f1a] border border-[#ffa116]/40 text-white font-bold hover:bg-[#ffa116]/10 transition-colors duration-300 overflow-hidden"
                  >
                    <LeetCodeIcon className="w-5 h-5 text-[#ffa116]" />
                    <span className="relative z-10">Check Real Activity</span>
                    <ArrowRight className="w-4 h-4 opacity-60 group-hover/btn:translate-x-1 group-hover/btn:opacity-100 transition-all" />
                    
                    {/* Hover light sweep effect inside button */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                  </a>
                </div>

                {/* Graph Legend (Right aligned on desktop) */}
                <div className="md:absolute right-0 flex items-center justify-end gap-2 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                  <span>Less</span>
                  <div className="flex gap-[3px]">
                    {[0, 1, 2, 3, 4].map((level) => (
                      <div 
                        key={level} 
                        className="w-[11px] h-[11px] rounded-[3px]"
                        style={{ backgroundColor: LEVEL_COLORS[level as ActivityLevel], opacity: level === 0 ? 0.7 : 1 }}
                      />
                    ))}
                  </div>
                  <span>More</span>
                </div>
              </div>

            </div>
          </TiltCard>
        </motion.div>

      </div>
    </section>
  );
};

export default CodingActivity;
