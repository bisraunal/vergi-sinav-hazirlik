export const QUESTIONS = [
  // ==========================================
  // 1. VERGİ USUL KANUNU (213)
  // ==========================================
  {
    id: 'vuk-1',
    category: 'vuk',
    title: 'Tarh Zamanaşımı Süresi',
    question: '213 sayılı Vergi Usul Kanunu\'na göre, vergi alacağının doğduğu takvim yılını takip eden yılın başından başlayarak kaç yıl içinde tarh ve mükellefe tebliğ edilmeyen vergiler zamanaşımına uğrar?',
    options: ['3 yıl', '5 yıl', '7 yıl', '10 yıl'],
    correctAnswer: 1, // 5 yıl (B)
    explanation: 'VUK Madde 114 gereğince vergi alacağının doğduğu takvim yılını takip eden yılın başından başlayarak 5 yıl içinde tarh ve tebliğ edilmeyen vergiler zamanaşımına uğrar.',
    articleRef: 'VUK Madde 114',
    difficulty: 'Temel'
  },
  {
    id: 'vuk-2',
    category: 'vuk',
    title: 'Pişmanlık ve Islah Müessesesi',
    question: '213 sayılı Vergi Usul Kanunu\'nun 371. maddesinde düzenlenen "Pişmanlık ve Islah" ile ilgili aşağıdaki ifadelerden hangisi YANLIŞTIR?',
    options: [
      'Sadece beyana dayanan vergilerde uygulanır.',
      'Dilekçenin verildiği tarihten itibaren 15 gün içinde beyanname verilmeli ve vergi ödenmelidir.',
      'Emlak vergisi ve Motorlu Taşıtlar Vergisi için de pişmanlık uygulanır.',
      'Haber verme tarihinden önce resmi bir ihbar veya vergi incelemesi başlamamış olmalıdır.'
    ],
    correctAnswer: 2, // C şıkkı
    explanation: 'VUK Madde 371 gereğince pişmanlık ve ıslah hükümleri yalnızca beyana dayanan vergilerde uygulanır. Emlak vergisi ve MTV beyana dayanan vergi olmadığından pişmanlık uygulanamaz.',
    articleRef: 'VUK Madde 371',
    difficulty: 'Orta'
  },
  {
    id: 'vuk-3',
    category: 'vuk',
    title: 'İlanen Tebligat Hükümleri',
    question: '213 sayılı Vergi Usul Kanunu\'na göre, ilanen tebliğde ilan tarihinden itibaren kural olarak kaç gün sonra tebligat yapılmış sayılır?',
    options: ['7 gün', '15 gün', '30 gün', '1 ay'],
    correctAnswer: 1, // 15 gün (B)
    explanation: 'VUK Madde 106\'ya göre tebliğ ilan tarihinden başlayarak 15 gün sonra yapılmış sayılır. İlan evrakı vergi dairesinde bir ay süreyle asılı kalır.',
    articleRef: 'VUK Madde 106',
    difficulty: 'Temel'
  },
  {
    id: 'vuk-4',
    category: 'vuk',
    title: 'Kaçakçılık Fiillerinde Vergi Ziyaı Cezası',
    question: '213 sayılı VUK\'a göre, vergi ziyaına 359. maddedeki kaçakçılık suçlarıyla sebebiyet verilmesi halinde ceza hangi oranda uygulanır?',
    options: ['Verginin 1 katı', 'Verginin 1.5 katı', 'Verginin 2 katı', 'Verginin 3 katı'],
    correctAnswer: 3, // Verginin 3 katı (D)
    explanation: 'VUK Madde 344 gereğince 359. maddedeki kaçakçılık suçlarıyla vergi ziyaına sebebiyet verilmesi halinde ceza 3 kat olarak kesilir.',
    articleRef: 'VUK Madde 344 & 359',
    difficulty: 'Orta'
  },
  {
    id: 'vuk-5',
    category: 'vuk',
    title: 'Takdir Komisyonunun Zamanaşımına Etkisi',
    question: '213 sayılı VUK\'un 114. maddesine göre, matrah takdiri için takdir komisyonuna sevk zamanaşımını durdurur. Duran zamanaşımı süresi en fazla ne kadar olabilir?',
    options: ['6 ay', '1 yıl', '18 ay', '2 yıl'],
    correctAnswer: 1, // 1 yıl (B)
    explanation: 'VUK Madde 114 uyarınca takdir komisyonuna sevk ile duran zamanaşımı süresi en fazla 1 yıl olabilir; 1 yılı aşan süreler zamanaşımı hesabında dikkate alınmaz.',
    articleRef: 'VUK Madde 114',
    difficulty: 'İleri'
  },
  {
    id: 'vuk-6',
    category: 'vuk',
    title: 'İşe Başlama Bildirim Süresi',
    question: '213 sayılı VUK\'a göre mükellefler işe başlama bildirimlerini işe başlama tarihinden itibaren kaç gün içinde vergi dairesine yapmalıdır?',
    options: ['7 gün', '10 gün', '15 gün', '30 gün'],
    correctAnswer: 1, // 10 gün (B)
    explanation: 'VUK Madde 168 gereğince işe başlama bildirimi işe başlama tarihinden itibaren 10 gün içinde vergi dairesine yapılır.',
    articleRef: 'VUK Madde 168',
    difficulty: 'Temel'
  },
  {
    id: 'vuk-7',
    category: 'vuk',
    title: 'Fatura Düzenleme Süresi',
    question: '213 sayılı VUK\'un 231. maddesine göre fatura, malın teslimi veya hizmetin yapıldığı tarihten itibaren azami kaç gün içinde düzenlenmelidir?',
    options: ['3 gün', '5 gün', '7 gün', '10 gün'],
    correctAnswer: 2, // 7 gün (C)
    explanation: 'VUK Madde 231/5 uyarınca fatura mal teslimi veya hizmet ifasından itibaren azami 7 gün içinde düzenlenir; süresinde düzenlenmeyen fatura hiç düzenlenmemiş sayılır.',
    articleRef: 'VUK Madde 231',
    difficulty: 'Temel'
  },
  {
    id: 'vuk-8',
    category: 'vuk',
    title: 'İzaha Davet Müessesesi Süresi',
    question: '213 sayılı VUK\'un 370. maddesine göre izaha davet yazısı tebliğ edilen mükellef kaç gün içinde izahta bulunmalıdır?',
    options: ['15 gün', '30 gün', '45 gün', '60 gün'],
    correctAnswer: 1, // 30 gün (B)
    explanation: 'VUK Madde 370 uyarınca mükellefler izaha davet yazısının tebliğinden itibaren 30 gün içinde yetkili komisyona izahta bulunurlar.',
    articleRef: 'VUK Madde 370',
    difficulty: 'Orta'
  },
  {
    id: 'vuk-9',
    category: 'vuk',
    title: 'Vergi İncelemesine Yetkili Olanlar',
    question: '213 sayılı VUK\'un 135. maddesine göre aşağıdakilerden hangisi doğrudan vergi incelemesi yapmaya yetkili memurlar arasında SAYILMAMIŞTIR?',
    options: [
      'Vergi Müfettişleri ve Vergi Müfettiş Yardımcıları',
      'İlin en büyük malmemuru (Defterdar)',
      'Vergi Dairesi Müdürleri',
      'Vergi Dairesi Yoklama Memurları'
    ],
    correctAnswer: 3, // D şıkkı
    explanation: 'VUK Madde 135 uyarınca vergi incelemesine yetkili olanlar: Vergi Müfettişleri ve Yardımcıları, Defterdarlar ve Vergi Dairesi Müdürleridir. Yoklama memurlarının inceleme yetkisi yoktur.',
    articleRef: 'VUK Madde 135',
    difficulty: 'Temel'
  },
  {
    id: 'vuk-10',
    category: 'vuk',
    title: 'Vergi Cezalarında İndirim (VUK 376)',
    question: '213 sayılı VUK\'un 376. maddesine göre ihbarnamenin tebliğinden itibaren 30 gün içinde dava açılmayıp vadesinde ödeneceği bildirilirse vergi ziyaı cezasında indirim oranı yüzde kaçtır?',
    options: ['%25', '%33', '%50 (Yarısı)', '%75'],
    correctAnswer: 2, // %50 (C)
    explanation: 'VUK Madde 376 gereğince ihbarnamenin tebliğinden itibaren 30 gün içinde dava açılmaksızın talep edilirse vergi ziyaı cezasının %50\'si (yarısı) indirilir.',
    articleRef: 'VUK Madde 376',
    difficulty: 'Orta'
  },
  {
    id: 'vuk-11',
    category: 'vuk',
    title: 'Binek Otomobillerde Kıst Amortisman',
    question: '213 sayılı VUK\'un 320. maddesine göre faaliyetleri kısmen veya tamamen binek otomobillerin kiralanması veya işletilmesi olmayan mükelleflerin binek otomobillerinde amortisman nasıl uygulanır?',
    options: [
      'Yıllık tam amortisman ayrılır',
      'Aktife girdiği ay kesri tam ay sayılarak kalan ay süresi için kıst amortisman ayrılır',
      'İlk yıl hiç amortisman ayrılamaz',
      'Amortisman süresi 10 yıla çıkarılarak hesaplanır'
    ],
    correctAnswer: 1, // Kıst amortisman (B)
    explanation: 'VUK Madde 320 uyarınca binek otomobiller için aktife girdiği hesap döneminde ay kesirleri tam ay sayılarak kalan ay süresi kadar kıst amortisman ayrılır.',
    articleRef: 'VUK Madde 320',
    difficulty: 'İleri'
  },
  {
    id: 'vuk-12',
    category: 'vuk',
    title: 'Değersiz Alacak Tanımı',
    question: '213 sayılı VUK\'un 322. maddesine göre kazai bir hükme veya kanaat verici bir vesikaya göre tahsiline artık imkan kalmayan alacaklara ne ad verilir?',
    options: ['Şüpheli alacak', 'Değersiz alacak', 'Vazgeçilen alacak', 'Reeskont alacağı'],
    correctAnswer: 1, // Değersiz alacak (B)
    explanation: 'VUK Madde 322 gereğince mahkeme kararına veya kanıtlayıcı belgeye göre tahsiline imkan kalmayan alacaklar değersiz alacak sayılır ve mukayyet değerleriyle zarara yazılır.',
    articleRef: 'VUK Madde 322',
    difficulty: 'Temel'
  },

  // ==========================================
  // 2. GELİR & KURUMLAR VERGİSİ (193 & 5520)
  // ==========================================
  {
    id: 'gk-1',
    category: 'gelir-kurumlar',
    title: 'GVK 7 Gelir Unsuru',
    question: '193 sayılı Gelir Vergisi Kanunu\'nun 2. maddesinde sayılan 7 gelir unsurundan biri DEĞİLDİR?',
    options: ['Ticari kazanç', 'Zirai kazanç', 'Kurum kazancı', 'Gayrimenkul sermaye iradı'],
    correctAnswer: 2, // Kurum kazancı (C)
    explanation: 'Kurum kazancı 5520 sayılı KVK\'nın konusudur; GVK 2. maddede sayılan 7 unsur arasında yer almaz.',
    articleRef: 'GVK Madde 2',
    difficulty: 'Temel'
  },
  {
    id: 'gk-2',
    category: 'gelir-kurumlar',
    title: 'GMSİ Götürü Gider Oranı',
    question: '193 sayılı GVK\'ya göre gayrimenkul sermaye iratlarında götürü gider usulünü seçen mükellefler istisna sonrası hasılatlarından yüzde kaç götürü gider indirebilirler?',
    options: ['%10', '%15', '%20', '%25'],
    correctAnswer: 1, // %15 (B)
    explanation: 'GVK Madde 74 gereğince götürü gider usulünde istisna düşüldükten sonra kalan tutarın %15\'i götürü gider olarak hasılattan indirilir.',
    articleRef: 'GVK Madde 74',
    difficulty: 'Orta'
  },
  {
    id: 'gk-3',
    category: 'gelir-kurumlar',
    title: 'KVK Örtülü Sermaye Eşiği',
    question: '5520 sayılı KVK\'nın 12. maddesine göre ilişkili kişilerden temin edilen borçların örtülü sermaye sayılabilmesi için kurumun öz sermayesinin kaç katını aşması gerekir?',
    options: ['1 katını', '2 katını', '3 katını', '4 katını'],
    correctAnswer: 2, // 3 katını (C)
    explanation: 'KVK Madde 12 uyarınca kurumun dönem başı öz sermayesinin 3 katını aşan borçlanmalar örtülü sermaye sayılır.',
    articleRef: 'KVK Madde 12',
    difficulty: 'İleri'
  },
  {
    id: 'gk-4',
    category: 'gelir-kurumlar',
    title: 'Kurumlar Vergisi Beyanname Ayı',
    question: '5520 sayılı KVK\'ya göre normal takvim yılına tabi kurumların yıllık Kurumlar Vergisi beyannamesi hangi ayda verilir ve ödenir?',
    options: ['Mart', 'Nisan', 'Mayıs', 'Haziran'],
    correctAnswer: 1, // Nisan (B)
    explanation: 'KVK Madde 14 ve 32 gereğince Kurumlar Vergisi beyannamesi hesap dönemini izleyen dördüncü ay olan Nisan ayı sonuna kadar verilir ve tek taksitte ödenir.',
    articleRef: 'KVK Madde 14 & 32',
    difficulty: 'Temel'
  },
  {
    id: 'gk-5',
    category: 'gelir-kurumlar',
    title: 'GVK Mesken Kira İstisnasından Yararlanamayanlar',
    question: '193 sayılı GVK\'nın 21. maddesindeki mesken kira geliri istisnasından aşağıdakilerden hangisi YARARLANAMAZ?',
    options: [
      'Emekli maaşı alanlar',
      'Ticari, zirai veya mesleki kazancını beyan etmek zorunda olanlar',
      'Ücret geliri elde edenler',
      'Sadece bir adet dairesi olan ev hanımları'
    ],
    correctAnswer: 1, // B şıkkı
    explanation: 'GVK Madde 21 gereğince ticari, zirai veya serbest meslek kazancını yıllık beyanname ile beyan etmek zorunda olanlar mesken kira istisnasından yararlanamaz.',
    articleRef: 'GVK Madde 21',
    difficulty: 'Orta'
  },
  {
    id: 'gk-6',
    category: 'gelir-kurumlar',
    title: 'Vergiye Uyumlu Mükellef İndirimi (GVK 121)',
    question: '193 sayılı GVK\'nın mükerrer 121. maddesine göre vergiye uyumlu gelir ve kurumlar vergisi mükelleflerine tahakkuk eden verginin yüzde kaçı oranında indirim yapılır?',
    options: ['%2', '%5', '%7.5', '%10'],
    correctAnswer: 1, // %5 (B)
    explanation: 'GVK Mükerrer Madde 121 gereğince şartları taşıyan mükelleflerin yıllık gelir veya kurumlar vergisi beyannameleri üzerinden hesaplanan verginin %5\'i indirilir (kanuni üst sınıra kadar).',
    articleRef: 'GVK Mükerrer Madde 121',
    difficulty: 'İleri'
  },
  {
    id: 'gk-7',
    category: 'gelir-kurumlar',
    title: 'GVK - Değer Artış Kazancı 5 Yıl Kuralı',
    question: '193 sayılı GVK\'nın mükerrer 80. maddesine göre gayrimenkullerin iktisap tarihinden başlayarak kaç yıl geçtikten sonra elden çıkarılması halinde değer artış kazancı doğmaz?',
    options: ['2 yıl', '3 yıl', '5 yıl', '10 yıl'],
    correctAnswer: 2, // 5 yıl (C)
    explanation: 'GVK Mükerrer Madde 80/6 uyarınca iktisap tarihinden başlayarak 5 yıl geçtikten sonra elden çıkarılan gayrimenkullerin kazancı gelir vergisinden muaftır.',
    articleRef: 'GVK Mükerrer Madde 80',
    difficulty: 'Temel'
  },
  {
    id: 'gk-8',
    category: 'gelir-kurumlar',
    title: 'KVK İştirak Kazançları İstisnası (Madde 5/1-a)',
    question: '5520 sayılı KVK\'nın 5/1-a maddesine göre tam mükellef bir sermaye şirketinin diğer bir tam mükellef kurumdan elde ettiği kâr payları hangi oranda vergiden istisnadır?',
    options: ['%25', '%50', '%75', '%100 (Tamamı)'],
    correctAnswer: 3, // %100 (D)
    explanation: 'KVK Madde 5/1-a gereğince mükerrer kurumlar vergisi doğmasını önlemek için tam mükellef kurumlardan elde edilen iştirak kazançlarının %100\'ü (tamamı) vergiden müstesnadır.',
    articleRef: 'KVK Madde 5/1-a',
    difficulty: 'Orta'
  },

  // ==========================================
  // 3. KDV & GİDER VERGİLERİ (3065 & 6802)
  // ==========================================
  {
    id: 'kdv-1',
    category: 'kdv-gider-vergileri',
    title: 'KDV\'de Vergiyi Doğuran Olay',
    question: '3065 sayılı KDV Kanunu\'nun 10. maddesine göre mal teslimi ve hizmet ifasında vergiyi doğuran olay ne zaman gerçekleşir?',
    options: [
      'Malın teslimi veya hizmetin yapıldığı an',
      'Bedelin tahsil edildiği an',
      'Sözleşmenin akdedildiği an',
      'Beyanname verildiği an'
    ],
    correctAnswer: 0, // A şıkkı
    explanation: 'KDV Kanunu Madde 10/a uyarınca mal teslimi veya hizmet ifası anında vergiyi doğuran olay gerçekleşir.',
    articleRef: 'KDV Madde 10',
    difficulty: 'Temel'
  },
  {
    id: 'kdv-2',
    category: 'kdv-gider-vergileri',
    title: 'KDV Beyan ve Ödeme Süresi',
    question: '3065 sayılı KDV Kanunu uyarınca vergilendirme dönemine ait KDV beyannamesi izleyen ayın hangi gününe kadar verilir ve ödenir?',
    options: ['24. günü', '26. günü', '28. günü', 'Son günü'],
    correctAnswer: 2, // 28. günü (C)
    explanation: 'KDV beyannameleri vergilendirme dönemini takip eden ayın 28. günü akşamına kadar verilir ve aynı gün ödenir.',
    articleRef: 'KDV Madde 41 & 46',
    difficulty: 'Temel'
  },
  {
    id: 'kdv-3',
    category: 'kdv-gider-vergileri',
    title: 'BSMV Matrahı',
    question: '6802 sayılı Gider Vergileri Kanunu\'na göre Banka ve Sigorta Muameleleri Vergisinin (BSMV) matrahı nedir?',
    options: [
      'Bankaların net dönem kârı',
      'Lehe alınan paraların tutarı (faiz, komisyon vb.)',
      'Kredilerin toplam anaparası',
      'Mevduat büyüklüğü'
    ],
    correctAnswer: 1, // B şıkkı
    explanation: '6802 sayılı Kanun Madde 31 uyarınca BSMV matrahı banka ve sigorta şirketlerinin lehe aldıkları paraların toplam tutarıdır.',
    articleRef: '6802 Madde 31',
    difficulty: 'Orta'
  },
  {
    id: 'kdv-4',
    category: 'kdv-gider-vergileri',
    title: 'İhraç Kaydıyla Teslimde İhracat Süresi',
    question: '3065 sayılı KDV Kanunu\'nun 11/1-c maddesine göre ihraç kaydıyla teslim edilen malların teslim tarihini takip eden ay başından itibaren kaç ay içinde ihraç edilmesi şarttır?',
    options: ['1 ay', '2 ay', '3 ay', '6 ay'],
    correctAnswer: 2, // 3 ay (C)
    explanation: 'KDV Kanunu 11/1-c gereğince ihraç kaydıyla alınan malların 3 ay içinde yurt dışı edilmesi zorunludur.',
    articleRef: 'KDV Madde 11/1-c',
    difficulty: 'Orta'
  },
  {
    id: 'kdv-5',
    category: 'kdv-gider-vergileri',
    title: 'Konaklama Vergisi Oranı',
    question: '6802 sayılı Gider Vergileri Kanunu\'na göre otel ve tatil köylerinde geceleme hizmetlerinden alınan Konaklama Vergisi oranı yüzde kaçtır?',
    options: ['%1', '%2', '%5', '%8'],
    correctAnswer: 1, // %2 (B)
    explanation: '6802 sayılı Kanun Madde 34 gereğince geceleme hizmetlerinde Konaklama Vergisi oranı %2\'dir.',
    articleRef: '6802 Madde 34',
    difficulty: 'Temel'
  },
  {
    id: 'kdv-6',
    category: 'kdv-gider-vergileri',
    title: 'Özel İletişim Vergisi Oranı',
    question: '6802 sayılı Gider Vergileri Kanunu\'nun mükerrer 39. maddesine göre Özel İletişim Vergisi (ÖİV) oranı yüzde kaçtır?',
    options: ['%5', '%7.5', '%10', '%15'],
    correctAnswer: 2, // %10 (C)
    explanation: '6802 Mükerrer Madde 39 uyarınca telekomünikasyon ve internet hizmetlerinde ÖİV oranı %10\'dur.',
    articleRef: '6802 Mükerrer Madde 39',
    difficulty: 'Temel'
  },

  // ==========================================
  // 4. DAMGA, HARÇLAR, MTV, VİV, EMLAK & MALİ TATİL
  // ==========================================
  {
    id: 'diger-1',
    category: 'diger-vergiler',
    title: 'Mali Tatil Tarihleri ve Uzama Süresi',
    question: '5604 sayılı Kanun\'a göre Mali Tatil hangi tarihler arasında uygulanır ve tatile rastlayan süreler tatil bitiminden itibaren kaç gün uzar?',
    options: [
      '1 - 15 Temmuz / 5 gün uzar',
      '1 - 20 Temmuz / 7 gün uzar',
      '15 - 31 Temmuz / 7 gün uzar',
      '1 - 20 Ağustos / 10 gün uzar'
    ],
    correctAnswer: 1, // 1-20 Temmuz / 7 gün uzar (B)
    explanation: '5604 sayılı Kanun Madde 1 gereğince her yıl 1-20 Temmuz arası mali tatildir. Son günü tatile rastlayan kanuni süreler tatilin bitiminden itibaren 7 gün uzar (27 Temmuz akşamına kadar).',
    articleRef: '5604 Sayılı Kanun',
    difficulty: 'Temel'
  },
  {
    id: 'diger-2',
    category: 'diger-vergiler',
    title: 'Mali Tatil Kapsamına Girmeyen Vergiler',
    question: '5604 sayılı Mali Tatil İhdas Edilmesi Hakkında Kanun kapsamına aşağıdaki vergilerden hangisi GİRMEZ?',
    options: [
      'Gelir Vergisi',
      'Katma Değer Vergisi',
      'Özel Tüketim Vergisi (ÖTV)',
      'Kurumlar Vergisi'
    ],
    correctAnswer: 2, // ÖTV (C)
    explanation: '5604 sayılı Kanun gereğince Özel Tüketim Vergisi, Gümrük vergileri ve banka muameleleri mali tatil kapsamı dışındadır; süreleri uzamaz.',
    articleRef: '5604 Sayılı Kanun Madde 1',
    difficulty: 'Orta'
  },
  {
    id: 'diger-3',
    category: 'diger-vergiler',
    title: 'Motorlu Taşıtlar Vergisi Taksit Ayları',
    question: '197 sayılı Motorlu Taşıtlar Vergisi Kanunu\'na göre MTV hangi aylarda olmak üzere kaç taksitte ödenir?',
    options: [
      'Ocak ve Temmuz aylarında 2 eşit taksitte',
      'Mart ve Kasım aylarında 2 eşit taksitte',
      'Mayıs ve Kasım aylarında 2 eşit taksitte',
      'Ocak ve Haziran aylarında 2 eşit taksitte'
    ],
    correctAnswer: 0, // Ocak ve Temmuz (A)
    explanation: '197 sayılı Kanun Madde 9 gereğince MTV her yıl Ocak ve Temmuz aylarında iki eşit taksitte ödenir.',
    articleRef: 'MTV Kanunu Madde 9',
    difficulty: 'Temel'
  },
  {
    id: 'diger-4',
    category: 'diger-vergiler',
    title: 'Veraset ve İntikal Vergisi Beyanname Süresi',
    question: '7338 sayılı Kanun\'a göre ölüm Türkiye\'de gerçekleşmiş ve mirasçılar da Türkiye\'de ise beyanname kaç ay içinde verilir?',
    options: ['1 ay', '3 ay', '4 ay', '6 ay'],
    correctAnswer: 2, // 4 ay (C)
    explanation: '7338 sayılı VİV Kanunu Madde 9 uyarınca ölüm Türkiye\'de gerçekleşmiş ve mükellefler Türkiye\'de ise beyanname ölümden itibaren 4 ay içinde verilir.',
    articleRef: 'VİVK Madde 9',
    difficulty: 'Temel'
  },
  {
    id: 'diger-5',
    category: 'diger-vergiler',
    title: 'VİV Taksit ve Ödeme Süresi',
    question: '7338 sayılı Kanun\'a göre tahakkuk eden Veraset ve İntikal Vergisi kaç yılda, hangi aylarda kaç taksitte ödenir?',
    options: [
      '2 yılda, Ocak ve Temmuzda 4 taksitte',
      '3 yılda, Mayıs ve Kasım aylarında 6 eşit taksitte',
      '5 yılda, her yıl Mart ayında 5 taksitte',
      'Tebliğden itibaren 30 gün içinde peşin'
    ],
    correctAnswer: 1, // 3 yılda, Mayıs ve Kasımda 6 taksitte (B)
    explanation: 'VİVK Madde 19 uyarınca vergi 3 yılda, her yıl Mayıs ve Kasım aylarında 6 eşit taksitte ödenir.',
    articleRef: 'VİVK Madde 19',
    difficulty: 'Orta'
  },
  {
    id: 'diger-6',
    category: 'diger-vergiler',
    title: 'Emlak Vergisi Taksit Dönemleri',
    question: '1319 sayılı Emlak Vergisi Kanunu\'na göre bina ve arazi vergisi hangi aylarda 2 taksitte ödenir?',
    options: ['Ocak ve Temmuz', 'Mart ve Eylül', 'Mayıs ve Kasım', 'Nisan ve Ekim'],
    correctAnswer: 2, // Mayıs ve Kasım (C)
    explanation: '1319 sayılı Kanun Madde 30 gereğince Emlak Vergisi Mayıs ve Kasım aylarında iki eşit taksitte ödenir.',
    articleRef: 'Emlak Vergisi Kanunu Md. 30',
    difficulty: 'Temel'
  },
  {
    id: 'diger-7',
    category: 'diger-vergiler',
    title: 'Damga Vergisinde Resmi Dairelerle Yapılan İşlemler',
    question: '488 sayılı Damga Vergisi Kanunu\'na göre resmi daireler ile kişiler arasındaki işlemlere ait kağıtların damga vergisini kim öder?',
    options: ['Resmi daire', 'Kişiler', 'Yarısını resmi daire, yarısını kişiler', 'Hiç kimse ödemez, muaftır'],
    correctAnswer: 1, // Kişiler (B)
    explanation: 'Damga Vergisi Kanunu Madde 24 uyarınca resmi dairelerle kişiler arasındaki kağıtların damga vergisini kişiler ödemekle mükelleftir.',
    articleRef: 'Damga Vergisi Kanunu Md. 24',
    difficulty: 'Temel'
  },
  {
    id: 'diger-8',
    category: 'diger-vergiler',
    title: 'Tapu Harcı Oranı ve Paylaşımı',
    question: '492 sayılı Harçlar Kanunu\'na göre gayrimenkul alım satımlarında tapu harcı oranı nedir ve nasıl ödenir?',
    options: [
      'Alıcıdan binde 20, satıcıdan harç alınmaz',
      'Devreden ve devralandan ayrı ayrı binde 20 (toplam %4)',
      'Yalnızca satıcıdan binde 40',
      'Belediye rayiç bedeli üzerinden sabit maktu tutar'
    ],
    correctAnswer: 1, // Devreden ve devralandan ayrı ayrı binde 20 (B)
    explanation: '492 sayılı Kanun (4) sayılı tarife uyarınca tapu harcı devreden ve devralandan ayrı ayrı binde 20 (%2) olmak üzere toplam %4 tahsil edilir.',
    articleRef: 'Harçlar Kanunu (4) Sayılı Tarife',
    difficulty: 'Temel'
  },

  // ==========================================
  // 5. AMME ALACAKLARININ TAHSİL USULÜ (6183)
  // ==========================================
  {
    id: 'aatuhk-1',
    category: 'aatuhk',
    title: 'Ödeme Emrine İtiraz Süresi ve Yeri',
    question: '6183 sayılı Kanun\'a göre kendisine ödeme emri tebliğ edilen borçlu kaç gün içinde ve nereye itiraz davası açabilir?',
    options: [
      '7 gün içinde Vergi Dairesi Müdürlüğüne',
      '15 gün içinde Vergi Mahkemesine',
      '30 gün içinde Danıştaya',
      '30 gün içinde Vergi Mahkemesine'
    ],
    correctAnswer: 1, // 15 gün içinde Vergi Mahkemesine (B)
    explanation: '6183 sayılı Kanun Madde 58 uyarınca ödeme emrine karşı 15 gün içinde yetkili vergi mahkemesinde dava açılabilir.',
    articleRef: '6183 Madde 58',
    difficulty: 'Temel'
  },
  {
    id: 'aatuhk-2',
    category: 'aatuhk',
    title: 'Tahsil Zamanaşımı Süresi',
    question: '6183 sayılı Kanun\'un 102. maddesine göre amme alacağı vadesinin rastladığı takvim yılını takip eden yılbaşından itibaren kaç yılda zamanaşımına uğrar?',
    options: ['3 yıl', '5 yıl', '7 yıl', '10 yıl'],
    correctAnswer: 1, // 5 yıl (B)
    explanation: '6183 sayılı Kanun Madde 102 gereğince amme alacağı vadesinin rastladığı yılı takip eden takvim yılı başından itibaren 5 yıl içinde tahsil edilmezse zamanaşımına uğrar.',
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
      'Borçlunun kaçmış olması veya kaçması ihtimali',
      'Borçlunun geçerli teminat göstermiş bulunması',
      'Borçludan teminat istendiği halde belli müddette teminat vermemesi'
    ],
    correctAnswer: 2, // C şıkkı
    explanation: 'Borçlunun geçerli teminat göstermiş olması ihtiyati haciz sebebi değil; bilakis haciz uygulanmasını önleyen durumdur.',
    articleRef: '6183 Madde 13',
    difficulty: 'Orta'
  },
  {
    id: 'aatuhk-4',
    category: 'aatuhk',
    title: 'Tecil ve Taksitlendirme Azami Süresi (Madde 48)',
    question: '6183 sayılı Kanun\'un 48. maddesine göre çok zor durum şartıyla amme alacağı en çok kaç aya (yıla) kadar tecil edilebilir?',
    options: ['12 ay (1 yıl)', '24 ay (2 yıl)', '36 ay (3 yıl)', '60 ay (5 yıl)'],
    correctAnswer: 2, // 36 ay / 3 yıl (C)
    explanation: '6183 sayılı Kanun Madde 48 uyarınca tecil süresi en fazla 36 ayı (3 yılı) geçemez.',
    articleRef: '6183 Madde 48',
    difficulty: 'Orta'
  },
  {
    id: 'aatuhk-5',
    category: 'aatuhk',
    title: 'İhtiyati Tahakkuk Yetkilisi',
    question: '6183 sayılı Kanun\'un 17. maddesine göre ihtiyati tahakkuk kararı vermeye yetkili makam kimdir?',
    options: [
      'Vergi Dairesi Müdürü',
      'Vergi Dairesi Başkanı veya Defterdar',
      'Vergi Müfettişi',
      'Vergi Mahkemesi Hakimi'
    ],
    correctAnswer: 1, // Vergi Dairesi Başkanı veya Defterdar (B)
    explanation: '6183 Madde 17 gereğince ihtiyati tahakkuk vergi dairesi müdürünün talebi üzerine Vergi Dairesi Başkanı veya Defterdar tarafından verilir.',
    articleRef: '6183 Madde 17',
    difficulty: 'Orta'
  },
  {
    id: 'aatuhk-6',
    category: 'aatuhk',
    title: 'Üçüncü Şahısların Haciz Bildirisine İtiraz Süresi (Madde 79)',
    question: '6183 sayılı Kanun\'un 79. maddesine göre haciz bildirisi tebliğ edilen 3. şahıslar borcu bulunmadığına dair itirazı kaç gün içinde yapmalıdır?',
    options: ['3 gün', '7 gün', '15 gün', '30 gün'],
    correctAnswer: 1, // 7 gün (B)
    explanation: '6183 sayılı Kanun Madde 79 gereğince 3. şahıslar haciz bildirisinin tebliğinden itibaren 7 gün içinde itiraz etmekle yükümlüdür.',
    articleRef: '6183 Madde 79',
    difficulty: 'Orta'
  },
  {
    id: 'aatuhk-7',
    category: 'aatuhk',
    title: 'Limited Şirket Ortaklarının Amme Borcundan Sorumluluğu (Madde 35)',
    question: '6183 sayılı Kanun\'un 35. maddesine göre limited şirket ortakları şirketten tahsil edilemeyen amme borçlarından nasıl sorumludur?',
    options: [
      'Şirket borcunun tamamından müteselsilen sorumludurlar',
      'Şirketteki sermaye payları oranında doğrudan doğruya sorumludurlar',
      'Yalnızca şirket müdürü sorumludur, ortaklar sorumlu değildir',
      'Ortaklar sadece koydukları taahhüt edilen sermaye kadar sorumludur'
    ],
    correctAnswer: 1, // Sermaye payları oranında doğrudan doğruya (B)
    explanation: '6183 Madde 35 uyarınca limited şirket ortakları şirketten tahsil imkanı bulunmayan amme alacaklarından sermaye payları oranında doğrudan doğruya sorumludur.',
    articleRef: '6183 Madde 35',
    difficulty: 'İleri'
  },

  // ==========================================
  // 6. 657 DMK & HARCIRAH KANUNU (6245)
  // ==========================================
  {
    id: 'pers-1',
    category: 'personel-mevzuat',
    title: '657 Disiplin Cezalarında Zamanaşımı',
    question: '657 sayılı DMK\'ya göre fiilin işlendiği tarihten itibaren kaç yıl içinde ceza verilmezse ceza yetkisi zamanaşımına uğrar?',
    options: ['1 yıl', '2 yıl', '3 yıl', '5 yıl'],
    correctAnswer: 1, // 2 yıl (B)
    explanation: '657 sayılı DMK Madde 127 uyarınca fiilin işlendiği tarihten itibaren 2 yıl içinde ceza verilmediği takdirde disiplin cezası verme yetkisi düşer.',
    articleRef: '657 DMK Madde 127',
    difficulty: 'Orta'
  },
  {
    id: 'pers-2',
    category: 'personel-mevzuat',
    title: 'Devlet Memurluğundan Çıkarma Yetkilisi',
    question: '657 sayılı DMK\'ya göre Devlet memurluğundan çıkarma cezası vermeye yetkili merci hangisidir?',
    options: [
      'Atamaya yetkili amir',
      'Disiplin Amiri',
      'Yüksek Disiplin Kurulu',
      'Bakanlık Müfettişi'
    ],
    correctAnswer: 2, // Yüksek Disiplin Kurulu (C)
    explanation: '657 sayılı DMK Madde 126 uyarınca Devlet memurluğundan çıkarma cezası Yüksek Disiplin Kurulu kararı ile verilir.',
    articleRef: '657 DMK Madde 126',
    difficulty: 'Temel'
  },
  {
    id: 'pers-3',
    category: 'personel-mevzuat',
    title: '6245 Harcırahın 4 Unsuru',
    question: '6245 sayılı Harcırah Kanunu\'na göre naklen atanan memura ödenen harcırah hangi 4 unsurdan oluşur?',
    options: [
      'Yol masrafı, Yevmiye, Aile masrafı, Yer değiştirme masrafı',
      'Yol masrafı, Yevmiye, Konaklama, İkramiye',
      'Yol masrafı, Kira yardımı, Çocuk parası, Yevmiye',
      'Yol masrafı, Tazminat, Yakıt yardımı, Yevmiye'
    ],
    correctAnswer: 0, // A şıkkı
    explanation: '6245 sayılı Kanun Madde 5 gereğince harcırah; Yol masrafı, Yevmiye, Aile masrafı ve Yer değiştirme masrafını ihtiva eder.',
    articleRef: '6245 Sayılı Kanun Madde 5',
    difficulty: 'Temel'
  },
  {
    id: 'pers-4',
    category: 'personel-mevzuat',
    title: '6245 Geçici Görev Yolluğu Gün Sınırları',
    question: '6245 sayılı Kanun\'a göre yurt içinde bir yere geçici görevle gönderilen memura aynı yerde en fazla kaç gün için tam gündelik ödenir?',
    options: ['İlk 30 gün', 'İlk 60 gün', 'İlk 90 gün', 'İlk 180 gün'],
    correctAnswer: 2, // 90 gün (C)
    explanation: '6245 Madde 42 gereğince aynı yerde geçici görevde ilk 90 gün için tam, takip eden 90 gün için 2/3 oranında yevmiye ödenir (en çok 180 gün).',
    articleRef: '6245 Sayılı Kanun Madde 42',
    difficulty: 'İleri'
  },
  {
    id: 'pers-5',
    category: 'personel-mevzuat',
    title: '657 Yıllık İzin Süreleri',
    question: '657 sayılı DMK\'ya göre hizmeti 1 yıldan 10 yıla kadar (10 yıl dahil) olan memurların yıllık izni kaç gündür?',
    options: ['15 gün', '20 gün', '25 gün', '30 gün'],
    correctAnswer: 1, // 20 gün (B)
    explanation: '657 sayılı DMK Madde 102 gereğince 1 yıldan 10 yıla kadar olanlar için 20 gün, 10 yıldan fazla hizmeti olanlar için 30 gündür.',
    articleRef: '657 DMK Madde 102',
    difficulty: 'Temel'
  },
  {
    id: 'pers-6',
    category: 'personel-mevzuat',
    title: '657 Babalık ve Evlilik Mazeret İzinleri',
    question: '657 sayılı DMK\'nın 104. maddesine göre memura eşinin doğum yapması halinde kaç gün babalık izni verilir?',
    options: ['3 gün', '5 gün', '7 gün', '10 gün'],
    correctAnswer: 3, // 10 gün (D)
    explanation: '657 sayılı DMK Madde 104/B bendi gereğince memura eşinin doğum yapması halinde isteği üzerine 10 gün babalık izni verilir.',
    articleRef: '657 DMK Madde 104',
    difficulty: 'Temel'
  },

  // ==========================================
  // 7. 5018 KMYKK & KAMU İHALE (4734 / 4735) & DEĞERLİ KAĞITLAR
  // ==========================================
  {
    id: 'ihale-1',
    category: 'kamu-ihale-ihdas',
    title: '5018 Merkezi Yönetim Bütçe Cetvelleri',
    question: '5018 sayılı Kamu Malî Yönetimi ve Kontrol Kanunu\'na göre Merkezi Yönetim Bütçesi hangi bütçelerden oluşur?',
    options: [
      'Genel Bütçe, Özel Bütçe ve Düzenleyici/Denetleyici Kurum Bütçeleri',
      'Genel Bütçe ve Mahalli İdare Bütçeleri',
      'Genel Bütçe ve Sosyal Güvenlik Kurumları Bütçeleri',
      'Yalnızca Hazine ve Maliye Bakanlığı Bütçesi'
    ],
    correctAnswer: 0, // A şıkkı
    explanation: '5018 sayılı Kanun Madde 12 uyarınca Merkezi Yönetim Bütçesi: I sayılı cetvel Genel Bütçe, II sayılı cetvel Özel Bütçe ve III sayılı cetvel Düzenleyici Kurum bütçelerinden oluşur.',
    articleRef: '5018 Madde 12',
    difficulty: 'Temel'
  },
  {
    id: 'ihale-2',
    category: 'kamu-ihale-ihdas',
    title: '4734 Temel İhale Usulleri ve Doğrudan Temin',
    question: '4734 sayılı Kamu İhale Kanunu\'na göre aşağıdakilerden hangisi bir temel ihale usulü DEĞİLDİR?',
    options: ['Açık ihale usulü', 'Belli istekliler arasında ihale usulü', 'Pazarlık usulü', 'Doğrudan temin'],
    correctAnswer: 3, // Doğrudan temin (D)
    explanation: '4734 sayılı Kanun Madde 18 gereğince temel ihale usulleri Açık ihale, Belli istekliler ve Pazarlıktır. Doğrudan temin (Md. 22) bir ihale usulü değil, özel bir alım yöntemidir.',
    articleRef: '4734 Sayılı Kanun Madde 18',
    difficulty: 'Orta'
  },
  {
    id: 'ihale-3',
    category: 'kamu-ihale-ihdas',
    title: '4734 İhalede İdareye Şikayet Süresi',
    question: '4734 sayılı Kamu İhale Kanunu\'na göre ihale sürecindeki işlemlere karşı idareye yapılacak şikayet süresi kaç gündür?',
    options: ['5 gün', '10 gün', '15 gün', '30 gün'],
    correctAnswer: 1, // 10 gün (B)
    explanation: '4734 sayılı Kanun Madde 55 gereğince idareye şikayet süresi 10 gündür.',
    articleRef: '4734 Sayılı Kanun Madde 55',
    difficulty: 'Orta'
  },
  {
    id: 'ihale-4',
    category: 'kamu-ihale-ihdas',
    title: '4734 Geçici ve Kesin Teminat Oranları',
    question: '4734 sayılı Kanun\'a göre ihalelerde teklif bedelinin yüzde kaçından az olmamak üzere geçici teminat ve ihale bedelinin yüzde kaçı oranında kesin teminat alınır?',
    options: [
      'Geçici teminat en az %2 / Kesin teminat %5',
      'Geçici teminat en az %3 / Kesin teminat %6',
      'Geçici teminat en az %5 / Kesin teminat %10',
      'Geçici teminat en az %1 / Kesin teminat %3'
    ],
    correctAnswer: 1, // %3 ve %6 (B)
    explanation: '4734 Madde 33 uyarınca teklif bedelinin %3\'ünden az olmamak üzere geçici teminat, Madde 43 uyarınca sözleşme bedelinin %6\'sı oranında kesin teminat alınır.',
    articleRef: '4734 Md. 33 & 43',
    difficulty: 'İleri'
  },
  {
    id: 'ihale-5',
    category: 'kamu-ihale-ihdas',
    title: '5018 Avans Mahsup Süresi',
    question: '5018 sayılı Kanun\'un 35. maddesine göre avans alan görevliler avansın verildiği tarihten itibaren en geç kaç ay içinde mahsup belgelerini vermek zorundadır?',
    options: ['15 gün', '1 ay', '3 ay', 'Mali yılın son günü'],
    correctAnswer: 1, // 1 ay (B)
    explanation: '5018 sayılı Kanun Madde 35 gereğince avans alanlar 1 ay içinde mahsup belgelerini muhasebe yetkilisine vermek zorundadır.',
    articleRef: '5018 Madde 35',
    difficulty: 'Orta'
  },
  {
    id: 'ihale-6',
    category: 'kamu-ihale-ihdas',
    title: '210 Sayılı Değerli Kağıtlar Kapsamı',
    question: '210 sayılı Değerli Kağıtlar Kanunu tablosunda aşağıdakilerden hangisi "Değerli Kağıt" olarak YER ALMAZ?',
    options: [
      'Pasaportlar ve T.C. Kimlik Kartları',
      'Sürücü belgeleri',
      'Vergi dairesi tahakkuk fişleri',
      'Noter kağıtları ve Beyannameler'
    ],
    correctAnswer: 2, // Vergi dairesi tahakkuk fişi (C)
    explanation: '210 sayılı Kanun kapsamındaki değerli kağıtlar pasaport, kimlik kartı, sürücü belgesi, motorlu araç tescil belgesi vb. olup vergi tahakkuk fişi değerli kağıt değildir.',
    articleRef: '210 Sayılı Kanun',
    difficulty: 'Temel'
  },

  // ==========================================
  // 8. İŞLEM YÖNERGESİ, MUHASEBE, 1 & 4 NOLU CBK & BİLGİ EDİNME
  // ==========================================
  {
    id: 'yon-1',
    category: 'islem-yonergesi-teskilat',
    title: 'Vergi Dairesi Servis Görevleri - Sicil/Yoklama',
    question: 'Vergi Daireleri Kuruluş ve Görev Yönetmeliği\'ne göre mükellefiyet tesisi, terk ve yoklama işlemleri hangi servisin görevidir?',
    options: ['Tarh Servisi', 'Sicil / Yoklama Servisi', 'Kovuşturma Servisi', 'Muhasebe Servisi'],
    correctAnswer: 1, // Sicil / Yoklama Servisi (B)
    explanation: 'VDKG Yönetmeliği Madde 14 uyarınca mükellefiyet tesisi, adres değişikliği, terk ve yoklama işlemleri Sicil/Yoklama Servisince yürütülür.',
    articleRef: 'VDKG Yönetmeliği Md. 14',
    difficulty: 'Temel'
  },
  {
    id: 'yon-2',
    category: 'islem-yonergesi-teskilat',
    title: 'Kovuşturma (İcra) Servisi Görevi',
    question: 'Vergi Daireleri Kuruluş ve Görev Yönetmeliği\'ne göre vadesinde ödenmeyen amme alacaklarının cebren tahsilini yürüten servis hangisidir?',
    options: ['Vergilendirme Servisi', 'Muhasebe Servisi', 'Kovuşturma Servisi', 'Tarama ve Kontrol Servisi'],
    correctAnswer: 2, // Kovuşturma Servisi (C)
    explanation: 'VDKG Yönetmeliği Madde 32 gereğince amme alacaklarının 6183 sayılı Kanun dairesinde cebren tahsilini (ödeme emri, haciz, satış, tecil) Kovuşturma Servisi yürütür.',
    articleRef: 'VDKG Yönetmeliği Md. 32',
    difficulty: 'Temel'
  },
  {
    id: 'yon-3',
    category: 'islem-yonergesi-teskilat',
    title: '4 Nolu CBK - GİB Taşra Teşkilatı',
    question: '4 Nolu Cumhurbaşkanlığı Kararnamesi\'ne göre Gelir İdaresi Başkanlığı\'nın taşra teşkilatı doğrudan hangi birimlerden oluşur?',
    options: [
      'Yalnızca İl Defterdarlıkları',
      'Vergi Dairesi Başkanlıkları ve Vergi Dairesi Müdürlükleri',
      'Vergi Denetim Kurulu Başkanlıkları',
      'Hazine Bölge Müdürlükleri'
    ],
    correctAnswer: 1, // B şıkkı
    explanation: '4 Nolu CB Kararnamesi gereğince GİB taşra teşkilatı; doğrudan Başkana bağlı Vergi Dairesi Başkanlıkları ile Vergi Dairesi Müdürlükleri ve şubelerinden oluşur.',
    articleRef: '4 Nolu CBK (GİB)',
    difficulty: 'Temel'
  },
  {
    id: 'yon-4',
    category: 'islem-yonergesi-teskilat',
    title: '4982 Bilgi Edinme Başvuru Cevap Süresi',
    question: '4982 sayılı Bilgi Edinme Hakkı Kanunu\'na göre kurumlar başvuruya kural olarak kaç iş günü içinde cevap verirler?',
    options: ['7 iş günü', '15 iş günü', '30 gün', '60 gün'],
    correctAnswer: 1, // 15 iş günü (B)
    explanation: '4982 sayılı Kanun Madde 11 uyarınca bilgi edinme başvurusuna 15 iş günü içinde cevap verilir (başka kurum görüşü gerekiyorsa 30 iş gününe uzar).',
    articleRef: '4982 Sayılı Kanun Madde 11',
    difficulty: 'Orta'
  },
  {
    id: 'yon-5',
    category: 'islem-yonergesi-teskilat',
    title: '4982 Bilgi Edinme Değerlendirme Kurulu (BEDK) Üye Sayısı',
    question: '4982 sayılı Kanun\'a göre Bilgi Edinme Değerlendirme Kurulu (BEDK) kaç üyeden oluşur ve üyelerin görev süresi kaç yıldır?',
    options: ['7 üye - 3 yıl', '9 üye - 4 yıl', '11 üye - 5 yıl', '15 üye - 4 yıl'],
    correctAnswer: 1, // 9 üye - 4 yıl (B)
    explanation: '4982 sayılı Kanun Madde 14 uyarınca BEDK 9 üyeden oluşur ve görev süresi 4 yıldır.',
    articleRef: '4982 Madde 14',
    difficulty: 'İleri'
  },
  {
    id: 'yon-6',
    category: 'islem-yonergesi-teskilat',
    title: 'Vergi Dairesi Alındısı Düzenlenmesi',
    question: 'Vergi Dairesi İşlem Yönergesi\'ne göre vezneye nakit veya çekle yapılan tahsilatlar karşılığında mükellefe hangi resmi belge tanzim edilerek verilir?',
    options: ['Düzeltme Fişi', 'Vergi Dairesi Alındısı (Makbuzu)', 'Haciz Varakası', 'Yoklama Fişi'],
    correctAnswer: 1, // Vergi Dairesi Alındısı (B)
    explanation: 'İşlem Yönergesi uyarınca veznede yapılan tüm tahsilatlar karşılığında seri ve sıra numaralı Vergi Dairesi Alındısı tanzim edilir.',
    articleRef: 'VD İşlem Yönergesi',
    difficulty: 'Temel'
  },
  {
    id: 'yon-7',
    category: 'islem-yonergesi-teskilat',
    title: '1 Nolu CBK - Muhasebat Genel Müdürlüğü Görevi',
    question: '1 Nolu Cumhurbaşkanlığı Kararnamesi\'ne göre genel yönetim sektörü muhasebe standartlarını belirleme ve genel bütçe hesaplarını tutma görevi hangi birime aittir?',
    options: [
      'Gelir İdaresi Başkanlığı',
      'Muhasebat Genel Müdürlüğü',
      'Kamu Mali Yönetim ve Dönüşüm Genel Müdürlüğü',
      'Başhukuk Müşavirliği'
    ],
    correctAnswer: 1, // Muhasebat Genel Müdürlüğü (B)
    explanation: '1 Nolu CBK uyarınca devlet muhasebe kayıtlarını tutma, konsolide etme ve standart belirleme görevi Muhasebat Genel Müdürlüğü\'ne aittir.',
    articleRef: '1 Nolu CBK (HMB)',
    difficulty: 'Orta'
  }
];
