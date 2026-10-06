export const PORTFOLIO_DATA = {
  hero: {
    eyebrow: "HELLO, I'M",
    name: "SHAINE THOMAS",
    role: "GAME DESIGNER",
    tagline: 'I design systems, mechanics and experiences that make players want to try "one more time."',
    positioningNote: "I don't just document ideas — I design and build playable experiences and game systems.",
    skillTags: [
      "GAME MECHANICS",
      "SYSTEMS DESIGN",
      "LEVEL DESIGN",
      "GAME LOOPS",
      "PROGRESSION",
      "PLAYER EXPERIENCE",
      "PROTOTYPING"
    ],
    hudList: [
      { text: "IDEAS", checked: true },
      { text: "MECHANICS", checked: true },
      { text: "SYSTEMS", checked: true },
      { text: "PLAYTESTS", checked: true },
      { text: "BETTER GAMES", checked: true }
    ],
    quote: "Games are better questions than answers."
  },

  // First / Hero Project: GRAPPLEDEVIL
  heroProject: {
    id: "grappledevil",
    title: "GRAPPLEDEVIL",
    subtitle: "MOMENTUM + GRAPPLING + TIMING",
    category: "FEATURED GAME // HERO CASE STUDY",
    shortDescription: "A precision platformer built around momentum, grappling, timing, and controlled chaos.",
    description: "GrappleDevil is a challenging physics-driven platformer where movement itself becomes the puzzle. Players use a grappling mechanic to navigate dangerous spaces, recover from mistakes, and master increasingly demanding levels.",
    image: "/assets/grappledevil.jpg",
    tags: ["GRAPPLING", "MOVEMENT", "LEVEL DESIGN", "DIFFICULTY", "PLAYER FEEL"],
    framing: "MECHANIC → CHALLENGE → PLAYER EXPERIENCE",
    metrics: [
      { label: "Design Focus", value: "Pendulum Momentum" },
      { label: "Failure Loop", value: "Instant Sub-150ms Retry" },
      { label: "Pacing Curve", value: "Skill Mastery" }
    ],
    caseStudy: {
      problem: "Standard platformer jump inputs often feel binary and rigid. The design challenge was crafting a grappling hook mechanic that preserves physical momentum vector math while feeling intuitive, responsive, and forgiving under pressure.",
      goal: "Design a swing-and-release momentum system where every level room acts as a physical spatial puzzle, teaching players how to manipulate velocity vectors through environmental geometry.",
      playerExperience: "Players shift from hesitant grappling attempts to exhilarating flow-state maneuvers, using momentum conservation to swoop past deadly spike traps and magma chasms.",
      coreLoop: "Target Anchor Node → Fire Grapple → Conserve Swing Velocity → Release at Apex → Land Precision Momentum Vector",
      mechanics: [
        "Pendulum Vector Math: Dynamic swing acceleration calculated from hook attachment distance and gravity dampening.",
        "Apex Release Boost: Timing a release at peak swing arc converts angular momentum into 1.5x horizontal velocity burst.",
        "Tether Retraction: Players can pull themselves toward anchor points mid-swing to adjust arc radius dynamically.",
        "Forgiving Snap Windows: Soft magnetic collision snap on anchor targets prevents frustrating pixel-imperfect misses."
      ],
      playtestLearnings: [
        "Early testers lost momentum when colliding with vertical wall corners. Solution: Added rounded corner slip vectors that preserve 80% velocity upon corner contacts.",
        "Over-swinging led to off-screen deaths. Solution: Implemented subtle camera lead zooming in the direction of high-velocity trajectories."
      ]
    }
  },

  // Group 1: FEATURED GAMES (1 to 5)
  featuredGames: [
    {
      id: "grappledevil",
      title: "GRAPPLEDEVIL",
      category: "GAME DESIGN • LEVEL DESIGN • MECHANICS",
      description: "A precision platformer built around momentum, grappling, timing, and controlled chaos. Movement itself becomes the spatial puzzle.",
      tags: ["GRAPPLING", "MOVEMENT", "LEVEL DESIGN", "DIFFICULTY", "PLAYER FEEL"],
      image: "/assets/grappledevil.jpg",
      framing: "MECHANIC → CHALLENGE → PLAYER EXPERIENCE",
      caseStudy: {
        problem: "Standard platformer jumps can feel rigid. The goal was creating a momentum-driven grappling swing where movement vector math forms the core challenge.",
        goal: "Teach players swing arc momentum through level architecture rather than explicit text tutorials.",
        playerExperience: "Adrenaline-filled flow state where player timing converts swing momentum into exhilarating high-speed aerial recoveries.",
        coreLoop: "Anchor Tether → Swing Momentum → Apex Disengage → Precision Vault → Clear Spatial Hazard",
        mechanics: [
          "Dynamic Pendulum Swing: Physics-driven swing radius and angular velocity acceleration.",
          "Magnetic Anchor Targeting: Forgiving snap radius ensures players focus on trajectory rather than pixel precision.",
          "Sub-150ms Retry Loop: Instant respawn on hazard impact keeps friction at zero."
        ],
        playtestLearnings: [
          "Adjusted camera lead-ahead smoothing to reduce motion sickness during 2x speed swing releases."
        ]
      }
    },
    {
      id: "midnight-kallan",
      title: "MIDNIGHT KALLAN",
      category: "GAME DESIGN • STEALTH • LEVEL DESIGN",
      description: "A stealth-focused mobile game inspired by Kerala's night-time environments, built around tension, observation, movement and environmental storytelling.",
      tags: ["STEALTH", "LEVEL DESIGN", "PLAYER PSYCHOLOGY", "ENVIRONMENT", "MOBILE"],
      image: "/assets/midnight_kallan.jpg",
      framing: "OBSERVE → PLAN → MOVE → HIDE → ESCAPE",
      caseStudy: {
        problem: "Mobile stealth games often suffer from clunky touch camera controls that prevent players from assessing guard vision cones effectively.",
        goal: "Create a top-down tactical stealth system with transparent vision cone indicators and environmental distraction points tuned for mobile touch interaction.",
        playerExperience: "Tense tactical stealth where players weigh risk vs reward before darting between shadows in atmospheric Kerala Backwater manors.",
        coreLoop: "OBSERVE → PLAN → MOVE → HIDE → ESCAPE",
        mechanics: [
          "Stealth Vision Cones: Dynamic 3-stage guard awareness (Calm Green → Suspicious Yellow → Alert Red).",
          "Acoustic Distractions: Throwing pebbles or shaking foliage lures patrolling guards away from key objective paths.",
          "Shadow Concealment: Hiding inside unlit shadows reduces detection radius to zero."
        ],
        playtestLearnings: [
          "Players accidentally stepped into guard vision while tapping path destinations. Added path preview trajectory lines displaying detection risk."
        ]
      }
    },
    {
      id: "fruit-blast",
      title: "FRUIT BLAST",
      category: "GAME DESIGN • CASUAL • GAME LOOP",
      description: "A fast, accessible casual game built around simple interactions, satisfying feedback and repeatable short-session gameplay.",
      tags: ["CASUAL", "GAME LOOP", "FEEDBACK", "DIFFICULTY", "REPLAYABILITY"],
      image: "/assets/fruit_blast.jpg",
      framing: "SIMPLE MECHANIC → SATISFYING FEEDBACK → REPLAYABILITY",
      caseStudy: {
        problem: "Casual puzzle and slice games lose retention quickly if match input feedback lacks physical 'juice' or if sessions drag past 2 minutes.",
        goal: "Maximize moment-to-moment tactile juice (haptics, screen shake, ascending audio pitch) to create high replayability in 60-second sessions.",
        playerExperience: "Instant dopamine satisfaction where every slice or match burst rewards the player with vibrant visual fireworks.",
        coreLoop: "SIMPLE MECHANIC → SATISFYING FEEDBACK → REPLAYABILITY",
        mechanics: [
          "Juice Escalation: Pitch-ascending audio chimes on rapid combo slices.",
          "Combo Multipliers: Slicing 3+ fruits in a single swipe doubles score gain.",
          "Frictionless Restart: One-tap instant retry loop at session end."
        ],
        playtestLearnings: [
          "Session drop-off occurred at 90 seconds. Scaled session timers to 60 seconds with bonus time rewards on 5-combo streaks."
        ]
      }
    },
    {
      id: "buildcraft",
      title: "BUILDCRAFT",
      category: "GAME DESIGN • SYSTEMS • PROGRESSION",
      description: "A systems-driven game concept exploring construction, progression, player choice and long-term engagement.",
      tags: ["SYSTEMS", "PROGRESSION", "ECONOMY", "PLAYER CHOICE", "META GAME"],
      image: "/assets/buildcraft.jpg",
      framing: "COLLECT → BUILD → UPGRADE → UNLOCK → EXPAND",
      caseStudy: {
        problem: "Town building meta games can feel like passive waiting simulators if resource gathering isn't tightly bound to active player puzzle choices.",
        goal: "Design a interconnected economy where active puzzle choices directly fuel specific architectural building upgrades.",
        playerExperience: "Cozy yet strategic experience where players prioritize puzzle moves based on active town building resource needs.",
        coreLoop: "COLLECT → BUILD → UPGRADE → UNLOCK → EXPAND",
        mechanics: [
          "Direct Resource Conversion: Matching specific tile types generates stone, timber, or gold building materials.",
          "Structure Synergy Buffs: Constructing blacksmiths increases tile spawn rates of rare metal ores.",
          "Expanding Unlock Tree: Upgrading town hall opens new regional building blueprints."
        ],
        playtestLearnings: [
          "Tying building unlocks directly to puzzle power-ups increased meta building engagement by 40%."
        ]
      }
    },
    {
      id: "time-slip",
      title: "TIME SLIP",
      category: "GAME DESIGN • SYSTEMS • COMBAT • PUZZLE",
      description: "A 2D action-puzzle game where players fight alongside recordings of their own past actions. Time Slip explores what happens when your previous decisions become playable characters.",
      tags: ["TIME MANIPULATION", "ECHO SYSTEM", "COMBAT", "PUZZLES", "SYSTEM DESIGN"],
      image: "/assets/time_slip_featured.jpg",
      framing: "RECORD → ECHO → CO-OP → COMBINE → SOLVE",
      isPlayable: true,
      caseStudy: {
        problem: "Single-player action platformers rarely allow complex multi-agent combat strategies without requiring real co-op partners.",
        goal: "Create a transparent circular recording-playback buffer allowing players to orchestrate multi-cloned combat choreography alone.",
        playerExperience: "Transition from chaotic trial-and-error to satisfying mastery as you conduct a temporal symphony of your own past actions.",
        coreLoop: "RECORD YOUR ACTIONS → CREATE AN ECHO → FIGHT ALONGSIDE YOUR PAST SELF → COMBINE MULTIPLE ECHOES → SOLVE THE ENCOUNTER",
        mechanics: [
          "Circular Recording Buffer: 6-second state buffer recording position, velocity, and attack inputs at 60Hz.",
          "Phase Marking: Echo attacks apply glowing marks that player's active avatar can detonate for 3x damage.",
          "Desync Paradox Penalty: If a past Echo takes fatal damage in the current timeline, the loop breaks."
        ],
        playtestLearnings: [
          "Added translucent cyan silhouetting to Echo clones to distinguish them instantly from the active player avatar."
        ]
      }
    }
  ],

  // Group 2: GAME SYSTEMS & FEATURES (6 to 8)
  gameSystemsAndFeatures: [
    {
      id: "battle-royale-dm",
      title: "BATTLE ROYALE — DOWNTOWN MAFIA",
      category: "SYSTEM DESIGN • MULTIPLAYER • GAME FEATURE",
      description: "Designed and implemented a Battle Royale feature for Downtown Mafia, including player traversal, zone behavior, event systems, item interactions and multiplayer state synchronization.",
      tags: ["MULTIPLAYER", "SYSTEM DESIGN", "GAMEPLAY", "SIMULATION", "LIVE FEATURE"],
      image: "/assets/battle_royale.jpg",
      framing: "DESIGN PROBLEM → PLAYER BEHAVIOR → SYSTEM → IMPLEMENTATION → RESULT",
      caseStudy: {
        problem: "How do you create a Battle Royale loop inside an existing mobile game while maintaining readable movement, match pacing, and player clustering?",
        goal: "Implement dynamic shrinking gas zones and localized bounty events to force continuous player rotation across urban districts.",
        playerExperience: "High-mobility tactical encounters where city streets, subway lines, and rooftops become fluid battlegrounds.",
        coreLoop: "Infiltrate District → Loot Equipment → Navigate Shrinking Mafia Ring → Claim Bounty Events → Final Stand",
        mechanics: [
          "Dynamic Ring Shrink Algorithm: Gas perimeter shrinks based on active player density curves.",
          "Bounty Target Contracts: High-kill squads are marked on the map, encouraging player hunting.",
          "Subway Fast Travel: High-risk underground transport lines that allow rapid repositioning across gas zones."
        ],
        playtestLearnings: [
          "Subway camping was overpowered. Added environmental poison gas flushes inside stations to prevent permanent turtling."
        ]
      }
    },
    {
      id: "royale-forge",
      title: "ROYALE FORGE",
      category: "GAME DESIGN • PROGRESSION • ECONOMY",
      description: "A progression and reward system designed around player engagement, customization and seasonal progression.",
      tags: ["PROGRESSION", "ECONOMY", "REWARDS", "LIVE OPS", "PLAYER MOTIVATION"],
      image: "/assets/royale_forge.jpg",
      framing: "COSMETIC VALUE vs PROGRESSION VALUE vs POWER VALUE vs ECONOMIC VALUE",
      caseStudy: {
        problem: "Seasonal progression passes often feel pay-to-win or overly grindy if free reward tracks lack meaningful cosmetic unlocks.",
        goal: "Design a dual-track Battle Pass economy that balances cosmetic prestige, progression velocity, and player retention sinks without pay-to-win mechanics.",
        playerExperience: "Satisfying daily sense of advancement where every match played contributes visible progress toward desired weapon blueprints.",
        coreLoop: "Complete Challenges → Earn Battle Pass EXP → Unlock Seasonal Tiers → Claim Cosmetics & Crafting Materials",
        mechanics: [
          "Dual-Track Progression: Free and Premium reward tracks synced to identical EXP gain milestones.",
          "Value Matrix Separation: Strict separation between Cosmetic Value, Progression Value, and Power Sinks.",
          "Catch-Up Boost Sinks: Mid-season quests offering 2x EXP for players who fell behind."
        ],
        playtestLearnings: [
          "Players stalled around Tier 25. Re-balanced early tier EXP requirements to create early momentum."
        ]
      }
    },
    {
      id: "tower-bloxx-rebuild",
      title: "TOWER BLOXX",
      category: "GAME DESIGN • PHYSICS • GAME FEEL • RECREATION",
      description: "A recreation study focused on understanding the physics, timing, feedback and nostalgic game feel behind Tower Bloxx.",
      tags: ["GAME FEEL", "PHYSICS", "TIMING", "REVERSE ENGINEERING", "CASUAL DESIGN"],
      image: "/assets/tower_bloxx.jpg",
      framing: "AIM → TIMING → PLACEMENT → RISK → REWARD → RETRY",
      caseStudy: {
        problem: "Deconstructed a simple but highly engaging arcade game loop to understand why pendulum physics and alignment feel addicting.",
        goal: "Reverse-engineer swing velocity math, drop inertia, stack sway dampening, and audio-visual combo feedback.",
        playerExperience: "Nostalgic, addicting arcade feel where perfect alignment creates a satisfying visual stack snapping effect.",
        coreLoop: "AIM → TIMING → PLACEMENT → RISK → REWARD → RETRY",
        mechanics: [
          "Harmonic Sway Equation: Stack wobble angle calculated based on height center-of-mass offset.",
          "Combo Snap: Perfect drops within 3px align tolerance lock the block in place and eliminate lower stack sway.",
          "Wind Turbulence: Higher altitudes introduce wind vectors that alter crane swing dampening."
        ],
        playtestLearnings: [
          "Stack wobble became unwinnable past 30 floors. Introduced 'Balcony Anchor Blocks' every 10 floors to reset stack center of gravity."
        ]
      }
    }
  ],

  // Design Lab Entries
  designLab: [
    {
      id: "lab-01",
      number: "01",
      title: "WHY DOES LEVEL DEVIL FEEL SO HARD?",
      category: "DIFFICULTY DESIGN",
      description: "Breaking down timing windows, player expectation, deception and failure loops.",
      readTime: "5 MIN READ",
      content: {
        summary: "Level Devil captivates millions of players because it understands the delicate balance between expectation subversion and instant iteration.",
        keyTakeaways: [
          "Expectation Framing: The game sets standard platformer rules in level 1 to establish mental models, then systematically subverts them.",
          "Sub-200ms Respawn Loop: By removing any death penalty animations, the friction of failure drops to zero.",
          "Humor as Emotion Cushion: When a trap occurs, the visual bounce and sound design convert anger into laughter.",
          "Mastery Pattern Recognition: Once a player realizes 'nothing is as it seems', platforming turns into active spatial detective work."
        ]
      }
    },
    {
      id: "lab-02",
      number: "02",
      title: "REBUILDING TOWER BLOXX",
      category: "GAME FEEL",
      description: "Reverse-engineering the physics and timing that make a simple stacking game satisfying.",
      readTime: "7 MIN READ",
      content: {
        summary: "A deep dive into why 2007's Tower Bloxx had superior 'game feel' compared to modern casual stacking clones.",
        keyTakeaways: [
          "Physical Weight Simulation: Blocks don't drop instantly; they inherit crane sway velocity vectors at the moment of release.",
          "Audio-Visual Snap Juice: Perfect alignments trigger a screen shake + pitch-ascending chime combo that reinforces dopamine reward.",
          "Dynamic Center of Mass: As stack height grows, harmonic oscillation frequency decreases, producing dramatic swaying tops."
        ]
      }
    },
    {
      id: "lab-03",
      number: "03",
      title: "DESIGNING A BETTER EXTRACTION LOOP",
      category: "SYSTEM DESIGN",
      description: "Exploring risk, reward, inventory loss and player decision-making for a mobile game.",
      readTime: "6 MIN READ",
      content: {
        summary: "Analyzing gear anxiety in loot extraction games and designing progression sinks that reward bold plays.",
        keyTakeaways: [
          "Gear Loss Mitigation: Converting lost gear into 'Salvage Points' mitigates player loss aversion.",
          "Escalating Extraction Time: The longer a player stays in raid, the higher the loot multiplier, creating a natural greed curve.",
          "Asymmetric Map Information: Giving solo players stealth radar pings keeps match matchmaking fair against 3-man squads."
        ]
      }
    },
    {
      id: "lab-04",
      number: "04",
      title: "MEMORY / ECHO SYSTEM",
      category: "MECHANICS",
      description: "Exploring how recorded player behavior can become an active gameplay system.",
      readTime: "8 MIN READ",
      content: {
        summary: "Technical breakdown of temporal recording buffers and how past ghost clones can act as dynamic combat partners.",
        keyTakeaways: [
          "Circular State Buffers: Storing position, rotation, and input flags per tick (60Hz) using low-footprint delta compression.",
          "Paradox Prevention: Establishing rules for what happens when an echo's environmental target is removed in the present timeline.",
          "Co-Op Mechanics for Solo Players: Designing single-player puzzles that require 3 simultaneous actions across time offsets."
        ]
      }
    },
    {
      id: "lab-05",
      number: "05",
      title: "DIFFICULTY WITHOUT CHEAPNESS",
      category: "LEVEL DESIGN",
      description: "Designing hard levels where failure teaches the player rather than simply punishing them.",
      readTime: "6 MIN READ",
      content: {
        summary: "Guiding principles for fair difficulty design in challenging action and puzzle games.",
        keyTakeaways: [
          "Clear Sightlines: Never hide fatal hazards off-screen or behind camera occlusions.",
          "Consistent Rulesets: If a red hazard kills the player in stage 1, it must never suddenly become a safe platform in stage 5.",
          "Gradual Layering: Introduce mechanic A, introduce hazard B, then combine A + B in a climax room."
        ]
      }
    }
  ],

  // Game Designer Principles
  designPhilosophy: [
    {
      number: "01",
      title: "DESIGN FOR THE PLAYER",
      quote: "Start with what the player should feel and do.",
      detail: "Game design isn't about flexing complex code architecture—it's about evoking specific feelings of tension, triumph, mastery, or discovery. Systems serve emotion."
    },
    {
      number: "02",
      title: "SYSTEMS OVER FEATURES",
      quote: "A feature matters only when it creates meaningful player behavior.",
      detail: "Instead of bloating a game with 50 static items, build 5 interconnected mechanics that interact in 500 emergent, player-driven ways."
    },
    {
      number: "03",
      title: "FAILURE SHOULD TEACH",
      quote: "Good difficulty makes players understand why they failed.",
      detail: "If dying feels unfair or wastes time, players drop off. If dying gives valuable information or an instant retry button, it fuels 'one more try.'"
    },
    {
      number: "04",
      title: "ITERATE THROUGH PLAY",
      quote: "The first design is a hypothesis. Playtesting reveals the truth.",
      detail: "Great game design happens in playtesting. Rapid graybox prototypes reveal core loop flaws early when they are painless to fix."
    },
    {
      number: "05",
      title: "MAKE SIMPLE THINGS DEEP",
      quote: "Strong games often come from a small number of understandable mechanics interacting well.",
      detail: "Deep gameplay emerges from atomic mechanics that layer elegantly, creating high skill ceilings without overwhelming new players."
    }
  ],

  pipeline: [
    { id: "step-1", label: "IDEA", desc: "High-concept spark or player fantasy" },
    { id: "step-2", label: "PLAYER PROBLEM", desc: "Identify core emotion or friction point" },
    { id: "step-3", label: "CORE MECHANIC", desc: "Design atomic player input/output loop" },
    { id: "step-4", label: "SYSTEM", desc: "Connect mechanic to economy & progression" },
    { id: "step-5", label: "PROTOTYPE", desc: "Build rapid graybox prototype" },
    { id: "step-6", label: "PLAYTEST", desc: "Observe unguided players & friction points" },
    { id: "step-7", label: "ITERATION", desc: "Refine game feel, pacing, and feedback" },
    { id: "step-8", label: "PLAYER EXPERIENCE", desc: "Polished, cohesive gameplay experience" }
  ],

  about: {
    bio: [
      "I'm Shaine Thomas, a Computer Science graduate and Game Designer focused on systems, mechanics and player experience.",
      "My technical background gives me a structured approach to game design — I like taking an idea apart, understanding why it works, prototyping it, and iterating until the experience feels right.",
      "I don't just document ideas — I design and build playable experiences, game loops, progression systems, and level design challenges."
    ],
    timeline: [
      { step: "COMPUTER SCIENCE", detail: "Algorithms, Data Structures & Math Foundation" },
      { step: "SOFTWARE DEVELOPMENT", detail: "Full-stack Web Applications & Interactive Tools" },
      { step: "GAME SYSTEMS", detail: "State Machines, Physics Simulation & Economy Models" },
      { step: "GAME DESIGN", detail: "Mechanics, Level Pacing, UX & Player Psychology" },
      { step: "BUILDING BETTER GAMES", detail: "Creating Experiences That Keep Players Coming Back" }
    ]
  },

  // Game Designer Focused Skills List
  skills: {
    gameDesign: [
      "Game Mechanics",
      "Game Systems",
      "Level Design",
      "Game Loops",
      "Progression",
      "Economy",
      "Difficulty Design",
      "Player Psychology",
      "Balancing",
      "Prototyping"
    ],
    production: [
      "Rapid Prototyping",
      "Playtesting",
      "Iteration",
      "Feature Design",
      "Technical Design"
    ],
    tools: [
      "Godot",
      "Phaser / JavaScript",
      "Figma",
      "Photoshop",
      "Git"
    ]
  },

  experience: {
    company: "DYNAMICNEXT",
    role: "Junior Web Application Developer",
    period: "2025 — Present",
    description: "Designing and implementing game-related systems, multiplayer features, and interactive player experiences.",
    highlights: [
      "Battle Royale zone movement algorithms and player clustering mechanics",
      "Multiplayer state synchronization & event notification triggers",
      "Game UI design systems & custom HUD components",
      "Simulation & math modeling for seasonal progression and economy balances",
      "Live dynamic world events & quest progression systems"
    ]
  },

  contact: {
    heading: "LET'S BUILD SOMETHING PLAYABLE.",
    subheading: "Have a game, mechanic or system worth exploring?",
    email: "shaine.thomas14@gmail.com",
    github: "https://github.com/Shainethomas",
    linkedin: "https://www.linkedin.com/in/shaine-thomas-a4690324b/"
  }
};
