// ══════════════════════════════════════════════════════════
//  ArabTools — Shared JavaScript
// ══════════════════════════════════════════════════════════

// ── TOOL DATA ──
const TOOLS = [
  // VIDEO
  { id:'video-editor', cat:'video', icon:'fa-film', ar:'محرر فيديو', en:'Video Editor', descAr:'تعديل الفيديو بسهولة', descEn:'Edit videos easily' },
  { id:'screen-recorder', cat:'video', icon:'fa-desktop', ar:'تسجيل الشاشة', en:'Screen Recorder', descAr:'سجل شاشتك', descEn:'Record your screen' },
  { id:'text-to-speech', cat:'video', icon:'fa-microphone', ar:'نص إلى كلام', en:'Text to Speech', descAr:'حول النص إلى صوت', descEn:'Convert text to voice' },
  { id:'merge-videos', cat:'video', icon:'fa-object-group', ar:'دمج فيديوهات', en:'Merge Videos', descAr:'ادمج عدة فيديوهات', descEn:'Merge multiple videos' },
  { id:'trim-video', cat:'video', icon:'fa-cut', ar:'قص فيديو', en:'Trim Video', descAr:'اقص جزءاً من الفيديو', descEn:'Cut video segments' },
  { id:'add-audio-video', cat:'video', icon:'fa-volume-up', ar:'إضافة صوت لفيديو', en:'Add Audio to Video', descAr:'أضف مقطع صوتي', descEn:'Add audio track' },
  { id:'add-image-video', cat:'video', icon:'fa-image', ar:'إضافة صورة لفيديو', en:'Add Image to Video', descAr:'أضف صورة على الفيديو', descEn:'Overlay image on video' },
  { id:'add-text-video', cat:'video', icon:'fa-font', ar:'إضافة نص لفيديو', en:'Add Text to Video', descAr:'أضف نصاً على الفيديو', descEn:'Add text overlay' },
  { id:'remove-logo', cat:'video', icon:'fa-eraser', ar:'إزالة الشعار', en:'Remove Logo', descAr:'أزل الشعار من الفيديو', descEn:'Remove logo from video' },
  { id:'crop-video', cat:'video', icon:'fa-crop-alt', ar:'اقتصاص فيديو', en:'Crop Video', descAr:'اقتصص الفيديو', descEn:'Crop video frame' },
  { id:'rotate-video', cat:'video', icon:'fa-sync', ar:'تدوير فيديو', en:'Rotate Video', descAr:'دوّر الفيديو', descEn:'Rotate video' },
  { id:'flip-video', cat:'video', icon:'fa-arrows-alt-h', ar:'قلب فيديو', en:'Flip Video', descAr:'اعكس الفيديو', descEn:'Flip video' },
  { id:'resize-video', cat:'video', icon:'fa-expand-arrows-alt', ar:'تغيير حجم الفيديو', en:'Resize Video', descAr:'غيّر أبعاد الفيديو', descEn:'Resize video dimensions' },
  { id:'loop-video', cat:'video', icon:'fa-redo', ar:'تكرار الفيديو', en:'Loop Video', descAr:'كرر الفيديو عدة مرات', descEn:'Loop video multiple times' },
  { id:'video-volume', cat:'video', icon:'fa-volume-high', ar:'تغيير صوت الفيديو', en:'Change Video Volume', descAr:'عدّل مستوى الصوت', descEn:'Adjust video volume' },
  { id:'video-speed', cat:'video', icon:'fa-tachometer-alt', ar:'تغيير سرعة الفيديو', en:'Change Video Speed', descAr:'سرّع أو بطّئ الفيديو', descEn:'Speed up or slow down' },
  { id:'stabilize-video', cat:'video', icon:'fa-camera-retro', ar:'تثبيت الفيديو', en:'Stabilize Video', descAr:'أزل اهتزاز الفيديو', descEn:'Remove camera shake' },
  { id:'video-recorder', cat:'video', icon:'fa-video', ar:'تسجيل فيديο', en:'Video Recorder', descAr:'سجل فيديو من الكاميرا', descEn:'Record from webcam' },
  { id:'video-converter', cat:'video', icon:'fa-exchange-alt', ar:'محول فيديو', en:'Video Converter', descAr:'حوّل صيغ الفيديو', descEn:'Convert video formats' },
  // AUDIO
  { id:'trim-audio', cat:'audio', icon:'fa-cut', ar:'قص صوت', en:'Trim Audio', descAr:'اقتص مقطع صوتي', descEn:'Cut audio segment' },
  { id:'change-volume', cat:'audio', icon:'fa-volume-up', ar:'تغيير الحجم', en:'Change Volume', descAr:'عدّل مستوى الصوت', descEn:'Adjust audio volume' },
  { id:'change-speed', cat:'audio', icon:'fa-forward', ar:'تغيير السرعة', en:'Change Speed', descAr:'سرّع أو بطّئ الصوت', descEn:'Speed or slow audio' },
  { id:'change-pitch', cat:'audio', icon:'fa-sliders-h', ar:'تغيير النبرة', en:'Change Pitch', descAr:'غيّر طبقة الصوت', descEn:'Change audio pitch' },
  { id:'equalizer', cat:'audio', icon:'fa-sliders-h', ar:'المعادل الصوتي', en:'Equalizer', descAr:'ضبط ترددات الصوت', descEn:'Audio frequency equalizer' },
  { id:'reverse-audio', cat:'audio', icon:'fa-backward', ar:'عكس الصوت', en:'Reverse Audio', descAr:'اعكس تشغيل الصوت', descEn:'Reverse audio playback' },
  { id:'voice-recorder', cat:'audio', icon:'fa-microphone', ar:'تسجيل صوت', en:'Voice Recorder', descAr:'سجّل صوتك', descEn:'Record your voice' },
  { id:'audio-joiner', cat:'audio', icon:'fa-link', ar:'ربط ملفات صوتية', en:'Audio Joiner', descAr:'ادمج ملفات صوتية', descEn:'Join audio files' },
  // PDF
  { id:'pdf-split', cat:'pdf', icon:'fa-file-alt', ar:'تقسيم PDF', en:'Split PDF', descAr:'قسّم الـ PDF', descEn:'Split PDF pages' },
  { id:'pdf-merge', cat:'pdf', icon:'fa-object-group', ar:'دمج PDF', en:'Merge PDF', descAr:'ادمج ملفات PDF', descEn:'Merge PDF files' },
  { id:'pdf-compress', cat:'pdf', icon:'fa-compress', ar:'ضغط PDF', en:'Compress PDF', descAr:'قلّل حجم الملف', descEn:'Reduce PDF size' },
  { id:'pdf-unlock', cat:'pdf', icon:'fa-unlock', ar:'فتح قفل PDF', en:'Unlock PDF', descAr:'أزل كلمة المرور', descEn:'Remove PDF password' },
  { id:'pdf-protect', cat:'pdf', icon:'fa-lock', ar:'حماية PDF', en:'Protect PDF', descAr:'أضف كلمة مرور', descEn:'Add PDF password' },
  { id:'pdf-rotate', cat:'pdf', icon:'fa-sync', ar:'تدوير PDF', en:'Rotate PDF', descAr:'دوّر صفحات PDF', descEn:'Rotate PDF pages' },
  { id:'pdf-page-numbers', cat:'pdf', icon:'fa-list-ol', ar:'ترقيم الصفحات', en:'Add Page Numbers', descAr:'أضف أرقام الصفحات', descEn:'Add page numbers' },
  { id:'pdf-to-jpg', cat:'pdf', icon:'fa-image', ar:'PDF إلى JPG', en:'PDF to JPG', descAr:'حوّل PDF إلى صور', descEn:'Convert PDF to JPG' },
  { id:'pdf-to-png', cat:'pdf', icon:'fa-image', ar:'PDF إلى PNG', en:'PDF to PNG', descAr:'حوّل PDF إلى PNG', descEn:'Convert PDF to PNG' },
  { id:'jpg-to-pdf', cat:'pdf', icon:'fa-file-pdf', ar:'JPG إلى PDF', en:'JPG to PDF', descAr:'حوّل صور JPG إلى PDF', descEn:'Convert JPG to PDF' },
  { id:'png-to-pdf', cat:'pdf', icon:'fa-file-pdf', ar:'PNG إلى PDF', en:'PNG to PDF', descAr:'حوّل صور PNG إلى PDF', descEn:'Convert PNG to PDF' },
  { id:'pdf-to-word', cat:'pdf', icon:'fa-file-word', ar:'PDF إلى Word', en:'PDF to Word', descAr:'حوّل PDF إلى Word', descEn:'Convert PDF to Word' },
  { id:'pdf-to-excel', cat:'pdf', icon:'fa-file-excel', ar:'PDF إلى Excel', en:'PDF to Excel', descAr:'حوّل PDF إلى Excel', descEn:'Convert PDF to Excel' },
  { id:'pdf-to-html', cat:'pdf', icon:'fa-code', ar:'PDF إلى HTML', en:'PDF to HTML', descAr:'حوّل PDF إلى HTML', descEn:'Convert PDF to HTML' },
  { id:'word-to-pdf', cat:'pdf', icon:'fa-file-pdf', ar:'Word إلى PDF', en:'Word to PDF', descAr:'حوّل Word إلى PDF', descEn:'Convert Word to PDF' },
  { id:'excel-to-pdf', cat:'pdf', icon:'fa-file-pdf', ar:'Excel إلى PDF', en:'Excel to PDF', descAr:'حوّل Excel إلى PDF', descEn:'Convert Excel to PDF' },
  { id:'ppt-to-pdf', cat:'pdf', icon:'fa-file-pdf', ar:'PPT إلى PDF', en:'PPT to PDF', descAr:'حوّل PPT إلى PDF', descEn:'Convert PPT to PDF' },
  // CONVERTERS
  { id:'audio-converter', cat:'convert', icon:'fa-music', ar:'محول صوت', en:'Audio Converter', descAr:'حوّل صيغ الصوت', descEn:'Convert audio formats' },
  { id:'image-converter', cat:'convert', icon:'fa-image', ar:'محول صور', en:'Image Converter', descAr:'حوّل صيغ الصور', descEn:'Convert image formats' },
  { id:'document-converter', cat:'convert', icon:'fa-file-alt', ar:'محول مستندات', en:'Document Converter', descAr:'حوّل صيغ المستندات', descEn:'Convert document formats' },
  { id:'font-converter', cat:'convert', icon:'fa-font', ar:'محول خطوط', en:'Font Converter', descAr:'حوّل صيغ الخطوط', descEn:'Convert font formats' },
  { id:'archive-converter', cat:'convert', icon:'fa-file-archive', ar:'محول أرشيف', en:'Archive Converter', descAr:'حوّل صيغ الضغط', descEn:'Convert archive formats' },
  { id:'ebook-converter', cat:'convert', icon:'fa-book', ar:'محول كتب', en:'Ebook Converter', descAr:'حوّل صيغ الكتب', descEn:'Convert ebook formats' },
  { id:'archive-extractor', cat:'convert', icon:'fa-box-open', ar:'فك الضغط', en:'Archive Extractor', descAr:'فك ضغط الملفات', descEn:'Extract compressed files' },
];

