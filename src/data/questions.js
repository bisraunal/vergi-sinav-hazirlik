export const QUESTIONS = [
  // ==========================================
  // 1. VERGİ USUL KANUNU (213)
  // ==========================================
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
    title: 'Takdir Komisyonunun Zamanaşımına Etkisi',
    question: '213 sayılı VUK\'un 114. maddesine göre, matrah takdiri için takdir komisyonuna başvurulması zamanaşımını durdurur. Ancak duran süre en fazla ne kadar olabilir?',
    options: [
      '6 ay',
      '1 yıl',
      '18 ay',
      '2 yıl'
    ],
    correctAnswer: 1, // 1 yıl (B)
    explanation: 'VUK Madde 114 uyarınca; matrah takdiri için takdir komisyonuna sevk zamanaşımını durdurur. Duran zamanaşımı süresi işlemeyen sürenin bitiminden itibaren kaldığı yerden devam eder. Ancak işlemeyen süre her halükarda bir yıldan fazla olamaz.',
    articleRef: 'VUK Madde 114',
    difficulty: 'İleri'
  },

  // ==========================================
  // 2. GELİR & KURUMLAR VERGİSİ (193 & 5520)
  // ==========================================
  {
    id: 'gk-1',
    category: 'gelir-kurumlar',
    title: 'GVK 7 Gelir Unsuru',
    question: '193 sayılı Gelir Vergisi Kanunu\'nun 2. maddesinde sayılan 7 gelir unsurundan biri DEĞİLDİR?',
    options: [
      'Ticari kazanç',
      'Zirai kazanç',
      'Kurum kazancı',
      'Gayrimenkul sermaye iradı'
    ],
    correctAnswer: 2, // Kurum kazancı (C)
    explanation: 'GVK Madde 2\'de sayılan gelir unsurları: Ticari kazanç, Zirai kazanç, Ücretler, Serbest meslek kazancı, Gayrimenkul sermaye iradı, Menkul sermaye iradı ve Diğer kazanç ve iratlardır. "Kurum kazancı" 5520 sayılı KVK konusudur.',
    articleRef: 'GVK Madde 2',
    difficulty: 'Temel'
  },
  {
    id: 'gk-2',
    category: 'gelir-kurumlar',
    title: 'GMSİ Götürü Gider Oranı',
    question: '193 sayılı GVK\'ya göre, gayrimenkul sermaye iratlarında götürü gider usulünü seçen mükellefler (hakları kiraya verenler hariç), istisna sonrası hasılatlarından yüzde kaç oranında götürü gider indirebilirler?',
    options: [
      '%10',
      '%15',
      '%20',
      '%25'
    ],
    correctAnswer: 1, // %15 (B)
    explanation: 'GVK Madde 74 uyarınca götürü gider usulünü seçen mükellefler, hasılatlarından istisna tutarını düştükten sonra kalan tutarın %15\'ini götürü gider olarak indirebilirler. Bu usulü seçenler 2 yıl geçmedikçe gerçek gidere dönemez.',
    articleRef: 'GVK Madde 74',
    difficulty: 'Orta'
  },
  {
    id: 'gk-3',
    category: 'gelir-kurumlar',
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
    id: 'gk-4',
    category: 'gelir-kurumlar',
    title: 'KVK Örtülü Sermaye Eşiği',
    question: '5520 sayılı KVK\'nın 12. maddesine göre, kurumların ilişkili kişilerden temin ettikleri borçların örtülü sermaye sayılabilmesi için, borç tutarının kurumun dönem başı öz sermayesinin kaç katını aşması gerekir?',
    options: [
      '1 katını',
      '2 katını',
      '3 katını',
      '4 katını'
    ],
    correctAnswer: 2, // 3 katını (C)
    explanation: 'KVK Madde 12 uyarınca; ortaklarla ilişkili kişilerden doğrudan veya dolaylı temin edilerek işletmede kullanılan borçların hesap dönemi içinde herhangi bir tarihte kurumun öz sermayesinin üç katını aşan kısmı örtülü sermaye sayılır.',
    articleRef: 'KVK Madde 12',
    difficulty: 'İleri'
  },
  {
    id: 'gk-5',
    category: 'gelir-kurumlar',
    title: 'Yıllık Kurumlar Vergisi Beyan ve Ödeme Zamanı',
    question: '5520 sayılı Kurumlar Vergisi Kanunu\'na göre hesap döneminin kapandığı ayı izleyen kaçıncı ayda Kurumlar Vergisi beyannamesi verilir ve ödenir?',
    options: [
      'Üçüncü ayın sonuna kadar (Mart)',
      'Dördüncü ayın sonuna kadar (Nisan)',
      'Beşinci ayın sonuna kadar (Mayıs)',
      'Altıncı ayın sonuna kadar (Haziran)'
    ],
    correctAnswer: 1, // Dördüncü ayın sonu - Nisan (B)
    explanation: 'KVK Madde 14 uyarınca Kurumlar Vergisi beyannamesi, hesap döneminin kapandığı ayı izleyen dördüncü ayın başından son gününe kadar (normal takvim yılında Nisan ayı sonuna kadar) verilir ve aynı sürede tek taksitte ödenir.',
    articleRef: 'KVK Madde 14 & 32',
    difficulty: 'Temel'
  },

  // ==========================================
  // 3. KDV & GİDER VERGİLERİ (3065 & 6802)
  // ==========================================
  {
    id: 'kdv-1',
    category: 'kdv-gider-vergileri',
    title: 'KDV\'de Vergiyi Doğuran Olay',
    question: '3065 sayılı Katma Değer Vergisi Kanunu\'nun 10. maddesine göre, mal teslimi ve hizmet ifası hallerinde vergiyi doğuran olay ne zaman meydana gelir?',
    options: [
      'Malın teslimi veya hizmetin yapıldığı an',
      'Bedelin tahsil edildiği an',
      'Sözleşmenin imzalandığı an',
      'Ay sonu beyanname verildiği an'
    ],
    correctAnswer: 0, // A şıkkı
    explanation: '3065 sayılı KDV Kanunu Madde 10/a bendi uyarınca vergiyi doğuran olay, mal teslimi veya hizmet ifası hallerinde malın teslimi veya hizmetin yapılması anında meydana gelir.',
    articleRef: 'KDV Madde 10',
    difficulty: 'Temel'
  },
  {
    id: 'kdv-2',
    category: 'kdv-gider-vergileri',
    title: 'KDV Beyan ve Ödeme Süresi',
    question: '3065 sayılı KDV Kanunu uyarınca, bir vergilendirme dönemine ait KDV beyannamesi izleyen ayın hangi gününe kadar verilir ve ödenir?',
    options: [
      '24. günü akşamına kadar verilir, 26. günü ödenir',
      '26. günü akşamına kadar verilir ve ödenir',
      '28. günü akşamına kadar verilir ve ödenir',
      'Son gününe kadar verilir ve ödenir'
    ],
    correctAnswer: 2, // 28. günü (C)
    explanation: 'GİB Vergi Usul Kanunu ve KDV sirküleri uyarınca KDV beyannameleri, vergilendirme dönemini takip eden ayın 28. günü akşamına kadar verilir ve aynı sürede ödenir.',
    articleRef: 'KDV Madde 41 & 46',
    difficulty: 'Temel'
  },
  {
    id: 'kdv-3',
    category: 'kdv-gider-vergileri',
    title: '6802 Sayılı GVK - BSMV Matrahı',
    question: '6802 sayılı Gider Vergileri Kanunu\'na göre, Banka ve Sigorta Muameleleri Vergisinin (BSMV) matrahı aşağıdakilerden hangisidir?',
    options: [
      'Bankaların dönem sonu net kârı',
      'Banka ve sigorta şirketlerinin lehe aldıkları paraların tutarı',
      'Verilen kredilerin toplam anapara tutarı',
      'Bankanın toplam mevduat hacmi'
    ],
    correctAnswer: 1, // B şıkkı
    explanation: '6802 sayılı Gider Vergileri Kanunu Madde 31 uyarınca BSMV matrahı; banka ve sigorta şirketlerinin her ne şekilde olursa olsun lehe aldıkları paraların (faiz, komisyon, ücret vb.) toplam tutarıdır.',
    articleRef: '6802 Madde 31',
    difficulty: 'Orta'
  },

  // ==========================================
  // 4. DAMGA, HARÇLAR, MTV, VİV, EMLAK & MALİ TATİL
  // ==========================================
  {
    id: 'ozel-1',
    category: 'diger-vergiler',
    title: 'Damga Vergisi Kağıt Sayılan Belgeler',
    question: '488 sayılı Damga Vergisi Kanunu\'na göre, aşağıdakilerden hangisi damga vergisinin konusuna giren "kağıt" tanımı kapsamında yer alır?',
    options: [
      'Sözlü olarak yapılan hizmet anlaşmaları',
      'Yazılıp imzalanmak veya imza yerine geçen bir işaret konmak suretiyle düzenlenen belgeler ile elektronik imzalı belgeler',
      'Sadece resmi dairelerce basılan matbu formlar',
      'Tarafların sözlü mutabakatına dayanan faturalar'
    ],
    correctAnswer: 1, // B şıkkı
    explanation: '488 sayılı Damga Vergisi Kanunu Madde 1 uyarınca; bu kanundaki kağıtlar terimi, yazılıp imzalanmak veya imza yerine geçen bir işaret konmak suretiyle düzenlenen ve herhangi bir hususu ispat veya belli etmek için ibraz edilebilecek olan belgeler ile güvenli elektronik imza kullanılarak düzenlenen belgeleri ifade eder.',
    articleRef: 'Damga Vergisi Kanunu Md. 1',
    difficulty: 'Temel'
  },
  {
    id: 'ozel-2',
    category: 'diger-vergiler',
    title: 'Motorlu Taşıtlar Vergisi Taksit Dönemleri',
    question: '197 sayılı Motorlu Taşıtlar Vergisi Kanunu\'na göre, MTV her yıl hangi aylarda olmak üzere kaç eşit taksitte ödenir?',
    options: [
      'Mart ve Temmuz aylarında 2 eşit taksitte',
      'Ocak ve Temmuz aylarında 2 eşit taksitte',
      'Mayıs ve Kasım aylarında 2 eşit taksitte',
      'Nisan ve Eylül aylarında 2 eşit taksitte'
    ],
    correctAnswer: 1, // Ocak ve Temmuz (B)
    explanation: '197 sayılı MTV Kanunu Madde 9 gereğince MTV; her yıl Ocak ve Temmuz aylarında iki eşit taksitte ödenir.',
    articleRef: 'MTV Kanunu Madde 9',
    difficulty: 'Temel'
  },
  {
    id: 'ozel-3',
    category: 'diger-vergiler',
    title: 'Veraset ve İntikal Vergisi Beyanname Süresi',
    question: '7338 sayılı Veraset ve İntikal Vergisi Kanunu\'na göre, ölüm Türkiye\'de gerçekleşmiş ve mükellefler de Türkiye\'de bulunuyorsa veraset beyannamesi ölüm tarihinden itibaren ne kadar süre içinde verilir?',
    options: [
      '1 ay içinde',
      '3 ay içinde',
      '4 ay içinde',
      '6 ay içinde'
    ],
    correctAnswer: 2, // 4 ay (C)
    explanation: '7338 sayılı VİV Kanunu Madde 9 uyarınca; ölüm Türkiye\'de cereyan etmiş ve mükellefler Türkiye\'de bulunuyorsa ölüm tarihinden itibaren 4 ay içinde beyanname verilir. Mükellefler yabancı memlekette ise bu süre 6 aya uzar.',
    articleRef: 'VİVK Madde 9',
    difficulty: 'Orta'
  },
  {
    id: 'ozel-4',
    category: 'diger-vergiler',
    title: 'Emlak Vergisi Taksit Dönemleri',
    question: '1319 sayılı Emlak Vergisi Kanunu\'na göre, bina ve arazi vergisi her yıl hangi aylarda iki eşit taksitte ödenir?',
    options: [
      'Ocak ve Temmuz',
      'Mart ve Haziran',
      'Mayıs ve Kasım',
      'Şubat ve Ekim'
    ],
    correctAnswer: 2, // Mayıs ve Kasım (C)
    explanation: '1319 sayılı Emlak Vergisi Kanunu Madde 30 uyarınca Emlak Vergisi birinci taksiti Mart, Nisan ve Mayıs aylarında; ikinci taksiti ise Kasım ayı içinde olmak üzere iki eşit taksitte ödenir.',
    articleRef: 'Emlak Vergisi Kanunu Md. 30',
    difficulty: 'Temel'
  },
  {
    id: 'ozel-5',
    category: 'diger-vergiler',
    title: 'Mali Tatil İhdas Edilmesi (5604)',
    question: '5604 sayılı Kanun uyarınca her yıl hangi tarihler arası "Mali Tatil" olarak uygulanır ve mali tatile rastlayan süreler tatilin son gününden itibaren kaç gün uzar?',
    options: [
      '1 Temmuz - 15 Temmuz arası / 5 gün uzar',
      '1 Temmuz - 20 Temmuz arası / 7 gün uzar',
      '15 Temmuz - 31 Temmuz arası / 7 gün uzar',
      '1 Ağustos - 20 Ağustos arası / 10 gün uzar'
    ],
    correctAnswer: 1, // 1-20 Temmuz arası / 7 gün uzar (B)
    explanation: '5604 sayılı Mali Tatil İhdas Edilmesi Hakkında Kanun uyarınca; her yıl Temmuz ayının birinci gününden yirminci gününe kadar (1-20 Temmuz) mali tatil uygulanır. Son günü mali tatile rastlayan süreler, mali tatilin bittiği günü izleyen tarihten itibaren 7 gün uzamış sayılır.',
    articleRef: '5604 Sayılı Kanun Madde 1',
    difficulty: 'Orta'
  },
  {
    id: 'ozel-6',
    category: 'diger-vergiler',
    title: 'Harçlar Kanunu - Nispi ve Maktu Harçlar',
    question: '492 sayılı Harçlar Kanunu\'na göre, harçlar kural olarak hangi usullerle alınır?',
    options: [
      'Yalnızca matrah üzerinden oransal (nispi) olarak',
      'Yalnızca sabit maktu tutarlar şeklinde',
      'Değer veya tutar üzerinden nispi veya maktu olarak',
      'Yalnızca damga pulu yapıştırılmak suretiyle'
    ],
    correctAnswer: 2, // C şıkkı
    explanation: '492 sayılı Harçlar Kanunu hükümlerine göre harçlar; konusuna göre belirli bir değer veya işlem tutarı üzerinden oransal (nispi) veya maktu (sabit miktar) olarak tahakkuk ettirilir.',
    articleRef: '492 Sayılı Harçlar Kanunu',
    difficulty: 'Temel'
  },

  // ==========================================
  // 5. AMME ALACAKLARININ TAHSİL USULÜ (6183)
  // ==========================================
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
  {
    id: 'aatuhk-4',
    category: 'aatuhk',
    title: 'Tecil ve Taksitlendirme (Madde 48)',
    question: '6183 sayılı Kanun\'un 48. maddesine göre, amme borcunun vadesinde ödenmesi borçluyu çok zor duruma düşürecekse amme alacağı en fazla kaç yıla kadar tecil ve taksitlendirilebilir?',
    options: [
      '1 yıl',
      '2 yıl',
      '3 yıl',
      '5 yıl'
    ],
    correctAnswer: 2, // 3 yıl (C)
    explanation: '6183 sayılı Kanun Madde 48 gereğince; çok zor durum şartıyla amme alacağı borçlunun müracaatı üzerine en çok 36 ayı (3 yılı) geçmemek üzere tecil edilebilir.',
    articleRef: '6183 Madde 48',
    difficulty: 'Orta'
  },

  // ==========================================
  // 6. 657 DMK & HARCIRAH KANUNU (6245)
  // ==========================================
  {
    id: 'pers-1',
    category: 'personel-mevzuat',
    title: '657 Disiplin Cezalarında Zamanaşımı',
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
    id: 'pers-2',
    category: 'personel-mevzuat',
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
  {
    id: 'pers-3',
    category: 'personel-mevzuat',
    title: '6245 Sayılı Harcırah Kanunu Unsurları',
    question: '6245 sayılı Harcırah Kanunu\'na göre, sürekli görevle başka bir yere naklen atanan bir memura ödenen harcırahın unsurları arasında hangisi YER ALMAZ?',
    options: [
      'Yol masrafı',
      'Yevmiye (Gündelik)',
      'Aile masrafı ve yer değiştirme masrafı',
      'Kıdem tazminatı farkı'
    ],
    correctAnswer: 3, // D şıkkı
    explanation: '6245 sayılı Harcırah Kanunu Madde 5 uyarınca harcırah; Yol masrafı, Yevmiye, Aile masrafı ve Yer değiştirme masrafını ihtiva eder.',
    articleRef: '6245 Sayılı Kanun Madde 5',
    difficulty: 'Temel'
  },
  {
    id: 'pers-4',
    category: 'personel-mevzuat',
    title: '6245 Geçici Görev Yolluğu Süre Sınırı',
    question: '6245 sayılı Kanun\'a göre, yurt içinde bir yere geçici görevle gönderilen memura aynı yerde en fazla kaç gün için tam gündelik ödenir?',
    options: [
      'İlk 30 gün',
      'İlk 60 gün',
      'İlk 90 gün',
      'İlk 180 gün'
    ],
    correctAnswer: 2, // 90 gün (C)
    explanation: '6245 sayılı Kanun Madde 42 gereğince; yurt içinde bir yere geçici görevle gönderilenlere aynı yerde ve aynı iş için bir yıllık dönemde en çok 180 gün yevmiye verilebilir. İlk 90 gün için tam, takip eden 90 gün için 2/3 oranında ödenir.',
    articleRef: '6245 Sayılı Kanun Madde 42',
    difficulty: 'İleri'
  },

  // ==========================================
  // 7. 5018 KMYKK & KAMU İHALE (4734 / 4735) & DEĞERLİ KAĞITLAR
  // ==========================================
  {
    id: 'ihale-1',
    category: 'kamu-ihale-ihdas',
    title: '5018 Merkezi Yönetim Bütçe Cetvelleri',
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
    id: 'ihale-2',
    category: 'kamu-ihale-ihdas',
    title: '4734 Sayılı Kanun İhale Usulleri',
    question: '4734 sayılı Kamu İhale Kanunu\'na göre, aşağıdakilerden hangisi temel ihale usullerinden biri DEĞİLDİR?',
    options: [
      'Açık ihale usulü',
      'Belli istekliler arasında ihale usulü',
      'Pazarlık usulü',
      'Doğrudan temin'
    ],
    correctAnswer: 3, // Doğrudan temin (D)
    explanation: '4734 sayılı Kanun Madde 18 uyarınca ihale usulleri; Açık ihale usulü, Belli istekliler arasında ihale usulü ve Pazarlık usulüdür. "Doğrudan temin" (Md. 22) bir ihale usulü değil, özel bir alım yöntemidir.',
    articleRef: '4734 Sayılı Kanun Madde 18 & 22',
    difficulty: 'Orta'
  },
  {
    id: 'ihale-3',
    category: 'kamu-ihale-ihdas',
    title: '4734 İhalede İdareye Şikayet Süresi',
    question: '4734 sayılı Kamu İhale Kanunu\'na göre, ihale sürecindeki işlem veya kararlara karşı idareye yapılacak şikayet başvurusu süresi kural olarak kaç gündür?',
    options: [
      '5 gün',
      '10 gün',
      '15 gün',
      '30 gün'
    ],
    correctAnswer: 1, // 10 gün (B)
    explanation: '4734 sayılı Kanun Madde 55 uyarınca; şikayet başvurusu ihale sürecindeki işlem veya eylemlerin hukuka aykırılığı iddiasıyla bu işlem veya eylemlerin farkına varıldığı veya farkına varılmış olması gereken tarihi izleyen günden itibaren 10 gün içinde idareye yapılır.',
    articleRef: '4734 Sayılı Kanun Madde 55',
    difficulty: 'Orta'
  },
  {
    id: 'ihale-4',
    category: 'kamu-ihale-ihdas',
    title: '210 Sayılı Değerli Kağıtlar Kanunu',
    question: '210 sayılı Değerli Kağıtlar Kanunu\'na ekli tabloda aşağıdakilerden hangisi "Değerli Kağıt" olarak YER ALMAZ?',
    options: [
      'Pasaportlar ve T.C. Kimlik Kartları',
      'Sürücü belgeleri ve Sürücü çalışma belgeleri',
      'Vergi dairesi tahakkuk fişleri',
      'Noter kağıtları ve Beyannameler'
    ],
    correctAnswer: 2, // C şıkkı
    explanation: '210 sayılı Kanun kapsamındaki değerli kağıtlar: pasaport, kimlik kartı, aile cüzdanı, sürücü belgesi, motorlu araç tescil belgesi, noter kağıtları vb. belgelerdir. Vergi dairesi tahakkuk fişi değerli kağıt değildir.',
    articleRef: '210 Sayılı Kanun',
    difficulty: 'Temel'
  },

  // ==========================================
  // 8. İŞLEM YÖNERGESİ, MUHASEBE, 1 & 4 NOLU CBK & BİLGİ EDİNME
  // ==========================================
  {
    id: 'yon-1',
    category: 'islem-yonergesi-teskilat',
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
    id: 'yon-2',
    category: 'islem-yonergesi-teskilat',
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
  },
  {
    id: 'yon-3',
    category: 'islem-yonergesi-teskilat',
    title: '4 Nolu Cumhurbaşkanlığı Kararnamesi (GİB)',
    question: '4 Nolu Cumhurbaşkanlığı Kararnamesi\'ne göre, Gelir İdaresi Başkanlığı\'nın (GİB) taşra teşkilatı doğrudan aşağıdakilerden hangisinden oluşur?',
    options: [
      'Yalnızca İl Defterdarlıkları',
      'Vergi Dairesi Başkanlıkları ve Vergi Dairesi Müdürlükleri',
      'Yalnızca Vergi Denetim Kurulu Başkanlıkları',
      'Hazine Müsteşarlığı Bölge Müdürlükleri'
    ],
    correctAnswer: 1, // B şıkkı
    explanation: '4 Nolu CB Kararnamesi uyarınca GİB\'in taşra teşkilatı; doğrudan Başkana bağlı Vergi Dairesi Başkanlıkları ile Vergi Dairesi Müdürlükleri (ve şubelerinden) oluşur.',
    articleRef: '4 Nolu CBK (GİB)',
    difficulty: 'Temel'
  },
  {
    id: 'yon-4',
    category: 'islem-yonergesi-teskilat',
    title: '4982 Sayılı Bilgi Edinme Başvuru Süresi',
    question: '4982 sayılı Bilgi Edinme Hakkı Kanunu\'na göre, kurum ve kuruluşlar yapılan bilgi edinme başvurusuna kural olarak kaç iş günü içinde cevap vermekle yükümlüdür?',
    options: [
      '7 iş günü',
      '15 iş günü',
      '30 gün',
      '60 gün'
    ],
    correctAnswer: 1, // 15 iş günü (B)
    explanation: '4982 sayılı Kanun Madde 11 uyarınca; kurum ve kuruluşlar başvuru sahibine kural olarak 15 iş günü içinde cevap verirler. Başvuru başka bir kurumun görüşünü almayı gerektiriyorsa bu süre 30 iş gününe uzar.',
    articleRef: '4982 Sayılı Kanun Madde 11',
    difficulty: 'Orta'
  },
  {
    id: 'yon-5',
    category: 'islem-yonergesi-teskilat',
    title: 'Vergi Dairesi Alındısı ve Muhasebe Kaydı',
    question: 'Vergi Dairesi İşlem Yönergesi\'ne göre, vezneye nakden veya çekle yapılan tahsilatlar karşılığında mükellefe hangi resmi belge verilir?',
    options: [
      'Düzeltme Fişi',
      'Vergi Dairesi Alındısı (Makbuzu)',
      'Haciz Varakası',
      'Yoklama Fişi'
    ],
    correctAnswer: 1, // B şıkkı
    explanation: 'Vergi Dairesi İşlem Yönergesi uyarınca; vezne servisince tahsil edilen tüm kamu alacakları karşılığında mükellefe veya ödeyene seri ve sıra numaralı "Vergi Dairesi Alındısı" düzenlenerek verilir.',
    articleRef: 'VD İşlem Yönergesi',
    difficulty: 'Temel'
  }
];
