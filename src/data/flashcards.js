export const FLASHCARDS = [
  // --- VUK (213) ---
  {
    id: 'fc-1',
    category: 'vuk',
    title: 'Tarh Zamanaşımı',
    badge: 'VUK Md. 114',
    front: 'Vergi Usul Kanunu\'na göre Tarh Zamanaşımı süresi ne kadardır ve süre ne zaman başlar?',
    back: '5 YILDIR.\nVergi alacağının doğduğu takvim yılını takip eden yılın başından başlar. Bu süre içinde tarh ve tebliğ edilmezse vergi zamanaşımına uğrar.',
    tip: 'Takdir komisyonuna sevk zamanaşımını durdurur; ancak duran süre en fazla 1 YIL olabilir!'
  },
  {
    id: 'fc-2',
    category: 'vuk',
    title: 'Ceza Zamanaşımı',
    badge: 'VUK Md. 374',
    front: 'VUK\'ta vergi ziyaı cezası ile usulsüzlük cezalarında ceza kesme zamanaşımı süreleri nelerdir?',
    back: '• Vergi ziyaı cezası: 5 YIL (vergi alacağının doğduğu yılı izleyen yılbaşından itibaren)\n• Genel ve özel usulsüzlük: 2 YIL (usulsüzlüğün yapıldığı yılı izleyen yılbaşından itibaren).',
    tip: 'Vergi ziyaı ile usulsüzlük birlikte işlenirse ceza zamanaşımı süresi 5 yıldır.'
  },
  {
    id: 'fc-3',
    category: 'vuk',
    title: 'Pişmanlık ve Islah',
    badge: 'VUK Md. 371',
    front: 'Pişmanlık dilekçesi verildikten sonra beyanname verme ve vergi ödeme süresi kaç gündür?',
    back: 'Dilekçenin verildiği tarihten itibaren 15 GÜN içinde beyannamenin verilmesi ve verginin gecikme zammı oranındaki pişmanlık zammıyla ödenmesi şarttır.',
    tip: 'Yalnızca beyana dayanan vergilerde geçerlidir. Kaçakçılık suçları da pişmanlık kapsamındadır!'
  },
  {
    id: 'fc-4',
    category: 'vuk',
    title: 'İlanen Tebligat Hükümleri',
    badge: 'VUK Md. 106',
    front: 'İlan yoluyla yapılan tebligatta tebliğ ne zaman yapılmış sayılır?',
    back: 'İlan tarihinden başlayarak 15 GÜN sonra tebliğ yapılmış sayılır.\nİlan yazısı vergi dairesinde 1 ay süreyle asılı kalır.',
    tip: 'Yurt dışındakilere tebligat ilanında süre 1 aydır.'
  },

  // --- GELİR & KURUMLAR VERGİSİ (193 & 5520) ---
  {
    id: 'fc-5',
    category: 'gelir-kurumlar',
    title: 'GMSİ Götürü Gider Usulü',
    badge: 'GVK Md. 74',
    front: 'Kira geliri elde edenler hasılatlarından yüzde kaç götürü gider indirebilir ve kaç yıl dönemezler?',
    back: 'İstisna sonrası hasılatın %15\'i götürü gider olarak indirilebilir.\nGötürü gider usulünü seçenler 2 YIL geçmedikçe gerçek gider usulüne dönemezler.',
    tip: 'Hakları kiraya verenler götürü gider usulünden yararlanamaz.'
  },
  {
    id: 'fc-6',
    category: 'gelir-kurumlar',
    title: 'Yıllık Gelir Vergisi Beyanı & Taksitleri',
    badge: 'GVK Md. 92 & 117',
    front: 'Yıllık Gelir Vergisi beyannamesi ne zaman verilir ve taksit ayları hangileridir?',
    back: 'İzleyen yılın MART ayı sonuna kadar verilir.\n2 EŞİT TAKSİTTE ödenir:\n1. Taksit: Mart ayı sonuna kadar\n2. Taksit: Temmuz ayı sonuna kadar.',
    tip: 'Basit usul mükellefleri de artık diğer mükelleflerle aynı tarihlerde beyan ve ödeme yapmaktadır.'
  },
  {
    id: 'fc-7',
    category: 'gelir-kurumlar',
    title: 'Kurumlar Vergisi Beyanı & Ödemesi',
    badge: 'KVK Md. 14 & 32',
    front: 'Kurumlar Vergisi beyannamesi hangi ayda verilir ve nasıl ödenir?',
    back: 'Hesap döneminin kapandığı ayı izleyen dördüncü ay olan NİSAN ayı sonuna kadar verilir ve aynı sürede TEK TAKSİTTE ödenir.',
    tip: 'Özel hesap dönemi tayin edilenlerde dördüncü ayın son gününe kadar verilir.'
  },
  {
    id: 'fc-8',
    category: 'gelir-kurumlar',
    title: 'KVK Örtülü Sermaye Oranı',
    badge: 'KVK Md. 12',
    front: 'İlişkili kişilerden temin edilen borcun örtülü sermaye sayılması için öz sermaye eşiği nedir?',
    back: 'Kurumun hesap dönemi başındaki ÖZ SERMAYESİNİN 3 KATINI aşan borçlanmalar örtülü sermaye sayılır.',
    tip: 'Örtülü sermaye üzerinden ödenen faiz ve kur farkları KKEG (Kanunen Kabul Edilmeyen Gider) sayılır.'
  },

  // --- KDV & GİDER VERGİLERİ (3065 & 6802) ---
  {
    id: 'fc-9',
    category: 'kdv-gider-vergileri',
    title: 'KDV Beyan ve Ödeme Günü',
    badge: 'KDV Kanunu',
    front: 'Katma Değer Vergisi beyannamesi ne zamana kadar verilir ve ödenir?',
    back: 'Vergilendirme dönemini takip eden ayın 28. GÜNÜ akşamına kadar verilir ve aynı gün akşamına kadar ödenir.',
    tip: 'Daha önce 26. gündü; güncel sirküler ile 28. gün sonuna uzatılmıştır!'
  },
  {
    id: 'fc-10',
    category: 'kdv-gider-vergileri',
    title: 'BSMV Matrahı',
    badge: '6802 Sayılı Kanun',
    front: 'Banka ve Sigorta Muameleleri Vergisinde (BSMV) verginin matrahı nedir?',
    back: 'Banka ve sigorta şirketlerinin lehe aldıkları paraların (faiz, komisyon, ücret vb.) tutarıdır.',
    tip: 'Giderler ve maliyetler BSMV matrahından indirilemez.'
  },

  // --- DAMGA, HARÇLAR, MTV, VİV, EMLAK & MALİ TATİL ---
  {
    id: 'fc-11',
    category: 'diger-vergiler',
    title: 'Mali Tatil Süresi & İşlemeyen Süreler',
    badge: '5604 Sayılı Kanun',
    front: 'Mali Tatil hangi tarihler arasında uygulanır ve son günü tatile rastlayan süreler ne kadar uzar?',
    back: 'Her yıl 1 TEMMUZ - 20 TEMMUZ arasında uygulanır.\nSon günü mali tatile rastlayan süreler, tatilin bittiği günü izleyen tarihten itibaren 7 GÜN uzar (27 Temmuz akşamına kadar).',
    tip: 'Özel Tüketim Vergisi, Gümrük Vergileri ve Banka Muameleleri mali tatil kapsamı dışındadır!'
  },
  {
    id: 'fc-12',
    category: 'diger-vergiler',
    title: 'Motorlu Taşıtlar Vergisi (MTV) Taksitleri',
    badge: '197 Sayılı Kanun',
    front: 'MTV her yıl hangi aylarda kaç taksitte ödenir ve mükellefiyet ne zaman başlar?',
    back: 'Her yıl OCAK ve TEMMUZ aylarında 2 eşit taksitte ödenir.\nMükellefiyet, aracın trafik siciline kayıt ve tescil edildiği takvim yılı başından itibaren başlar.',
    tip: 'Yılın ilk 6 ayında kayıt silinirse ikinci 6 ayın taksiti terkin edilir.'
  },
  {
    id: 'fc-13',
    category: 'diger-vergiler',
    title: 'Veraset ve İntikal Vergisi Süreleri',
    badge: '7338 Sayılı Kanun',
    front: 'VİV beyannamesi ölüm Türkiye\'de ve mirasçılar Türkiye\'de ise kaç ayda verilir ve nasıl ödenir?',
    back: 'Ölüm tarihinden itibaren 4 AY içinde verilir.\nVergi, tahakkukundan itibaren 3 YILDA, her yıl MAYIS ve KASIM aylarında 6 EŞİT TAKSİTTE ödenir.',
    tip: 'Mirasçılar yurt dışında ise süre 6 aya; ölüm yurt dışında gerçekleşmişse duruma göre 6 veya 8 aya uzar.'
  },
  {
    id: 'fc-14',
    category: 'diger-vergiler',
    title: 'Emlak Vergisi Taksit Dönemleri',
    badge: '1319 Sayılı Kanun',
    front: 'Bina ve Arazi Vergisi (Emlak Vergisi) hangi aylarda kaç taksitte ödenir?',
    back: 'Her yıl MAYIS ve KASIM aylarında 2 eşit taksitte ödenir.\nMükellefiyet, tapu iktisabını takip eden bütçe yılı başından itibaren başlar.',
    tip: 'Yeni iktisap edilen bina/arsa için iktisap edilen bütçe yılı sonuna kadar bildirim verilmesi zorunludur.'
  },
  {
    id: 'fc-15',
    category: 'diger-vergiler',
    title: 'Damga Vergisi Nüsha ve Suret Ayrımı',
    badge: '488 Sayılı Kanun',
    front: 'Damga Vergisinde birden fazla düzenlenen nüsha ve suretlerin vergilendirilmesi nasıldır?',
    back: '• Her NÜSHA ayrı ayrı aynı miktarda nispi veya maktu damga vergisine tabidir.\n• Suretler ve fotokopiler ise kural olarak sadece maktu damga vergisine tabidir.',
    tip: 'Kağıdın resmi daireye ibraz edilmesi durumunda maktu damga vergisi doğar.'
  },

  // --- AMME ALACAKLARININ TAHSİL USULÜ (6183) ---
  {
    id: 'fc-16',
    category: 'aatuhk',
    title: 'Tahsil Zamanaşımı',
    badge: '6183 Md. 102',
    front: '6183 sayılı Kanun\'a göre Tahsil Zamanaşımı süresi ne kadardır ve süre ne zaman başlar?',
    back: '5 YILDIR.\nAmme alacağının vadesinin rastladığı takvim yılını takip eden takvim yılı başından başlar.',
    tip: 'Karıştırma: VUK 114 Tarh zamanaşımı "alacağın doğduğu", 6183 Md. 102 Tahsil zamanaşımı "vadenin rastladığı" yılı izleyen yılbaşından başlar.'
  },
  {
    id: 'fc-17',
    category: 'aatuhk',
    title: 'Ödeme Emrine İtiraz',
    badge: '6183 Md. 58',
    front: 'Kendisine ödeme emri tebliğ edilen borçlu kaç gün içinde, hangi gerekçelerle dava açabilir?',
    back: '15 GÜN içinde Vergi Mahkemesinde dava açabilir.\nİtiraz sebepleri kanunda sınırlıdır (3 sebep):\n1. Böyle bir borcu olmadığı\n2. Borcu kısmen ödediği\n3. Borcun zamanaşımına uğradığı.',
    tip: 'Önceden 7 gündü, 15 güne çıkarıldı. Sınavlarda en kritik çeldiricidir!'
  },
  {
    id: 'fc-18',
    category: 'aatuhk',
    title: 'Amme Alacağında Tecil (Madde 48)',
    badge: '6183 Md. 48',
    front: 'Amme borcunun tecil ve taksitlendirilmesinde azami süre ne kadardır?',
    back: 'Borçlunun çok zor duruma düşmesi şartıyla amme alacağı en fazla 36 AY (3 YIL) süreyle tecil edilebilir.',
    tip: 'Tecil süresince borca tecil faizi uygulanır.'
  },

  // --- 657 DMK & HARCIRAH KANUNU (6245) ---
  {
    id: 'fc-19',
    category: 'personel-mevzuat',
    title: '657 Disiplin Cezası Zamanaşımları',
    badge: '657 DMK Md. 127',
    front: '657 sayılı DMK\'da disiplin soruşturması açma ve karar verme zamanaşımı süreleri nelerdir?',
    back: '• Soruşturmaya başlama: Fiilin öğrenilmesinden itibaren 1 AY (memurluktan çıkarma için 6 ay)\n• Karar verme (kesin zamanaşımı): Fiilin işlendiği tarihten itibaren 2 YIL.',
    tip: '2 yıllık süre kesin süre olup uzatılamaz.'
  },
  {
    id: 'fc-20',
    category: 'personel-mevzuat',
    title: 'Harcırahın 4 Temel Unsuru',
    badge: '6245 Sayılı Kanun',
    front: '6245 sayılı Harcırah Kanunu\'na göre harcırah hangi 4 unsurdan oluşur?',
    back: '1. Yol Masrafı\n2. Yevmiye (Gündelik)\n3. Aile Masrafı\n4. Yer Değiştirme Masrafı.',
    tip: 'Geçici görevlerde aile ve yer değiştirme masrafı verilmez; sadece yol ve yevmiye verilir.'
  },
  {
    id: 'fc-21',
    category: 'personel-mevzuat',
    title: 'Geçici Görev Yolluğu Gün Sınırları',
    badge: '6245 Md. 42',
    front: 'Yurt içi geçici görevlerde yevmiye ödemesinde 90 ve 180 gün kuralı nedir?',
    back: 'Aynı yerde bir yıllık dönemde en çok 180 gün yevmiye ödenir.\n• İlk 90 gün için: TAM gündelik\n• Takip eden 90 gün için: 2/3 oranında gündelik.',
    tip: '180 günden sonra hiçbir şekilde yevmiye ödenmez.'
  },

  // --- 5018 KMYKK & KAMU İHALE (4734 / 4735) & DEĞERLİ KAĞITLAR ---
  {
    id: 'fc-22',
    category: 'kamu-ihale-ihdas',
    title: '5018 Bütçe Cetvelleri',
    badge: '5018 Sayılı Kanun',
    front: '5018 sayılı Kanun\'da Merkezi Yönetim Bütçesi hangi cetvellerden oluşur?',
    back: 'I Sayılı Cetvel: Genel Bütçeli İdareler (Bakanlıklar, GİB vb.)\nII Sayılı Cetvel: Özel Bütçeli İdareler (Üniversiteler vb.)\nIII Sayılı Cetvel: Düzenleyici ve Denetleyici Kurumlar (SPK, BDDK vb.).',
    tip: 'IV Sayılı Cetveldeki SGK ve İŞKUR Merkezi Yönetim Bütçesi dışındadır!'
  },
  {
    id: 'fc-23',
    category: 'kamu-ihale-ihdas',
    title: 'Kamu İhale Kanunu Usulleri',
    badge: '4734 Sayılı Kanun',
    front: '4734 sayılı Kanun\'a göre temel ihale usulleri nelerdir? Doğrudan temin bir ihale usulü müdür?',
    back: 'Temel ihale usulleri:\n1. Açık ihale usulü\n2. Belli istekliler arasında ihale usulü\n3. Pazarlık usulü.\n\nDOĞRUDAN TEMİN (Md. 22) bir ihale usulü DEĞİLDİR; özel bir alım yöntemidir.',
    tip: 'Sınavlarda "Hangisi ihale usulü değildir?" sorusunun değişmez cevabı Doğrudan Temin\'dir!'
  },
  {
    id: 'fc-24',
    category: 'kamu-ihale-ihdas',
    title: 'Kamu İhalesinde Şikayet Süresi',
    badge: '4734 Md. 55',
    front: 'İhalede idareye şikayet ve KİK\'e itirazen şikayet başvuru süreleri kaç gündür?',
    back: '• İdareye şikayet başvurusu süresi: 10 GÜN\n• KİK\'e (Kamu İhale Kurumu) itirazen şikayet süresi: 10 GÜN.',
    tip: 'İdare şikayete 10 gün içinde cevap vermek zorundadır.'
  },

  // --- İŞLEM YÖNERGESİ, MUHASEBE, CBK (1 & 4) & BİLGİ EDİNME ---
  {
    id: 'fc-25',
    category: 'islem-yonergesi-teskilat',
    title: 'Bilgi Edinme Kanunu Cevap Süresi',
    badge: '4982 Sayılı Kanun',
    front: '4982 sayılı Bilgi Edinme Kanunu\'nda başvuruya cevap verme süresi kaç gündür?',
    back: 'Normal hallerde: 15 İŞ GÜNÜ\nBaşka kurum ve kuruluşların görüşünün alınması gerekiyorsa: 30 İŞ GÜNÜ.',
    tip: 'Takvim günü değil "iş günü" esası geçerlidir. Bilgi Edinme Değerlendirme Kuruluna itiraz süresi 15 gündür.'
  },
  {
    id: 'fc-26',
    category: 'islem-yonergesi-teskilat',
    title: 'GİB Teşkilat Yapısı (4 Nolu CBK)',
    badge: '4 Nolu CBK',
    front: 'Gelir İdaresi Başkanlığı\'nın taşra teşkilatı hangi birimlerden oluşur?',
    back: 'Doğrudan Başkana bağlı Vergi Dairesi Başkanlıkları ile Vergi Dairesi Müdürlükleri (ve şubeleri) taşra teşkilatını oluşturur.',
    tip: 'Vergi Dairesi Başkanlığı kurulmayan yerlerde defterdarlığa bağlı vergi dairesi müdürlükleri görev yapar.'
  },
  {
    id: 'fc-27',
    category: 'islem-yonergesi-teskilat',
    title: 'Vergi Dairesi Servis Görevleri',
    badge: 'İşlem Yönergesi',
    front: 'Vergi dairesinde Vergilendirme, Kovuşturma ve Muhasebe servislerinin temel farkları nelerdir?',
    back: '• Sicil-Yoklama: Mükellefiyet tesisi, terk ve yoklama\n• Vergilendirme (Tarh): Beyanname kabul, tarh ve tahakkuk\n• Kovuşturma (İcra): Vadesinde ödenmeyen amme alacağının cebren tahsili (ödeme emri, haciz, satış)\n• Vezne/Muhasebe: Tahsilat, teminat saklama ve muhasebeleştirme.',
    tip: 'Haciz varakası düzenleme ve takip yetkisi Kovuşturma servisine aittir.'
  }
];