const CAT_META = {
  video: { color: 'var(--cat-video)', label: { ar: 'أدوات الفيديو', en: 'Video Tools' } },
  audio: { color: 'var(--cat-audio)', label: { ar: 'أدوات الصوت', en: 'Audio Tools' } },
  pdf:   { color: 'var(--cat-pdf)',   label: { ar: 'أدوات PDF', en: 'PDF Tools' } },
  convert:{ color: 'var(--cat-convert)', label: { ar: 'المحولات', en: 'Converters' } },
};

// ── LANGUAGE ──
let lang = localStorage.getItem('at_lang') || 'ar';

function toggleLang() {
  lang = lang === 'ar' ? 'en' : 'ar';
  localStorage.setItem('at_lang', lang);
  applyLang();
}

function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('lang-en', lang === 'en');
  const lb = document.getElementById('lang-label');
  if (lb) lb.textContent = lang === 'ar' ? 'EN' : 'AR';
  document.querySelectorAll('[data-ar]').forEach(el => {
    el.textContent = lang === 'ar' ? el.dataset.ar : el.dataset.en;
  });
  // Homepage-specific
  const heroT = document.getElementById('hero-title');
  if (heroT) heroT.textContent = lang === 'ar' ? 'أدواتك المجانية في مكان واحد' : 'Your Free Tools in One Place';
  const heroS = document.getElementById('hero-sub');
  if (heroS) heroS.textContent = lang === 'ar'
    ? 'محرر فيديو، أدوات صوت، PDF، ومحولات — كل شيء تحتاجه عبر الإنترنت بدون تنزيل'
    : 'Video editor, audio tools, PDF tools and converters — everything online, no downloads';
  const si = document.getElementById('search-input');
  if (si) si.placeholder = lang === 'ar' ? 'ابحث عن أداة...' : 'Search for a tool...';
  const fc = document.getElementById('footer-copy');
  if (fc) fc.textContent = lang === 'ar' ? '© 2025 عرب تولز — جميع الحقوق محفوظة' : '© 2025 ArabTools — All rights reserved';
  if (typeof renderTools === 'function') renderTools();
}

