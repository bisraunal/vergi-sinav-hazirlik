export const QUESTIONS = [
  // --- VUK (213 Sayılı Kanun) ---
  {
    id: 'vuk-1',
    category: 'vuk',
    title: 'Tarh Zamanaşımı Süresi',
    question: '213 sayılı Vergi Usul Kanunu\'na göre, vergi alacağının doğduğu takvim yılını takip eden yılın başından başlayarak kaç yıl içinde tarh ve mükellefe tebliğ edilmeyen vergiler zamanaşımına uğrar?',
    options: [
      '3 yıl',
      '5 yıl',
      '7 yıl',
      '10 yıl'
    ],
    correctAnswer: 1, // 5 yıl (B)
    explanation: '213 sayılı VUK\'un 114. maddesine göre; vergi alacağının doğduğu takvim yılını takip eden yılın başından başlayarak 5 yıl içinde tarh ve mükellefe tebliğ edilmeyen vergiler zamanaşımına uğrar. Bu süreye "tarh zamanaşımı" denir.',
    articleRef: 'VUK Madde 114',
    difficulty: 'Temel'
  },
  {
    id: 'vuk-2',
    category: 'vuk',
    title: 'Pişmanlık ve Islah Müessesesi',
    question: '213 sayılı Vergi Usul Kanunu\'nun "Pişmanlık ve Islah" başlıklı 371. maddesi uygulaması ile ilgili aşağıdaki ifadelerden hangisi YANLIŞTIR?',
    options: [
      'Beyana dayanan vergilerde uygulanır.',
      'Dilekçenin verildiği tarihten itibaren 15 gün içinde beyannamenin verilmesi ve verginin ödenmesi gerekir.',
      'Emlak vergisi ve Motorlu Taşıtlar Vergisi için de pişmanlık hükümleri uygulanır.',
      'Haber verme tarihinden önce idarece vergi incelemesine başlanılmamış veya takdir komisyonuna sevk edilmemiş olmalıdır.'
    ],
    correctAnswer: 2, // C şıkkı
    explanation: 'VUK Madde 371 gereğince pişmanlık ve ıslah hükümleri yalnızca "beyana dayanan vergilerde" uygulanır. Emlak vergisi ve Motorlu Taşıtlar Vergisi beyana dayanan vergiler olmadığından pişmanlık hükümlerinden yararlanamaz.',
    articleRef: 'VUK Madde 371',
    difficulty: 'Orta'
  },
  {
    id: 'vuk-3',
    category: 'vuk',
    title: 'Tebligat Esasları ve İlanen Tebliğ',
    question: '213 sayılı Vergi Usul Kanunu\'na göre, ilanen tebliğde ilan tarihinden itibaren kural olarak kaç gün sonra tebligat yapılmış sayılır?',
    options: [
      '7 gün',
      '15 gün',
      '30 gün',
      '1 ay'
    ],
    correctAnswer: 1, // 15 gün (B)
    explanation: 'VUK Madde 106\'ya göre; tebliğ ilan tarihinden başlayarak 15 gün sonra yapılmış sayılır. İlanla tebliğ edilen evrakın vergi dairesinde bir ay süreyle askıda kalması zorunludur.',
    articleRef: 'VUK Madde 106',
    difficulty: 'Temel'
  },
  {
    id: 'vuk-4',
    category: 'vuk',
    title: 'Vergi Ziyaı Cezası Oranları',
    question: '213 sayılı VUK\'a göre, vergi ziyaına 359. maddede yazılı kaçakçılık fiilleriyle sebebiyet verilmesi halinde vergi ziyaı cezası hangi oranda uygulanır?',
    options: [
      'Ziyaa uğratılan verginin 1 katı',
      'Ziyaa uğratılan verginin 1.5 katı',
      'Ziyaa uğratılan verginin 2 katı',
      'Ziyaa uğratılan verginin 3 katı'
    ],
    correctAnswer: 3, // 3 katı (D)
    explanation: 'VUK Madde 344 uyarınca normal hallerde ceza bir kat iken; 359. maddede yazılı fiillerle (kaçakçılık) vergi ziyaına sebebiyet verilmesi halinde ceza 3 kat olarak kesilir.',
    articleRef: 'VUK Madde 344 & 359',
    difficulty: 'Orta'
  },
  {
    id: 'vuk-5',
    category: 'vuk',
    title: 'Uzlaşma Kapsamı Dışında Kalan Haller',
    question: '213 sayılı VUK hükümleri uyarınca, aşağıdaki vergi ve cezalardan hangisi tarhiyat sonrası uzlaşmanın konusu OLAMAZ?',
    options: [
      'İkmalen tarh edilen Gelir Vergisi',
      'Re\'sen tarh edilen Kurumlar Vergisi',
      'VUK 359. maddedeki fiiller sebebiyle kesilen 3 kat vergi ziyaı cezası ve buna bağlı tarh edilen vergi',
      'Normal (1 kat) kesilen vergi ziyaı cezası'
    ],
    correctAnswer: 2, // C şıkkı
    explanation: 'VUK Ek Madde 1 uyarınca; 359. maddede yazılı fiillerle (kaçakçılık) vergi ziyaına sebebiyet verilmesi halinde tarh edilen vergi ve kesilen cezalar için uzlaşma talep edilemez.',
    articleRef: 'VUK Ek Madde 1',
    difficulty: 'İleri'
  },

  // --- GVK (193 Sayılı Kanun) ---
  {
    id: 'gvk-1',
    category: 'gvk',
    title: 'Gelir Unsurları Kapsamı',
    question: '193 sayılı Gelir Vergisi Kanunu\'nun 2. maddesinde sayılan 7 gelir unsurundan biri DEĞİLDİR?',
    options: [
      'Ticari kazanç',
      'Zirai kazanç',
      'Kurum kazancı',
      'Gayrimenkul sermaye iradı'
    ],
    correctAnswer: 2, // Kurum kazancı (C)
    explanation: 'GVK Madde 2\'de 7 gelir unsuru sayılmıştır: Ticari, Zirai, Ücret, Serbest Meslek, GMSİ, MSİ, Diğer Kazanç ve İratlar. "Kurum kazancı" ise 5520 sayılı KVK\'nın konusudur.',
    articleRef: 'GVK Madde 2',
    difficulty: 'Temel'
  },
  {
    id: 'gvk-2',
    category: 'gvk',
    title: 'Tam ve Dar Mükellefiyet Ayrımı',
    question: '193 sayılı Gelir Vergisi Kanunu\'na göre, Türkiye\'de yerleşmiş sayılmak için bir takvim yılı içinde Türkiye\'de devamlı olarak kaç aydan fazla oturulması gerekir?',
    options: [
      '3 ay',
      '6 ay',
      '8 ay',
      '12 ay'
    ],
    correctAnswer: 1, // 6 ay (B)
    explanation: 'GVK Madde 4\'e göre; ikametgahı Türkiye\'de bulunanlar ile bir takvim yılı içinde Türkiye\'de devamlı olarak altı aydan fazla oturanlar Türkiye\'de yerleşmiş sayılır ve tam mükellef olarak vergilendirilir.',
    articleRef: 'GVK Madde 4',
    difficulty: 'Temel'
  },
  {
    id: 'gvk-3',
    category: 'gvk',
    title: 'GMSİ Götürü Gider Oranı',
    question: '193 sayılı GVK\'ya göre, gayrimenkul sermaye iratlarında götürü gider usulünü seçen mükellefler (hakları kiraya verenler hariç), hasılatlarından yüzde kaç oranında götürü gider indirebilirler?',
    options: [
      '%10',
      '%15',
      '%20',
      '%25'
    ],
    correctAnswer: 1, // %15 (B)
    explanation: 'GVK Madde 74 gereğince; götürü gider yöntemini seçen mükellefler kira hasılatından istisna tutarını düştükten sonra kalan tutarın %15\'ini götürü gider olarak indirebilirler. Bu usulü seçenler 2 yıl geçmedikçe gerçek gidere dönemez.',
    articleRef: 'GVK Madde 74',
    difficulty: 'Orta'
  },
  {
    id: 'gvk-4',
    category: 'gvk',
    title: 'Yıllık Gelir Vergisi Beyannamesi Verme Süresi',
    question: '193 sayılı Gelir Vergisi Kanunu uyarınca, bir takvim yılına ait gelirin beyan edildiği Yıllık Gelir Vergisi Beyannamesi kural olarak ne zaman verilir?',
    options: [
      'Takip eden yılın Şubat ayının son gününe kadar',
      'Takip eden yılın Mart ayının son gününe kadar',
      'Takip eden yılın Nisan ayının son gününe kadar',
      'Takip eden yılın Mayıs ayının son gününe kadar'
    ],
    correctAnswer: 1, // Mart sonuna kadar (B)
    explanation: 'GVK Madde 92\'ye göre bir takvim yılına ait yıllık gelir vergisi beyannamesi, izleyen yılın Mart ayının başından son gününe kadar verilir ve vergi Mart ve Temmuz aylarında iki eşit taksitte ödenir.',
    articleRef: 'GVK Madde 92 & 117',
    difficulty: 'Temel'
  },

  // --- KVK (5520 Sayılı Kanun) ---
  {
    id: 'kvk-1',
    category: 'kvk',
    title: 'Kurumlar Vergisi Mükellefleri',
    question: '5520 sayılı Kurumlar Vergisi Kanunu\'na göre aşağıdakilerden hangisi kurumlar vergisi mükellefleri arasında SAYILMAMIŞTIR?',
    options: [
      'Sermaye şirketleri',
      'Kooperatifler',
      'İktisadi kamu kuruluşları',
      'Kollektif şirketler'
    ],
    correctAnswer: 3, // Kollektif şirketler (D)
    explanation: 'KVK Madde 1 uyarınca Kurumlar Vergisi mükellefleri: Sermaye şirketleri, Kooperatifler, İktisadi kamu kuruluşları, Dernek/vakıf iktisadi işletmeleri ve İş ortaklıklarıdır. Kollektif şirketler şahıs şirketi olup ortakları Gelir Vergisi mükellefidir.',
    articleRef: 'KVK Madde 1',
    difficulty: 'Temel'
  },
  {
    id: 'kvk-2',
    category: 'kvk',
    title: 'Örtülü Sermaye Koşulları',
    question: '5520 sayılı KVK\'nın 12. maddesine göre, kurumların ilişkili kişilerden temin ettikleri borçların örtülü sermaye sayılabilmesi için, borç tutarının kurumun öz sermayesinin kaç katını aşması gerekir?',
    options: [
      '1 katını',
      '2 katını',
      '3 katını',
      '4 katını'
    ],
    correctAnswer: 2, // 3 katını (C)
    explanation: 'KVK Madde 12 uyarınca; ilişkili kişilerden temin edilerek işletmede kullanılan borçların hesap dönemi içinde herhangi bir tarihte kurumun öz sermayesinin 3 katını aşan kısmı örtülü sermaye sayılır.',
    articleRef: 'KVK Madde 12',
    difficulty: 'İleri'
  },

  // --- KDV (3065 Sayılı Kanun) ---
  {
    id: 'kdv-1',
    category: 'kdv',
    title: 'KDV\'de Vergiyi Doğuran Olay',
    question: '3065 sayılı Katma Değer Vergisi Kanunu\'nun 10. maddesine göre, mal teslimi ve hizmet ifası hallerinde vergiyi doğuran olay ne zaman meydana gelir?',
    options: [
      'Malın teslimi veya hizmetin yapıldığı an',
      'Bedelin tahsil edildiği an',
      'Sözleşmenin imzalandığı an',
      'Ay sonu beyanname verildiği an'
    ],
    correctAnswer: 0, // A şıkkı
    explanation: '3065 sayılı KDV Kanunu Madde 10/a uyarınca; vergiyi doğuran olay mal teslimi veya hizmet ifası hallerinde malın teslimi veya hizmetin yapılması anında meydana gelir.',
    articleRef: 'KDV Madde 10',
    difficulty: 'Temel'
  },
  {
    id: 'kdv-2',
    category: 'kdv',
    title: 'İhracat İstisnası ve Kapsamı',
    question: '3065 sayılı KDV Kanunu\'na göre ihracat teslimlerinin KDV\'den istisna olabilmesi için aşağıdaki şartlardan hangisi ARANMAZ?',
    options: [
      'Teslimin yurt dışındaki bir müşteriye yapılması',
      'Teslim konusu malın T.C. gümrük bölgesinden çıkması',
      'Mal bedelinin Türkiye\'ye döviz olarak getirilmesi şartı',
      'Gümrük beyannamesi ile tevsik edilmesi'
    ],
    correctAnswer: 2, // C şıkkı
    explanation: 'KDV Kanunu Madde 11 ve 12\'ye göre bir teslimin ihracat sayılabilmesi için malın yurt dışındaki müşteriye yapılması ve gümrük bölgesini terk etmesi gerekir. Kambiyo mevzuatındaki döviz getirme şartı KDV istisnasının kurucu şartı değildir.',
    articleRef: 'KDV Madde 11 & 12',
    difficulty: 'Orta'
  },

  // --- AATUHK (6183 Sayılı Kanun) ---
  {
    id: 'aatuhk-1',
    category: 'aatuhk',
    title: 'Ödeme Emrine İtiraz Süresi ve Yeri',
    question: '6183 sayılı Amme Alacaklarının Tahsil Usulü Hakkında Kanun\'a göre, kendisine ödeme emri tebliğ olunan borçlu kaç gün içinde ve nereye itiraz davası açabilir?',
    options: [
      '7 gün içinde Vergi Dairesi Müdürlüğüne',
      '15 gün içinde Vergi Mahkemesine',
      '30 gün içinde Danıştaya',
      '30 gün içinde Vergi Mahkemesine'
    ],
    correctAnswer: 1, // 15 gün içinde Vergi Mahkemesine (B)
    explanation: '6183 sayılı Kanun Madde 58 uyarınca kendisine ödeme emri tebliğ olunan borçlu, tebliğ tarihinden itibaren 15 gün içinde vergi mahkemesinde dava açabilir.',
    articleRef: '6183 Madde 58',
    difficulty: 'Temel'
  },
  {
    id: 'aatuhk-2',
    category: 'aatuhk',
    title: 'Tahsil Zamanaşımı Süresi',
    question: '6183 sayılı Kanun\'un 102. maddesine göre amme alacağı, vadesinin rastladığı takvim yılını takip eden takvim yılı başından itibaren kaç yıl içinde tahsil edilmezse zamanaşımına uğrar?',
    options: [
      '3 yıl',
      '5 yıl',
      '7 yıl',
      '10 yıl'
    ],
    correctAnswer: 1, // 5 yıl (B)
    explanation: '6183 sayılı Kanun Madde 102 gereğince; amme alacağı, vadesinin rastladığı takvim yılını takip eden takvim yılı başından itibaren 5 yıl içinde tahsil edilmezse zamanaşımına uğrar.',
    articleRef: '6183 Madde 102',
    difficulty: 'Temel'
  },
  {
    id: 'aatuhk-3',
    category: 'aatuhk',
    title: 'İhtiyati Haciz Sebepleri',
    question: '6183 sayılı Kanun\'un 13. maddesinde sayılan ihtiyati haciz sebepleri arasında aşağıdakilerden hangisi YER ALMAZ?',
    options: [
      'Borçlunun belli bir ikametgahının bulunmaması',
      'Borçlunun kaçmış olması veya kaçması ihtimalinin bulunması',
      'Borçlunun teminat göstermiş bulunması',
      'Borçludan teminat istendiği halde belli müddette teminat göstermemesi'
    ],
    correctAnswer: 2, // C şıkkı
    explanation: '6183 Madde 13 gereğince borçlunun geçerli teminat göstermiş olması ihtiyati haciz sebebi değil; bilakis haciz uygulanmasını önleyen bir durumdur.',
    articleRef: '6183 Madde 13',
    difficulty: 'Orta'
  },

  // --- 657 Sayılı DMK ---
  {
    id: 'dmk-1',
    category: 'dmk',
    title: 'Disiplin Cezalarında Zamanaşımı',
    question: '657 sayılı Devlet Memurları Kanunu\'na göre, disiplin cezasını gerektiren fiil ve halleri işleyenler hakkında, bu fiillerin işlendiği tarihten itibaren kaç yıl geçtikten sonra ceza verilemez?',
    options: [
      '1 yıl',
      '2 yıl',
      '3 yıl',
      '5 yıl'
    ],
    correctAnswer: 1, // 2 yıl (B)
    explanation: '657 sayılı Kanun Madde 127\'ye göre; fiilin işlendiği tarihten itibaren 2 yıl içinde disiplin cezası verilmediği takdirde ceza verme yetkisi zamanaşımına uğrar.',
    articleRef: '657 DMK Madde 127',
    difficulty: 'Orta'
  },
  {
    id: 'dmk-2',
    category: 'dmk',
    title: 'Memurluktan Çıkarma Cezasının Yetkilisi',
    question: '657 sayılı Devlet Memurları Kanunu\'na göre, "Devlet memurluğundan çıkarma" cezası vermeye yetkili merci hangisidir?',
    options: [
      'Atamaya yetkili amir',
      'Disiplin Amiri',
      'Yüksek Disiplin Kurulu',
      'Bakanlık Müfettişi'
    ],
    correctAnswer: 2, // Yüksek Disiplin Kurulu (C)
    explanation: '657 sayılı DMK Madde 126 uyarınca Devlet memurluğundan çıkarma cezası, amirlerin bu yoldaki isteği üzerine Yüksek Disiplin Kurulu kararı ile verilir.',
    articleRef: '657 DMK Madde 126',
    difficulty: 'Temel'
  },

  // --- 5018 Sayılı KMYKK ---
  {
    id: '5018-1',
    category: 'kamu-maliyesi',
    title: 'Bütçe Türleri ve Kapsamı',
    question: '5018 sayılı Kamu Malî Yönetimi ve Kontrol Kanunu\'na göre, Merkezi Yönetim Bütçesi hangi bütçelerden oluşur?',
    options: [
      'Genel Bütçe, Özel Bütçe ve Düzenleyici/Denetleyici Kurum Bütçeleri',
      'Genel Bütçe ve Mahalli İdare Bütçeleri',
      'Genel Bütçe ve Sosyal Güvenlik Kurumları Bütçeleri',
      'Yalnızca Hazine ve Maliye Bakanlığı Bütçesi'
    ],
    correctAnswer: 0, // A şıkkı
    explanation: '5018 sayılı Kanun Madde 12 uyarınca Merkezi Yönetim Bütçesi: (I) sayılı cetveldeki Genel Bütçe, (II) sayılı cetveldeki Özel Bütçe ve (III) sayılı cetveldeki Düzenleyici ve Denetleyici Kurum Bütçelerinden oluşur.',
    articleRef: '5018 Madde 12',
    difficulty: 'Temel'
  },
  {
    id: '5018-2',
    category: 'kamu-maliyesi',
    title: 'Harcama Yetkilisi ve Görevi',
    question: '5018 sayılı Kanun\'a göre, bütçeyle ödenek tahsis edilen her bir harcama biriminin en üst yöneticisi hangi sıfatı taşır?',
    options: [
      'Muhasebe Yetkilisi',
      'Gerçekleştirme Görevlisi',
      'Harcama Yetkilisi',
      'Mali Hizmetler Uzmanı'
    ],
    correctAnswer: 2, // Harcama Yetkilisi (C)
    explanation: '5018 sayılı Kanun Madde 31 uyarınca bütçeyle ödenek tahsis edilen harcama biriminin en üst yöneticisi harcama yetkilisidir.',
    articleRef: '5018 Madde 31',
    difficulty: 'Temel'
  },

  // --- GİB Teşkilat & Vergi Dairesi Yönetmeliği ---
  {
    id: 'gib-1',
    category: 'gib-teskilat',
    title: 'Vergi Dairesi Servisleri ve Görevleri',
    question: 'Vergi Daireleri Kuruluş ve Görev Yönetmeliği\'ne göre; mükellefiyet tesisi, mükelleflerin sicil ve kimlik kayıtları, yoklama işlemlerinin yürütülmesi hangi servis bünyesinde gerçekleştirilir?',
    options: [
      'Tarh Servisi',
      'Sicil / Yoklama Servisi',
      'Kovuşturma Servisi',
      'Muhasebe Servisi'
    ],
    correctAnswer: 1, // Sicil / Yoklama Servisi (B)
    explanation: 'Vergi Daireleri Kuruluş ve Görev Yönetmeliği uyarınca mükellefiyet tesisi, adres değişikliği, işi bırakma ve yoklama işlemleri Sicil/Yoklama Servisi tarafından yürütülür.',
    articleRef: 'VDKG Yönetmeliği Md. 14',
    difficulty: 'Temel'
  },
  {
    id: 'gib-2',
    category: 'gib-teskilat',
    title: 'Kovuşturma Servisinin Yetki Alanı',
    question: 'Vergi Daireleri Kuruluş ve Görev Yönetmeliği\'ne göre, amme alacağının vadesinde ödenmemesi durumunda ödeme emri düzenlenmesi, haciz tatbiki ve satış işlemlerini yürüten servis hangisidir?',
    options: [
      'Vergilendirme Servisi',
      'Muhasebe Servisi',
      'Kovuşturma (İcra) Servisi',
      'Tarama ve Kontrol Servisi'
    ],
    correctAnswer: 2, // Kovuşturma Servisi (C)
    explanation: 'Kovuşturma servisi, vadesinde ödenmeyen amme alacaklarının 6183 sayılı AATUHK hükümleri dairesinde cebren tahsilini (ödeme emri, haciz, satış, tecil ve taksitlendirme) yürütür.',
    articleRef: 'VDKG Yönetmeliği Md. 32',
    difficulty: 'Temel'
  }
];
