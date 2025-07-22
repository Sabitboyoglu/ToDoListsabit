# Nuxt Başlangıç Görevi

Bu görevde temel Nuxt kurulum adımlarını uygulayarak, başlangıç seviyesinde ve düzenli bir proje oluşturman bekleniyor. Kodunu temiz ve anlaşılır yazmaya dikkat et.

## Görevin

Herkesin todo listesi olan bir kullanıcı listesi uygulaması geliştirmek.

---

## 1. Hazırlık

* NuxtUI dökümanlarını incele, temel componentleri gözden geçir.
* İkonlarda NuxtUI'ın `<UIcon>` componentini projende kullanacaksın.
* Projen için bir Github reposu oluştur ve koduna erişmem için bana yetki ver.
* Yaptığın her geliştirmede, açıklayıcı commit mesajları kullan (örn. "proje oluşturuldu", "todolist tablosu eklendi").
* Gerekirse küçük bir demo proje açıp pratik yapabilirsin.

---

## 2. Kurulum

* Yeni bir Nuxt projesi oluştur.
* Projene **NuxtUI**, **Pinia**, **NuxtFonts** ve **Tailwind CSS** kütüphanelerini ekle, hepsinin çalıştığını kontrol et.
* Kod standartları için **ESLint** kullan, antfu konfigürasyonunu uygula.
  Detaylar: [https://github.com/antfu/eslint-config](https://github.com/antfu/eslint-config)

---

## 3. Proje Yapısı

* **layout**, **pages**, **utils** ve **components** klasörlerini doğru şekilde kullan.
* Tüm projede TypeScript kullan.
* useHead ile temel SEO ayarı ekle (mükemmel olmasına gerek yok).
* Siten en az 2 sayfadan oluşmalı, bunlardan biri parametreyle açılan bir sayfa olmalı.
* Sitede bir **header** (minimum başlık olacak) ve bir **footer** (adını yazman yeterli) bulunmalı.
* Aydınlık ve karanlık tema seçeneği sunulmalı.
* Tüm uygulaman **responsive** (mobil ve masaüstü uyumlu) olmalı.

---

## 4. İçerik

* JSONPlaceholder API’si ile kullanıcıları çek.
* Her kullanıcının kendilerine ait todoları olmalı ve bunlar üzerinde CRUD işlemleri yapılabilmeli.
* Kullanıcıların detay sayfası olmalı ve bu sayfada todoları da bulunmalı.
* Kullanıcı ve todo listelerinde **arama ve filtreleme** fonksiyonu ekle (arama inputu veya filtreleme menüsü olabilir).
* Todo silme veya ekleme işlemlerinde **toast bildirim** göster.

---

> Gereksiz dosya, component veya karmaşıklıktan kaçın. Görev bitince kodunu teslim etmeye hazır ol.

## Review

* header ve footer kullanılmamış. app in ismi headerda yazabilir ✅
* component dosya isimlerinde isim tekrarlaması mevcut. TodoForm ve TodoItem dosyası todo/form.vue ve todo/item.vue olarak kullanılmalı. ✅
* todolar sayfayı yenilediğimde kaybolmamalı ✅
* tema değiştirme seçeneğini layout üzerinde tanımlarsan her yerden ulaşılabilir olur ✅
* nuxtın otomatik importladığı çoğu şey elden tekrar importlanmış bunlar olmamalı. ❌
* projede kullanılmayan paketler mevcut autoprefixed, postcss veya eslint gibi  paketler halihazırda farklı paketler ile geliyor zaten. ❌
* çoğu sayfa eslint standartlarına uygun değil. ❌ (pnpm lint --fix komutu çalıştırılabilir)
* nuxt/ui componentlerini kullanarak kod yoğunluğunu azaltmaya ve zaman kazanmaya özen göster. ❌ (en önemli kısım burası)
* sayfalar arası route yaparken name parametresi kullanılmalı ❌
* seçili olan kullanıcıyı ve todoyu store üzerinde selected eki ile tutman daha verimli olacaktır. (mesela user store içerisinde: selectedUser değişkenini bekletmen ve tablodan bir etkileşim olduğunda seçilen kullanıcıyı buraya atman daha çok verim sağlar) ❌ (Düzeltmek sana kalmış şuanki haliyle de çalışır)
* defineAppConfig üzerinde primary, secondary ve neutral renkler tanımla ve bunları kullan
* kök dizininde bulunan users.jsona gerek yok
* bu projede tailwind kullanılıyor CSS kodları kullanılmamalı
