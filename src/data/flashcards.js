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
  {
    id: 'fc-5',
    category: 'vuk',
    title: 'İşe Başlama Bildirim Süresi',
    badge: 'VUK Md. 168',
    front: 'Mükelleflerin işe başlama bildirimini vergi dairesine yapma süresi kaç gündür?',
    back: 'İşe başlama tarihinden itibaren 10 GÜN içinde vergi dairesine bildirimde bulunulması zorunludur.',
    tip: 'Şirket kuruluşlarında ticaret sicili tescil bildirimi bu sürenin yerine geçer.'
  },
  {
    id: 'fc-6',
    category: 'vuk',
    title: 'Fatura Düzenleme Süresi',
    badge: 'VUK Md. 231',
    front: 'Fatura, mal teslimi veya hizmet ifasından itibaren en geç kaç gün içinde düzenlenmelidir?',
    back: 'Azami 7 GÜN içinde düzenlenmelidir.\nBu süre geçtikten sonra düzenlenen faturalar kanunen hiç düzenlenmemiş sayılır ve özel usulsüzlük cezası kesilir.',
    tip: 'İrsaliyeli faturada veya teslim anında fatura kesilmesi esastır; 7 gün azami süredir.'
  },
  {
    id: 'fc-7',
    category: 'vuk',
    title: 'Cezada İndirim (VUK 376)',
    badge: 'VUK Md. 376',
    front: 'İhbarnamenin tebliğinden itibaren 30 gün içinde talep edilirse vergi cezalarında indirim oranı nedir?',
    back: 'Vergi ziyaı cezasında ve usulsüzlük cezalarında %50 (YARISI) oranında indirim yapılır.',
    tip: 'Mükellef uzlaşma talep etmişse uzlaşma tutanağı imzalanana kadar 376\'ya dönebilir.'
  },

  // --- GELİR & KURUMLAR VERGİSİ (193 & 5520) ---
  {
    id: 'fc-8',
    category: 'gelir-kurumlar',
    title: 'GMSİ Götürü Gider Usulü',
    badge: 'GVK Md. 74',
    front: 'Kira geliri elde edenler hasılatlarından yüzde kaç götürü gider indirebilir ve kaç yıl dönemezler?',
    back: 'İstisna sonrası hasılatın %15\'i götürü gider olarak indirilebilir.\nGötürü gider usulünü seçenler 2 YIL geçmedikçe gerçek gider usulüne dönemezler.',
    tip: 'Hakları kiraya verenler götürü gider usulünden yararlanamaz.'
  },
  {
    id: 'fc-9',
    category: 'gelir-kurumlar',
    title: 'Yıllık Gelir Vergisi Beyanı & Taksitleri',
    badge: 'GVK Md. 92 & 117',
    front: 'Yıllık Gelir Vergisi beyannamesi ne zaman verilir ve taksit ayları hangileridir?',
    back: 'İzleyen yılın MART ayı sonuna kadar verilir.\n2 EŞİT TAKSİTTE ödenir:\n1. Taksit: Mart ayı sonuna kadar\n2. Taksit: Temmuz ayı sonuna kadar.',
    tip: 'Basit usul mükellefleri de artık diğer mükelleflerle aynı tarihlerde beyan ve ödeme yapmaktadır.'
  },
  {
    id: 'fc-10',
    category: 'gelir-kurumlar',
    title: 'Kurumlar Vergisi Beyanı & Ödemesi',
    badge: 'KVK Md. 14 & 32',
    front: 'Kurumlar Vergisi beyannamesi hangi ayda verilir ve nasıl ödenir?',
    back: 'Hesap döneminin kapandığı ayı izleyen dördüncü ay olan NİSAN ayı sonuna kadar verilir ve aynı sürede TEK TAKSİTTE ödenir.',
    tip: 'Özel hesap dönemi tayin edilenlerde dördüncü ayın son gününe kadar verilir.'
  },
  {
    id: 'fc-11',
    category: 'gelir-kurumlar',
    title: 'KVK Örtülü Sermaye Oranı',
    badge: 'KVK Md. 12',
    front: 'İlişkili kişilerden temin edilen borcun örtülü sermaye sayılması için öz sermaye eşiği nedir?',
    back: 'Kurumun hesap dönemi başındaki ÖZ SERMAYESİNİN 3 KATINI aşan borçlanmalar örtülü sermaye sayılır.',
    tip: 'Örtülü sermaye üzerinden ödenen faiz ve kur farkları KKEG (Kanunen Kabul Edilmeyen Gider) sayılır.'
  },
  {
    id: 'fc-12',
    category: 'gelir-kurumlar',
    title: 'Vergiye Uyumlu Mükellef İndirimi',
    badge: 'GVK Mük. 121',
    front: 'Vergiye uyumlu mükelleflere tanınan vergi indirimi oranı ve şartları nelerdir?',
    back: 'Hesaplanan gelir veya kurumlar vergisinin %5\'i indirilir.\nŞartı: Son 3 yıla ait beyannamelerin süresinde verilmiş ve tahakkuk eden vergilerin süresinde ödenmiş olmasıdır.',
    tip: 'İndirim tutarı kanunda belirlenen tavan tutarı aşamaz.'
  },

  // --- KDV & GİDER VERGİLERİ (3065 & 6802) ---
  {
    id: 'fc-13',
    category: 'kdv-gider-vergileri',
    title: 'KDV Beyan ve Ödeme Günü',
    badge: 'KDV Kanunu',
    front: 'Katma Değer Vergisi beyannamesi ne zamana kadar verilir ve ödenir?',
    back: 'Vergilendirme dönemini takip eden ayın 28. GÜNÜ akşamına kadar verilir ve aynı gün akşamına kadar ödenir.',
    tip: 'Daha önce 26. gündü; güncel sirküler ile 28. gün sonuna uzatılmıştır!'
  },
  {
    id: 'fc-14',
    category: 'kdv-gider-vergileri',
    title: 'BSMV Matrahı',
    badge: '6802 Sayılı Kanun',
    front: 'Banka ve Sigorta Muameleleri Vergisinde (BSMV) verginin matrahı nedir?',
    back: 'Banka ve sigorta şirketlerinin lehe aldıkları paraların (faiz, komisyon, ücret vb.) tutarıdır.',
    tip: 'Giderler ve maliyetler BSMV matrahından indirilemez.'
  },
  {
    id: 'fc-15',
    category: 'kdv-gider-vergileri',
    title: 'Konaklama Vergisi',
    badge: '6802 Md. 34',
    front: 'Konaklama Vergisi mükellefi kimdir ve oranı yüzde kaçtır?',
    back: 'Mükellef: Geceleme hizmetini sunan tesis işletmecileridir.\nOran: %2\'dir.',
    tip: 'Öğrenci yurtları, pansiyonları ve kamplarında öğrencilere verilen hizmetler vergiden istisnadır.'
  },
  {
    id: 'fc-16',
    category: 'kdv-gider-vergileri',
    title: 'İhraç Kaydıyla Teslim Kuralı',
    badge: 'KDV Md. 11/1-c',
    front: 'İhraç kaydıyla teslim edilen malın kaç ay içinde ihraç edilmesi gerekir?',
    back: 'Teslim tarihini takip eden ay başından itibaren 3 AY içinde ihraç edilmesi şarttır.\nSüresinde ihraç edilmezse tecil edilen vergi gecikme zammıyla tahsil edilir.',
    tip: 'Mücbir sebep halinde vergi dairesince 3 aya kadar ek süre verilebilir.'
  },

  // --- DAMGA, HARÇLAR, MTV, VİV, EMLAK & MALİ TATİL ---
  {
    id: 'fc-17',
    category: 'diger-vergiler',
    title: 'Mali Tatil Süresi & İşlemeyen Süreler',
    badge: '5604 Sayılı Kanun',
    front: 'Mali Tatil hangi tarihler arasında uygulanır ve son günü tatile rastlayan süreler ne kadar uzar?',
    back: 'Her yıl 1 TEMMUZ - 20 TEMMUZ arasında uygulanır.\nSon günü mali tatile rastlayan süreler, tatilin bittiği günü izleyen tarihten itibaren 7 GÜN uzar (27 Temmuz akşamına kadar).',
    tip: 'Özel Tüketim Vergisi, Gümrük Vergileri ve Banka Muameleleri mali tatil kapsamı dışındadır!'
  },
  {
    id: 'fc-18',
    category: 'diger-vergiler',
    title: 'Motorlu Taşıtlar Vergisi (MTV) Taksitleri',
    badge: '197 Sayılı Kanun',
    front: 'MTV her yıl hangi aylarda kaç taksitte ödenir ve mükellefiyet ne zaman başlar?',
    back: 'Her yıl OCAK ve TEMMUZ aylarında 2 eşit taksitte ödenir.\nMükellefiyet, aracın trafik siciline kayıt ve tescil edildiği takvim yılı başından itibaren başlar.',
    tip: 'Yılın ilk 6 ayında kayıt silinirse ikinci 6 ayın taksiti terkin edilir.'
  },
  {
    id: 'fc-19',
    category: 'diger-vergiler',
    title: 'Veraset ve İntikal Vergisi Süreleri',
    badge: '7338 Sayılı Kanun',
    front: 'VİV beyannamesi ölüm Türkiye\'de ve mirasçılar Türkiye\'de ise kaç ayda verilir ve nasıl ödenir?',
    back: 'Ölüm tarihinden itibaren 4 AY içinde verilir.\nVergi, tahakkukundan itibaren 3 YILDA, her yıl MAYIS ve KASIM aylarında 6 EŞİT TAKSİTTE ödenir.',
    tip: 'Mirasçılar yurt dışında ise süre 6 aya; ölüm yurt dışında gerçekleşmişse duruma göre 6 veya 8 aya uzar.'
  },
  {
    id: 'fc-20',
    category: 'diger-vergiler',
    title: 'Emlak Vergisi Taksit Dönemleri',
    badge: '1319 Sayılı Kanun',
    front: 'Bina ve Arazi Vergisi (Emlak Vergisi) hangi aylarda kaç taksitte ödenir?',
    back: 'Her yıl MAYIS ve KASIM aylarında 2 eşit taksitte ödenir.\nMükellefiyet, tapu iktisabını takip eden bütçe yılı başından itibaren başlar.',
    tip: 'Yeni iktisap edilen bina/arsa için iktisap edilen bütçe yılı sonuna kadar bildirim verilmesi zorunludur.'
  },
  {
    id: 'fc-21',
    category: 'diger-vergiler',
    title: 'Damga Vergisi Tavan Sınırı',
    badge: '488 Md. 14',
    front: 'Damga Vergisinde tek bir kağıttan alınabilecek azami vergi tutarı kuralı nedir?',
    back: 'Bir kağıttan alınacak damga vergisi tutarı kanunda belirlenen ve her yıl yeniden değerleme oranında artırılan AZAMİ TUTARI (tavan haddi) aşamaz.',
    tip: 'Resmi dairelerle kişiler arasındaki sözleşmelerde damga vergisini kişi öder.'
  },
  {
    id: 'fc-22',
    category: 'diger-vergiler',
    title: 'Tapu Harcı Oranları',
    badge: '492 Sayılı Harçlar',
    front: 'Gayrimenkul alım satımlarında tapu harcı oranı nedir?',
    back: 'Devreden ve devralan tarafından ayrı ayrı binde 20 (%2) olmak üzere toplam binde 40 (%4) tahsil edilir.',
    tip: 'Harç, beyan edilen satış bedelinden az olmamak üzere emlak vergisi değeri üzerinden hesaplanır.'
  },

  // --- AMME ALACAKLARININ TAHSİL USULÜ (6183) ---
  {
    id: 'fc-23',
    category: 'aatuhk',
    title: 'Tahsil Zamanaşımı',
    badge: '6183 Md. 102',
    front: '6183 sayılı Kanun\'a göre Tahsil Zamanaşımı süresi ne kadardır ve süre ne zaman başlar?',
    back: '5 YILDIR.\nAmme alacağının vadesinin rastladığı takvim yılını takip eden takvim yılı başından başlar.',
    tip: 'Karıştırma: VUK 114 Tarh zamanaşımı "alacağın doğduğu", 6183 Md. 102 Tahsil zamanaşımı "vadenin rastladığı" yılı izleyen yılbaşından başlar.'
  },
  {
    id: 'fc-24',
    category: 'aatuhk',
    title: 'Ödeme Emrine İtiraz',
    badge: '6183 Md. 58',
    front: 'Kendisine ödeme emri tebliğ edilen borçlu kaç gün içinde, hangi gerekçelerle dava açabilir?',
    back: '15 GÜN içinde Vergi Mahkemesinde dava açabilir.\nİtiraz sebepleri sınırlıdır (3 sebep):\n1. Böyle bir borcu olmadığı\n2. Borcu kısmen ödediği\n3. Borcun zamanaşımına uğradığı.',
    tip: 'Önceden 7 gündü, 15 güne çıkarıldı. Sınavlarda en kritik çeldiricidir!'
  },
  {
    id: 'fc-25',
    category: 'aatuhk',
    title: 'Amme Alacağında Tecil (Madde 48)',
    badge: '6183 Md. 48',
    front: 'Amme borcunun tecil ve taksitlendirilmesinde azami süre ne kadardır?',
    back: 'Borçlunun çok zor duruma düşmesi şartıyla amme alacağı en fazla 36 AY (3 YIL) süreyle tecil edilebilir.',
    tip: 'Tecil süresince borca tecil faizi uygulanır.'
  },
  {
    id: 'fc-26',
    category: 'aatuhk',
    title: 'İhtiyati Tahakkuk Kararı',
    badge: '6183 Md. 17',
    front: 'İhtiyati tahakkuk kararını kim talep eder ve kararı kim verir?',
    back: 'Talep: Vergi Dairesi Müdürü\nKarar: Vergi Dairesi Başkanı veya Defterdar tarafından verilir.',
    tip: 'Hakkında ihtiyati tahakkuk kararı verilen mükellefe derhal ihtiyati haciz uygulanır.'
  },
  {
    id: 'fc-27',
    category: 'aatuhk',
    title: 'Haciz Bildirisine 3. Şahısların İtirazı',
    badge: '6183 Md. 79',
    front: 'Kendisine haciz bildirisi tebliğ edilen 3. şahıslar borcu olmadığına dair itirazı kaç günde yapmalıdır?',
    back: '7 GÜN içinde amme idaresine yazılı itirazda bulunmak zorundadır.\nSüresinde itiraz etmeyen 3. şahıs borcu kabul etmiş sayılır ve hakkında takip yapılır.',
    tip: 'Banka hesap hacizlerinde de 7 günlük itiraz kuralı geçerlidir.'
  },

  // --- 657 DMK & HARCIRAH KANUNU (6245) ---
  {
    id: 'fc-28',
    category: 'personel-mevzuat',
    title: '657 Disiplin Cezası Zamanaşımları',
    badge: '657 DMK Md. 127',
    front: '657 sayılı DMK\'da disiplin soruşturması açma ve karar verme zamanaşımı süreleri nelerdir?',
    back: '• Soruşturmaya başlama: Fiilin öğrenilmesinden itibaren 1 AY (memurluktan çıkarma için 6 ay)\n• Karar verme (kesin zamanaşımı): Fiilin işlendiği tarihten itibaren 2 YIL.',
    tip: '2 yıllık süre kesin süre olup uzatılamaz.'
  },
  {
    id: 'fc-29',
    category: 'personel-mevzuat',
    title: 'Harcırahın 4 Temel Unsuru',
    badge: '6245 Sayılı Kanun',
    front: '6245 sayılı Harcırah Kanunu\'na göre harcırah hangi 4 unsurdan oluşur?',
    back: '1. Yol Masrafı\n2. Yevmiye (Gündelik)\n3. Aile Masrafı\n4. Yer Değiştirme Masrafı.',
    tip: 'Geçici görevlerde aile ve yer değiştirme masrafı verilmez; sadece yol ve yevmiye verilir.'
  },
  {
    id: 'fc-30',
    category: 'personel-mevzuat',
    title: 'Geçici Görev Yolluğu Gün Sınırları',
    badge: '6245 Md. 42',
    front: 'Yurt içi geçici görevlerde yevmiye ödemesinde 90 ve 180 gün kuralı nedir?',
    back: 'Aynı yerde bir yıllık dönemde en çok 180 gün yevmiye ödenir.\n• İlk 90 gün için: TAM gündelik\n• Takip eden 90 gün için: 2/3 oranında gündelik.',
    tip: '180 günden sonra hiçbir şekilde yevmiye ödenmez.'
  },
  {
    id: 'fc-31',
    category: 'personel-mevzuat',
    title: 'Aday Memurluk Süresi',
    badge: '657 Md. 54',
    front: '657 sayılı Kanun\'a göre aday memurluk süresi en az ve en çok ne kadardır?',
    back: 'Adaylık süresi EN AZ 1 YIL, EN ÇOK 2 YILDIR.\nAdaylık devresi içinde göreve devamsızlık veya disiplinsizlik halinde ilişik kesilir.',
    tip: 'Asalet tasdiki en erken 1 yılın, en geç 2 yılın bitiminde yapılır.'
  },
  {
    id: 'fc-32',
    category: 'personel-mevzuat',
    title: 'Doğum Sonrası Aylıksız İzin',
    badge: '657 Md. 108',
    front: 'Memura doğum sonrasında isteği üzerine ne kadar süreyle aylıksız izin verilir?',
    back: 'Doğum yapan memura analık izninin bitiminden; eşi doğum yapan memura ise doğum tarihinden itibaren EN ÇOK 24 AYA KADAR aylıksız izin verilir.',
    tip: 'Aylıksız izin süresince kademe ilerlemesi ve derece yükselmesi hakları korunur.'
  },

  // --- 5018 KMYKK & KAMU İHALE (4734 / 4735) & DEĞERLİ KAĞITLAR ---
  {
    id: 'fc-33',
    category: 'kamu-ihale-ihdas',
    title: '5018 Bütçe Cetvelleri',
    badge: '5018 Sayılı Kanun',
    front: '5018 sayılı Kanun\'da Merkezi Yönetim Bütçesi hangi cetvellerden oluşur?',
    back: 'I Sayılı Cetvel: Genel Bütçeli İdareler (Bakanlıklar, GİB vb.)\nII Sayılı Cetvel: Özel Bütçeli İdareler (Üniversiteler vb.)\nIII Sayılı Cetvel: Düzenleyici ve Denetleyici Kurumlar (SPK, BDDK vb.).',
    tip: 'IV Sayılı Cetveldeki SGK ve İŞKUR Merkezi Yönetim Bütçesi dışındadır!'
  },
  {
    id: 'fc-34',
    category: 'kamu-ihale-ihdas',
    title: 'Kamu İhale Kanunu Usulleri',
    badge: '4734 Sayılı Kanun',
    front: '4734 sayılı Kanun\'a göre temel ihale usulleri nelerdir? Doğrudan temin bir ihale usulü müdür?',
    back: 'Temel ihale usulleri:\n1. Açık ihale usulü\n2. Belli istekliler arasında ihale usulü\n3. Pazarlık usulü.\n\nDOĞRUDAN TEMİN (Md. 22) bir ihale usulü DEĞİLDİR; özel bir alım yöntemidir.',
    tip: 'Sınavlarda "Hangisi ihale usulü değildir?" sorusunun değişmez cevabı Doğrudan Temin\'dir!'
  },
  {
    id: 'fc-35',
    category: 'kamu-ihale-ihdas',
    title: 'Kamu İhalesinde Şikayet Süresi',
    badge: '4734 Md. 55',
    front: 'İhalede idareye şikayet ve KİK\'e itirazen şikayet başvuru süreleri kaç gündür?',
    back: '• İdareye şikayet başvurusu süresi: 10 GÜN\n• KİK\'e (Kamu İhale Kurumu) itirazen şikayet süresi: 10 GÜN.',
    tip: 'İdare şikayete 10 gün içinde cevap vermek zorundadır.'
  },
  {
    id: 'fc-36',
    category: 'kamu-ihale-ihdas',
    title: 'İhalede Geçici ve Kesin Teminat',
    badge: '4734 Md. 33 & 43',
    front: 'Kamu ihalelerinde asgari geçici teminat ve kesin teminat oranları nedir?',
    back: '• Geçici teminat: Teklif edilen bedelin %3\'ünden az olamaz.\n• Kesin teminat: İhale sözleşme bedelinin %6\'sı oranında alınır.',
    tip: 'Danışmanlık hizmeti ihalelerinde kesin teminat oranı %10\'dur.'
  },

  // --- İŞLEM YÖNERGESİ, MUHASEBE, CBK (1 & 4) & BİLGİ EDİNME ---
  {
    id: 'fc-37',
    category: 'islem-yonergesi-teskilat',
    title: 'Bilgi Edinme Kanunu Cevap Süresi',
    badge: '4982 Sayılı Kanun',
    front: '4982 sayılı Bilgi Edinme Kanunu\'nda başvuruya cevap verme süresi kaç gündür?',
    back: 'Normal hallerde: 15 İŞ GÜNÜ\nBaşka kurum ve kuruluşların görüşünün alınması gerekiyorsa: 30 İŞ GÜNÜ.',
    tip: 'Takvim günü değil "iş günü" esası geçerlidir. Bilgi Edinme Değerlendirme Kuruluna itiraz süresi 15 gündür.'
  },
  {
    id: 'fc-38',
    category: 'islem-yonergesi-teskilat',
    title: 'GİB Teşkilat Yapısı (4 Nolu CBK)',
    badge: '4 Nolu CBK',
    front: 'Gelir İdaresi Başkanlığı\'nın taşra teşkilatı hangi birimlerden oluşur?',
    back: 'Doğrudan Başkana bağlı Vergi Dairesi Başkanlıkları ile Vergi Dairesi Müdürlükleri (ve şubeleri) taşra teşkilatını oluşturur.',
    tip: 'Vergi Dairesi Başkanlığı kurulmayan yerlerde defterdarlığa bağlı vergi dairesi müdürlükleri görev yapar.'
  },
  {
    id: 'fc-39',
    category: 'islem-yonergesi-teskilat',
    title: 'Vergi Dairesi Servis Görevleri',
    badge: 'İşlem Yönergesi',
    front: 'Vergi dairesinde Vergilendirme, Kovuşturma ve Muhasebe servislerinin temel farkları nelerdir?',
    back: '• Sicil-Yoklama: Mükellefiyet tesisi, terk ve yoklama\n• Vergilendirme (Tarh): Beyanname kabul, tarh ve tahakkuk\n• Kovuşturma (İcra): Vadesinde ödenmeyen amme alacağının cebren tahsili (ödeme emri, haciz, satış)\n• Vezne/Muhasebe: Tahsilat, teminat saklama ve muhasebeleştirme.',
    tip: 'Haciz varakası düzenleme ve takip yetkisi Kovuşturma servisine aittir.'
  },
  {
    id: 'fc-40',
    category: 'islem-yonergesi-teskilat',
    title: 'Vergi Dairesi Alındısı (Makbuzu)',
    badge: 'İşlem Yönergesi',
    front: 'Vezneye yapılan tahsilatlar karşılığında mükellefe hangi resmi belge verilir?',
    back: 'Veznece tahsil edilen tüm kamu alacakları karşılığında mükellefe veya ödeyene seri ve sıra numaralı "Vergi Dairesi Alındısı" düzenlenerek verilir.',
    tip: 'Vergi dairesi alındısı olmadan veznece hiçbir tahsilat işlemi kapatılamaz.'
  },
  {
    id: 'fc-41',
    category: 'vuk',
    title: 'VUK Değerleme Ölçüleri',
    badge: 'VUK Md. 261',
    front: "213 sayılı Vergi Usul Kanunu'nun 261. maddesinde sayılan 8 temel değerleme ölçüsü nelerdir?",
    back: "1. Maliyet bedeli\n2. Borsa rayici\n3. Tasarruf değeri\n4. Mukayyet değer\n5. İtibari değer\n6. Rayiç bedel\n7. Emsal bedeli ve emsal ücreti\n8. Vergi değeri.",
    tip: "Gelecekteki nakit akışları veya piyasa kapitalizasyonu VUK'ta değerleme ölçüsü sayılmaz!"
  },
  {
    id: 'fc-42',
    category: 'vuk',
    title: 'Mukayyet Değer Tanımı',
    badge: 'VUK Md. 265',
    front: "VUK'a göre 'Mukayyet Değer' neyi ifade eder?",
    back: "Bir iktisadi kıymetin muhasebe kayıtlarında gösterilen hesap değeridir.\nKasa, alacak ve borç senetleri nominal bedeliyle mukayyet değer üzerinden değerlenir.",
    tip: "İtibari değer (nominal değer) ise her türlü senet ve hisselerin üzerinde yazılı olan değerdir."
  },
  {
    id: 'fc-43',
    category: 'vuk',
    title: 'Vergi Cezasında Tekerrür',
    badge: 'VUK Md. 339',
    front: "VUK'a göre vergi ziyaı cezasında tekerrür süresi ve artırım oranı nedir?",
    back: "Cezanın kesinleştiği tarihi takip eden yılın başından başlayarak 5 YIL içinde tekrar vergi ziyaına sebebiyet verilirse ceza %50 ARTIRILIR.\n(Usulsüzlükte ise 2 yıl içinde %25 artırılır).",
    tip: "Artırım tutarı, kesinleşen ilk cezanın tutarından fazla olamaz."
  },
  {
    id: 'fc-44',
    category: 'vuk',
    title: 'Vergi Yargısında Dava Açma Süresi',
    badge: 'İYUK Md. 7',
    front: "Vergi mahkemelerinde dava açma süresi genel kural olarak kaç gündür?",
    back: "30 GÜNDÜR.\n(İhbarnamenin mükellefe tebliğ edildiği tarihi takip eden günden itibaren başlar).",
    tip: "Danıştay ve İdare mahkemelerinde bu süre 60 gündür; vergi mahkemesinde 30 gündür!"
  },
  {
    id: 'fc-45',
    category: 'vuk',
    title: 'Uzlaşma Başvuru Süresi',
    badge: 'VUK Ek Md. 1',
    front: "Tarhiyat sonrası uzlaşma başvurusu vergi ihbarnamesinin tebliğinden itibaren kaç gün içinde yapılmalıdır?",
    back: "30 GÜN içinde vergi dairesi uzlaşma komisyonuna yazılı olarak başvurulmalıdır.",
    tip: "Uzlaşma vaki olursa üzerinde uzlaşılan vergi ve ceza kesinleşir; dava açılamaz."
  },
  {
    id: 'fc-46',
    category: 'gelir-kurumlar',
    title: 'Genç Girişimci Kazanç İstisnası',
    badge: 'GVK Mük. Md. 20',
    front: "GVK'ya göre ilk defa gelir vergisi mükellefi olan 29 yaşını doldurmamış genç girişimcilerin kazanç istisnası ne kadardır?",
    back: "Faaliyete başladıkları takvim yılından itibaren 3 VERGİLENDİRME DÖNEMİ boyunca elde ettikleri kazançların gelir vergisi tarifesinin ikinci dilimindeki tutara kadar olan kısmı vergiden istisnadır.",
    tip: "Kendi işinde bilfiil çalışması veya işi sevk ve idare etmesi şarttır."
  },
  {
    id: 'fc-47',
    category: 'gelir-kurumlar',
    title: 'Engellilik İndirimi Dereceleri',
    badge: 'GVK Md. 31',
    front: "GVK 31. maddesinde düzenlenen çalışma gücü kayıp oranlarına göre engellilik dereceleri nelerdir?",
    back: "• 1. Derece: Çalışma gücünün en az %80'ini kaybetmiş olanlar\n• 2. Derece: Çalışma gücünün en az %60'ını kaybetmiş olanlar\n• 3. Derece: Çalışma gücünün en az %40'ını kaybetmiş olanlar.",
    tip: "Hem hizmet erbabı hem de serbest meslek erbabı ile bakmakla yükümlü olduğu engellisi olanlar yararlanır."
  },
  {
    id: 'fc-48',
    category: 'gelir-kurumlar',
    title: 'Mesken Kira İstisnası Şartı',
    badge: 'GVK Md. 21',
    front: "Konut kira gelirlerinde mesken istisnasından hangi hallerde yararlanılamaz?",
    back: "1. Beyannamenin süresinde verilmemesi veya eksik beyan edilmesi\n2. Ticari, zirai veya mesleki kazancını beyan etmek zorunda olanlar\n3. Gelir toplamı tarifenin üçüncü dilimini aşanlar istisnadan YARARLANAMAZ.",
    tip: "İdareden önce kendiliğinden pişmanlıkla beyan verilirse istisnadan yararlanılabilir."
  },
  {
    id: 'fc-49',
    category: 'gelir-kurumlar',
    title: 'KVK İştirak Kazançları İstisnası',
    badge: 'KVK Md. 5/1-a',
    front: "Kurumlar vergisinde iştirak kazançları istisnasının oranı ve mahiyeti nedir?",
    back: "%100 İSTİSNADIR.\nTam mükellef bir kurumun sermayesine iştirak edilmesinden elde edilen kâr payları kurumlar vergisinden tamamen muaftır.",
    tip: "Mükerrer vergilemeyi önlemek amacıyla tam mükellef kurumlardan elde edilen temettüler istisnadır."
  },
  {
    id: 'fc-50',
    category: 'gelir-kurumlar',
    title: 'Finansman Gider Kısıtlaması',
    badge: 'KVK Md. 11/1-i',
    front: "Kullanılan yabancı kaynakları öz kaynaklarını aşan kurumlarda finansman gider kısıtlaması oranı nedir?",
    back: "Aşan kısma münhasır olmak üzere, yabancı kaynaklara ilişkin faiz, komisyon ve kur farkı gibi giderlerin %10'u Kanunen Kabul Edilmeyen Gider (KKEG) sayılır.",
    tip: "Kredi kuruluşları, finansal kiralama ve faktoring şirketleri bu kısıtlamadan muaftır."
  },
  {
    id: 'fc-51',
    category: 'kdv-gider-vergileri',
    title: 'KDV Takvim Yılı Aşılmama Kuralı',
    badge: 'KDVK Md. 29/3',
    front: "Fatura ve belgelerdeki KDV en geç ne zamana kadar deftere kaydedilip indirilebilir?",
    back: "Vergiyi doğuran olayın meydana geldiği takvim yılını takip eden TAKVİM YILI AŞILMAMAK ŞARTIYLA, belgelerin yasal defterlere kaydedildiği dönemde indirilebilir.",
    tip: "Örnek: 2025 yılına ait bir faturanın KDV'si en geç 31 Aralık 2026 tarihine kadar kayıtlara intikal ettirilip indirilebilir."
  },
  {
    id: 'fc-52',
    category: 'kdv-gider-vergileri',
    title: 'Konaklama Vergisi',
    badge: '6802 Md. 34',
    front: "Konaklama Vergisinin oranı, mükellefi ve vergilendirme dönemi nedir?",
    back: "• Oran: %2\n• Mükellef: Konaklama tesislerini işletenler\n• Dönem: Birer aylık takvim aylarıdır (izleyen ayın 26'sına kadar beyan edilir ve ödenir).",
    tip: "KDV matrahına dahil edilmez; konaklama bedeli üzerinden ayrıca hesaplanır."
  },
  {
    id: 'fc-53',
    category: 'kdv-gider-vergileri',
    title: 'Özel İletişim Vergisi (ÖİV)',
    badge: '6802 Md. 39',
    front: "Özel İletişim Vergisi'nin yasal oranı ve beyanname verilme süresi nedir?",
    back: "• Oran: %10\n• Beyan süresi: İşlemin yapıldığı ayı izleyen ayın son gününe kadar beyan edilir ve ödenir.",
    tip: "Gelir ve kurumlar vergisi matrahının tespitinde gider olarak KABUL EDİLMEZ."
  },
  {
    id: 'fc-54',
    category: 'aatuhk',
    title: 'Aciz Fişi Hükümleri',
    badge: '6183 Md. 75',
    front: "6183 sayılı AATUHK'ya göre 'Aciz Fişi' hangi hallerde düzenlenir?",
    back: "Yapılan icra takibi sonucunda borçlunun amme alacağını karşılayacak malı bulunmadığı veya haczedilen malların borcu karşılamadığı tutanakla tespit edildiğinde düzenlenir.",
    tip: "Aciz fişi tanzimi borcu terkin etmez; zamanaşımı süresi içinde borçlunun yeni mal edinip edinmediği araştırılır."
  },
  {
    id: 'fc-55',
    category: 'aatuhk',
    title: 'İstihkak İddiasında Dava Süresi',
    badge: '6183 Md. 67',
    front: "Haczedilen mal üzerinde üçüncü şahsın istihkak iddiasını alacaklı tahsil dairesi reddederse üçüncü şahıs kaç gün içinde dava açmalıdır?",
    back: "Reddin tebliğinden itibaren 7 GÜN içinde yetkili mahkemede istihkak davası açması şarttır.",
    tip: "7 gün içinde dava açılmazsa istihkak iddiasından vazgeçilmiş sayılır."
  },
  {
    id: 'fc-56',
    category: 'aatuhk',
    title: 'Gayrimenkul Satışında %75 Kuralı',
    badge: '6183 Md. 94',
    front: "6183'e göre haczedilen gayrimenkulün birinci açık artırmada satılabilmesi için teklifin asgari tutarı ne olmalıdır?",
    back: "Gayrimenkule biçilen rayiç değerin en az %75'ini bulması ve rüçhanlı alacaklar ile takip masraflarını aşması şarttır.",
    tip: "İkinci artırmada ise rayiç değerin en az %50'sini bulması yeterlidir."
  },
  {
    id: 'fc-57',
    category: 'diger-vergiler',
    title: 'Damga Vergisinde Azami Had',
    badge: '488 Md. 14',
    front: "488 sayılı Damga Vergisi Kanunu'na göre tek bir kağıttan alınabilecek azami damga vergisi sınırı nedir?",
    back: "Her yıl yeniden değerleme oranında güncellenen yasal bir üst sınır (azami had) vardır. Sözleşme bedeli ne kadar yüksek olursa olsun ödenecek damga vergisi bu tavan tutarı aşamaz.",
    tip: "Maktu vergilerde tavan uygulanmaz; nispi damga vergilerine mahsustur."
  },
  {
    id: 'fc-58',
    category: 'diger-vergiler',
    title: 'VİV İvazsız İntikal Beyanı',
    badge: '7338 Md. 9',
    front: "Bağış, yarışma ikramiyesi gibi ivazsız (karşılıksız) intikallerde veraset ve intikal vergisi beyannamesi ne zaman verilir?",
    back: "Malların hukuken iktisap edildiği tarihi izleyen 1 AY içinde beyanname verilir.",
    tip: "Ölüm hallerindeki 4 ay / 6 ay süreleriyle karıştırılmamalıdır; ivazsız intikallerde süre 1 aydır."
  },
  {
    id: 'fc-59',
    category: 'diger-vergiler',
    title: 'Emlak Vergisi Yeni Bildirim Süresi',
    badge: '1319 Md. 23',
    front: "Yeni gayrimenkul iktisap eden mükelleflerin emlak vergisi bildirim süresi nedir?",
    back: "Değişikliğin vuku bulduğu bütçe yılı içinde verilir.\nOlay bütçe yılının son 3 ayı içinde vuku bulmuşsa olayın vuku bulduğu tarihten itibaren 3 AY içinde bildirilir.",
    tip: "Vergilendirme iktisap yılını izleyen yıldan itibaren başlar."
  },
  {
    id: 'fc-60',
    category: 'personel-mevzuat',
    title: 'Kademe İlerlemesinin Durdurulması',
    badge: '657 Md. 125',
    front: "657 sayılı DMK'ya göre kademe ilerlemesinin durdurulması cezası ne kadar süre için verilir ve kim kararlaştırır?",
    back: "Memurun bulunduğu kademede ilerlemesinin 1 YILDAN 3 YILA KADAR durdurulmasıdır.\nİl disiplin kurulu veya yetkili disiplin kurulunun kararı üzerine atamaya yetkili amirlerce verilir.",
    tip: "Öğrenim durumları gereği yükselebilecekleri son kademede olanlara brüt aylıklarının 1/4 - 1/2'si kesilir."
  },
  {
    id: 'fc-61',
    category: 'personel-mevzuat',
    title: 'Memurluktan Çekilme (İstifa) Bekleme Süreleri',
    badge: '657 Md. 97',
    front: "Memurluktan çekilenlerin yeniden memuriyete atanabilmeleri için geçmesi gereken bekleme süreleri nelerdir?",
    back: "• Usulüne uygun çekilenler: 6 AY\n• Yerine gelecek kişiyi beklemeden çekilenler: 1 YIL\n• Devir-teslim yükümlülüğünü yerine getirmeden çekilenler: 3 YIL\n• OHAL ve savaş döneminde çekilenler: HİÇBİR SURETLE yeniden memur olamaz.",
    tip: "Adaylık devresi içinde ilişiği kesilenler de 3 yıl süreyle memurluğa alınmazlar."
  },
  {
    id: 'fc-62',
    category: 'personel-mevzuat',
    title: 'Geçici Görev Yolluğu Azami Süresi',
    badge: '6245 Md. 42',
    front: "6245 sayılı Harcırah Kanunu'na göre aynı yerde yurt içi geçici görevle görevlendirilen memura en fazla kaç gün yevmiye ödenir?",
    back: "Bir takvim yılı içinde aynı yerde en çok 180 GÜN verilebilir.\n• İlk 90 gün için tam yevmiye,\n• Takip eden 90 gün için 2/3 yevmiye ödenir.",
    tip: "180 günü aşan günler için harcırah ödenmez."
  },
  {
    id: 'fc-63',
    category: 'kamu-ihale-ihdas',
    title: 'KİK İtirazen Şikayet Süresi',
    badge: '4734 Md. 56',
    front: "4734 sayılı Kamu İhale Kanunu'na göre idareye yapılan şikayetten sonuç alamayan istekli KİK'e kaç gün içinde itirazen şikayette bulunabilir?",
    back: "İdarenin kararının bildirimini izleyen veya cevap verme süresinin bittiği tarihten itibaren 10 GÜN içinde Kamu İhale Kurumu'na (KİK) itirazen şikayet başvurusu yapılır.",
    tip: "İdareye şikayet süresi de kural olarak 10 gündür (ilan veya ihale kararına karşı)."
  },
  {
    id: 'fc-64',
    category: 'kamu-ihale-ihdas',
    title: '5018 Dış Denetim Kapsamı',
    badge: '5018 Md. 68',
    front: "5018 sayılı KMYKK'ya göre genel yönetim kapsamındaki kamu idarelerinin dış denetimi kim tarafından yapılır?",
    back: "SAYIŞTAY tarafından TBMM adına yapılır.\nDüzenlilik denetimi (mali denetim ve uygunluk denetimi) ile performans denetimini kapsar.",
    tip: "İç denetim idarenin iç denetçileri tarafından; dış denetim ise münhasıran Sayıştay tarafından icra edilir."
  },
  {
    id: 'fc-65',
    category: 'islem-yonergesi-teskilat',
    title: 'Temel Bilanço Eşitliği',
    badge: 'Genel Muhasebe',
    front: "Genel muhasebede temel bilanço eşitliği formülü nedir?",
    back: "AKTİF (Varlıklar) = PASİF (Kaynaklar)\nVARLIKLAR = KISA VADELİ YABANCI KAYNAKLAR + UZUN VADELİ YABANCI KAYNAKLAR + ÖZ KAYNAKLAR",
    tip: "Gelir ve giderler doğrudan bilançoda yer almaz; Gelir Tablosu sonucu (Net Kâr/Zarar) üzerinden Öz Kaynaklara aktarılır."
  },
];
