// PROTOTYPE - NOT FOR PRODUCTION
// Question: Is fast lane-switching plus the take-another-passenger risk worth replaying in 2-3 minute runs?
// Date: 2026-11-24
// Every tuning value lives here, each with value, min, max and step. The game reads them live
// through tune.<name> (index.html); the tweak panel, an add-on, writes them back here.
// Distances are in road units (1 unit = 1 lane width, shown as 1 m); times in seconds.
window.CONFIG = {
  seed: 1, // every gameplay random call reads rng(), seeded from this (or ?seed= in the address)
  volume: { value: 0.5, min: 0, max: 1, step: 0.05 },
  musicVolume: { value: 0.55, min: 0, max: 1, step: 0.05 },   // dhol beat, relative to volume

  // ---- Speed (units per second) ----
  baseSpeed: { value: 17, min: 8, max: 30, step: 0.5 },        // speed at the start of a run
  accel: { value: 0.16, min: 0, max: 1, step: 0.01 },          // speed gained per second of driving
  passengerSpeed: { value: 0.7, min: 0, max: 3, step: 0.05 },  // speed gained per passenger picked up
  maxSpeed: { value: 46, min: 20, max: 80, step: 1 },          // speed cap
  recoverRate: { value: 7, min: 1, max: 30, step: 0.5 },       // units/s² back toward target speed after a crash

  // ---- Lanes ----
  laneSnap: { value: 24, min: 5, max: 60, step: 1 },           // how fast the rickshaw slides into its lane (1/s); higher = snappier
  swipeDist: { value: 34, min: 10, max: 120, step: 2 },        // logical px a finger moves to count as a swipe

  // ---- Score ----
  multPerPassenger: { value: 0.2, min: 0, max: 1, step: 0.05 },// score multiplier added per passenger
  multMax: { value: 5, min: 1, max: 10, step: 0.5 },           // multiplier cap
  pickupScore: { value: 50, min: 0, max: 500, step: 5 },       // points per passenger (× multiplier)
  nearMissScore: { value: 15, min: 0, max: 200, step: 5 },     // points for slipping past a hazard in the next lane
  scorePerUnit: { value: 0.5, min: 0.1, max: 5, step: 0.1 },   // points per unit driven (× multiplier)

  // ---- Crash and police chase (the staged failure) ----
  crashSlow: { value: 0.5, min: 0.1, max: 1, step: 0.05 },     // speed kept after the first crash
  chaseTime: { value: 8, min: 2, max: 20, step: 0.5 },         // seconds of clean driving to shake off the police
  invulnTime: { value: 1.4, min: 0.2, max: 4, step: 0.1 },     // seconds after a crash when nothing can hit you

  // ---- Challenge ramp ----
  safeTime: { value: 8, min: 0, max: 20, step: 0.5 },          // opening seconds with no hazards, only passengers
  firstTroubleTime: { value: 20, min: 10, max: 40, step: 1 },  // when doubles, tempos and cycles start (20–30 s trouble)
  rampTime: { value: 90, min: 20, max: 300, step: 5 },         // seconds from first trouble to full difficulty
  rowTimeStart: { value: 1.25, min: 0.5, max: 3, step: 0.05 }, // seconds between hazard rows at the start
  rowTimeEnd: { value: 0.62, min: 0.35, max: 2, step: 0.01 },  // seconds between hazard rows at full difficulty
  fairWindow: { value: 0.5, min: 0.2, max: 1.5, step: 0.05 },  // two hazards arriving this close in time count as one row (a lane always stays free)
  doubleChance: { value: 0.3, min: 0, max: 1, step: 0.05 },    // chance of a two-hazard row at first trouble
  doubleChanceMax: { value: 0.7, min: 0, max: 1, step: 0.05 }, // ...at full difficulty
  busChance: { value: 0.12, min: 0, max: 1, step: 0.01 },      // chance a row is a bus (after first trouble + 8 s)
  passengerChance: { value: 0.45, min: 0, max: 1, step: 0.05 },// chance a row also has a passenger
  laneChangeChance: { value: 0.35, min: 0, max: 1, step: 0.05 },// chance a tempo changes lane (grows with difficulty)
  cowWanderChance: { value: 0.3, min: 0, max: 1, step: 0.05 }, // chance a cow strolls into the next lane (later on)

  // ---- Hazard speeds (units per second, same direction as you) ----
  cycleSpeed: { value: 5, min: 0, max: 15, step: 0.5 },
  tempoSpeed: { value: 9, min: 0, max: 20, step: 0.5 },
  busSpeed: { value: 7, min: 0, max: 20, step: 0.5 },
  tempoShift: { value: 1.7, min: 0.3, max: 5, step: 0.1 },     // lanes per second when a tempo changes lane
  cowShift: { value: 0.55, min: 0.1, max: 3, step: 0.05 },     // lanes per second when a cow wanders
};
