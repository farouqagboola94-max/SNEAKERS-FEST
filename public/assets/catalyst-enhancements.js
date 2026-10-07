// =============================================================================
// CATALYST OS / SNEAKERS FEST '26 — LAGOS STREET CULTURE ENHANCEMENT ENGINE
// Fully autonomous, non-destructive client enhancements for sneakers-fest-55
// =============================================================================

(function() {
  'use strict';

  // Wait until DOM is ready
  function initWhenReady() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', bootstrapEnhancements);
    } else {
      bootstrapEnhancements();
    }
  }

  function bootstrapEnhancements() {
    // Check if container already exists
    if (document.getElementById('catalyst-lagos-experience')) return;

    // Build the main container and mount right after #root (or inside body)
    const experienceContainer = document.createElement('div');
    experienceContainer.id = 'catalyst-lagos-experience';

    experienceContainer.innerHTML = `
      <div class="lagos-divider"></div>

      <!-- 1. INSTAGRAM REELS & VIRAL HUB -->
      <section class="catalyst-module" id="lagos-viral-hub">
        <div class="catalyst-title-badge">⚡ INSTAGRAM VIRAL SUITE · @CATALYST00555</div>
        <h2 class="catalyst-h2">LAGOS VIRAL CULTURE & IG STORIES</h2>
        <p class="catalyst-subtext">West Africa's most electrifying sneakerhead congregation. Watch the festival energy unfold live, generate your verified 9:16 IG Story Access Card, and rep Lagos streetwear to the globe.</p>

        <!-- Viral Reels Grid -->
        <div class="reels-grid">
          <div class="reel-card card-3d">
            <div class="reel-video-container">
              <video src="/media/reel1.mp4" loop muted playsinline autoplay></video>
              <div class="reel-overlay">
                <div class="reel-author-tag">🔥 @sneakersfest · Muri Okunola</div>
                <div class="reel-actions">
                  <span style="font-size:12px; color:#FFE033; font-weight:700;">142.8K Plays</span>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="ig-button">Watch Reel ↗</a>
                </div>
              </div>
            </div>
            <div style="padding:16px;">
              <h4 style="margin:0 0 4px 0; font-size:16px; color:#FFF;">Festival Anthem Drop '26</h4>
              <p style="margin:0; font-size:12px; color:#8C8578;">Raw soundscapes from Victoria Island's asphalt arena.</p>
            </div>
          </div>

          <div class="reel-card card-3d">
            <div class="reel-video-container">
              <img src="/media/flyer.png" alt="Sneakers Fest Lagos Official Flyer" />
              <div class="reel-overlay">
                <div class="reel-author-tag">⚡ @catalyst00555 · Official</div>
                <div class="reel-actions">
                  <span style="font-size:12px; color:#FFE033; font-weight:700;">Dec 12, 2026</span>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="ig-button">Share Story ↗</a>
                </div>
              </div>
            </div>
            <div style="padding:16px;">
              <h4 style="margin:0 0 4px 0; font-size:16px; color:#FFF;">Lagos Streetprint Edition</h4>
              <p style="margin:0; font-size:12px; color:#8C8578;">200+ Rare Grails. 30+ Curated Brands. Zero Mid.</p>
            </div>
          </div>

          <div class="reel-card card-3d">
            <div class="reel-video-container">
              <img src="/media/story.png" alt="Sneakers Fest Lagos Story" />
              <div class="reel-overlay">
                <div class="reel-author-tag">🛡️ Gate Pass · VIP 01</div>
                <div class="reel-actions">
                  <span style="font-size:12px; color:#FFE033; font-weight:700;">Limited 500</span>
                  <a href="#tickets" class="ig-button">Get Pass 🎟️</a>
                </div>
              </div>
            </div>
            <div style="padding:16px;">
              <h4 style="margin:0 0 4px 0; font-size:16px; color:#FFF;">VIP Lounge Protocol</h4>
              <p style="margin:0; font-size:12px; color:#8C8578;">Priority legit-check fastlane & complimentary cocktail bar.</p>
            </div>
          </div>

          <div class="reel-card card-3d">
            <div class="reel-video-container">
              <img src="/media/hero2.png" alt="Sneakers Fest Lagos Culture" />
              <div class="reel-overlay">
                <div class="reel-author-tag">👟 Grails Showcase</div>
                <div class="reel-actions">
                  <span style="font-size:12px; color:#FFE033; font-weight:700;">Auction Wall</span>
                  <a href="#tickets" class="ig-button">Explore ↗</a>
                </div>
              </div>
            </div>
            <div style="padding:16px;">
              <h4 style="margin:0 0 4px 0; font-size:16px; color:#FFF;">The Sole Exhibition Vault</h4>
              <p style="margin:0; font-size:12px; color:#8C8578;">Museum-grade archival kicks live at Muri Okunola.</p>
            </div>
          </div>
        </div>

        <!-- 9:16 IG STORY PASS GENERATOR -->
        <div class="pass-creator-box glass-noir card-3d">
          <div>
            <div class="catalyst-title-badge" style="margin-bottom:12px;">🎨 CUSTOM PASSPORT ENGINE</div>
            <h3 style="font-size:26px; font-weight:800; margin:0 0 12px 0; color:#FFE033;">GENERATE YOUR 9:16 IG STORY PASS</h3>
            <p style="color:#A39E93; font-size:14px; line-height:1.6; margin-bottom:20px;">
              Type your handle and kick archetype to mint a crisp, high-res Lagos Sneakerhead Pass ready for your Instagram Story.
            </p>

            <div style="display:flex; flex-direction:column; gap:14px;">
              <div>
                <label style="display:block; font-size:12px; font-weight:700; color:#FFE033; margin-bottom:6px; font-family:'Space Mono', monospace;">YOUR IG HANDLE</label>
                <input type="text" id="pass-handle-input" value="@lagos_grailking" style="width:100%; box-sizing:border-box; background:#0B0907; border:1px solid rgba(245,166,35,0.4); padding:10px 14px; border-radius:10px; color:#FFF; font-size:14px; font-family:'Space Mono', monospace;">
              </div>
              <div>
                <label style="display:block; font-size:12px; font-weight:700; color:#FFE033; margin-bottom:6px; font-family:'Space Mono', monospace;">SNEAKER ARCHETYPE</label>
                <select id="pass-type-input" style="width:100%; box-sizing:border-box; background:#0B0907; border:1px solid rgba(245,166,35,0.4); padding:10px 14px; border-radius:10px; color:#FFF; font-size:14px;">
                  <option value="GRAIL COLLECTOR">👑 GRAIL COLLECTOR (Archival Heat)</option>
                  <option value="SKATE / STREET GRINDER">🛹 SKATE / STREET GRINDER (SBs Only)</option>
                  <option value="TECHWEAR PHALANX">🛡️ TECHWEAR PHALANX (GORE-TEX & Vibram)</option>
                  <option value="RETRO HOOPER">🏀 RETRO HOOPER (OG Jordans 85-98)</option>
                  <option value="DANFO RUNNER">⚡ DANFO RUNNER (Speed & Pure Energy)</option>
                </select>
              </div>
              <div style="display:flex; gap:12px; margin-top:8px;">
                <button id="render-pass-btn" class="grail-btn active" style="flex:1; padding:12px; font-size:13px; font-weight:800;">⚡ UPDATE PASS</button>
                <button id="download-pass-btn" class="grail-btn" style="padding:12px 18px; font-size:13px; background:#D4751A; border-color:#D4751A;">📥 DOWNLOAD</button>
              </div>
            </div>
          </div>

          <div class="canvas-preview-wrap">
            <canvas id="story-pass-canvas" width="360" height="640"></canvas>
          </div>
        </div>
      </section>

      <div class="lagos-divider"></div>

      <!-- 2. THREE.JS 3D GRAIL STUDIO -->
      <section class="catalyst-module" id="lagos-grail-studio">
        <div class="catalyst-title-badge">🌐 WEBGL 3D GRAIL ARCHITECTURE</div>
        <h2 class="catalyst-h2">LAGOS PBR SNEAKER STUDIO</h2>
        <p class="catalyst-subtext">Real-time 3D parametric rendering of the official Sneakers Fest '26 silhouette. Rotate 360°, inspect the decoupled midsole, toggle wireframe telemetry, or trigger exploded assembly view.</p>

        <div class="grail-studio-viewport card-3d">
          <div id="threejs-canvas-target" style="width:100%; height:100%;"></div>
          <div class="grail-controls-bar">
            <button class="grail-btn active" id="btn-3d-rotate">🔄 Orbit</button>
            <button class="grail-btn" id="btn-3d-wireframe">🕸️ Wireframe</button>
            <button class="grail-btn" id="btn-3d-explode">💥 Exploded Sole</button>
            <button class="grail-btn" id="btn-3d-color">🎨 Danfo Yellow</button>
          </div>
        </div>
      </section>

      <div class="lagos-divider"></div>

      <!-- 3. NEURAL LEGIT CHECK AI SPECTROGRAM -->
      <section class="catalyst-module" id="lagos-legit-check">
        <div class="catalyst-title-badge">🔬 COMPUTER VISION VERIFICATION</div>
        <h2 class="catalyst-h2">AI LEGIT-CHECK SPECTROGRAM</h2>
        <p class="catalyst-subtext">Muri Okunola's on-site verification technology simulated in your browser. Switch between high-frequency UV stitch analysis, sole density scanning, and spectral material authentication.</p>

        <div class="legit-check-dashboard card-3d">
          <div class="scanner-viewscreen">
            <div class="scanner-grid-overlay"></div>
            <div class="scanner-laser-line"></div>
            <img id="scanner-preview-img" src="/media/flyer.png" style="max-height:85%; object-fit:contain; filter:contrast(1.2);" alt="Inspection Object">
            <div id="scanner-hud-tag" style="position:absolute; bottom:12px; left:12px; font-family:'Space Mono', monospace; font-size:11px; color:#00F0FF; background:rgba(0,0,0,0.7); padding:4px 8px; border-radius:4px; border:1px solid #00F0FF;">
              [SCAN: 365nm UV STITCH INTEGRITY]
            </div>
          </div>

          <div style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="font-size:11px; font-family:'Space Mono', monospace; color:#00F0FF; margin-bottom:8px;">SPECTRUM SCAN MODES:</div>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:20px;">
                <button class="grail-btn active mode-btn" data-mode="uv">🟣 365nm UV Light</button>
                <button class="grail-btn mode-btn" data-mode="xray">💀 X-Ray Density</button>
                <button class="grail-btn mode-btn" data-mode="thermal">🔥 Thermal Heatmap</button>
                <button class="grail-btn mode-btn" data-mode="rgb">🌈 True Color RGB</button>
              </div>

              <div style="background:#110E0B; border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:16px;">
                <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                  <span style="font-size:12px; color:#A39E93;">Stitch Pitch Deviation</span>
                  <span style="font-size:12px; color:#B8FF00; font-family:'Space Mono', monospace;">0.02mm (PASS)</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                  <span style="font-size:12px; color:#A39E93;">Midsole PU Compound Density</span>
                  <span style="font-size:12px; color:#B8FF00; font-family:'Space Mono', monospace;">0.34 g/cm³ (MATCH)</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                  <span style="font-size:12px; color:#A39E93;">UV Glow Blacklight Bleed</span>
                  <span style="font-size:12px; color:#B8FF00; font-family:'Space Mono', monospace;">ZERO (AUTHENTIC)</span>
                </div>
                <div style="display:flex; justify-content:space-between;">
                  <span style="font-size:12px; color:#A39E93;">Overall Verdict</span>
                  <span style="font-size:13px; font-weight:900; color:#FFE033; font-family:'Space Mono', monospace;">100% VERIFIED GRAIL</span>
                </div>
              </div>
            </div>

            <div style="margin-top:20px;">
              <button id="run-spectrogram-btn" class="grail-btn active" style="width:100%; padding:14px; font-size:14px; font-weight:900; background:#00F0FF; color:#0A0A0A; border-color:#00F0FF;">
                ⚡ TRIGGER LIVE RE-CALIBRATION
              </button>
            </div>
          </div>
        </div>
      </section>

      <div class="lagos-divider"></div>

      <!-- 4. LAGOS STREET CULTURE SOUNDBOARD -->
      <section class="catalyst-module" id="lagos-soundboard">
        <div class="catalyst-title-badge">🔊 TACTILE AUDIO FX · LAGOS SLANG</div>
        <h2 class="catalyst-h2">LAGOS STREET CULTURE SOUNDBOARD</h2>
        <p class="catalyst-subtext">Click any sound pad to fire synthesized Lagos sonic chimes and viral street affirmations directly through your browser audio engine.</p>

        <div class="soundboard-grid">
          <button class="sound-pad-btn card-3d" data-sound="nodull">
            <span class="pad-title">🔥 NO DULL YOURSELF!</span>
            <span class="pad-desc">Lagos Prime Directive · 440Hz punch synth</span>
          </button>
          <button class="sound-pad-btn card-3d" data-sound="opor">
            <span class="pad-title">⚡ OPOR GAN!</span>
            <span class="pad-desc">Massive Heat Confirmed · Sub bass boom</span>
          </button>
          <button class="sound-pad-btn card-3d" data-sound="zuzu">
            <span class="pad-title">👀 WHO DEY ZUZU?</span>
            <span class="pad-desc">Calling out fake pairs · High res filter</span>
          </button>
          <button class="sound-pad-btn card-3d" data-sound="muri">
            <span class="pad-title">📍 MURI OKUNOLA PUSH</span>
            <span class="pad-desc">VIP Gate Siren · 808 drop</span>
          </button>
          <button class="sound-pad-btn card-3d" data-sound="grail">
            <span class="pad-title">👑 GRAIL COPPED!</span>
            <span class="pad-desc">Victory fanfare · Arcade synth cascade</span>
          </button>
          <button class="sound-pad-btn card-3d" data-sound="danfo">
            <span class="pad-title">🚐 OSHODI EXPRESS!</span>
            <span class="pad-desc">Danfo double horn blast · Street frequency</span>
          </button>
        </div>
      </section>

      <div class="lagos-divider"></div>

      <!-- 5. SCRATCH-TO-WIN GOLDEN TICKET -->
      <section class="catalyst-module" id="lagos-scratch-ticket">
        <div class="catalyst-title-badge">🎟️ INSTANT WINNER PROTOCOL</div>
        <h2 class="catalyst-h2">SCRATCH FOR THE GOLDEN VOUCHER</h2>
        <p class="catalyst-subtext">Scratch the metallic Danfo foil below with your mouse or finger to uncover your exclusive Sneakers Fest '26 on-site discount code.</p>

        <div class="scratch-box card-3d">
          <div style="font-size:12px; color:#FFE033; font-family:'Space Mono', monospace; font-weight:700;">DECEMBER 12, 2026 · MURI OKUNOLA VIP PASS</div>
          <div class="scratch-canvas-container">
            <div class="scratch-secret">
              <span style="font-size:14px; font-weight:700; letter-spacing:0.1em; color:#0A0A0A;">CONGRATULATIONS!</span>
              <span style="font-size:28px; font-weight:900; color:#000; font-family:'Space Mono', monospace;">LAGOS55VIP</span>
              <span style="font-size:11px; font-weight:700; color:#3A2500;">₦2,500 OFF ANY FESTIVAL PASS</span>
            </div>
            <canvas id="scratch-canvas" width="320" height="160"></canvas>
          </div>
          <p id="scratch-hint" style="font-size:13px; color:#8C8578; margin:0;">Rub over the card surface to reveal code (50% to claim)</p>
        </div>
      </section>

      <div style="height:100px;"></div>
    `;

    // Append to document body
    document.body.appendChild(experienceContainer);

    // Initialize individual modules
    initIgPassGenerator();
    initThreeJsGrail();
    initSpectrogram();
    initSoundboard();
    initScratchTicket();
    initRadioDock();
    initCatalystCli();
  }

  // ===========================================================================
  // 1. IG STORY PASS GENERATOR (HTML5 2D Canvas)
  // ===========================================================================
  function initIgPassGenerator() {
    const canvas = document.getElementById('story-pass-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const handleInput = document.getElementById('pass-handle-input');
    const typeInput = document.getElementById('pass-type-input');
    const renderBtn = document.getElementById('render-pass-btn');
    const downloadBtn = document.getElementById('download-pass-btn');

    function drawPass() {
      const handle = (handleInput.value || '@lagos_grailking').toUpperCase();
      const type = typeInput.value || 'GRAIL COLLECTOR';

      // 9:16 background
      const grad = ctx.createLinearGradient(0, 0, 0, 640);
      grad.addColorStop(0, '#1C150B');
      grad.addColorStop(0.3, '#0A0A0A');
      grad.addColorStop(0.7, '#0D1B2A');
      grad.addColorStop(1, '#1A0F00');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 360, 640);

      // Cyber grid lines
      ctx.strokeStyle = 'rgba(245, 166, 35, 0.08)';
      ctx.lineWidth = 1;
      for (let y = 0; y < 640; y += 32) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(360, y);
        ctx.stroke();
      }

      // Border frame
      ctx.strokeStyle = 'rgba(255, 224, 51, 0.4)';
      ctx.lineWidth = 2;
      ctx.strokeRect(16, 16, 328, 608);

      // Gold corners
      ctx.fillStyle = '#FFE033';
      const corners = [[14,14], [340,14], [14,620], [340,620]];
      corners.forEach(([x, y]) => {
        ctx.fillRect(x, y, 6, 6);
      });

      // Top Tag
      ctx.fillStyle = '#D4751A';
      ctx.font = 'bold 10px monospace';
      ctx.fillText('CATALYST OS · VERIFIED SOLE PASS', 30, 48);

      // Main Header
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '900 24px -apple-system, sans-serif';
      ctx.fillText("SNEAKERS FEST '26", 30, 80);

      ctx.fillStyle = '#FFE033';
      ctx.font = 'bold 13px -apple-system, sans-serif';
      ctx.fillText('THE SOLE EXHIBITION · LAGOS', 30, 102);

      // Ticket Box
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.fillRect(30, 126, 300, 240);
      ctx.strokeStyle = 'rgba(245, 166, 35, 0.3)';
      ctx.strokeRect(30, 126, 300, 240);

      // Graphic sneaker icon / silhouette placeholder
      ctx.fillStyle = '#FFE033';
      ctx.beginPath();
      ctx.arc(180, 210, 50, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#0A0A0A';
      ctx.font = 'bold 36px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('SF', 180, 222);
      ctx.textAlign = 'left';

      // Pass Holder Handle
      ctx.fillStyle = '#A39E93';
      ctx.font = '10px monospace';
      ctx.fillText('PASS HOLDER:', 44, 300);

      ctx.fillStyle = '#00F0FF';
      ctx.font = 'bold 15px monospace';
      ctx.fillText(handle, 44, 322);

      // Archetype
      ctx.fillStyle = '#A39E93';
      ctx.font = '10px monospace';
      ctx.fillText('ARCHETYPE:', 44, 344);

      ctx.fillStyle = '#B8FF00';
      ctx.font = 'bold 11px monospace';
      ctx.fillText(type, 44, 358);

      // Details footer
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 12px monospace';
      ctx.fillText('DECEMBER 12, 2026', 30, 420);
      ctx.fillStyle = '#8C8578';
      ctx.font = '11px sans-serif';
      ctx.fillText('Muri Okunola Park · Victoria Island, Lagos', 30, 438);

      // Simulated Barcode
      ctx.fillStyle = '#FFF';
      for (let x = 30; x < 330; x += 4) {
        if (Math.sin(x * 12.3) > -0.2) {
          ctx.fillRect(x, 480, 2, 40);
        }
      }
      ctx.fillStyle = '#FFE033';
      ctx.font = '9px monospace';
      ctx.fillText('SF-26-LAG-994827-CATALYST-PASS', 30, 536);

      // Call to action
      ctx.fillStyle = '#D4751A';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('TAP LINK IN BIO · SNEAKERS-FEST-55', 30, 580);
    }

    drawPass();

    renderBtn.addEventListener('click', drawPass);
    handleInput.addEventListener('input', drawPass);
    typeInput.addEventListener('change', drawPass);

    downloadBtn.addEventListener('click', () => {
      const link = document.createElement('a');
      link.download = 'SneakersFest26-Lagos-Story-Pass.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  }

  // ===========================================================================
  // 2. THREE.JS 3D GRAIL STUDIO (WebGL Orbit & Explode)
  // ===========================================================================
  function initThreeJsGrail() {
    const container = document.getElementById('threejs-canvas-target');
    if (!container || typeof THREE === 'undefined') return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 480;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0A0A0A, 0.04);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 3, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Studio Lights
    const ambLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambLight);

    const goldLight = new THREE.PointLight(0xFFE033, 2.5, 30);
    goldLight.position.set(5, 6, 5);
    scene.add(goldLight);

    const cyanLight = new THREE.PointLight(0x00F0FF, 1.8, 30);
    cyanLight.position.set(-6, -2, -4);
    scene.add(cyanLight);

    // Parametric Sneaker Model Group
    const sneakerGroup = new THREE.Group();

    // 1. Outsole (Danfo yellow rubber)
    const outsoleMat = new THREE.MeshStandardMaterial({
      color: 0xFFE033,
      roughness: 0.3,
      metalness: 0.1
    });
    const outsoleGeom = new THREE.BoxGeometry(4.8, 0.6, 2.2);
    const outsoleMesh = new THREE.Mesh(outsoleGeom, outsoleMat);
    outsoleMesh.position.y = -1;
    sneakerGroup.add(outsoleMesh);

    // 2. Midsole (Air Cushion / React Foam)
    const midsoleMat = new THREE.MeshStandardMaterial({
      color: 0x1A1A1A,
      roughness: 0.6,
      metalness: 0.2
    });
    const midsoleGeom = new THREE.BoxGeometry(4.6, 0.5, 2.0);
    const midsoleMesh = new THREE.Mesh(midsoleGeom, midsoleMat);
    midsoleMesh.position.y = -0.4;
    sneakerGroup.add(midsoleMesh);

    // 3. Upper Leather (Lagos Ocher / Obsidian)
    const upperMat = new THREE.MeshStandardMaterial({
      color: 0xD4751A,
      roughness: 0.4,
      metalness: 0.3
    });
    const upperGeom = new THREE.CylinderGeometry(0.9, 1.2, 3.8, 16);
    upperGeom.rotateZ(Math.PI / 2);
    const upperMesh = new THREE.Mesh(upperGeom, upperMat);
    upperMesh.position.set(0.2, 0.6, 0);
    sneakerGroup.add(upperMesh);

    // 4. Heel Counter
    const heelMat = new THREE.MeshStandardMaterial({
      color: 0x00F0FF,
      roughness: 0.2,
      metalness: 0.6
    });
    const heelGeom = new THREE.SphereGeometry(1.0, 16, 16, 0, Math.PI);
    const heelMesh = new THREE.Mesh(heelGeom, heelMat);
    heelMesh.position.set(-1.8, 0.8, 0);
    heelMesh.rotation.y = -Math.PI / 2;
    sneakerGroup.add(heelMesh);

    // 5. Swoosh / Lightning Bolt Accent
    const accentMat = new THREE.MeshStandardMaterial({
      color: 0xFF2D7B,
      emissive: 0xFF2D7B,
      emissiveIntensity: 0.4
    });
    const accentGeom = new THREE.BoxGeometry(2.4, 0.2, 2.3);
    const accentMesh = new THREE.Mesh(accentGeom, accentMat);
    accentMesh.position.set(0.3, 0.6, 0);
    sneakerGroup.add(accentMesh);

    scene.add(sneakerGroup);

    // State controls
    let isRotating = true;
    let isWireframe = false;
    let isExploded = false;
    let currentColorIndex = 0;
    const colorPalette = [0xFFE033, 0x00F0FF, 0xFF2D7B, 0xB8FF00, 0xFFFFFF];

    document.getElementById('btn-3d-rotate').addEventListener('click', (e) => {
      isRotating = !isRotating;
      e.target.classList.toggle('active', isRotating);
    });

    document.getElementById('btn-3d-wireframe').addEventListener('click', (e) => {
      isWireframe = !isWireframe;
      e.target.classList.toggle('active', isWireframe);
      outsoleMat.wireframe = isWireframe;
      midsoleMat.wireframe = isWireframe;
      upperMat.wireframe = isWireframe;
    });

    document.getElementById('btn-3d-explode').addEventListener('click', (e) => {
      isExploded = !isExploded;
      e.target.classList.toggle('active', isExploded);
      if (isExploded) {
        outsoleMesh.position.y = -2.2;
        midsoleMesh.position.y = -0.8;
        upperMesh.position.y = 1.4;
        heelMesh.position.y = 1.8;
      } else {
        outsoleMesh.position.y = -1;
        midsoleMesh.position.y = -0.4;
        upperMesh.position.y = 0.6;
        heelMesh.position.y = 0.8;
      }
    });

    document.getElementById('btn-3d-color').addEventListener('click', () => {
      currentColorIndex = (currentColorIndex + 1) % colorPalette.length;
      outsoleMat.color.setHex(colorPalette[currentColorIndex]);
    });

    // Render loop
    function animate() {
      requestAnimationFrame(animate);
      if (isRotating) {
        sneakerGroup.rotation.y += 0.015;
      }
      renderer.render(scene, camera);
    }
    animate();

    // Resize handler
    window.addEventListener('resize', () => {
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      if (newW > 0 && newH > 0) {
        camera.aspect = newW / newH;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
      }
    });
  }

  // ===========================================================================
  // 3. NEURAL LEGIT CHECK SPECTROGRAM
  // ===========================================================================
  function initSpectrogram() {
    const previewImg = document.getElementById('scanner-preview-img');
    const hudTag = document.getElementById('scanner-hud-tag');
    const modeBtns = document.querySelectorAll('.mode-btn');
    const triggerBtn = document.getElementById('run-spectrogram-btn');
    if (!previewImg || !hudTag) return;

    modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        modeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const mode = btn.dataset.mode;

        if (mode === 'uv') {
          previewImg.style.filter = 'contrast(2) hue-rotate(240deg) saturate(3)';
          hudTag.textContent = '[SCAN: 365nm UV STITCH INTEGRITY]';
        } else if (mode === 'xray') {
          previewImg.style.filter = 'invert(1) grayscale(1) contrast(3)';
          hudTag.textContent = '[SCAN: HIGH FREQUENCY X-RAY DENSITY]';
        } else if (mode === 'thermal') {
          previewImg.style.filter = 'invert(0.3) saturate(5) hue-rotate(90deg)';
          hudTag.textContent = '[SCAN: THERMAL HEAT SINK DETECTOR]';
        } else {
          previewImg.style.filter = 'none';
          hudTag.textContent = '[SCAN: TRUE COLOR RGB MACRO]';
        }
      });
    });

    if (triggerBtn) {
      triggerBtn.addEventListener('click', () => {
        triggerBtn.textContent = '🔄 CALIBRATING SENSORS...';
        triggerBtn.disabled = true;
        setTimeout(() => {
          triggerBtn.textContent = '⚡ VERIFIED: 100% AUTHENTIC GRAIL';
          triggerBtn.style.background = '#B8FF00';
          triggerBtn.disabled = false;
        }, 1200);
      });
    }
  }

  // ===========================================================================
  // 4. LAGOS STREET CULTURE SOUNDBOARD (Web Audio API Synthesizer)
  // ===========================================================================
  function initSoundboard() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    function playTone(type) {
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const now = audioCtx.currentTime;

      if (type === 'nodull') {
        // Punchy synth bass
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.35);
        gain.gain.setValueAtTime(0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'opor') {
        // Heavy 808 Sub Boom
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(45, now + 0.5);
        gain.gain.setValueAtTime(0.7, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.5);
      } else if (type === 'zuzu') {
        // High alert chirps
        [0, 0.1, 0.2].forEach(delay => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'square';
          osc.frequency.setValueAtTime(880, now + delay);
          gain.gain.setValueAtTime(0.15, now + delay);
          gain.gain.exponentialRampToValueAtTime(0.01, now + delay + 0.08);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now + delay);
          osc.stop(now + delay + 0.08);
        });
      } else if (type === 'muri') {
        // Siren glide
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.linearRampToValueAtTime(750, now + 0.2);
        osc.frequency.linearRampToValueAtTime(400, now + 0.4);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.4);
      } else if (type === 'grail') {
        // Victory chord cascade
        [440, 554, 659, 880].forEach((freq, idx) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.06);
          gain.gain.setValueAtTime(0.25, now + idx * 0.06);
          gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.06 + 0.3);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now + idx * 0.06);
          osc.stop(now + idx * 0.06 + 0.3);
        });
      } else if (type === 'danfo') {
        // Dual horn blast
        [320, 390].forEach(freq => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(freq, now);
          gain.gain.setValueAtTime(0.2, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now);
          osc.stop(now + 0.35);
        });
      }
    }

    document.querySelectorAll('.sound-pad-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const sound = btn.dataset.sound;
        playTone(sound);
      });
    });
  }

  // ===========================================================================
  // 5. SCRATCH-TO-WIN GOLDEN TICKET
  // ===========================================================================
  function initScratchTicket() {
    const canvas = document.getElementById('scratch-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const hint = document.getElementById('scratch-hint');

    // Draw metallic Danfo yellow foil
    ctx.fillStyle = '#FFE033';
    ctx.fillRect(0, 0, 320, 160);

    // Decorative foil pattern
    ctx.strokeStyle = '#D4751A';
    ctx.lineWidth = 2;
    for (let i = 0; i < 320; i += 20) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + 20, 160);
      ctx.stroke();
    }

    ctx.fillStyle = '#0A0A0A';
    ctx.font = 'bold 15px -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('⚡ SCRATCH WITH MOUSE / TOUCH', 160, 85);
    ctx.font = '11px monospace';
    ctx.fillText('REVEAL EXCLUSIVE LAGOS REWARD', 160, 105);

    let isDrawing = false;
    let scratchedPixels = 0;
    let revealed = false;

    function scratch(e) {
      if (!isDrawing) return;
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
      const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 22, 0, Math.PI * 2);
      ctx.fill();

      scratchedPixels++;
      if (scratchedPixels > 40 && !revealed) {
        revealed = true;
        if (hint) {
          hint.textContent = '🎉 UNLOCKED! Use code LAGOS55VIP at checkout for ₦2,500 off!';
          hint.style.color = '#FFE033';
          hint.style.fontWeight = 'bold';
        }
        if (typeof confetti === 'function') {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.8 },
            colors: ['#FFE033', '#D4751A', '#00F0FF', '#FF2D7B']
          });
        }
      }
    }

    canvas.addEventListener('mousedown', () => isDrawing = true);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mousemove', scratch);

    canvas.addEventListener('touchstart', (e) => { isDrawing = true; scratch(e); });
    canvas.addEventListener('touchend', () => isDrawing = false);
    canvas.addEventListener('touchmove', scratch);
  }

  // ===========================================================================
  // 6. PERSISTENT LAGOS CARNIVAL RADIO 104.7 FM DOCK
  // ===========================================================================
  function initRadioDock() {
    const dock = document.createElement('div');
    dock.id = 'lagos-radio-dock';
    dock.innerHTML = `
      <button class="radio-play-btn" id="radio-toggle-btn" aria-label="Toggle Lagos Radio">▶</button>
      <div>
        <div style="font-size:11px; font-weight:800; color:#FFE033; font-family:'Space Mono', monospace; letter-spacing:0.05em;">
          LAGOS STREET 104.7 FM
        </div>
        <div style="font-size:10px; color:#A39E93;">Afro-Electronic Heat · Live</div>
      </div>
      <div class="radio-bars">
        <div class="radio-bar"></div>
        <div class="radio-bar"></div>
        <div class="radio-bar"></div>
        <div class="radio-bar"></div>
      </div>
    `;
    document.body.appendChild(dock);

    let isPlaying = false;
    let audioCtx = null;
    let beatInterval = null;

    function playAfrobeatLoop() {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      let step = 0;
      // 118 BPM Amapiano / Afro-electronic groove generator
      beatInterval = setInterval(() => {
        const now = audioCtx.currentTime;

        // Kick on step 0 and 8
        if (step % 4 === 0) {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.frequency.setValueAtTime(110, now);
          osc.frequency.exponentialRampToValueAtTime(38, now + 0.12);
          gain.gain.setValueAtTime(0.5, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now);
          osc.stop(now + 0.12);
        }

        // Amapiano Log-drum / Bass bounce on step 2, 5, 11
        if (step === 2 || step === 5 || step === 11) {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(75, now);
          osc.frequency.exponentialRampToValueAtTime(45, now + 0.18);
          gain.gain.setValueAtTime(0.4, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now);
          osc.stop(now + 0.18);
        }

        // Shaker / Hi-hat on every off-beat
        if (step % 2 === 1) {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'square';
          osc.frequency.setValueAtTime(1200, now);
          gain.gain.setValueAtTime(0.04, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now);
          osc.stop(now + 0.04);
        }

        step = (step + 1) % 16;
      }, 127);
    }

    const toggleBtn = document.getElementById('radio-toggle-btn');
    toggleBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      if (isPlaying) {
        toggleBtn.textContent = '❚❚';
        dock.classList.add('radio-playing');
        playAfrobeatLoop();
      } else {
        toggleBtn.textContent = '▶';
        dock.classList.remove('radio-playing');
        clearInterval(beatInterval);
      }
    });
  }

  // ===========================================================================
  // 7. CATALYST SOVEREIGN HUD CLI [~]
  // ===========================================================================
  function initCatalystCli() {
    // Floating HUD Trigger Button
    const hudBtn = document.createElement('button');
    hudBtn.id = 'catalyst-cli-dock-btn';
    hudBtn.innerHTML = `<span>⚡</span> CATALYST OS [~]`;
    document.body.appendChild(hudBtn);

    // Terminal Modal
    const terminal = document.createElement('div');
    terminal.id = 'catalyst-terminal-modal';
    terminal.innerHTML = `
      <div class="terminal-header">
        <span>CATALYST OS v2.6 · SOVEREIGN TERMINAL</span>
        <button id="cli-close-btn" style="background:none; border:none; color:#FF2D7B; font-weight:bold; cursor:pointer;">[X]</button>
      </div>
      <div class="terminal-body" id="cli-output">
        <div style="color:#FFE033;">=== SNEAKERS FEST '26 // LAGOS OS ONLINE ===</div>
        <div>Type 'help' for command directory, 'tickets' for pricing, or 'grails' to list auction kicks.</div>
        <br>
      </div>
      <div class="terminal-input-row">
        <span class="terminal-prompt">lagos@sf26:~$</span>
        <input type="text" class="terminal-input" id="cli-input-field" autofocus placeholder="Type command...">
      </div>
    `;
    document.body.appendChild(terminal);

    let isOpen = false;
    hudBtn.addEventListener('click', () => {
      isOpen = !isOpen;
      terminal.style.display = isOpen ? 'flex' : 'none';
      if (isOpen) {
        document.getElementById('cli-input-field').focus();
      }
    });

    document.getElementById('cli-close-btn').addEventListener('click', () => {
      isOpen = false;
      terminal.style.display = 'none';
    });

    const outputEl = document.getElementById('cli-output');
    const inputEl = document.getElementById('cli-input-field');

    function printLine(text, color = '#A3E635') {
      const line = document.createElement('div');
      line.style.color = color;
      line.innerHTML = text;
      outputEl.appendChild(line);
      outputEl.scrollTop = outputEl.scrollHeight;
    }

    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = inputEl.value.trim().toLowerCase();
        inputEl.value = '';
        printLine(`lagos@sf26:~$ ${cmd}`, '#FFE033');

        if (!cmd) return;

        if (cmd === 'help') {
          printLine(`AVAILABLE COMMANDS:`);
          printLine(`  • <b>tickets</b>    - Print current festival pass tiers & Paystack prices`);
          printLine(`  • <b>venue</b>      - Coordinates & route for Muri Okunola Park, V/I`);
          printLine(`  • <b>grails</b>     - Top 5 vaulted sneakers showing on Auction Wall`);
          printLine(`  • <b>claim</b>      - Redeem secret Lagos street voucher`);
          printLine(`  • <b>clear</b>      - Clear terminal screen`);
        } else if (cmd === 'tickets') {
          printLine(`OFFICIAL PASS TIERS:`);
          printLine(`  [1] General Admission : ₦5,000 (Access to 200+ kicks, DJ stage)`);
          printLine(`  [2] VIP Pass          : ₦10,000 (Fastlane legit check + sticker pack)`);
          printLine(`  [3] VVIP Access       : ₦25,000 (Backstage lounge + open bar)`);
          printLine(`  [4] Phalanx Package   : ₦50,000 (Limited 50 · Gold minted pass)`);
        } else if (cmd === 'venue') {
          printLine(`LOCATION: Muri Okunola Park, Victoria Island, Lagos.`);
          printLine(`DATE: Saturday, December 12, 2026 · 12:00 PM - 10:00 PM WAT.`);
          printLine(`SECURITY: Full biometric gate control & secure parking perimeter.`);
        } else if (cmd === 'grails') {
          printLine(`VAULTED GRAILS ON DISPLAY:`);
          printLine(`  1. Nike Air Yeezy 2 "Red October" [Size 10.5]`);
          printLine(`  2. Jordan 1 Retro High OG "Chicago 1985" Original`);
          printLine(`  3. Off-White x Air Jordan 1 "Chicago" signed by Virgil`);
          printLine(`  4. Travis Scott x Fragment Design Jordan 1 Low`);
          printLine(`  5. Nike Dunk SB Low "Paris" (1 of 202 in existence)`);
        } else if (cmd === 'claim') {
          printLine(`PROMO UNLOCKED: <b>LAGOS55VIP</b> (-₦2,500 off at checkout)`, '#B8FF00');
          if (typeof confetti === 'function') confetti();
        } else if (cmd === 'clear') {
          outputEl.innerHTML = '';
        } else {
          printLine(`Command not found: '${cmd}'. Type 'help' for command list.`, '#FF2D7B');
        }
      }
    });
  }

  // Kick off
  initWhenReady();
})();
