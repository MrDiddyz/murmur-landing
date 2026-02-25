README.md
🎧 MurMurLayer
Psycho‑Reactive Audio Visual Player (Next.js + WebAudio + GPU Canvas)
MurMurLayer is a modular, high‑performance audio‑reactive MP3 player with psychedelic image visualization, powered by WebAudio, Canvas, and a custom performance‑adaptive rendering engine.
This project is structured for scalability, GPU efficiency, and real‑time signal processing, all wrapped in a retro‑Winamp‑inspired UI with a leopard‑skin theme.

---

🚀 Features
Audio Engine
• WebAudio Graph + Analyzer
• 10‑Band Parametric EQ
• RMS + Bass/Mid/Treble energy extraction
• Playlist playback
• Low‑latency pipeline
Visual Engine
• Psychedelic slice‑warp renderer
• Energy‑driven glow, scale, rotation
• FPS‑adaptive throttling
• Lazy image decode & GPU upload
• 60fps target loop
State Bus
• Global reactive store
• Tracks, images, playback state
• EQ values, audio metrics
• Module interoperability
Performance Monitor
• FPS tracking
• Memory sampling
• Analyzer load feedback
• Auto‑reduce complexity

---

📦 Project Structure
/core
  audioEngine.ts
  visualEngine.ts
  stateBus.ts
  performanceMonitor.ts

/ui
  playerControls.tsx
  playlist.tsx
  eqPanel.tsx
  uploadPanel.tsx
  visualCanvas.tsx

/app
  page.tsx

/styles
  leopardTheme.css


---

🛠 Installation
npm install
npm run dev

Open:
http://localhost:3000/
