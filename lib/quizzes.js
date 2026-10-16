/*
  BANK SOAL (SISI SERVER)
  - Setiap kuis berisi 30 soal pilihan ganda dengan 4 opsi (indeks 0-3).
  - a = indeks jawaban benar. Field "a" TIDAK pernah dikirim ke browser.
  - Untuk menambah kuis, tambahkan objek baru di QUIZZES.
*/
export const PASS_SCORE = 75;

const Q = (q, o, a) => ({ q, o, a });

export const QUIZZES = [
  {
    id: 'umum', title: 'Pengetahuan Umum Dasar', category: 'Pengetahuan Umum',
    icon: 'globe', difficulty: 'Mudah', minutes: 20,
    desc: 'Fakta dasar tentang geografi, alam, dan dunia di sekitar kita.',
    questions: [
      Q('Benua manakah yang memiliki luas wilayah terbesar di dunia?', ['Afrika', 'Asia', 'Eropa', 'Amerika Utara'], 1),
      Q('Samudra manakah yang memiliki luas terbesar di Bumi?', ['Samudra Atlantik', 'Samudra Hindia', 'Samudra Pasifik', 'Samudra Arktik'], 2),
      Q('Gunung tertinggi di dunia yang diukur dari permukaan laut adalah?', ['K2', 'Everest', 'Kilimanjaro', 'Elbrus'], 1),
      Q('Organ tubuh manusia yang terbesar adalah?', ['Hati', 'Paru-paru', 'Kulit', 'Usus halus'], 2),
      Q('Mata uang resmi Jepang adalah?', ['Won', 'Yuan', 'Yen', 'Ringgit'], 2),
      Q('Ibu kota Indonesia adalah?', ['Jakarta', 'Bandung', 'Surabaya', 'Medan'], 0),
      Q('Negara dengan luas wilayah terbesar di dunia adalah?', ['Kanada', 'Rusia', 'Tiongkok', 'Amerika Serikat'], 1),
      Q('Bahasa resmi yang digunakan di Brasil adalah?', ['Spanyol', 'Inggris', 'Portugis', 'Prancis'], 2),
      Q('Planet yang paling dekat dengan Matahari adalah?', ['Merkurius', 'Venus', 'Mars', 'Bumi'], 0),
      Q('Benua tempat Mesir berada adalah?', ['Asia', 'Afrika', 'Eropa', 'Amerika Selatan'], 1),
      Q('Gurun panas terbesar di dunia adalah?', ['Gobi', 'Sahara', 'Kalahari', 'Atacama'], 1),
      Q('Ibu kota Jepang adalah?', ['Osaka', 'Tokyo', 'Kyoto', 'Nagoya'], 1),
      Q('Lambang negara Indonesia adalah?', ['Garuda Pancasila', 'Banteng', 'Singa', 'Elang Rajawali'], 0),
      Q('Lagu kebangsaan Indonesia adalah?', ['Bagimu Negeri', 'Halo-Halo Bandung', 'Indonesia Raya', 'Padamu Negeri'], 2),
      Q('Hewan darat tercepat di dunia adalah?', ['Singa', 'Cheetah', 'Kuda', 'Rusa'], 1),
      Q('Samudra yang berada di sebelah barat Indonesia adalah?', ['Atlantik', 'Arktik', 'Hindia', 'Pasifik'], 2),
      Q('Bahasa dengan jumlah penutur asli terbanyak di dunia adalah?', ['Mandarin', 'Inggris', 'Spanyol', 'Hindi'], 0),
      Q('Logam yang paling ringan adalah?', ['Litium', 'Aluminium', 'Natrium', 'Magnesium'], 0),
      Q('Negara yang terdiri dari ribuan pulau dan merupakan negara kepulauan terbesar di dunia adalah?', ['Filipina', 'Jepang', 'Indonesia', 'Maladewa'], 2),
      Q('Ibu kota Australia adalah?', ['Sydney', 'Canberra', 'Melbourne', 'Perth'], 1),
      Q('Negara yang dikenal sebagai Negeri Matahari Terbit adalah?', ['Korea', 'Jepang', 'Tiongkok', 'Thailand'], 1),
      Q('Hewan yang dijuluki raja hutan adalah?', ['Singa', 'Harimau', 'Beruang', 'Serigala'], 0),
      Q('Jumlah benua di dunia menurut model umum adalah?', ['Lima', 'Enam', 'Tujuh', 'Delapan'], 2),
      Q('Kota Makkah berada di negara?', ['Mesir', 'Arab Saudi', 'Yordania', 'Irak'], 1),
      Q('Fenomena alam yang disebabkan oleh pergeseran lempeng bumi adalah?', ['Hujan asam', 'Banjir', 'Kemarau', 'Gempa bumi'], 3),
      Q('Benua yang tidak memiliki penduduk tetap adalah?', ['Australia', 'Eropa', 'Antarktika', 'Amerika Utara'], 2),
      Q('Gas yang paling banyak terdapat di atmosfer Bumi adalah?', ['Nitrogen', 'Oksigen', 'Argon', 'Karbon dioksida'], 0),
      Q('Hari kemerdekaan Amerika Serikat jatuh pada tanggal?', ['17 Agustus', '1 Mei', '4 Juli', '25 Desember'], 2),
      Q('Ibu kota Mesir adalah?', ['Kairo', 'Alexandria', 'Luxor', 'Giza'], 0),
      Q('Alat yang digunakan untuk mengukur tekanan udara adalah?', ['Termometer', 'Barometer', 'Higrometer', 'Anemometer'], 1)
    ]
  },
  {
    id: 'teknologi', title: 'Dasar Teknologi Web dan Komputer', category: 'Teknologi',
    icon: 'cpu', difficulty: 'Sedang', minutes: 20,
    desc: 'Konsep dasar HTML, CSS, perangkat keras, dan protokol jaringan.',
    questions: [
      Q('Kepanjangan dari HTML adalah?', ['High Text Markup Language', 'Hypertext Markup Language', 'Hyperlink Text Management Language', 'Home Tool Markup Language'], 1),
      Q('CSS digunakan untuk?', ['Mengatur struktur database', 'Mengatur tampilan dan tata letak halaman web', 'Menjalankan server', 'Mengenkripsi data'], 1),
      Q('Fungsi utama CPU dalam komputer adalah?', ['Menyimpan data secara permanen', 'Memproses instruksi program', 'Menampilkan gambar di layar', 'Mengatur koneksi internet'], 1),
      Q('Bilangan biner 1010 setara dengan bilangan desimal?', ['8', '10', '12', '14'], 1),
      Q('Protokol yang digunakan untuk mengirim halaman web dari server ke browser adalah?', ['SMTP', 'HTTP', 'SSH', 'DNS'], 1),
      Q('RAM berfungsi sebagai?', ['Memori sementara untuk data yang sedang digunakan', 'Penyimpanan permanen', 'Prosesor grafis', 'Sumber daya listrik'], 0),
      Q('Bahasa pemrograman yang umum dijalankan langsung di browser adalah?', ['Java', 'C++', 'JavaScript', 'COBOL'], 2),
      Q('Satuan terkecil data digital adalah?', ['Bit', 'Byte', 'Nibble', 'Kilobyte'], 0),
      Q('Kernel yang menjadi dasar Android dan banyak distribusi sistem operasi adalah?', ['Windows NT', 'Linux', 'Darwin', 'DOS'], 1),
      Q('DNS berfungsi untuk?', ['Mengenkripsi email', 'Mengirim file', 'Menerjemahkan nama domain ke alamat IP', 'Menyimpan cookie'], 2),
      Q('Port default untuk HTTPS adalah?', ['21', '80', '443', '8080'], 2),
      Q('Port default untuk HTTP adalah?', ['80', '443', '22', '25'], 0),
      Q('SQL digunakan untuk?', ['Mendesain warna', 'Mengelola dan mengambil data dari basis data relasional', 'Membuat animasi', 'Mengirim email'], 1),
      Q('Kepanjangan dari JSON adalah?', ['JavaScript Object Notation', 'Java Standard Object Network', 'Joint Source Object Name', 'JavaScript Online Network'], 0),
      Q('Git digunakan untuk?', ['Menjalankan server web', 'Mengompres gambar', 'Mengelola versi kode sumber', 'Menyimpan password'], 2),
      Q('Fungsi utama GPU adalah?', ['Menyimpan file', 'Memproses grafis dan komputasi paralel', 'Mengatur daya listrik', 'Menghubungkan internet'], 1),
      Q('Bilangan heksadesimal FF setara dengan bilangan desimal?', ['128', '200', '256', '255'], 3),
      Q('Tag HTML yang digunakan untuk membuat tautan adalah?', ['<p>', '<a>', '<img>', '<div>'], 1),
      Q('Properti CSS untuk membuat tata letak fleksibel adalah?', ['display: flex', 'font-weight', 'border-radius', 'z-index'], 0),
      Q('Alamat IPv4 terdiri dari berapa oktet?', ['2 oktet', '3 oktet', '4 oktet', '6 oktet'], 2),
      Q('Kata kunci const pada JavaScript digunakan untuk?', ['Menghapus variabel', 'Mendeklarasikan variabel yang tidak dapat diubah ulang', 'Membuat fungsi asinkron', 'Membuat array'], 1),
      Q('Teknik yang digunakan untuk membuat desain responsif adalah?', ['Media queries', 'Inline script', 'Indeks basis data', 'Cookie'], 0),
      Q('Perangkat lunak yang mengelola perangkat keras dan menjalankan aplikasi adalah?', ['Browser', 'Compiler', 'Antivirus', 'Sistem operasi'], 3),
      Q('Protokol yang melindungi komunikasi HTTPS dengan enkripsi adalah?', ['FTP', 'SMTP', 'TLS', 'ICMP'], 2),
      Q('Kepanjangan dari URL adalah?', ['Uniform Resource Locator', 'Universal Routing Link', 'Unified Resource Loader', 'User Remote Link'], 0),
      Q('Tag HTML untuk judul terbesar adalah?', ['<h6>', '<header>', '<title>', '<h1>'], 3),
      Q('localStorage pada browser digunakan untuk?', ['Menjalankan query server', 'Mengirim email', 'Menyimpan data di browser secara persisten', 'Mengubah DNS'], 2),
      Q('Algoritma pencarian biner membutuhkan data yang?', ['Acak', 'Terurut', 'Berbentuk grafik', 'Berbentuk tabel'], 1),
      Q('Perangkat input yang digunakan untuk mengetik teks adalah?', ['Keyboard', 'Monitor', 'Printer', 'Speaker'], 0),
      Q('Kompleksitas waktu terburuk pencarian linear adalah?', ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'], 2)
    ]
  },
  {
    id: 'sains', title: 'Dasar Sains Alam', category: 'Sains',
    icon: 'flask', difficulty: 'Sedang', minutes: 20,
    desc: 'Konsep dasar biologi, fisika, kimia, dan astronomi tingkat menengah.',
    questions: [
      Q('Gas yang dibutuhkan manusia untuk bernapas adalah?', ['Nitrogen', 'Oksigen', 'Karbon dioksida', 'Hidrogen'], 1),
      Q('Benda langit yang menjadi pusat tata surya adalah?', ['Bulan', 'Bumi', 'Matahari', 'Jupiter'], 2),
      Q('Satuan gaya dalam Sistem Internasional adalah?', ['Joule', 'Watt', 'Newton', 'Pascal'], 2),
      Q('Proses tumbuhan membuat makanan dengan bantuan cahaya matahari disebut?', ['Respirasi', 'Fotosintesis', 'Fermentasi', 'Transpirasi'], 1),
      Q('Jumlah tulang pada tubuh manusia dewasa umumnya adalah?', ['106', '156', '206', '256'], 2),
      Q('Air membeku pada suhu 0 derajat Celsius pada tekanan standar. Pernyataan ini?', ['Benar', 'Salah, membeku pada 10 derajat', 'Salah, membeku pada 100 derajat', 'Salah, membeku pada -10 derajat'], 0),
      Q('Unsur kimia dengan lambang Fe adalah?', ['Fluor', 'Besi', 'Fermium', 'Perak'], 1),
      Q('Rumus kimia air adalah?', ['CO2', 'NaCl', 'H2O', 'O2'], 2),
      Q('Organel sel tempat berlangsungnya respirasi seluler adalah?', ['Ribosom', 'Mitokondria', 'Nukleus', 'Lisosom'], 1),
      Q('Hukum Newton ketiga menyatakan bahwa?', ['Setiap aksi menimbulkan reaksi yang sama besar dan berlawanan arah', 'Benda diam tetap diam', 'Gaya sama dengan massa kali percepatan', 'Energi tidak dapat diciptakan atau dimusnahkan'], 0),
      Q('Kecepatan cahaya di ruang hampa kira-kira adalah?', ['30.000 km/s', '3.000 km/s', '300.000 km/s', '3.000.000 km/s'], 2),
      Q('Planet terbesar dalam tata surya adalah?', ['Saturnus', 'Neptunus', 'Uranus', 'Jupiter'], 3),
      Q('Bagian sel yang menyimpan DNA adalah?', ['Nukleus', 'Membran sel', 'Sitoplasma', 'Vakuola'], 0),
      Q('Suhu nol mutlak kira-kira sama dengan?', ['-100 derajat Celsius', '-273 derajat Celsius', '-373 derajat Celsius', '-50 derajat Celsius'], 1),
      Q('Hewan mamalia yang bertelur adalah?', ['Kelelawar', 'Paus', 'Platipus', 'Lumba-lumba'], 2),
      Q('Pigmen hijau pada daun yang berperan dalam fotosintesis adalah?', ['Klorofil', 'Hemoglobin', 'Melanin', 'Keratin'], 0),
      Q('Energi yang tersimpan karena posisi suatu benda disebut?', ['Energi kinetik', 'Energi potensial', 'Energi kalor', 'Energi bunyi'], 1),
      Q('Satuan daya listrik adalah?', ['Volt', 'Ampere', 'Watt', 'Ohm'], 2),
      Q('Gas rumah kaca utama yang dihasilkan aktivitas manusia adalah?', ['Helium', 'Karbon dioksida', 'Argon', 'Neon'], 1),
      Q('Bumi membutuhkan waktu kira-kira berapa hari untuk mengelilingi Matahari sekali?', ['30 hari', '100 hari', '365 hari', '500 hari'], 2),
      Q('Perubahan wujud dari cair menjadi gas disebut?', ['Pembekuan', 'Peleburan', 'Pengembunan', 'Penguapan'], 3),
      Q('Organ tubuh yang memompa darah ke seluruh tubuh adalah?', ['Jantung', 'Paru-paru', 'Ginjal', 'Hati'], 0),
      Q('Vitamin yang dihasilkan kulit ketika terkena sinar matahari adalah?', ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin K'], 2),
      Q('Sel darah merah berfungsi mengangkut?', ['Glukosa', 'Oksigen', 'Protein', 'Garam'], 1),
      Q('Lapisan atmosfer tempat terjadinya cuaca adalah?', ['Troposfer', 'Stratosfer', 'Mesosfer', 'Termosfer'], 0),
      Q('Bahan yang tergolong isolator atau tidak menghantarkan listrik dengan baik adalah?', ['Tembaga', 'Besi', 'Karet', 'Aluminium'], 2),
      Q('Gaya tarik yang dimiliki Bumi terhadap benda disebut?', ['Magnet', 'Gesekan', 'Pegas', 'Gravitasi'], 3),
      Q('Hewan yang memiliki delapan kaki adalah?', ['Semut', 'Laba-laba', 'Kupu-kupu', 'Belalang'], 1),
      Q('Alat untuk mengukur suhu adalah?', ['Termometer', 'Barometer', 'Higrometer', 'Kalorimeter'], 0),
      Q('Bagian bunga yang menghasilkan serbuk sari adalah?', ['Putik', 'Mahkota', 'Benang sari', 'Kelopak'], 2)
    ]
  },
  {
    id: 'sejarah', title: 'Sejarah Indonesia dan Dunia', category: 'Sejarah',
    icon: 'book', difficulty: 'Mudah', minutes: 20,
    desc: 'Peristiwa penting dalam sejarah Indonesia dan perkembangan dunia.',
    questions: [
      Q('Teks Proklamasi kemerdekaan Indonesia dibacakan pada tanggal?', ['17 Agustus 1945', '28 Oktober 1928', '20 Mei 1908', '10 November 1945'], 0),
      Q('Ikrar Sumpah Pemuda dibacakan pada tahun?', ['1908', '1928', '1945', '1965'], 1),
      Q('Candi Borobudur dibangun pada masa dinasti?', ['Sanjaya', 'Syailendra', 'Isyana', 'Rajasa'], 1),
      Q('Perang Dunia II berakhir pada tahun?', ['1939', '1942', '1945', '1950'], 2),
      Q('Penemu mesin cetak dengan huruf logam yang memicu revolusi informasi di Eropa adalah?', ['Leonardo da Vinci', 'Johannes Gutenberg', 'Galileo Galilei', 'Isaac Newton'], 1),
      Q('Kerajaan Majapahit didirikan pada tahun?', ['1293', '1518', '1045', '1602'], 0),
      Q('Perang Diponegoro berlangsung pada rentang tahun?', ['1825 sampai 1830', '1600 sampai 1610', '1945 sampai 1950', '1908 sampai 1912'], 0),
      Q('Organisasi Boedi Oetomo berdiri pada tahun?', ['1908', '1928', '1945', '1912'], 0),
      Q('Kerajaan maritim yang berpusat di Palembang adalah?', ['Jambi', 'Sriwijaya', 'Pajajaran', 'Medan'], 1),
      Q('Hari Pahlawan diperingati setiap tanggal?', ['10 November', '1 Juni', '21 April', '5 Oktober'], 0),
      Q('Revolusi Prancis dimulai pada tahun?', ['1648', '1776', '1789', '1815'], 2),
      Q('Kongsi dagang VOC didirikan pada tahun?', ['1498', '1602', '1700', '1800'], 1),
      Q('Tembok Berlin runtuh pada tahun?', ['1961', '1975', '1980', '1989'], 3),
      Q('Perang Dunia I dimulai pada tahun?', ['1905', '1910', '1914', '1918'], 2),
      Q('Presiden pertama Republik Indonesia adalah?', ['Soekarno', 'Soeharto', 'Habibie', 'Gus Dur'], 0),
      Q('Presiden kedua Republik Indonesia adalah?', ['Soekarno', 'Soeharto', 'Megawati', 'Habibie'], 1),
      Q('Kerajaan Islam pertama di Indonesia yang berdiri di Aceh adalah?', ['Demak', 'Mataram', 'Samudera Pasai', 'Banten'], 2),
      Q('Peristiwa Rengasdengklok berkaitan dengan?', ['Persiapan proklamasi kemerdekaan', 'Perang Padri', 'Perjanjian Linggarjati', 'Konferensi Asia Afrika'], 0),
      Q('Konferensi Asia Afrika pertama diadakan di Bandung pada tahun?', ['1955', '1945', '1965', '1975'], 0),
      Q('Kerajaan Demak didirikan oleh?', ['Sunan Kalijaga', 'Sultan Agung', 'Raden Patah', 'Hayam Wuruk'], 2),
      Q('Raja Majapahit yang didampingi patih Gajah Mada adalah?', ['Kertanegara', 'Hayam Wuruk', 'Airlangga', 'Rajasa'], 1),
      Q('Revolusi Industri pertama dimulai di negara?', ['Inggris', 'Jerman', 'Amerika Serikat', 'Prancis'], 0),
      Q('Piramida Giza dibangun sebagai?', ['Istana', 'Benteng', 'Makam firaun', 'Kuil dewa air'], 2),
      Q('Tembok Besar Tiongkok sebagian besar dibangun pada masa dinasti?', ['Han', 'Ming', 'Tang', 'Qing'], 1),
      Q('Perjanjian Linggarjati ditandatangani pada tahun?', ['1942', '1944', '1945', '1946'], 3),
      Q('Pahlawan nasional Cut Nyak Dien berasal dari?', ['Sumatra Barat', 'Aceh', 'Bali', 'Sulawesi'], 1),
      Q('Perang Padri berlangsung di wilayah?', ['Sumatra Barat', 'Jawa Tengah', 'Kalimantan', 'Bali'], 0),
      Q('Peradaban yang membangun kota Machu Picchu adalah?', ['Maya', 'Aztec', 'Inca', 'Olmec'], 2),
      Q('Bangsa Eropa yang pertama kali tiba di Maluku pada awal abad ke-16 adalah?', ['Spanyol', 'Portugis', 'Inggris', 'Prancis'], 1),
      Q('Bangsa Mesir kuno menggunakan sistem tulisan yang disebut?', ['Kanji', 'Sanskerta', 'Runik', 'Hieroglif'], 3)
    ]
  },
  {
    id: 'matematika', title: 'Matematika Dasar', category: 'Matematika',
    icon: 'calc', difficulty: 'Sedang', minutes: 20,
    desc: 'Perkalian, akar, persamaan linear, sudut, pecahan, dan bilangan prima.',
    questions: [
      Q('Hasil dari 15 × 12 adalah?', ['150', '170', '180', '190'], 2),
      Q('Akar kuadrat dari 144 adalah?', ['10', '11', '12', '14'], 2),
      Q('Jumlah sudut dalam sebuah segitiga adalah?', ['90°', '180°', '270°', '360°'], 1),
      Q('Nilai x dari persamaan 2x + 5 = 15 adalah?', ['3', '5', '7', '10'], 1),
      Q('Bilangan prima terkecil adalah?', ['1', '2', '3', '4'], 1),
      Q('25% dari 80 adalah?', ['15', '20', '25', '30'], 1),
      Q('Hasil dari 3 pangkat 3 adalah?', ['9', '18', '27', '81'], 2),
      Q('Hasil dari 7 × 8 adalah?', ['54', '55', '56', '58'], 2),
      Q('Keliling persegi dengan panjang sisi 5 cm adalah?', ['20 cm', '25 cm', '10 cm', '15 cm'], 0),
      Q('Luas persegi panjang dengan panjang 6 cm dan lebar 4 cm adalah?', ['20 cm²', '24 cm²', '28 cm²', '10 cm²'], 1),
      Q('Hasil dari 100 − 37 adalah?', ['53', '57', '67', '63'], 3),
      Q('Bilangan genap yang terletak setelah 9 adalah?', ['10', '11', '12', '13'], 0),
      Q('Besar sudut siku-siku adalah?', ['45°', '60°', '90°', '120°'], 2),
      Q('Jumlah sisi pada segi enam adalah?', ['5', '6', '7', '8'], 1),
      Q('Hasil dari 1/2 + 1/4 adalah?', ['2/6', '1/6', '3/4', '2/4'], 2),
      Q('Rata-rata dari bilangan 4, 6, dan 8 adalah?', ['5', '6', '7', '8'], 1),
      Q('Hasil dari 2 pangkat 5 adalah?', ['32', '25', '16', '64'], 0),
      Q('Faktor persekutuan terbesar dari 12 dan 18 adalah?', ['2', '3', '6', '36'], 2),
      Q('Kelipatan persekutuan terkecil dari 4 dan 6 adalah?', ['8', '10', '24', '12'], 3),
      Q('Jumlah sudut dalam sebuah segi empat adalah?', ['360°', '180°', '270°', '540°'], 0),
      Q('Diameter lingkaran dengan jari-jari 7 cm adalah?', ['7 cm', '14 cm', '21 cm', '49 cm'], 1),
      Q('Nilai π yang sering digunakan dalam pembulatan adalah sekitar?', ['2,71', '3,14', '4,13', '3,41'], 1),
      Q('Nilai 0,5 dalam bentuk persen adalah?', ['5%', '0,5%', '50%', '500%'], 2),
      Q('Hasil dari 9 pangkat 2 adalah?', ['72', '81', '91', '18'], 1),
      Q('Angka romawi X menyatakan bilangan?', ['5', '50', '10', '100'], 2),
      Q('Hasil dari 3 × (4 + 2) adalah?', ['14', '16', '18', '20'], 2),
      Q('Volume kubus dengan panjang rusuk 3 cm adalah?', ['9 cm³', '27 cm³', '18 cm³', '81 cm³'], 1),
      Q('Hasil dari 48 ÷ 6 adalah?', ['6', '7', '9', '8'], 3),
      Q('Jumlah sisi pada segi delapan adalah?', ['6', '7', '8', '10'], 2),
      Q('Nilai x dari persamaan 3x − 4 = 11 adalah?', ['5', '4', '6', '7'], 0)
    ]
  },
  {
    id: 'inggris', title: 'English Grammar and Vocabulary', category: 'Bahasa Inggris',
    icon: 'lang', difficulty: 'Mudah', minutes: 20,
    desc: 'Tata bahasa dasar, kosakata, sinonim, antonim, dan bentuk waktu.',
    questions: [
      Q('She ___ to school every day.', ['go', 'goes', 'going', 'gone'], 1),
      Q('Sinonim dari kata happy adalah?', ['sad', 'glad', 'angry', 'tired'], 1),
      Q('Bentuk past tense dari kata eat adalah?', ['eated', 'eaten', 'ate', 'eat'], 2),
      Q('Antonim dari kata big adalah?', ['tall', 'small', 'large', 'wide'], 1),
      Q('They ___ playing football now.', ['is', 'are', 'am', 'be'], 1),
      Q('I ___ a student.', ['am', 'is', 'are', 'be'], 0),
      Q('We ___ dinner last night.', ['have', 'has', 'had', 'having'], 2),
      Q('Bentuk jamak dari kata child adalah?', ['childs', 'children', 'childrens', 'childes'], 1),
      Q('Sinonim dari kata big adalah?', ['small', 'large', 'tiny', 'short'], 1),
      Q('Antonim dari kata hot adalah?', ['warm', 'wet', 'cold', 'dry'], 2),
      Q('He ___ not like coffee.', ['does', 'do', 'is', 'has'], 0),
      Q('Bentuk past tense dari kata go adalah?', ['goed', 'gone', 'went', 'going'], 2),
      Q('Terjemahan dari Good morning adalah?', ['Selamat pagi', 'Selamat malam', 'Selamat siang', 'Selamat tidur'], 0),
      Q('I ___ visit my grandmother tomorrow.', ['do', 'will', 'was', 'had'], 1),
      Q('Sinonim dari kata quick adalah?', ['fast', 'slow', 'late', 'heavy'], 0),
      Q('Each of the students ___ a book.', ['have', 'has', 'having', 'had'], 1),
      Q('She is ___ than her sister.', ['taller', 'tall', 'tallest', 'more tall'], 0),
      Q('The ___ of the house is red.', ['book', 'roof', 'door', 'table'], 1),
      Q('I have lived here ___ 2010.', ['for', 'since', 'during', 'while'], 1),
      Q('Please ___ the door.', ['clos', 'close', 'closed', 'closing'], 1),
      Q('Antonim dari kata early adalah?', ['soon', 'quick', 'late', 'fast'], 2),
      Q('There ___ many people in the park.', ['are', 'is', 'be', 'am'], 0),
      Q('Bentuk past tense dari kata write adalah?', ['writed', 'wrote', 'written', 'writing'], 1),
      Q('Bentuk kata benda dari kata beautiful adalah?', ['beauty', 'beautify', 'beautifully', 'beautied'], 0),
      Q('How ___ you?', ['is', 'am', 'are', 'be'], 2),
      Q('I can ___ English.', ['speak', 'speaking', 'spoke', 'speaks'], 0),
      Q('Sinonim dari kata begin adalah?', ['end', 'start', 'stop', 'finish'], 1),
      Q('She ___ her homework now.', ['does', 'did', 'is doing', 'done'], 2),
      Q('Give the book to ___.', ['I', 'me', 'my', 'mine'], 1),
      Q('Antonim dari kata strong adalah?', ['soft', 'hard', 'fast', 'weak'], 3)
    ]
  }
];

export function findQuiz(id) {
  return QUIZZES.find((q) => q.id === id) || null;
}

// Daftar kuis untuk katalog (tanpa soal dan tanpa kunci jawaban).
export function publicQuizList() {
  return QUIZZES.map((q) => ({
    id: q.id, title: q.title, category: q.category, icon: q.icon,
    difficulty: q.difficulty, minutes: q.minutes, desc: q.desc,
    questionCount: q.questions.length
  }));
}

// Soal untuk pemain: opsi saja, tanpa indeks jawaban benar.
export function clientQuiz(q) {
  return {
    id: q.id, title: q.title, category: q.category, icon: q.icon,
    difficulty: q.difficulty, minutes: q.minutes, desc: q.desc,
    questions: q.questions.map((x) => ({ q: x.q, o: x.o }))
  };
}

export function predicateOf(score) {
  if (score >= 95) return 'Istimewa';
  if (score >= 85) return 'Sangat Baik';
  if (score >= PASS_SCORE) return 'Baik';
  if (score >= 50) return 'Cukup';
  return 'Perlu Latihan';
}
