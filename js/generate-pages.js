// This script generates all tool HTML pages
const fs = require('fs');
const path = require('path');

const toolsDir = path.join(__dirname, '..', 'tools');

// Common HTML head for tool pages
function toolHead(title) {
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | ArabTools</title>
  <meta name="description" content="${title} - أداة مجانية من عرب تولز | Free tool from ArabTools">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <link rel="stylesheet" href="../css/style.css">
</head>`;
}

function toolHeader() {
  return `
<body>
  <header id="site-header">
    <div class="header-inner">
      <a class="logo" href="../index.html">
        <div class="logo-icon">A</div>
        <div class="logo-text"><span class="en">ArabTools</span><span class="ar">عرب تولز</span></div>
      </a>
      <nav class="main-nav">
        <a class="nav-link" href="../index.html" data-ar="الرئيسية" data-en="Home">الرئيسية</a>
        <a class="nav-link" href="../pages/help.html" data-ar="مساعدة" data-en="Help">مساعدة</a>
        <a class="nav-link" href="../pages/contact.html" data-ar="اتصل بنا" data-en="Contact">اتصل بنا</a>
      </nav>
      <button class="lang-toggle" onclick="toggleLang()" id="lang-btn">
        <i class="fas fa-globe globe"></i><span id="lang-label">EN</span>
      </button>
    </div>
  </header>
  <div id="toast-container"></div>`;
}

function toolPageHeader(icon, catColor, titleAr, titleEn, descAr, descEn) {
  return `
  <div class="tool-page-wrap">
    <div class="adsense-banner inline" style="margin-bottom:24px">
      <div class="adsense-inner">
        <i class="fas fa-rectangle-ad" style="opacity:0.2"></i>
        <span data-ar="مساحة إعلانية" data-en="Ad Space">مساحة إعلانية</span>
      </div>
    </div>
    <div class="tool-page-header">
      <a class="back-btn" href="../index.html">
        <i class="fas fa-arrow-left"></i>
        <span data-ar="رجوع" data-en="Back">رجوع</span>
      </a>
      <div class="tool-page-icon" style="background:${catColor}22;color:${catColor}">
        <i class="fas ${icon}"></i>
      </div>
      <div class="tool-page-info">
        <h1><span data-ar="${titleAr}" data-en="${titleEn}">${titleAr}</span></h1>
        <p><span data-ar="${descAr}" data-en="${descEn}">${descAr}</span></p>
      </div>
    </div>`;
}

function toolFooter() {
  return `
  </div>
  <footer>
    <div class="footer-inner">
      <a class="logo" href="../index.html">
        <div class="logo-icon">A</div>
        <div class="logo-text"><span class="en">ArabTools</span><span class="ar">عرب تولز</span></div>
      </a>
      <div class="footer-links">
        <a class="footer-link" href="../index.html" data-ar="الرئيسية" data-en="Home">الرئيسية</a>
        <a class="footer-link" href="../pages/help.html" data-ar="المساعدة" data-en="Help">المساعدة</a>
        <a class="footer-link" href="../pages/contact.html" data-ar="اتصل بنا" data-en="Contact Us">اتصل بنا</a>
        <a class="footer-link" href="../pages/privacy.html" data-ar="سياسة الخصوصية" data-en="Privacy Policy">سياسة الخصوصية</a>
      </div>
      <p class="footer-copy" id="footer-copy">© 2025 عرب تولز — جميع الحقوق محفوظة</p>
    </div>
  </footer>
  <script src="../js/shared.js"></script>`;
}

function comingSoonPage(icon, catColor, titleAr, titleEn, descAr, descEn) {
  return `${toolHead(titleEn)}
${toolHeader()}
${toolPageHeader(icon, catColor, titleAr, titleEn, descAr, descEn)}
    <div class="tool-workspace">
      <div class="coming-soon-wrap">
        <div class="coming-soon-badge"><i class="fas fa-clock"></i> <span data-ar="قريباً" data-en="Coming Soon">قريباً</span></div>
        <i class="fas ${icon} big-icon"></i>
        <h2 data-ar="${titleAr}" data-en="${titleEn}">${titleAr}</h2>
        <p data-ar="هذه الأداة تتطلب خادماً وستكون متاحة قريباً. نحن نعمل على توفيرها في أقرب وقت." data-en="This tool requires server-side processing and will be available soon. We are working on providing it as soon as possible.">هذه الأداة تتطلب خادماً وستكون متاحة قريباً. نحن نعمل على توفيرها في أقرب وقت.</p>
        <a class="btn btn-primary" href="../index.html"><i class="fas fa-arrow-left"></i> <span data-ar="عودة للرئيسية" data-en="Back to Home">عودة للرئيسية</span></a>
      </div>
    </div>
${toolFooter()}
</body>
</html>`;
}

// ── COMING SOON TOOLS ──
const comingSoonTools = [
  { id: 'stabilize-video', icon: 'fa-camera-retro', color: '#8b5cf6', ar: 'تثبيت الفيديو', en: 'Stabilize Video', dAr: 'أزل اهتزاز الفيديو', dEn: 'Remove camera shake' },
  { id: 'video-editor', icon: 'fa-film', color: '#8b5cf6', ar: 'محرر فيديو', en: 'Video Editor', dAr: 'تعديل الفيديو بسهولة', dEn: 'Edit videos easily' },
  { id: 'pdf-to-word', icon: 'fa-file-word', color: '#ef4444', ar: 'PDF إلى Word', en: 'PDF to Word', dAr: 'حوّل PDF إلى Word', dEn: 'Convert PDF to Word' },
  { id: 'pdf-to-excel', icon: 'fa-file-excel', color: '#ef4444', ar: 'PDF إلى Excel', en: 'PDF to Excel', dAr: 'حوّل PDF إلى Excel', dEn: 'Convert PDF to Excel' },
  { id: 'pdf-to-html', icon: 'fa-code', color: '#ef4444', ar: 'PDF إلى HTML', en: 'PDF to HTML', dAr: 'حوّل PDF إلى HTML', dEn: 'Convert PDF to HTML' },
  { id: 'word-to-pdf', icon: 'fa-file-pdf', color: '#ef4444', ar: 'Word إلى PDF', en: 'Word to PDF', dAr: 'حوّل Word إلى PDF', dEn: 'Convert Word to PDF' },
  { id: 'excel-to-pdf', icon: 'fa-file-pdf', color: '#ef4444', ar: 'Excel إلى PDF', en: 'Excel to PDF', dAr: 'حوّل Excel إلى PDF', dEn: 'Convert Excel to PDF' },
  { id: 'ppt-to-pdf', icon: 'fa-file-pdf', color: '#ef4444', ar: 'PPT إلى PDF', en: 'PPT to PDF', dAr: 'حوّل PPT إلى PDF', dEn: 'Convert PPT to PDF' },
  { id: 'document-converter', icon: 'fa-file-alt', color: '#f59e0b', ar: 'محول مستندات', en: 'Document Converter', dAr: 'حوّل صيغ المستندات', dEn: 'Convert document formats' },
  { id: 'font-converter', icon: 'fa-font', color: '#f59e0b', ar: 'محول خطوط', en: 'Font Converter', dAr: 'حوّل صيغ الخطوط', dEn: 'Convert font formats' },
  { id: 'ebook-converter', icon: 'fa-book', color: '#f59e0b', ar: 'محول كتب', en: 'Ebook Converter', dAr: 'حوّل صيغ الكتب', dEn: 'Convert ebook formats' },
  { id: 'archive-converter', icon: 'fa-file-archive', color: '#f59e0b', ar: 'محول أرشيف', en: 'Archive Converter', dAr: 'حوّل صيغ الضغط', dEn: 'Convert archive formats' },
];

comingSoonTools.forEach(t => {
  const html = comingSoonPage(t.icon, t.color, t.ar, t.en, t.dAr, t.dEn);
  fs.writeFileSync(path.join(toolsDir, `${t.id}.html`), html, 'utf8');
  console.log(`Created: tools/${t.id}.html (coming soon)`);
});

console.log('\nAll coming-soon pages created!');
