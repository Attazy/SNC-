(() => {
  const STORAGE_KEY = "snc-language";
  const DEFAULT_LANG = "en";

  const commonTranslations = [
    { selector: "#navLinks > li > a[href='index.html'], #navLinks > li > a[href='../index.html']", en: "Home", id: "Beranda" },
    { selector: "#navLinks > li > a[href='solutions.html'], #navLinks > li > a[href='../solutions.html']", en: "Solution", id: "Solusi" },
    {
      selector: "#navLinks .submenu a[href='subfeatures/bandwidth-optimization.html'], #navLinks .submenu a[href='bandwidth-optimization.html']",
      en: "Bandwidth Optimization",
      id: "Optimasi Bandwidth"
    },
    {
      selector: "#navLinks .submenu a[href='subfeatures/hardware-security-module.html'], #navLinks .submenu a[href='hardware-security-module.html']",
      en: "Hardware Security Module",
      id: "Modul Keamanan Perangkat Keras"
    },
    {
      selector: "#navLinks .submenu a[href='subfeatures/internet-access-management.html'], #navLinks .submenu a[href='internet-access-management.html']",
      en: "Internet Access Management",
      id: "Manajemen Akses Internet"
    },
    {
      selector: "#navLinks .submenu a[href='subfeatures/network-security.html'], #navLinks .submenu a[href='network-security.html']",
      en: "Network Security",
      id: "Keamanan Jaringan"
    },
    {
      selector: "#navLinks .submenu a[href='subfeatures/power-protection.html'], #navLinks .submenu a[href='power-protection.html']",
      en: "Power Protection",
      id: "Perlindungan Daya"
    },
    {
      selector: "#navLinks .submenu a[href='subfeatures/storage-server.html'], #navLinks .submenu a[href='storage-server.html']",
      en: "Storage & Server",
      id: "Penyimpanan & Server"
    },
    { selector: "#navLinks > li > a[href='services.html'], #navLinks > li > a[href='../services.html']", en: "Services", id: "Layanan" },
    {
      selector: "#navLinks .submenu a[href='subfeatures/maintenance.html'], #navLinks .submenu a[href='maintenance.html']",
      en: "Maintenance",
      id: "Pemeliharaan"
    },
    {
      selector: "#navLinks .submenu a[href='subfeatures/managed-services.html'], #navLinks .submenu a[href='managed-services.html']",
      en: "Managed Services",
      id: "Layanan Terkelola"
    },
    {
      selector: "#navLinks .submenu a[href='subfeatures/education-training.html'], #navLinks .submenu a[href='education-training.html']",
      en: "Education and Training",
      id: "Edukasi dan Pelatihan"
    },
    { selector: "#navLinks > li > a[href='products.html'], #navLinks > li > a[href='../products.html']", en: "Products", id: "Produk" },
    {
      selector: "#navLinks > li > a[href='contact.html'], #navLinks > li > a[href='../contact.html'], #navLinks > li > a[href='#contact']",
      en: "Contact Us",
      id: "Hubungi Kami"
    },
    { selector: ".hero-content p:not(.hero-description)", en: "Solid and Reputable IT Solution Provider", id: "Penyedia Solusi TI yang Solid dan Terpercaya" },
    {
      selector: ".site-footer .footer-bottom .container",
      en: "Copyright \u00a9 2026 Sentra Netcomindo. All rights reserved.",
      id: "Hak Cipta \u00a9 2026 Sentra Netcomindo. Seluruh hak dilindungi."
    }
  ];

  const pageTranslations = {
    "index.html": {
      title: {
        en: "Sentra Netcomindo | Home",
        id: "Sentra Netcomindo | Beranda"
      },
      description: {
        en: "Sentra Netcomindo - Enterprise IT solutions, services, and products for secure and reliable digital infrastructure.",
        id: "Sentra Netcomindo - Solusi, layanan, dan produk TI enterprise untuk infrastruktur digital yang aman dan andal."
      },
      entries: [
        { selector: ".about-company-title", en: "About Company", id: "Tentang Perusahaan" },
        {
          selector: "#about .about-intro p:nth-of-type(1)",
          en: "Founded in 2009, Sentra Netcomindo start as a Network Infrastructure Provider and has delivered comprehensive solution from networking products to cabling solution ever since.",
          id: "Didirikan pada tahun 2009, Sentra Netcomindo memulai perjalanan sebagai penyedia infrastruktur jaringan dan sejak saat itu menghadirkan solusi komprehensif mulai dari produk jaringan hingga solusi pengkabelan."
        },
        {
          selector: "#about .about-intro p:nth-of-type(2)",
          en: "Now, Sentra Netcomindo expands its services to offer wider range of IT Solution as a respond of growing needs in our customers as well as other potential customers in the industry of Financial Institutions, Telecommunications, and Public Services.",
          id: "Saat ini, Sentra Netcomindo memperluas layanannya untuk menghadirkan cakupan solusi TI yang lebih luas sebagai respons atas kebutuhan pelanggan yang terus berkembang, khususnya pada sektor institusi keuangan, telekomunikasi, dan layanan publik."
        },
        { selector: ".about-vision h3", en: "VISION", id: "VISI" },
        { selector: ".about-vision li:nth-child(1)", en: "To be a respectable IT Solution Provider Company", id: "Menjadi perusahaan penyedia solusi TI yang terpercaya" },
        { selector: ".about-mission h3", en: "MISSION", id: "MISI" },
        {
          selector: ".about-mission li:nth-child(1)",
          en: "Building a strong competency in IT Industry through continuous human resources development",
          id: "Membangun kompetensi kuat di industri TI melalui pengembangan sumber daya manusia secara berkelanjutan"
        },
        { selector: ".about-mission li:nth-child(2)", en: "Delivering value based solution to customer", id: "Memberikan solusi berbasis nilai kepada pelanggan" },
        { selector: ".about-mission li:nth-child(3)", en: "Building a solid foundation of Financial Structure", id: "Membangun fondasi struktur keuangan yang solid" },
        { selector: ".about-objectives h3", en: "OBJECTIVES", id: "TUJUAN" },
        { selector: ".about-objectives li:nth-child(1)", en: "Giving the best deliverables to customer", id: "Memberikan hasil terbaik bagi pelanggan" },
        {
          selector: ".about-objectives li:nth-child(2)",
          en: "Leveraging relationship with customers to a point of becoming mutual partner in success",
          id: "Membangun hubungan dengan pelanggan hingga menjadi mitra sukses bersama"
        },

        { selector: ".solutions .section-title", en: "OUR SOLUTIONS", id: "SOLUSI KAMI" },
        {
          selector: ".solutions .section-subtitle",
          en: "Integrate Reliable Systems into Value Based Solution. PT Sentra Netcomindo has an extensive experience in integrating multiple systems into solution that bring highest value to our customer",
          id: "Mengintegrasikan sistem yang andal menjadi solusi berbasis nilai. PT Sentra Netcomindo memiliki pengalaman luas dalam mengintegrasikan berbagai sistem menjadi solusi yang memberikan nilai tertinggi bagi pelanggan."
        },

        { selector: ".solutions-grid .solution-item:nth-child(1) h3", en: "Crypto Processing", id: "Pemrosesan Kriptografi" },
        {
          selector: ".solutions-grid .solution-item:nth-child(1) p",
          en: "We bring solution related to securing sensitive data and helping financial institutions encrypt critical information.",
          id: "Kami menghadirkan solusi untuk mengamankan data sensitif dan membantu institusi keuangan mengenkripsi informasi kritis."
        },
        { selector: ".solutions-grid .solution-item:nth-child(2) h3", en: "Network Security", id: "Keamanan Jaringan" },
        {
          selector: ".solutions-grid .solution-item:nth-child(2) p",
          en: "Need to securing your internal network? We can help you bring complete security solution to fulfill your need.",
          id: "Perlu mengamankan jaringan internal Anda? Kami siap membantu menghadirkan solusi keamanan menyeluruh sesuai kebutuhan."
        },
        { selector: ".solutions-grid .solution-item:nth-child(3) h3", en: "Internet Access Management", id: "Manajemen Akses Internet" },
        {
          selector: ".solutions-grid .solution-item:nth-child(3) p",
          en: "Easy and powerful way to manage internet usage, user authentication, and network access for many connected users.",
          id: "Cara yang mudah dan andal untuk mengelola penggunaan internet, autentikasi pengguna, dan akses jaringan untuk banyak pengguna terhubung."
        },
        { selector: ".solutions-grid .solution-item:nth-child(4) h3", en: "Banking Solutions", id: "Solusi Perbankan" },
        {
          selector: ".solutions-grid .solution-item:nth-child(4) p",
          en: "Excellent solution related to banking from ATM and CDM to software-based monitoring and switching system.",
          id: "Solusi unggulan di bidang perbankan mulai dari ATM dan CDM hingga sistem monitoring dan switching berbasis perangkat lunak."
        },
        { selector: ".solutions-grid .solution-item:nth-child(5) h3", en: "Bandwidth Optimization", id: "Optimasi Bandwidth" },
        {
          selector: ".solutions-grid .solution-item:nth-child(5) p",
          en: "Optimize your network, improve user experience, and reduce redundant data transmission across branches.",
          id: "Optimalkan jaringan Anda, tingkatkan pengalaman pengguna, dan kurangi transmisi data berulang antar cabang."
        },
        { selector: ".solutions-grid .solution-item:nth-child(6) h3", en: "Power Protection", id: "Perlindungan Daya" },
        {
          selector: ".solutions-grid .solution-item:nth-child(6) p",
          en: "Provide power backup system with suitable UPS to make sure critical devices are always powering on.",
          id: "Menyediakan sistem cadangan daya dengan UPS yang sesuai agar perangkat kritis tetap menyala."
        },

        { selector: "#services .section-title", en: "OUR SERVICES", id: "LAYANAN KAMI" },
        {
          selector: "#services .section-subtitle",
          en: "Not only provides solutions and products, we are also offer various services from maintenance to education and training related to IT.",
          id: "Kami tidak hanya menyediakan solusi dan produk, tetapi juga menawarkan berbagai layanan mulai dari pemeliharaan hingga edukasi dan pelatihan terkait TI."
        },
        { selector: ".services-grid .service-item:nth-child(1) h3", en: "Maintenance", id: "Pemeliharaan" },
        { selector: ".services-grid .service-item:nth-child(1) p", en: "Maintenance and services ATM, CDM and Banking Solution product.", id: "Pemeliharaan dan layanan untuk ATM, CDM, dan produk solusi perbankan." },
        { selector: ".services-grid .service-item:nth-child(2) h3", en: "Manage Services", id: "Layanan Terkelola" },
        { selector: ".services-grid .service-item:nth-child(2) p", en: "Bring Highest Value Into Your Operational Expenses.", id: "Hadirkan nilai tertinggi untuk biaya operasional Anda." },
        { selector: ".services-grid .service-item:nth-child(3) h3", en: "Education and Training", id: "Edukasi dan Pelatihan" },
        { selector: ".services-grid .service-item:nth-child(3) p", en: "Be A Network Expert with Us.", id: "Menjadi ahli jaringan bersama kami." },

        { selector: ".partners .section-title", en: "OUR PARTNERS", id: "MITRA KAMI" },

        { selector: "#contact .section-title", en: "CONTACT US", id: "HUBUNGI KAMI" },
        {
          selector: "#contact .section-subtitle",
          en: "Yes we want to help you. Please don't doubt to email or call us",
          id: "Kami siap membantu Anda. Silakan hubungi kami melalui email atau telepon."
        },
        { selector: "#contact .contact-box:nth-child(1) h3", en: "OFFICE", id: "KANTOR" },
        { selector: "#contact .contact-box:nth-child(2) h3", en: "WORKSHOP", id: "WORKSHOP" },

        { selector: ".hero-content h1", en: "PT. Sentra Netcomindo", id: "PT. Sentra Netcomindo" },
        {
          selector: ".hero-content p.hero-description",
          en: "Founded in 2009, we start as a Network Infratructure company and has delivered comprehensive solution from networking products to cabling solution eversince. Now, PT Sentra Netcomindo expands its services to offer wider range of ICT Solution as a respond of growing needs in our based clients as well as other potential clients in the industry",
          id: "Didirikan pada tahun 2009, kami memulai sebagai perusahaan Network Infrastructure dan telah menghadirkan solusi komprehensif mulai dari produk networking hingga solusi cabling. Kini, PT Sentra Netcomindo memperluas layanan untuk menawarkan ragam solusi ICT yang lebih luas sebagai respons atas kebutuhan klien utama kami serta klien potensial lainnya di berbagai industri."
        },
        { selector: ".hero-cta .cta-primary", en: "Why Sentra Netcomindo?", id: "Kenapa Sentra Netcomindo?" },
        { selector: ".hero-cta .cta-secondary", en: "View Products", id: "Lihat Produk" },
        { selector: ".hero-kicker", en: "Enterprise IT Security & Infrastructure", id: "Keamanan dan Infrastruktur TI Enterprise" },
        { selector: ".hero-metrics div:nth-child(1) span", en: "Enterprise Projects", id: "Proyek Enterprise" },
        { selector: ".hero-metrics div:nth-child(2) span", en: "Support Readiness", id: "Kesiapan Support" },
        { selector: ".hero-metrics div:nth-child(3) span", en: "Industry Experience", id: "Pengalaman Industri" },

        { selector: "#about-brief .section-title", en: "Why Sentra Netcomindo?", id: "Kenapa Sentra Netcomindo?" },
        {
          selector: "#about-brief .section-subtitle",
          en: "Because we do not just deliver products, we make sure your solution runs stable, secure, and truly helps your business grow.",
          id: "Karena kami tidak hanya kirim produk, tapi memastikan solusi berjalan stabil, aman, dan benar-benar membantu bisnis Anda tumbuh."
        },
        {
          selector: "#about-brief .about-brief-copy .brief-body:nth-of-type(1)",
          en: "Our enterprise implementation experience is built through security, infrastructure, and business continuity projects with measurable execution standards and a responsive technical team.",
          id: "Pengalaman implementasi enterprise kami dibangun dari proyek keamanan, infrastruktur, dan business continuity dengan standar eksekusi yang terukur dan tim teknis yang responsif."
        },
        {
          selector: "#about-brief .about-brief-copy .brief-body:nth-of-type(2)",
          en: "Our approach is focused on your real business needs, supported by global technology partners so that the implemented solution is not only effective today, but also ready to scale for long-term requirements.",
          id: "Pendekatan kami berfokus pada kebutuhan nyata bisnis Anda, didukung partner teknologi global agar solusi yang diterapkan bukan hanya berjalan hari ini, tetapi juga siap berkembang untuk kebutuhan jangka panjang."
        },
        {
          selector: "#about-brief .about-brief-copy .brief-cta-link",
          en: "See full reasons why many companies choose Sentra Netcomindo",
          id: "Lihat alasan lengkap kenapa banyak perusahaan memilih Sentra Netcomindo"
        },

        { selector: "#quick-pages .section-title", en: "Main Pages", id: "Halaman Utama" },
        {
          selector: "#quick-pages .section-subtitle",
          en: "For complete details, continue to the dedicated pages below.",
          id: "Untuk detail lengkap, lanjut ke halaman terpisah di bawah ini."
        },
        { selector: ".mini-grid .mini-card:nth-child(1) h3", en: "Solutions", id: "Solusi" },
        {
          selector: ".mini-grid .mini-card:nth-child(1) p",
          en: "Detailed technical solutions from bandwidth to network security.",
          id: "Detail solusi teknis dari bandwidth hingga network security."
        },
        { selector: ".mini-grid .mini-card:nth-child(1) a", en: "Open Solutions page", id: "Buka halaman Solutions" },
        { selector: ".mini-grid .mini-card:nth-child(2) h3", en: "Services", id: "Layanan" },
        {
          selector: ".mini-grid .mini-card:nth-child(2) p",
          en: "Detailed implementation services, managed services, and training.",
          id: "Detail layanan implementasi, managed services, dan training."
        },
        { selector: ".mini-grid .mini-card:nth-child(2) a", en: "Open Services page", id: "Buka halaman Services" },
        { selector: ".mini-grid .mini-card:nth-child(3) h3", en: "Products", id: "Produk" },
        {
          selector: ".mini-grid .mini-card:nth-child(3) p",
          en: "List of products we support by category and brand.",
          id: "Daftar produk yang kami support lengkap per kategori dan brand."
        },
        { selector: ".mini-grid .mini-card:nth-child(3) a", en: "Open Products page", id: "Buka halaman Products" },

        { selector: "#home-partners .section-title", en: "Our Partners", id: "Mitra Kami" },
        {
          selector: "#home-partners .section-subtitle",
          en: "Supported by trusted technology partners to deliver the right solutions.",
          id: "Didukung oleh partner teknologi terpercaya untuk menghadirkan solusi yang tepat."
        }
      ]
    },

    "contact.html": {
      title: {
        en: "Contact Us | Sentra Netcomindo",
        id: "Hubungi Kami | Sentra Netcomindo"
      },
      description: {
        en: "Contact Sentra Netcomindo - Office and Workshop information",
        id: "Kontak Sentra Netcomindo - Informasi kantor dan workshop"
      },
      entries: [
        { selector: "#contact .section-title", en: "CONTACT US", id: "HUBUNGI KAMI" },
        {
          selector: "#contact .section-subtitle",
          en: "Yes we want to help you. Please don't doubt to email or call us",
          id: "Kami siap membantu Anda. Silakan hubungi kami melalui email atau telepon."
        },
        { selector: "#contact .contact-box:nth-child(1) h3", en: "OFFICE (NEW ADDRESS)", id: "KANTOR (ALAMAT BARU)" },
        { selector: "#contact .contact-box:nth-child(2) h3", en: "WORKSHOP", id: "WORKSHOP" }
      ]
    }
  };

  const subfeatureTranslations = {
    "bandwidth-optimization.html": {
      title: { en: "Bandwidth Optimization | Sentra Netcomindo", id: "Optimasi Bandwidth | Sentra Netcomindo" },
      description: { en: "Bandwidth Optimization - Sentra Netcomindo", id: "Optimasi Bandwidth - Sentra Netcomindo" },
      sectionTitle: { en: "Bandwidth Optimization", id: "Optimasi Bandwidth" },
      sectionSubtitle: {
        en: "Deliver faster and more stable application access across branches without increasing recurring bandwidth costs.",
        id: "Hadirkan akses aplikasi yang lebih cepat dan stabil di seluruh cabang tanpa meningkatkan biaya bandwidth berulang."
      },
      meta: { en: "Focus: Performance, Cost Efficiency, User Experience", id: "Fokus: Performa, Efisiensi Biaya, Pengalaman Pengguna" },
      block1Title: { en: "What We Deliver", id: "Apa yang Kami Berikan" },
      block1Text: {
        en: "We design and implement optimization architecture that reduces unnecessary traffic, prioritizes mission-critical applications, and improves response time for distributed users.",
        id: "Kami merancang dan mengimplementasikan arsitektur optimasi yang mengurangi trafik tidak perlu, memprioritaskan aplikasi kritikal, dan meningkatkan waktu respons bagi pengguna terdistribusi."
      },
      block2Title: { en: "Key Capabilities", id: "Kapabilitas Utama" },
      block2Items: {
        en: [
          "Application-aware traffic shaping and QoS policy design",
          "WAN optimization, caching, compression, and deduplication",
          "Real-time utilization monitoring with threshold based alerting",
          "Policy tuning to prioritize core systems such as ERP, CBS, and collaboration tools"
        ],
        id: [
          "Traffic shaping berbasis aplikasi dan desain kebijakan QoS",
          "Optimasi WAN, caching, kompresi, dan deduplikasi",
          "Pemantauan utilisasi real-time dengan notifikasi berbasis ambang batas",
          "Penyesuaian kebijakan untuk memprioritaskan sistem inti seperti ERP, CBS, dan kolaborasi"
        ]
      },
      block3Title: { en: "Business Benefits", id: "Manfaat Bisnis" },
      block3Items: {
        en: [
          "Higher branch productivity through lower application latency",
          "Controlled operational cost by delaying unnecessary bandwidth upgrades",
          "Better user experience for cloud and hybrid workloads"
        ],
        id: [
          "Produktivitas cabang meningkat melalui latensi aplikasi yang lebih rendah",
          "Biaya operasional lebih terkendali dengan menunda upgrade bandwidth yang tidak perlu",
          "Pengalaman pengguna lebih baik untuk beban kerja cloud dan hybrid"
        ]
      },
      cta: { en: "Discuss Bandwidth Assessment", id: "Diskusikan Assessment Bandwidth" }
    },

    "hardware-security-module.html": {
      title: { en: "Hardware Security Module | Sentra Netcomindo", id: "Modul Keamanan Perangkat Keras | Sentra Netcomindo" },
      description: { en: "Hardware Security Module - Sentra Netcomindo", id: "Modul Keamanan Perangkat Keras - Sentra Netcomindo" },
      sectionTitle: { en: "Hardware Security Module", id: "Modul Keamanan Perangkat Keras" },
      sectionSubtitle: {
        en: "Protect cryptographic keys and sensitive transactions with enterprise-grade key management infrastructure.",
        id: "Lindungi kunci kriptografi dan transaksi sensitif dengan infrastruktur manajemen kunci kelas enterprise."
      },
      meta: { en: "Focus: Key Protection, Compliance, Transaction Security", id: "Fokus: Perlindungan Kunci, Kepatuhan, Keamanan Transaksi" },
      block1Title: { en: "What We Deliver", id: "Apa yang Kami Berikan" },
      block1Text: {
        en: "We provide end-to-end HSM implementation for secure key generation, storage, and cryptographic processing, aligned with financial and public sector security standards.",
        id: "Kami menyediakan implementasi HSM end-to-end untuk pembuatan kunci yang aman, penyimpanan, dan pemrosesan kriptografi, selaras dengan standar keamanan sektor keuangan dan publik."
      },
      block2Title: { en: "Key Capabilities", id: "Kapabilitas Utama" },
      block2Items: {
        en: [
          "Secure key lifecycle management for encryption and digital signing",
          "Integration with payment switching, PKI, and core banking systems",
          "High-availability deployment for business critical services",
          "Support for audit readiness and regulatory controls"
        ],
        id: [
          "Manajemen siklus hidup kunci yang aman untuk enkripsi dan tanda tangan digital",
          "Integrasi dengan payment switching, PKI, dan core banking",
          "Deployment high-availability untuk layanan bisnis kritikal",
          "Dukungan kesiapan audit dan kontrol regulasi"
        ]
      },
      block3Title: { en: "Business Benefits", id: "Manfaat Bisnis" },
      block3Items: {
        en: [
          "Reduced risk of key compromise and fraudulent transactions",
          "Improved trust for customer-facing digital services",
          "Stronger compliance posture for internal and external audits"
        ],
        id: [
          "Risiko kompromi kunci dan transaksi fraud berkurang",
          "Kepercayaan terhadap layanan digital pelanggan meningkat",
          "Posisi kepatuhan lebih kuat untuk audit internal dan eksternal"
        ]
      },
      cta: { en: "Consult HSM Implementation", id: "Konsultasi Implementasi HSM" }
    },

    "internet-access-management.html": {
      title: { en: "Internet Access Management | Sentra Netcomindo", id: "Manajemen Akses Internet | Sentra Netcomindo" },
      description: { en: "Internet Access Management - Sentra Netcomindo", id: "Manajemen Akses Internet - Sentra Netcomindo" },
      sectionTitle: { en: "Internet Access Management", id: "Manajemen Akses Internet" },
      sectionSubtitle: {
        en: "Control web access policies centrally to improve productivity, reduce risks, and simplify branch operations.",
        id: "Kendalikan kebijakan akses web secara terpusat untuk meningkatkan produktivitas, mengurangi risiko, dan menyederhanakan operasional cabang."
      },
      meta: { en: "Focus: User Control, Visibility, Governance", id: "Fokus: Kontrol Pengguna, Visibilitas, Tata Kelola" },
      block1Title: { en: "What We Deliver", id: "Apa yang Kami Berikan" },
      block1Text: {
        en: "We build secure internet access management platforms that combine authentication, policy control, and activity visibility for office, branch, and remote users.",
        id: "Kami membangun platform manajemen akses internet yang aman dengan kombinasi autentikasi, kontrol kebijakan, dan visibilitas aktivitas untuk kantor, cabang, dan pengguna remote."
      },
      block2Title: { en: "Key Capabilities", id: "Kapabilitas Utama" },
      block2Items: {
        en: [
          "User and device based internet policy enforcement",
          "Web filtering for categories, applications, and unsafe content",
          "Quota, scheduling, and bandwidth allocation per group",
          "Detailed reporting for usage analysis and compliance tracking"
        ],
        id: [
          "Penerapan kebijakan internet berbasis pengguna dan perangkat",
          "Web filtering berdasarkan kategori, aplikasi, dan konten berisiko",
          "Pengaturan kuota, jadwal, dan alokasi bandwidth per grup",
          "Pelaporan detail untuk analisis penggunaan dan pelacakan kepatuhan"
        ]
      },
      block3Title: { en: "Business Benefits", id: "Manfaat Bisnis" },
      block3Items: {
        en: [
          "Reduced exposure to malware, phishing, and shadow IT activity",
          "Higher productivity through policy driven internet usage",
          "Stronger governance with auditable user activity records"
        ],
        id: [
          "Paparan malware, phishing, dan aktivitas shadow IT berkurang",
          "Produktivitas meningkat melalui kebijakan penggunaan internet",
          "Tata kelola lebih kuat dengan rekam aktivitas pengguna yang dapat diaudit"
        ]
      },
      cta: { en: "Plan Access Policy Design", id: "Rencanakan Desain Kebijakan Akses" }
    },

    "network-security.html": {
      title: { en: "Network Security | Sentra Netcomindo", id: "Keamanan Jaringan | Sentra Netcomindo" },
      description: { en: "Network Security - Sentra Netcomindo", id: "Keamanan Jaringan - Sentra Netcomindo" },
      sectionTitle: { en: "Network Security", id: "Keamanan Jaringan" },
      sectionSubtitle: {
        en: "Secure internal and external network traffic with layered controls built for modern hybrid infrastructure.",
        id: "Amankan trafik jaringan internal dan eksternal dengan kontrol berlapis untuk infrastruktur hybrid modern."
      },
      meta: { en: "Focus: Defense in Depth, Monitoring, Incident Response", id: "Fokus: Defense in Depth, Monitoring, Respons Insiden" },
      block1Title: { en: "What We Deliver", id: "Apa yang Kami Berikan" },
      block1Text: {
        en: "We deliver integrated network protection architecture that combines prevention, detection, and response to protect business-critical applications and data flows.",
        id: "Kami menghadirkan arsitektur perlindungan jaringan terintegrasi yang menggabungkan pencegahan, deteksi, dan respons untuk melindungi aplikasi serta aliran data bisnis kritikal."
      },
      block2Title: { en: "Key Capabilities", id: "Kapabilitas Utama" },
      block2Items: {
        en: [
          "Next generation firewall deployment and rule optimization",
          "Segmentation strategy for data center, branch, and user zones",
          "IDS/IPS, secure remote access, and VPN hardening",
          "Continuous threat monitoring with actionable security insights"
        ],
        id: [
          "Deployment next generation firewall dan optimasi rule",
          "Strategi segmentasi untuk data center, cabang, dan zona pengguna",
          "IDS/IPS, secure remote access, dan hardening VPN",
          "Monitoring ancaman berkelanjutan dengan insight keamanan yang dapat ditindaklanjuti"
        ]
      },
      block3Title: { en: "Business Benefits", id: "Manfaat Bisnis" },
      block3Items: {
        en: [
          "Reduced attack surface and lower risk of service disruption",
          "Faster response to suspicious events and incidents",
          "Consistent security policy enforcement across all locations"
        ],
        id: [
          "Permukaan serangan berkurang dan risiko gangguan layanan menurun",
          "Respons lebih cepat terhadap kejadian dan insiden mencurigakan",
          "Penerapan kebijakan keamanan konsisten di seluruh lokasi"
        ]
      },
      cta: { en: "Request Security Architecture Review", id: "Minta Review Arsitektur Keamanan" }
    },

    "power-protection.html": {
      title: { en: "Power Protection | Sentra Netcomindo", id: "Perlindungan Daya | Sentra Netcomindo" },
      description: { en: "Power Protection - Sentra Netcomindo", id: "Perlindungan Daya - Sentra Netcomindo" },
      sectionTitle: { en: "Power Protection", id: "Perlindungan Daya" },
      sectionSubtitle: {
        en: "Maintain system availability with resilient power infrastructure designed for critical IT and operational equipment.",
        id: "Jaga ketersediaan sistem dengan infrastruktur daya andal yang dirancang untuk perangkat TI dan operasional kritikal."
      },
      meta: { en: "Focus: Uptime, Reliability, Infrastructure Safety", id: "Fokus: Uptime, Keandalan, Keamanan Infrastruktur" },
      block1Title: { en: "What We Deliver", id: "Apa yang Kami Berikan" },
      block1Text: {
        en: "We provide power continuity solutions that protect systems from outage, voltage instability, and power quality issues that can impact business operations.",
        id: "Kami menyediakan solusi kontinuitas daya untuk melindungi sistem dari pemadaman, ketidakstabilan tegangan, dan masalah kualitas daya yang berdampak pada operasional bisnis."
      },
      block2Title: { en: "Key Capabilities", id: "Kapabilitas Utama" },
      block2Items: {
        en: [
          "UPS sizing and deployment for server rooms and branch offices",
          "Power distribution and redundancy planning for critical loads",
          "Battery health monitoring and preventive replacement planning",
          "Integration with generator and facility management workflows"
        ],
        id: [
          "Sizing dan deployment UPS untuk ruang server dan kantor cabang",
          "Perencanaan distribusi daya dan redundansi untuk beban kritikal",
          "Pemantauan kesehatan baterai dan rencana penggantian preventif",
          "Integrasi dengan generator dan alur kerja manajemen fasilitas"
        ]
      },
      block3Title: { en: "Business Benefits", id: "Manfaat Bisnis" },
      block3Items: {
        en: [
          "Reduced downtime risk during utility disturbances",
          "Protection of hardware investment and sensitive data systems",
          "Higher confidence in business continuity readiness"
        ],
        id: [
          "Risiko downtime saat gangguan listrik menurun",
          "Investasi hardware dan sistem data sensitif lebih terlindungi",
          "Kesiapan business continuity lebih terjamin"
        ]
      },
      cta: { en: "Schedule Power Site Survey", id: "Jadwalkan Survey Daya" }
    },

    "storage-server.html": {
      title: { en: "Storage and Server | Sentra Netcomindo", id: "Penyimpanan dan Server | Sentra Netcomindo" },
      description: { en: "Storage and Server - Sentra Netcomindo", id: "Penyimpanan dan Server - Sentra Netcomindo" },
      sectionTitle: { en: "Storage and Server", id: "Penyimpanan dan Server" },
      sectionSubtitle: {
        en: "Build scalable compute and storage foundations to support application growth, data resilience, and service continuity.",
        id: "Bangun fondasi komputasi dan penyimpanan yang skalabel untuk mendukung pertumbuhan aplikasi, ketahanan data, dan kontinuitas layanan."
      },
      meta: { en: "Focus: Scalability, Availability, Data Protection", id: "Fokus: Skalabilitas, Ketersediaan, Perlindungan Data" },
      block1Title: { en: "What We Deliver", id: "Apa yang Kami Berikan" },
      block1Text: {
        en: "We design and implement right-sized server and storage platforms for virtualized, private cloud, and business application environments.",
        id: "Kami merancang dan mengimplementasikan platform server dan storage yang tepat guna untuk lingkungan virtualisasi, private cloud, dan aplikasi bisnis."
      },
      block2Title: { en: "Key Capabilities", id: "Kapabilitas Utama" },
      block2Items: {
        en: [
          "Server consolidation and virtualization optimization",
          "Centralized storage architecture with tiered performance planning",
          "Backup, replication, and disaster recovery readiness",
          "Health monitoring and lifecycle capacity management"
        ],
        id: [
          "Konsolidasi server dan optimasi virtualisasi",
          "Arsitektur storage terpusat dengan perencanaan performa bertingkat",
          "Kesiapan backup, replikasi, dan disaster recovery",
          "Pemantauan kesehatan sistem dan manajemen kapasitas siklus hidup"
        ]
      },
      block3Title: { en: "Business Benefits", id: "Manfaat Bisnis" },
      block3Items: {
        en: [
          "Reliable performance for core applications and databases",
          "Improved data durability with stronger recovery options",
          "Lower operational complexity through centralized management"
        ],
        id: [
          "Performa andal untuk aplikasi inti dan database",
          "Ketahanan data meningkat dengan opsi pemulihan yang lebih kuat",
          "Kompleksitas operasional menurun melalui manajemen terpusat"
        ]
      },
      cta: { en: "Explore Server and Storage Upgrade", id: "Eksplorasi Upgrade Server dan Storage" }
    },

    "maintenance.html": {
      title: { en: "Maintenance | Sentra Netcomindo", id: "Pemeliharaan | Sentra Netcomindo" },
      description: { en: "Maintenance - Sentra Netcomindo", id: "Pemeliharaan - Sentra Netcomindo" },
      sectionTitle: { en: "Maintenance", id: "Pemeliharaan" },
      sectionSubtitle: {
        en: "Keep your IT and banking systems running optimally through structured preventive and corrective maintenance services.",
        id: "Jaga sistem TI dan perbankan Anda tetap berjalan optimal melalui layanan pemeliharaan preventif dan korektif yang terstruktur."
      },
      meta: { en: "Focus: Reliability, Response Time, Asset Health", id: "Fokus: Keandalan, Waktu Respons, Kesehatan Aset" },
      block1Title: { en: "Service Scope", id: "Cakupan Layanan" },
      block1Text: {
        en: "Our maintenance team supports hardware and solution environments with clear service procedures, measurable SLA commitments, and regular reporting.",
        id: "Tim maintenance kami mendukung lingkungan hardware dan solusi dengan prosedur layanan yang jelas, komitmen SLA terukur, dan pelaporan berkala."
      },
      block2Title: { en: "Service Activities", id: "Aktivitas Layanan" },
      block2Items: {
        en: [
          "Preventive health checks and scheduled system inspection",
          "Corrective troubleshooting and on-site intervention support",
          "Spare part coordination and lifecycle replacement planning",
          "Periodic maintenance reports with improvement recommendations"
        ],
        id: [
          "Pemeriksaan kesehatan preventif dan inspeksi sistem terjadwal",
          "Troubleshooting korektif dan dukungan intervensi on-site",
          "Koordinasi spare part dan perencanaan penggantian siklus hidup",
          "Laporan maintenance berkala disertai rekomendasi perbaikan"
        ]
      },
      block3Title: { en: "Business Outcomes", id: "Hasil Bisnis" },
      block3Items: {
        en: [
          "Lower unplanned downtime and faster issue resolution",
          "More stable daily operations for critical equipment",
          "Better control over support quality and maintenance cost"
        ],
        id: [
          "Downtime tak terencana menurun dan penyelesaian masalah lebih cepat",
          "Operasional harian untuk perangkat kritikal lebih stabil",
          "Kontrol kualitas dukungan dan biaya maintenance lebih baik"
        ]
      },
      cta: { en: "Request Maintenance SLA Proposal", id: "Minta Proposal SLA Maintenance" }
    },

    "managed-services.html": {
      title: { en: "Managed Services | Sentra Netcomindo", id: "Layanan Terkelola | Sentra Netcomindo" },
      description: { en: "Managed Services - Sentra Netcomindo", id: "Layanan Terkelola - Sentra Netcomindo" },
      sectionTitle: { en: "Managed Services", id: "Layanan Terkelola" },
      sectionSubtitle: {
        en: "Entrust day-to-day IT operations to a dedicated team so your internal resources can focus on strategic priorities.",
        id: "Percayakan operasional TI harian kepada tim khusus agar sumber daya internal dapat fokus pada prioritas strategis."
      },
      meta: { en: "Focus: Operational Excellence, SLA, Continuous Support", id: "Fokus: Keunggulan Operasional, SLA, Dukungan Berkelanjutan" },
      block1Title: { en: "Service Scope", id: "Cakupan Layanan" },
      block1Text: {
        en: "We provide managed operations for selected infrastructure domains with proactive monitoring, incident handling, and regular governance reporting.",
        id: "Kami menyediakan operasi terkelola untuk domain infrastruktur terpilih dengan monitoring proaktif, penanganan insiden, dan pelaporan tata kelola berkala."
      },
      block2Title: { en: "Service Activities", id: "Aktivitas Layanan" },
      block2Items: {
        en: [
          "24/7 monitoring and alert response for critical systems",
          "Incident, problem, and change management based on agreed workflows",
          "Capacity and performance reporting with monthly service review",
          "Escalation coordination with principal vendors and internal teams"
        ],
        id: [
          "Monitoring 24/7 dan respons alert untuk sistem kritikal",
          "Manajemen insiden, problem, dan perubahan berdasarkan alur kerja yang disepakati",
          "Pelaporan kapasitas dan performa dengan review layanan bulanan",
          "Koordinasi eskalasi dengan principal vendor dan tim internal"
        ]
      },
      block3Title: { en: "Business Outcomes", id: "Hasil Bisnis" },
      block3Items: {
        en: [
          "Predictable service quality through measurable SLAs",
          "Reduced operational burden for internal IT teams",
          "Improved service continuity and governance visibility"
        ],
        id: [
          "Kualitas layanan lebih terprediksi melalui SLA terukur",
          "Beban operasional tim TI internal berkurang",
          "Kontinuitas layanan dan visibilitas tata kelola meningkat"
        ]
      },
      cta: { en: "Build Your Managed Service Plan", id: "Bangun Rencana Managed Service Anda" }
    },

    "education-training.html": {
      title: { en: "Education and Training | Sentra Netcomindo", id: "Edukasi dan Pelatihan | Sentra Netcomindo" },
      description: { en: "Education and Training - Sentra Netcomindo", id: "Edukasi dan Pelatihan - Sentra Netcomindo" },
      sectionTitle: { en: "Education and Training", id: "Edukasi dan Pelatihan" },
      sectionSubtitle: {
        en: "Develop practical capabilities for your technical teams through hands-on, outcome-oriented IT training programs.",
        id: "Kembangkan kapabilitas praktis tim teknis Anda melalui program pelatihan TI yang hands-on dan berorientasi hasil."
      },
      meta: { en: "Focus: Skill Growth, Practical Labs, Team Readiness", id: "Fokus: Pengembangan Skill, Lab Praktis, Kesiapan Tim" },
      block1Title: { en: "Service Scope", id: "Cakupan Layanan" },
      block1Text: {
        en: "We deliver structured learning programs tailored to your infrastructure and operational needs, from fundamentals to advanced implementation workshops.",
        id: "Kami menghadirkan program pembelajaran terstruktur yang disesuaikan dengan kebutuhan infrastruktur dan operasional Anda, dari fundamental hingga workshop implementasi lanjutan."
      },
      block2Title: { en: "Program Components", id: "Komponen Program" },
      block2Items: {
        en: [
          "Instructor-led classes for network, security, and infrastructure domains",
          "Hands-on labs, real case simulation, and troubleshooting sessions",
          "Customized training paths for operations and engineering teams",
          "Post-training recommendations to improve daily operational practice"
        ],
        id: [
          "Kelas dipandu instruktur untuk domain jaringan, keamanan, dan infrastruktur",
          "Hands-on lab, simulasi kasus nyata, dan sesi troubleshooting",
          "Jalur pelatihan yang disesuaikan untuk tim operasi dan engineering",
          "Rekomendasi pasca pelatihan untuk meningkatkan praktik operasional harian"
        ]
      },
      block3Title: { en: "Business Outcomes", id: "Hasil Bisnis" },
      block3Items: {
        en: [
          "Faster onboarding and stronger technical confidence",
          "Reduced dependency on ad hoc external troubleshooting",
          "Better alignment between technology investment and team capability"
        ],
        id: [
          "Onboarding lebih cepat dan kepercayaan teknis lebih kuat",
          "Ketergantungan pada troubleshooting eksternal ad hoc berkurang",
          "Kesesuaian antara investasi teknologi dan kapabilitas tim lebih baik"
        ]
      },
      cta: { en: "Arrange Team Training Session", id: "Atur Sesi Pelatihan Tim" }
    }
  };

  const LANGUAGES = new Set(["en", "id"]);
  const PAGE_FALLBACK = "index.html";
  const LANGUAGE_TOGGLE_SELECTOR = "#languageToggle";

  /**
   * Safely query a single DOM element.
   * @param {string} selector
   * @returns {Element|null}
   */
  const queryOne = (selector) => {
    try {
      return document.querySelector(selector);
    } catch {
      return null;
    }
  };

  const isValidLanguage = (value) => LANGUAGES.has(value);
  const normalizeLanguage = (value) => (isValidLanguage(value) ? value : DEFAULT_LANG);

  const getCurrentPage = () => window.location.pathname.split("/").pop() || PAGE_FALLBACK;

  const setText = (selector, value) => {
    const element = queryOne(selector);
    if (!element || typeof value !== "string") {
      return;
    }
    element.textContent = value;
  };

  const setDocumentMeta = (metaConfig, lang) => {
    if (!metaConfig || !isValidLanguage(lang)) {
      return;
    }

    const pageTitle = metaConfig?.title?.[lang];
    if (pageTitle) {
      document.title = pageTitle;
    }

    const description = metaConfig?.description?.[lang];
    if (description) {
      queryOne('meta[name="description"]')?.setAttribute("content", description);
    }
  };

  const applyEntries = (entries, lang) => {
    if (!Array.isArray(entries) || !isValidLanguage(lang)) {
      return;
    }

    for (const entry of entries) {
      const selector = entry?.selector;
      const text = entry?.[lang];
      if (selector && text) {
        setText(selector, text);
      }
    }
  };

  const applyListEntries = (selectorPrefix, items = []) => {
    if (!Array.isArray(items)) {
      return;
    }

    items.forEach((item, index) => {
      setText(`${selectorPrefix} li:nth-child(${index + 1})`, item);
    });
  };

  const applySubfeatureContent = (pageConfig, lang) => {
    if (!pageConfig || !isValidLanguage(lang)) {
      return;
    }

    setText("#subfeature-detail .section-title", pageConfig?.sectionTitle?.[lang]);
    setText("#subfeature-detail .section-subtitle", pageConfig?.sectionSubtitle?.[lang]);
    setText("#subfeature-detail .subfeature-meta", pageConfig?.meta?.[lang]);

    setText(".subfeature-block:nth-child(1) h3", pageConfig?.block1Title?.[lang]);
    setText(".subfeature-block:nth-child(1) p", pageConfig?.block1Text?.[lang]);

    setText(".subfeature-block:nth-child(2) h3", pageConfig?.block2Title?.[lang]);
    applyListEntries(".subfeature-block:nth-child(2)", pageConfig?.block2Items?.[lang]);

    setText(".subfeature-block:nth-child(3) h3", pageConfig?.block3Title?.[lang]);
    applyListEntries(".subfeature-block:nth-child(3)", pageConfig?.block3Items?.[lang]);

    setText(".subfeature-cta", pageConfig?.cta?.[lang]);
  };

  const getStoredLanguage = () => {
    try {
      return normalizeLanguage(window.localStorage.getItem(STORAGE_KEY));
    } catch {
      return DEFAULT_LANG;
    }
  };

  const setStoredLanguage = (lang) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore storage write issues (private mode, blocked storage, etc).
    }
  };

  const updateLanguageToggleLabel = (lang) => {
    const toggle = queryOne(LANGUAGE_TOGGLE_SELECTOR);
    if (!toggle) {
      return;
    }

    toggle.textContent = lang === "en" ? "Indonesia" : "English";
    toggle.setAttribute("href", "#");
  };

  /**
   * Apply selected language to current page content.
   * @param {string} lang
   */
  const applyLanguage = (lang) => {
    const activeLang = normalizeLanguage(lang);
    const page = getCurrentPage();

    document.documentElement.setAttribute("lang", activeLang);
    applyEntries(commonTranslations, activeLang);

    const pageConfig = pageTranslations[page];
    if (pageConfig) {
      setDocumentMeta(pageConfig, activeLang);
      applyEntries(pageConfig.entries, activeLang);
    }

    const subfeatureConfig = subfeatureTranslations[page];
    if (subfeatureConfig) {
      setDocumentMeta(subfeatureConfig, activeLang);
      applySubfeatureContent(subfeatureConfig, activeLang);
    }

    updateLanguageToggleLabel(activeLang);
    setStoredLanguage(activeLang);
  };

  const initLanguageToggle = () => {
    const toggle = queryOne(LANGUAGE_TOGGLE_SELECTOR);
    if (!toggle) {
      return;
    }

    toggle.addEventListener("click", (event) => {
      event.preventDefault();
      const nextLanguage = getStoredLanguage() === "en" ? "id" : "en";
      applyLanguage(nextLanguage);
    });
  };

  applyLanguage(getStoredLanguage());
  initLanguageToggle();
})();
