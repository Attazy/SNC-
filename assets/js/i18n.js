(() => {
  const STORAGE_KEY = "snc-language";
  const DEFAULT_LANG = "en";

  const commonTranslations = [
    { selector: "#navLinks > li > a[href='index.html'], #navLinks > li > a[href='../index.html']", en: "Home", id: "Beranda" },
    { selector: "#navLinks > li > a[href='about.html'], #navLinks > li > a[href='../about.html']", en: "About", id: "Tentang" },
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
          en: "Founded in 2009, PT Sentra Netcomindo began as a network infrastructure provider and has delivered comprehensive solutions ranging from networking products to cabling services. Today, we continue to expand our ICT portfolio to meet evolving client needs across financial institutions, telecommunications, and public services.",
          id: "Didirikan pada tahun 2009, PT Sentra Netcomindo memulai perjalanan sebagai penyedia infrastruktur jaringan dan terus menghadirkan solusi komprehensif mulai dari produk jaringan hingga layanan pengkabelan. Saat ini, kami terus memperluas portofolio ICT untuk menjawab kebutuhan klien yang terus berkembang di sektor institusi keuangan, telekomunikasi, dan layanan publik."
        },
        { selector: ".hero-cta .cta-primary", en: "Why Sentra Netcomindo?", id: "Kenapa Sentra Netcomindo?" },
        { selector: ".hero-cta .cta-secondary", en: "View Products", id: "Lihat Produk" },
        {
          selector: ".hero-cert span",
          en: "ISO/IEC 27001 Certified Company",
          id: "Perusahaan Tersertifikasi ISO/IEC 27001"
        },
        { selector: ".hero-kicker", en: "Enterprise IT Security & Infrastructure", id: "Keamanan dan Infrastruktur TI Enterprise" },
        { selector: ".hero-metrics div:nth-child(1) span", en: "Enterprise Projects", id: "Proyek Enterprise" },
        { selector: ".hero-metrics div:nth-child(2) span", en: "Support Readiness", id: "Kesiapan Support" },
        { selector: ".hero-metrics div:nth-child(3) span", en: "Industry Experience", id: "Pengalaman Industri" },

        { selector: "#about-brief .section-title", en: "Why Sentra Netcomindo?", id: "Kenapa Sentra Netcomindo?" },
        {
          selector: "#about-brief .section-subtitle",
          en: "We focus on enterprise IT solutions that are stable, secure, and aligned with your business priorities.",
          id: "Kami fokus pada solusi TI enterprise yang stabil, aman, dan selaras dengan prioritas bisnis Anda."
        },
        {
          selector: "#about-brief .about-brief-copy .brief-body:nth-of-type(1)",
          en: "Our implementation track record is built through security, infrastructure, and business continuity projects with measurable execution and responsive technical support.",
          id: "Pengalaman implementasi kami dibangun dari proyek keamanan, infrastruktur, dan business continuity dengan eksekusi terukur serta dukungan tim teknis yang responsif."
        },
        {
          selector: "#about-brief .about-brief-copy .brief-cta-link",
          en: "See why organizations choose Sentra Netcomindo",
          id: "Lihat alasan organisasi memilih Sentra Netcomindo"
        },

        { selector: "#quick-pages .section-title", en: "Main Pages", id: "Halaman Utama" },
        {
          selector: "#quick-pages .section-subtitle",
          en: "Explore the dedicated pages below for full service and solution details.",
          id: "Jelajahi halaman khusus di bawah untuk melihat detail solusi dan layanan secara lengkap."
        },
        { selector: ".mini-grid .mini-card:nth-child(1) h3", en: "Solutions", id: "Solusi" },
        {
          selector: ".mini-grid .mini-card:nth-child(1) p",
          en: "Technical solution portfolio from bandwidth optimization to network security architecture.",
          id: "Portofolio solusi teknis dari optimasi bandwidth hingga arsitektur keamanan jaringan."
        },
        { selector: ".mini-grid .mini-card:nth-child(1) a", en: "Open Solutions page", id: "Buka halaman Solutions" },
        { selector: ".mini-grid .mini-card:nth-child(2) h3", en: "Services", id: "Layanan" },
        {
          selector: ".mini-grid .mini-card:nth-child(2) p",
          en: "Implementation services, managed operations, and technical capability development programs.",
          id: "Layanan implementasi, operasi terkelola, dan program pengembangan kapabilitas teknis."
        },
        { selector: ".mini-grid .mini-card:nth-child(2) a", en: "Open Services page", id: "Buka halaman Services" },
        { selector: ".mini-grid .mini-card:nth-child(3) h3", en: "Products", id: "Produk" },
        {
          selector: ".mini-grid .mini-card:nth-child(3) p",
          en: "Core product portfolio by category and principal technology partner.",
          id: "Portofolio produk utama berdasarkan kategori dan principal teknologi."
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

    "about.html": {
      title: {
        en: "About | Sentra Netcomindo",
        id: "Tentang | Sentra Netcomindo"
      },
      description: {
        en: "Learn about Sentra Netcomindo's profile, vision, mission, and strategic objectives.",
        id: "Pelajari profil, visi, misi, dan tujuan strategis Sentra Netcomindo."
      },
      entries: [
        { selector: ".hero-content h1", en: "SENTRA NETCOMINDO", id: "SENTRA NETCOMINDO" },
        {
          selector: ".hero-content p:not(.hero-description)",
          en: "Company profile, vision, mission, and strategic objectives.",
          id: "Profil perusahaan, visi, misi, dan tujuan strategis."
        },
        { selector: "#about-company .section-title", en: "Company Overview", id: "Gambaran Perusahaan" },
        {
          selector: "#about-company .section-subtitle",
          en: "A concise profile of who we are and what we deliver.",
          id: "Profil ringkas tentang siapa kami dan nilai yang kami hadirkan."
        },
        {
          selector: "#about-company .about-intro .about-paragraph:nth-of-type(1)",
          en: "Founded in 2009, Sentra Netcomindo started as a Network Infrastructure Provider and has delivered comprehensive solutions from networking products to cabling solutions ever since.",
          id: "Didirikan pada tahun 2009, Sentra Netcomindo memulai sebagai penyedia infrastruktur jaringan dan sejak saat itu menghadirkan solusi menyeluruh dari produk jaringan hingga solusi pengkabelan."
        },
        {
          selector: "#about-company .about-intro .about-paragraph:nth-of-type(2)",
          en: "Today, Sentra Netcomindo expands its services to offer a wider range of IT solutions in response to growing customer needs, especially in Financial Institutions, Telecommunications, and Public Services.",
          id: "Saat ini, Sentra Netcomindo memperluas layanan untuk menghadirkan ragam solusi TI yang lebih luas sebagai respons atas kebutuhan pelanggan yang terus berkembang, terutama di sektor institusi keuangan, telekomunikasi, dan layanan publik."
        },
        {
          selector: "#about-company .iso-highlight span",
          en: "ISO/IEC 27001 Certified Company",
          id: "Perusahaan Tersertifikasi ISO/IEC 27001"
        },
        { selector: "#about-company .about-vision h3", en: "VISION", id: "VISI" },
        { selector: "#about-company .about-vision li:nth-child(1)", en: "To become a trusted and respected IT solutions provider.", id: "Menjadi penyedia solusi TI yang tepercaya dan dihormati." },
        { selector: "#about-company .about-mission h3", en: "MISSION", id: "MISI" },
        {
          selector: "#about-company .about-mission li:nth-child(1)",
          en: "Build strong IT capabilities through continuous talent development.",
          id: "Membangun kapabilitas TI yang kuat melalui pengembangan talenta secara berkelanjutan."
        },
        { selector: "#about-company .about-mission li:nth-child(2)", en: "Deliver value-based solutions to customers.", id: "Memberikan solusi berbasis nilai kepada pelanggan." },
        { selector: "#about-company .about-mission li:nth-child(3)", en: "Build a solid and sustainable financial foundation.", id: "Membangun fondasi keuangan yang solid dan berkelanjutan." },
        { selector: "#about-company .about-objectives h3", en: "OBJECTIVES", id: "TUJUAN" },
        { selector: "#about-company .about-objectives li:nth-child(1)", en: "Deliver the highest-quality outcomes to customers.", id: "Memberikan hasil berkualitas tertinggi kepada pelanggan." },
        {
          selector: "#about-company .about-objectives li:nth-child(2)",
          en: "Build long-term relationships that grow into shared success.",
          id: "Membangun hubungan jangka panjang yang tumbuh menjadi keberhasilan bersama."
        }
      ]
    },

    "bandwidth-optimization.html": {
      entries: [
        { selector: "#subfeature-detail .resource-brochure", en: "Brocure and datasheet", id: "Brosur dan datasheet" },
        { selector: "#subfeature-detail .resource-prefix", en: "For more info, please check", id: "Untuk info lebih lanjut, silakan cek" },
        { selector: "#subfeature-detail .resource-site", en: "Sangfor's official website", id: "website resmi Sangfor" },
        {
          selector: "#subfeature-detail .solution-note",
          en: "**If you interest with this solution, please contact us. We will happy to explain it and we are ready to show the demo if needed.",
          id: "**Jika Anda tertarik dengan solusi ini, silakan hubungi kami. Kami siap menjelaskan lebih lanjut dan siap menunjukkan demo jika dibutuhkan."
        }
      ]
    },

    "hardware-security-module.html": {
      entries: [
        {
          selector: "#subfeature-detail .hsm-body-2",
          en: "enterprises buy HSM to securing transactions, identities, cryptographic keys and provisioning encryption, decryption, authentication, and digital signing services for a wide range of applications. An HSM is a device used for key management encryption and decryption of data. The HSM holds the key material on the device and there is no way to export the keys in a usable format. This keeps and attacker from copying your encrypted database and then taking the key and decrypting the data offsite, on his own time, where he is less likely to be caught",
          id: "Perusahaan menggunakan HSM untuk mengamankan transaksi, identitas, kunci kriptografi, serta penyediaan enkripsi, dekripsi, autentikasi, dan layanan tanda tangan digital untuk berbagai aplikasi. HSM adalah perangkat untuk manajemen kunci, enkripsi, dan dekripsi data. Material kunci disimpan di perangkat dan tidak dapat diekspor dalam format yang dapat digunakan. Hal ini mencegah penyerang menyalin database terenkripsi lalu mengambil kunci untuk mendekripsi data di luar lokasi."
        },
        { selector: "#subfeature-detail .hsm-readmore", en: "Read more", id: "Baca selengkapnya" }
      ]
    },

    "internet-access-management.html": {
      entries: [
        {
          selector: "#subfeature-detail .iam-body-2",
          en: "As the leading vendor of Network Management, Sangfor IAM has been already listed in the SWG Gartner Magic Quadrant for 7 years in a row. It has professional internet bandwidth management, application control, URL filter, traffic control, information control, illegal hotspot/proxy control, behaviour analysis, wireless network management and many other features, which can truly help you achieve a Unified Internet Behaviour Management of all clients in the entire network.",
          id: "Sebagai vendor terdepan di bidang Network Management, Sangfor IAM telah masuk dalam SWG Gartner Magic Quadrant selama 7 tahun berturut-turut. Solusi ini memiliki manajemen bandwidth internet profesional, application control, URL filter, traffic control, information control, kontrol hotspot/proxy ilegal, analisis perilaku, manajemen jaringan nirkabel, dan banyak fitur lain yang membantu mewujudkan Unified Internet Behaviour Management untuk seluruh klien dalam jaringan."
        },
        { selector: "#subfeature-detail .resource-brochure-iam", en: "Brocure and datasheet Sangfor IAM 5400", id: "Brosur dan datasheet Sangfor IAM 5400" },
        { selector: "#subfeature-detail .resource-prefix-iam", en: "For more info, please check the", id: "Untuk info lebih lanjut, silakan cek" },
        { selector: "#subfeature-detail .resource-site-iam", en: "Sangfor IAM's official website", id: "website resmi Sangfor IAM" },
        {
          selector: "#subfeature-detail .solution-note-iam",
          en: "**If you interest with this solution, please contact us. We will happy to explain it and we are ready to show the demo or doing proof of concept (PoC) if needed.",
          id: "**Jika Anda tertarik dengan solusi ini, silakan hubungi kami. Kami siap menjelaskan lebih lanjut dan siap menunjukkan demo atau melakukan proof of concept (PoC) jika dibutuhkan."
        }
      ]
    },

    "power-protection.html": {
      entries: [
        {
          selector: "#subfeature-detail .power-intro-note",
          en: "Here are our product solution that we provide:",
          id: "Berikut solusi produk yang kami sediakan:"
        }
      ]
    },

    "solutions.html": {
      title: {
        en: "Solution | Sentra Netcomindo",
        id: "Solusi | Sentra Netcomindo"
      },
      description: {
        en: "Solution by Sentra Netcomindo",
        id: "Solusi oleh Sentra Netcomindo"
      },
      entries: [
        { selector: ".hero-content h1", en: "SOLUTION", id: "SOLUSI" },
        {
          selector: ".hero-content p:not(.hero-description)",
          en: "Core Sentra Netcomindo solutions for enterprise needs.",
          id: "Solusi utama Sentra Netcomindo yang dirancang untuk kebutuhan enterprise."
        },
        { selector: ".section-header .section-title", en: "Solution Portfolio", id: "Portofolio Solusi" },
        {
          selector: ".section-header .section-subtitle",
          en: "Click Read More on each solution to view the detailed page.",
          id: "Klik Read More di tiap solusi untuk lihat detail halaman masing-masing."
        },
        {
          selector: ".solutions-grid .solution-item:nth-child(1) p",
          en: "Improve connection quality and traffic efficiency for daily operations.",
          id: "Meningkatkan kualitas koneksi dan efisiensi trafik untuk operasional harian."
        },
        {
          selector: ".solutions-grid .solution-item:nth-child(2) p",
          en: "Cryptographic key protection for sensitive data and compliance readiness.",
          id: "Proteksi kunci kriptografi untuk data sensitif dan compliance readiness."
        },
        {
          selector: ".solutions-grid .solution-item:nth-child(3) p",
          en: "Policy-based internet access control for secure and productive usage.",
          id: "Kontrol akses internet berbasis policy agar aman dan produktif."
        },
        {
          selector: ".solutions-grid .solution-item:nth-child(4) p",
          en: "Layered network security to protect digital infrastructure.",
          id: "Pengamanan jaringan berlapis untuk melindungi infrastruktur digital."
        },
        {
          selector: ".solutions-grid .solution-item:nth-child(5) p",
          en: "Maintain service continuity with reliable power management.",
          id: "Menjaga continuity layanan dengan manajemen daya yang andal."
        },
        {
          selector: ".solutions-grid .solution-item:nth-child(6) p",
          en: "Storage and compute platform designed for enterprise performance.",
          id: "Platform penyimpanan dan komputasi untuk performa enterprise."
        },
        { selector: ".solutions-grid .solution-item:nth-child(1) a", en: "Read More", id: "Baca Detail" },
        { selector: ".solutions-grid .solution-item:nth-child(2) a", en: "Read More", id: "Baca Detail" },
        { selector: ".solutions-grid .solution-item:nth-child(3) a", en: "Read More", id: "Baca Detail" },
        { selector: ".solutions-grid .solution-item:nth-child(4) a", en: "Read More", id: "Baca Detail" },
        { selector: ".solutions-grid .solution-item:nth-child(5) a", en: "Read More", id: "Baca Detail" },
        { selector: ".solutions-grid .solution-item:nth-child(6) a", en: "Read More", id: "Baca Detail" }
      ]
    },

    "services.html": {
      title: {
        en: "Services | Sentra Netcomindo",
        id: "Layanan | Sentra Netcomindo"
      },
      description: {
        en: "Services by Sentra Netcomindo",
        id: "Layanan oleh Sentra Netcomindo"
      },
      entries: [
        { selector: ".hero-content h1", en: "SERVICES", id: "LAYANAN" },
        {
          selector: ".hero-content p:not(.hero-description)",
          en: "Technical and operational services to keep your systems performing optimally.",
          id: "Layanan teknis dan operasional untuk memastikan sistem berjalan optimal."
        },
        { selector: ".section-header .section-title", en: "Service Portfolio", id: "Portofolio Layanan" },
        {
          selector: ".section-header .section-subtitle",
          en: "Choose services that match your team and infrastructure needs.",
          id: "Pilih layanan sesuai kebutuhan tim dan infrastruktur Anda."
        },
        {
          selector: ".services-grid .service-item:nth-child(1) p",
          en: "Routine maintenance and preventive actions to reduce downtime.",
          id: "Perawatan berkala dan preventive action untuk menekan downtime."
        },
        {
          selector: ".services-grid .service-item:nth-child(2) p",
          en: "Daily operational support so your internal team can focus on business priorities.",
          id: "Pendampingan operasional harian agar tim internal lebih fokus ke prioritas bisnis."
        },
        {
          selector: ".services-grid .service-item:nth-child(3) p",
          en: "Technical capability development programs for effective platform adoption.",
          id: "Program peningkatan kompetensi teknis untuk penggunaan platform yang efektif."
        },
        { selector: ".services-grid .service-item:nth-child(1) a", en: "Read More", id: "Baca Detail" },
        { selector: ".services-grid .service-item:nth-child(2) a", en: "Read More", id: "Baca Detail" },
        { selector: ".services-grid .service-item:nth-child(3) a", en: "Read More", id: "Baca Detail" }
      ]
    },

    "products.html": {
      title: {
        en: "Products | Sentra Netcomindo",
        id: "Produk | Sentra Netcomindo"
      },
      description: {
        en: "Product portfolio by Sentra Netcomindo.",
        id: "Portofolio produk oleh Sentra Netcomindo."
      },
      entries: [
        { selector: ".hero-content h1", en: "PRODUCTS", id: "PRODUK" },
        {
          selector: ".hero-content p:not(.hero-description)",
          en: "Product portfolio available to support your security and infrastructure priorities.",
          id: "Portofolio produk yang tersedia untuk mendukung prioritas keamanan dan infrastruktur Anda."
        },
        { selector: ".section-header .section-title", en: "Our Products", id: "Produk Kami" },
        {
          selector: ".section-header .section-subtitle",
          en: "Below is the main product portfolio we support and implement.",
          id: "Di bawah ini daftar produk utama yang kami support dan implementasikan."
        },
        {
          selector: ".products-capability-note",
          en: "Beyond this list, Sentra Netcomindo can help fulfill almost any IT product request from users, as long as it is within the IT category and aligned with project requirements.",
          id: "Di luar daftar ini, Sentra Netcomindo siap membantu memenuhi hampir semua permintaan produk IT dari user, selama masih dalam kategori IT dan sesuai kebutuhan proyek."
        },
        {
          selector: ".product-sections .product-box:nth-child(4) h3",
          en: "Infrastructure & Supporting Products",
          id: "Produk Infrastruktur & Pendukung"
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
        {
          selector: ".hero-content p:not(.hero-description)",
          en: "Connect with our team for consultations, project discussions, and service inquiries.",
          id: "Terhubung dengan tim kami untuk konsultasi, diskusi proyek, dan kebutuhan layanan."
        },
        { selector: "#contact .section-title", en: "CONTACT US", id: "HUBUNGI KAMI" },
        {
          selector: "#contact .section-subtitle",
          en: "We are ready to help. Contact us by email or phone and our team will respond promptly.",
          id: "Kami siap membantu. Hubungi kami melalui email atau telepon dan tim kami akan merespons dengan cepat."
        },
        { selector: "#contact .contact-box:nth-child(1) h3", en: "OFFICE", id: "KANTOR" },
        { selector: "#contact .contact-box:nth-child(2) h3", en: "WORKSHOP", id: "WORKSHOP" }
      ]
    },

    "why-sentra.html": {
      title: {
        en: "Why Sentra Netcomindo",
        id: "Kenapa Sentra Netcomindo"
      },
      description: {
        en: "Why organizations choose Sentra Netcomindo",
        id: "Alasan organisasi memilih Sentra Netcomindo"
      },
      entries: [
        { selector: ".hero-content h1", en: "WHY SENTRA NETCOMINDO", id: "KENAPA SENTRA NETCOMINDO" },
        {
          selector: ".hero-content p.hero-description",
          en: "Why many organizations trust us for their IT solutions.",
          id: "Kenapa banyak organisasi mempercayakan solusi IT-nya kepada kami."
        },
        { selector: ".section-header .section-title", en: "Reasons Companies Choose Us", id: "Contoh Kenapa Kami Dipilih" },
        {
          selector: ".section-header .section-subtitle",
          en: "Several key factors that enterprise clients often consider.",
          id: "Beberapa alasan yang sering menjadi pertimbangan client enterprise."
        },
        { selector: ".why-grid .why-card:nth-child(1) h3", en: "1) End-to-End Approach", id: "1) Pendekatan End-to-End" },
        {
          selector: ".why-grid .why-card:nth-child(1) p",
          en: "We do more than provide products, we support clients from assessment and solution design to implementation and operational support for sustainable outcomes.",
          id: "Kami tidak hanya menjual produk, tetapi mendampingi dari assessment, desain solusi, implementasi, hingga support operasional agar hasilnya berkelanjutan."
        },
        { selector: ".why-grid .why-card:nth-child(2) h3", en: "2) Reliability and Security Focus", id: "2) Fokus Reliability dan Security" },
        {
          selector: ".why-grid .why-card:nth-child(2) p",
          en: "Each solution is designed to keep systems stable, secure, and ready for scale and compliance requirements.",
          id: "Solusi dirancang agar sistem tetap stabil, aman, dan siap menghadapi kebutuhan scale maupun audit compliance."
        },
        { selector: ".why-grid .why-card:nth-child(3) h3", en: "3) Strong Vendor Partnership", id: "3) Vendor Partnership Kuat" },
        {
          selector: ".why-grid .why-card:nth-child(3) p",
          en: "Support from global partners helps us recommend the right technology aligned with your business needs and budget.",
          id: "Dukungan partner global membantu kami memberikan pilihan teknologi yang tepat sesuai kebutuhan bisnis dan anggaran."
        }
      ]
    }
  };

  const subfeatureTranslations = {
    "bandwidth-optimization.html": {
      title: { en: "Bandwidth Optimization | Sentra Netcomindo", id: "Optimasi Bandwidth | Sentra Netcomindo" },
      description: { en: "Bandwidth Optimization - Sentra Netcomindo", id: "Optimasi Bandwidth - Sentra Netcomindo" },
      sectionTitle: { en: "Bandwidth Optimization", id: "Optimasi Bandwidth" },
      sectionSubtitle: {
        en: "When you have many branch office or factory but need to interconnect and you feel your WAN bandwidth is always full and there is repetition data flowing in it that make bandwidth seems very tied then you may consider our solution. We can provides solution that not only optimize your network but also improve user experience, minimize bandwidth cost, accelerate your application, optimize the transmission and reduce redundant data.",
        id: "Saat Anda memiliki banyak kantor cabang atau pabrik yang perlu saling terhubung, sementara bandwidth WAN terasa selalu penuh dan ada data berulang yang terus mengalir, maka Anda dapat mempertimbangkan solusi kami. Kami menyediakan solusi yang tidak hanya mengoptimalkan jaringan, tetapi juga meningkatkan pengalaman pengguna, meminimalkan biaya bandwidth, mempercepat aplikasi, mengoptimalkan transmisi, dan mengurangi data redundan."
      },
      meta: { en: "Here is our product solution to fulfill this need:", id: "Berikut solusi produk kami untuk memenuhi kebutuhan tersebut:" },
      block1Title: { en: "Sangfor WAN Optimization", id: "Sangfor WAN Optimization" },
      block1Text: {
        en: "SANGFOR WANO (Wan Optimization) provides your company with a competitive edge by expanding your business potential. WANO lets you have a seamless connectivity among offices, research facilities and manufacturing plants in different locations, locally or globally. Connecting your employees directly over the same network environment with the same performance, enhances both your productivity and business continuity.",
        id: "SANGFOR WANO (Wan Optimization) memberi perusahaan Anda keunggulan kompetitif dengan memperluas potensi bisnis. WANO memungkinkan konektivitas yang mulus antar kantor, fasilitas riset, dan pabrik di berbagai lokasi, baik lokal maupun global. Menghubungkan karyawan langsung pada lingkungan jaringan yang sama dengan performa yang konsisten dapat meningkatkan produktivitas sekaligus menjaga kontinuitas bisnis."
      },
      block2Title: { en: "WANO's benefit:", id: "Manfaat WANO:" },
      block2Items: {
        en: [
          "Increase the productivity of employees",
          "Minimize bandwidth cost",
          "Reduce the investment for remote IT",
          "Improve user experience for business"
        ],
        id: [
          "Meningkatkan produktivitas karyawan",
          "Meminimalkan biaya bandwidth",
          "Mengurangi investasi untuk IT remote",
          "Meningkatkan pengalaman pengguna untuk operasional bisnis"
        ]
      },
      block3Title: { en: "Additional Information", id: "Informasi Tambahan" },
      block3Items: {
        en: [
          "WANO helps improve business continuity across distributed operations",
          "Consistent application experience supports faster daily collaboration",
          "*If you are interested in this solution, please contact us for explanation and demo session."
        ],
        id: [
          "WANO membantu meningkatkan kontinuitas bisnis pada operasional yang tersebar",
          "Pengalaman aplikasi yang konsisten mendukung kolaborasi harian yang lebih cepat",
          "*Jika Anda tertarik dengan solusi ini, silakan hubungi kami untuk penjelasan dan sesi demo."
        ]
      },
      cta: { en: "Contact Us for Demo", id: "Hubungi Kami untuk Demo" }
    },

    "hardware-security-module.html": {
      title: { en: "Hardware Security Module | Sentra Netcomindo", id: "Modul Keamanan Perangkat Keras | Sentra Netcomindo" },
      description: { en: "Hardware Security Module - Sentra Netcomindo", id: "Modul Keamanan Perangkat Keras - Sentra Netcomindo" },
      sectionTitle: { en: "Integrate Reliable Systems into Value Based Solution", id: "Integrasikan Sistem Andal ke Dalam Solusi Berbasis Nilai" },
      sectionSubtitle: {
        en: "PT Sentra Netcomindo has an extensive experience in integrating multiple systems into solution that bring highest value to our customer.",
        id: "PT Sentra Netcomindo memiliki pengalaman luas dalam mengintegrasikan berbagai sistem menjadi solusi yang memberikan nilai tertinggi bagi pelanggan kami."
      },
      meta: { en: "Those systems including :", id: "Sistem tersebut meliputi :" },
      block1Title: { en: "Hardware Security Module", id: "Hardware Security Module" },
      block1Text: {
        en: "A hardware security module (HSM) is a dedicated crypto processor physical computing device which is specifically designed for the protection and manages of the digital crypto key lifecycle, strong authentication and provides cryptoprocessing. Hardware security modules protect the cryptographic infrastructure and can deploy high assurance security solutions, provide a hardened, tamper-resistant environment for performing secure cryptographic processing, key protection, and key management.",
        id: "Hardware Security Module (HSM) adalah perangkat komputasi pemroses kripto khusus yang dirancang untuk perlindungan dan pengelolaan siklus hidup kunci kripto digital, autentikasi kuat, serta pemrosesan kriptografi. HSM melindungi infrastruktur kriptografi dan dapat menghadirkan solusi keamanan berjaminan tinggi, termasuk lingkungan yang hardened dan tahan manipulasi untuk pemrosesan kriptografi yang aman, perlindungan kunci, dan manajemen kunci."
      },
      block2Title: { en: "", id: "" },
      block2Items: { en: [], id: [] },
      block3Title: { en: "", id: "" },
      block3Items: { en: [], id: [] },
      cta: { en: "Read more", id: "Baca selengkapnya" }
    },

    "internet-access-management.html": {
      title: { en: "Internet Access Management | Sentra Netcomindo", id: "Manajemen Akses Internet | Sentra Netcomindo" },
      description: { en: "Internet Access Management - Sentra Netcomindo", id: "Manajemen Akses Internet - Sentra Netcomindo" },
      sectionTitle: { en: "Internet Access Management", id: "Manajemen Akses Internet" },
      sectionSubtitle: {
        en: "Imagine if your company has many users and every user has more than one device that connected to internet that you don't know whether they using it for job purpose or not, you don't know what they access, moreover you don't know who is access your internet, you don't know who or what that need to be prioritized. Everyone want to get good connection but in the same time the bandwidth is limited, big bandwidth is not the solution, you need to manage it, access right need to managed and everything should be considered and managed.",
        id: "Bayangkan jika perusahaan Anda memiliki banyak pengguna dan setiap pengguna memiliki lebih dari satu perangkat yang terhubung ke internet, namun Anda tidak tahu apakah digunakan untuk pekerjaan atau tidak, tidak tahu apa yang mereka akses, bahkan tidak tahu siapa yang mengakses internet Anda dan siapa atau apa yang harus diprioritaskan. Semua orang ingin koneksi yang baik, tetapi di saat yang sama bandwidth terbatas, bandwidth besar bukan satu-satunya solusi, akses harus dikelola dan semuanya perlu dipertimbangkan dengan baik."
      },
      meta: { en: "If your company have these problem, then you may consider our solution.", id: "Jika perusahaan Anda mengalami masalah ini, maka Anda dapat mempertimbangkan solusi kami." },
      block1Title: { en: "Sangfor IAM (Internet Access Management)", id: "Sangfor IAM (Internet Access Management)" },
      block1Text: {
        en: "In organization nowadays, internet is very important but also hard to manage if you have many connected devices and users, we can offer you solution to give easy way to manage your network but powerful, from bandwidth management, user authentication, unified management for LAN+WAN to built-in firewall.",
        id: "Di organisasi saat ini, internet sangat penting namun juga sulit dikelola jika Anda memiliki banyak perangkat dan pengguna yang terhubung. Kami dapat menawarkan solusi untuk mengelola jaringan Anda dengan cara yang mudah namun tetap powerful, mulai dari manajemen bandwidth, autentikasi pengguna, manajemen terpadu LAN+WAN hingga built-in firewall."
      },
      block2Title: { en: "Here are the advantages:", id: "Berikut keunggulannya:" },
      block2Items: {
        en: [
          "Simple & Intuitive Reporting",
          "Intelligent and Accurate Traffic Management",
          "Complete and effective data recording",
          "Unified Management of all clients in the Entire network",
          "Precise and Accurate Application Control",
          "Value added service : Authentication via SMS, Portal, Social Media and QR Code and Sangfor Billing System for Internet Usage"
        ],
        id: [
          "Pelaporan yang sederhana dan intuitif",
          "Manajemen trafik yang cerdas dan akurat",
          "Pencatatan data yang lengkap dan efektif",
          "Manajemen terpadu untuk seluruh klien dalam satu jaringan",
          "Kontrol aplikasi yang presisi dan akurat",
          "Layanan bernilai tambah: autentikasi via SMS, Portal, Media Sosial, QR Code, serta Sangfor Billing System untuk penggunaan internet"
        ]
      },
      block3Title: { en: "", id: "" },
      block3Items: { en: [], id: [] },
      cta: { en: "Read more", id: "Baca selengkapnya" }
    },

    "network-security.html": {
      title: { en: "Network Security | Sentra Netcomindo", id: "Keamanan Jaringan | Sentra Netcomindo" },
      description: { en: "Network Security - Sentra Netcomindo", id: "Keamanan Jaringan - Sentra Netcomindo" },
      sectionTitle: { en: "Network Security", id: "Keamanan Jaringan" },
      sectionSubtitle: {
        en: "Need stronger protection for your internal and external traffic? Sentra Netcomindo provides integrated network security using Sangfor NGAF to secure branch, data center, and internet perimeter with one centralized policy approach.",
        id: "Butuh perlindungan lebih kuat untuk trafik internal dan eksternal? Sentra Netcomindo menyediakan solusi keamanan jaringan terintegrasi berbasis Sangfor NGAF untuk melindungi cabang, data center, dan perimeter internet dengan pendekatan kebijakan terpusat."
      },
      meta: { en: "Here is our product solution to fulfill this need:", id: "Berikut solusi produk kami untuk memenuhi kebutuhan tersebut:" },
      block1Title: { en: "Sangfor NGAF (Next Generation Firewall)", id: "Sangfor NGAF (Next Generation Firewall)" },
      block1Text: {
        en: "Sangfor NGAF gives your organization a full-stack network security platform with firewall, IPS, application control, URL filtering, and threat intelligence in one appliance. This solution helps you enforce consistent security policy across headquarters and branches while maintaining stable user access to business applications.",
        id: "Sangfor NGAF memberikan platform keamanan jaringan full-stack dengan firewall, IPS, application control, URL filtering, dan threat intelligence dalam satu appliance. Solusi ini membantu Anda menerapkan kebijakan keamanan yang konsisten di kantor pusat maupun cabang sambil menjaga akses pengguna ke aplikasi bisnis tetap stabil."
      },
      block2Title: { en: "Key Capabilities", id: "Kapabilitas Utama" },
      block2Items: {
        en: [
          "Application-layer traffic inspection and policy enforcement",
          "Integrated IPS and real-time threat detection",
          "URL filtering and content control to reduce risky access",
          "Secure VPN connectivity for branch and remote users",
          "Centralized visibility and log analysis for faster troubleshooting"
        ],
        id: [
          "Inspeksi trafik layer aplikasi dan enforcement kebijakan",
          "IPS terintegrasi dan deteksi ancaman real-time",
          "URL filtering dan content control untuk menekan akses berisiko",
          "Konektivitas VPN aman untuk cabang dan pengguna remote",
          "Visibilitas terpusat dan analisis log untuk troubleshooting lebih cepat"
        ]
      },
      block3Title: { en: "Business Benefits", id: "Manfaat Bisnis" },
      block3Items: {
        en: [
          "Reduce cyber risk exposure with layered, proactive defense",
          "Improve compliance readiness with clear traffic and event records",
          "Minimize service disruption through faster incident response"
        ],
        id: [
          "Menurunkan paparan risiko siber dengan pertahanan berlapis yang proaktif",
          "Meningkatkan kesiapan compliance melalui rekaman trafik dan event yang jelas",
          "Meminimalkan gangguan layanan lewat respons insiden yang lebih cepat"
        ]
      },
      cta: { en: "Read more", id: "Baca selengkapnya" }
    },

    "power-protection.html": {
      title: { en: "Power Protection | Sentra Netcomindo", id: "Perlindungan Daya | Sentra Netcomindo" },
      description: { en: "Power Protection - Sentra Netcomindo", id: "Perlindungan Daya - Sentra Netcomindo" },
      sectionTitle: { en: "Power Protection", id: "Perlindungan Daya" },
      sectionSubtitle: {
        en: "Power is very critical, especially for enterprise business. Many devices need to be always on to support the business, like server, storage, network devices, etc and sudden lost of power is fatal because can cause damage to these devices and for business it can make lost opportunities and trust. Power is the first key to make sure your business running and maintain your business continuity. So we bring proven solutions to ensure you can keep it.",
        id: "Daya listrik sangat krusial, terutama untuk bisnis enterprise. Banyak perangkat harus selalu menyala untuk mendukung operasional, seperti server, storage, perangkat jaringan, dan lainnya. Kehilangan daya mendadak dapat menyebabkan kerusakan perangkat dan membuat bisnis kehilangan peluang serta kepercayaan. Daya adalah kunci utama agar bisnis tetap berjalan dan kontinuitas bisnis terjaga. Karena itu kami menghadirkan solusi yang terbukti andal untuk memastikan hal tersebut."
      },
      meta: {
        en: "Among the solutions from us are Uninterruptible Power System (UPS) and its complementary. We are ready to provide you UPS that suit with your need from data center UPS to industrial UPS, from power rating 0.5 to 20 KVA.",
        id: "Di antara solusi yang kami sediakan adalah Uninterruptible Power System (UPS) beserta perangkat pendukungnya. Kami siap menyediakan UPS yang sesuai kebutuhan Anda, mulai dari UPS data center hingga UPS industri, dengan rentang daya 0,5 hingga 20 KVA."
      },
      block1Title: { en: "Eaton", id: "Eaton" },
      block1Text: {
        en: "",
        id: ""
      },
      block2Title: { en: "Laplace", id: "Laplace" },
      block2Items: { en: [], id: [] },
      block3Title: { en: "", id: "" },
      block3Items: { en: [], id: [] },
      cta: { en: "Read more", id: "Baca selengkapnya" }
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

  const applyInlineLanguageContent = (lang) => {
    if (!isValidLanguage(lang)) {
      return;
    }

    const textAttr = `data-lang-${lang}`;

    document.querySelectorAll("[data-lang-en][data-lang-id]:not(title):not(meta)").forEach((element) => {
      const value = element.getAttribute(textAttr);
      if (typeof value === "string") {
        element.textContent = value;
      }
    });

    const inlineTitle = queryOne("title[data-lang-en][data-lang-id]");
    const titleValue = inlineTitle?.getAttribute(textAttr);
    if (titleValue) {
      document.title = titleValue;
    }

    const inlineDescription = queryOne('meta[name="description"][data-lang-en][data-lang-id]');
    const descriptionValue = inlineDescription?.getAttribute(textAttr);
    if (descriptionValue) {
      inlineDescription.setAttribute("content", descriptionValue);
    }
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
    const hasInlineLanguageData = Boolean(queryOne("[data-lang-en][data-lang-id]"));

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
      if (!hasInlineLanguageData) {
        applySubfeatureContent(subfeatureConfig, activeLang);
      }
    }

    applyInlineLanguageContent(activeLang);

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