// ── TOAST ──
function toast(msg, type = 'info', dur = 3500) {
  const icons = { info: 'fa-info-circle', success: 'fa-check-circle', error: 'fa-times-circle' };
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<i class="fas ${icons[type]}"></i><span>${msg}</span>`;
  document.getElementById('toast-container').appendChild(t);
  setTimeout(() => t.remove(), dur);
}

// ── DOWNLOAD ──
function download(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
  toast(lang === 'ar' ? 'تم التنزيل بنجاح!' : 'Downloaded successfully!', 'success');
}

// ── FORMAT TIME ──
function fmtTime(s) {
  const m = Math.floor(s / 60).toString().padStart(2, '0');
  const sec = (s % 60).toString().padStart(2, '0');
  return `${m}:${sec}`;
}

// ── UPLOAD ZONE HELPERS ──
const UPLOAD_LIMIT_MB = 250;

function handleFileUpload(input, callback) {
  const file = input.files[0];
  if (!file) return;
  if (file.size > UPLOAD_LIMIT_MB * 1024 * 1024) {
    toast(lang === 'ar' ? `الحد الأقصى لحجم الملف هو ${UPLOAD_LIMIT_MB} ميجابايت` : `Max file size is ${UPLOAD_LIMIT_MB}MB`, 'error');
    input.value = '';
    return;
  }
  if (callback) callback(file);
}

function setupDropZone(zoneEl, inputEl, callback) {
  if (!zoneEl || !inputEl) return;
  zoneEl.addEventListener('dragover', e => { e.preventDefault(); zoneEl.classList.add('drag-over'); });
  zoneEl.addEventListener('dragleave', () => zoneEl.classList.remove('drag-over'));
  zoneEl.addEventListener('drop', e => {
    e.preventDefault();
    zoneEl.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (!file) return;
    const dt = new DataTransfer();
    dt.items.add(file);
    inputEl.files = dt.files;
    handleFileUpload(inputEl, callback);
  });
  zoneEl.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;
    inputEl.click();
  });
  inputEl.addEventListener('change', () => handleFileUpload(inputEl, callback));
}

// ── WAV ENCODER ──
function audioBufferToWav(buffer) {
  const numChannels = buffer.numberOfChannels;
  const sampleRate = buffer.sampleRate;
  const bitDepth = 16;
  const bytesPerSample = bitDepth / 8;
  const blockAlign = numChannels * bytesPerSample;
  const numSamples = buffer.length;
  const dataSize = numSamples * blockAlign;
  const ab = new ArrayBuffer(44 + dataSize);
  const dv = new DataView(ab);
  function writeStr(offset, str) { for (let i = 0; i < str.length; i++) dv.setUint8(offset + i, str.charCodeAt(i)); }
  writeStr(0, 'RIFF'); dv.setUint32(4, 36 + dataSize, true); writeStr(8, 'WAVE');
  writeStr(12, 'fmt '); dv.setUint32(16, 16, true); dv.setUint16(20, 1, true);
  dv.setUint16(22, numChannels, true); dv.setUint32(24, sampleRate, true);
  dv.setUint32(28, sampleRate * blockAlign, true); dv.setUint16(32, blockAlign, true);
  dv.setUint16(34, bitDepth, true); writeStr(36, 'data'); dv.setUint32(40, dataSize, true);
  let offset = 44;
  for (let i = 0; i < numSamples; i++) {
    for (let ch = 0; ch < numChannels; ch++) {
      const s = Math.max(-1, Math.min(1, buffer.getChannelData(ch)[i]));
      dv.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
      offset += 2;
    }
  }
  return ab;
}

// ── CANVAS VIDEO PROCESSING ──
// Records a canvas for a given duration, returning a Blob
function recordCanvas(canvas, durationMs, audioTrack) {
  return new Promise((resolve, reject) => {
    const stream = canvas.captureStream(30);
    if (audioTrack) {
      audioTrack.getTracks().forEach(t => stream.addTrack(t));
    }
    const chunks = [];
    const rec = new MediaRecorder(stream, { mimeType: 'video/webm; codecs=vp8' });
    rec.ondataavailable = e => { if (e.data.size > 0) chunks.push(e.data); };
    rec.onstop = () => resolve(new Blob(chunks, { type: 'video/webm' }));
    rec.onerror = reject;
    rec.start();
    setTimeout(() => rec.stop(), durationMs + 200);
  });
}

// Process video frames through a canvas transform
async function processVideoWithCanvas(file, transformFn, options = {}) {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.muted = true;
    video.playsInline = true;
    const url = URL.createObjectURL(file);
    video.src = url;

    video.onloadedmetadata = async () => {
      const startTime = options.startTime || 0;
      const endTime = options.endTime || video.duration;
      const duration = endTime - startTime;
      const outW = options.width || video.videoWidth;
      const outH = options.height || video.videoHeight;

      const canvas = document.createElement('canvas');
      canvas.width = outW;
      canvas.height = outH;
      const ctx = canvas.getContext('2d');

      // Create audio context for audio track if needed
      let audioStream = null;
      if (!options.mute) {
        try {
          const audioCtx = new AudioContext();
          const source = audioCtx.createMediaElementSource(video);
          const dest = audioCtx.createMediaStreamDestination();
          if (options.volume !== undefined) {
            const gain = audioCtx.createGain();
            gain.gain.value = options.volume;
            source.connect(gain);
            gain.connect(dest);
            gain.connect(audioCtx.destination);
          } else {
            source.connect(dest);
            source.connect(audioCtx.destination);
          }
          audioStream = dest.stream;
        } catch(e) { /* no audio */ }
      }

      video.currentTime = startTime;
      video.playbackRate = options.speed || 1;

      await new Promise(r => { video.onseeked = r; });
      video.play();

      const canvasStream = canvas.captureStream(30);
      if (audioStream) {
        audioStream.getAudioTracks().forEach(t => canvasStream.addTrack(t));
      }

      const chunks = [];
      let mimeType = 'video/webm';
      if (MediaRecorder.isTypeSupported('video/webm; codecs=vp9')) {
        mimeType = 'video/webm; codecs=vp9';
      }
      const rec = new MediaRecorder(canvasStream, { mimeType });
      rec.ondataavailable = e => { if (e.data.size > 0) chunks.push(e.data); };
      rec.onstop = () => {
        URL.revokeObjectURL(url);
        resolve(new Blob(chunks, { type: 'video/webm' }));
      };
      rec.start();

      function draw() {
        if (video.currentTime >= endTime || video.ended) {
          rec.stop();
          video.pause();
          return;
        }
        transformFn(ctx, video, canvas);
        requestAnimationFrame(draw);
      }
      draw();
    };
    video.onerror = reject;
  });
}

// ── HOMEPAGE GRID RENDERING ──
let activeFilter = 'all';
let searchQuery = '';

function renderTools() {
  const container = document.getElementById('tools-container');
  if (!container) return;
  const cats = activeFilter === 'all' ? ['video', 'audio', 'pdf', 'convert'] : [activeFilter];
  let html = '';
  let hasAny = false;
  // Determine base path (if we're in /tools/ or /pages/, go up one level)
  const basePath = '';

  cats.forEach(cat => {
    const tools = TOOLS.filter(t => {
      if (t.cat !== cat) return false;
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return t.ar.includes(searchQuery) || t.en.toLowerCase().includes(q) ||
        t.descAr.includes(searchQuery) || t.descEn.toLowerCase().includes(q);
    });
    if (!tools.length) return;
    hasAny = true;
    const meta = CAT_META[cat];
    html += `<div class="category-section" data-cat="${cat}">
      <div class="category-header">
        <div class="cat-dot" style="background:${meta.color}"></div>
        <h2>${meta.label[lang]}</h2>
      </div>
      <div class="tools-grid">
        ${tools.map(t => `
          <a class="tool-card" data-cat="${cat}" href="${basePath}tools/${t.id}.html">
            <div class="tool-icon"><i class="fas ${t.icon}"></i></div>
            <div class="tool-name">${lang === 'ar' ? t.ar : t.en}</div>
            <div class="tool-desc">${lang === 'ar' ? t.descAr : t.descEn}</div>
          </a>
        `).join('')}
      </div>
    </div>`;
  });

  if (!hasAny) {
    html = `<div class="no-results">
      <i class="fas fa-search-minus"></i>
      <p>${lang === 'ar' ? 'لا توجد أدوات تطابق بحثك' : 'No tools match your search'}</p>
    </div>`;
  }
  container.innerHTML = html;
}

function filterCat(cat) {
  activeFilter = cat;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === cat));
  renderTools();
}

function filterTools(q) {
  searchQuery = q;
  renderTools();
}

// ── PAGE RANGE PARSER (for PDF tools) ──
function parsePageRange(range, max) {
  const pages = new Set();
  range.split(',').forEach(part => {
    part = part.trim();
    if (part.includes('-')) {
      const [a, b] = part.split('-').map(Number);
      for (let i = a; i <= Math.min(b, max); i++) if (i > 0) pages.add(i);
    } else {
      const n = parseInt(part);
      if (n > 0 && n <= max) pages.add(n);
    }
  });
  return Array.from(pages).sort((a, b) => a - b);
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  applyLang();
  if (typeof renderTools === 'function' && document.getElementById('tools-container')) {
    renderTools();
  }
});
