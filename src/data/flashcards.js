export const FLASHCARDS = [
  {
    id: 'fc-1',
    category: 'vuk',
    title: 'Tarh Zamanaşımı',
    badge: 'Kritik Süre',
    front: 'Vergi Usul Kanunu\'na göre Tarh Zamanaşımı süresi ne kadardır ve süre ne zaman başlar?',
    back: '5 YILDIR.\nVergi alacağının doğduğu takvim yılını takip eden yılın başından başlar. Bu süre içinde tarh ve mükellefe tebliğ edilmezse zamanaşımına uğrar (VUK Md. 114).',
    tip: 'Unutma: Takdir komisyonuna sevk zamanaşımını durdurur (en fazla 1 yıl).'
  },
  {
    id: 'fc-2',
    category: 'aatuhk',
    title: 'Tahsil Zamanaşımı',
    badge: 'Kritik Süre',
    front: '6183 sayılı Kanun\'a göre Tahsil Zamanaşımı süresi ne kadardır ve süre ne zaman başlar?',
    back: '5 YILDIR.\nAmme alacağının vadesinin rastladığı takvim yılını takip eden takvim yılı başından başlar (6183 Md. 102).',
    tip: 'Karıştırma: Tarh zamanaşımı "alacağın doğduğu yılı", Tahsil zamanaşımı "vadenin rastladığı yılı" izleyen yılbaşından başlar.'
  },
  {
    id: 'fc-3',
    category: 'aatuhk',
    title: 'Ödeme Emrine İtiraz',
    badge: 'Dava Açma Süresi',
    front: 'Kendisine ödeme emri tebliğ edilen borçlu kaç gün içinde, hangi gerekçelerle dava açabilir?',
    back: '15 GÜN içinde Vergi Mahkemesinde dava açabilir (6183 Md. 58).\nİtiraz gerekçeleri sınırlıdır:\n1. Böyle bir borcu olmadığı,\n2. Kısmen ödendiği,\n3. Zamanaşımına uğradığı.',
    tip: 'Önceden 7 gündü, 15 güne çıkarıldı. Sınavlarda en çok düşülen çeldiricilerden biridir!'
  },
  {
    id: 'fc-4',
    category: 'vuk',
    title: 'İlanen Tebligat',
    badge: 'Tebligat Usulü',
    front: 'İlan yoluyla yapılan tebligatta tebliğ ne zaman yapılmış sayılır?',
    back: 'İlan tarihinden başlayarak 15 GÜN sonra tebliğ yapılmış sayılır (VUK Md. 106). İlan yazısı vergi dairesinde 1 ay süreyle asılı kalır.',
    tip: 'Yurt dışındakilere tebligat ilanında süre 1 aydır.'
  },
  {
    id: 'fc-5',
    category: 'vuk',
    title: 'Pişmanlık ve Islah (VUK 371)',
    badge: 'Özel Müessese',
    front: 'Pişmanlık dilekçesi verildikten sonra beyanname verme ve ödeme süresi kaç gündür?',
    back: 'Dilekçenin verildiği tarihten itibaren 15 GÜN içinde beyannamenin verilmesi ve tahakkuk eden verginin gecikme zammı oranındaki pişmanlık zammıyla birlikte ödenmesi şarttır.',
    tip: 'Sadece beyana dayanan vergilerde geçerlidir. Kaçakçılık suçları için de pişmanlık uygulanabilir!'
  },
  {
    id: 'fc-6',
    category: 'gvk',
    title: 'GMSİ Götürü Gider Usulü',
    badge: 'Gelir Vergisi',
    front: 'GMSİ mükellefleri hasılatlarından yüzde kaç götürü gider indirebilir ve kaç yıl bu usulden dönemezler?',
    back: 'İstisna sonrası hasılatın %15\'i götürü gider olarak indirilebilir.\nGötürü gider usulünü seçenler 2 YIL geçmedikçe bu usulden dönemezler (GVK Md. 74).',
    tip: 'Hakları kiraya verenler götürü gider usulünden yararlanamaz.'
  },
  {
    id: 'fc-7',
    category: 'gvk',
    title: 'Yıllık Beyanname & Taksitler',
    badge: 'Beyan & Ödeme',
    front: 'Yıllık Gelir Vergisi beyannamesi ne zaman verilir ve vergi kaç taksitte ödenir?',
    back: 'İzleyen yılın MART ayı sonuna kadar verilir.\n2 EŞİT TAKSİTTE ödenir:\n1. Taksit: Mart ayı sonuna kadar,\n2. Taksit: Temmuz ayı sonuna kadar (GVK Md. 92, 117).',
    tip: 'Basit usulde kazanç elde edenler için de beyan ve ödeme artık diğer mükelleflerle aynı tarihlere tabi olmuştur.'
  },
  {
    id: 'fc-8',
    category: 'kvk',
    title: 'Örtülü Sermaye Oranı',
    badge: 'Kurumlar Vergisi',
    front: 'Kurumların ilişkili kişilerden temin ettiği borçların örtülü sermaye sayılması için öz sermaye eşiği nedir?',
    back: 'Kurumun hesap dönemi başındaki ÖZ SERMAYESİNİN 3 KATINI aşan borçlanmalar örtülü sermaye sayılır (KVK Md. 12).',
    tip: 'Örtülü sermaye üzerinden ödenen faiz ve kur farkları kanunen kabul edilmeyen gider (KKEG) sayılır.'
  },
  {
    id: 'fc-9',
    category: 'dmk',
    title: '657 Disiplin Cezası Zamanaşımları',
    badge: 'Devlet Memurları',
    front: '657 sayılı DMK\'da disiplin cezalarında soruşturma ve ceza verme zamanaşımı süreleri nelerdir?',
    back: '• Soruşturmaya başlama: Öğrenildiği tarihten itibaren 1 ay (memurluktan çıkarma için 6 ay),\n• Karar verme (kesin zamanaşımı): Fiilin işlendiği tarihten itibaren 2 YIL içinde ceza verilmezse ceza yetkisi düşer (DMK Md. 127).',
    tip: '2 yıllık süre kesin süre olup uzatılamaz.'
  },
  {
    id: 'fc-10',
    category: 'kamu-maliyesi',
    title: 'Merkezi Yönetim Bütçe Cetvelleri',
    badge: '5018 Sayılı Kanun',
    front: '5018 sayılı Kanun cetvellerinde hangi bütçeler yer alır?',
    back: 'I Sayılı Cetvel: Genel Bütçeli İdareler (Bakanlıklar, GİB vb.)\nII Sayılı Cetvel: Özel Bütçeli İdareler (Üniversiteler, Karayolları vb.)\nIII Sayılı Cetvel: Düzenleyici ve Denetleyici Kurumlar (SPK, BDDK, RTÜK vb.)\nIV Sayılı Cetvel: Sosyal Güvenlik Kurumları (SGK, İŞKUR).',
    tip: 'Merkezi Yönetim Bütçesi I, II ve III sayılı cetvelleri kapsar; IV sayılı cetvel merkezi yönetim bütçesi dışındadır.'
  }
];
