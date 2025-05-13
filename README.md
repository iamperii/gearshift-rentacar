# RENT A CAR 🏎️

# GearShift - Rent-a-Car Web Application

**GearShift** — avtomobil icarəsi xidməti üçün hazırlanmış funksional və istifadəçi dostu veb tətbiqdir. Bu layihə vasitəsilə istifadəçilər onlayn şəkildə maşınları incələyə, ətraflı məlumat əldə edə, sifariş üçün sorğu göndərə və lazım gəldikdə sayt üzərindən qeydiyyatdan keçə və ya daxil ola bilərlər.

---

## ⚙️ İstifadə olunan Texnologiyalar

- **React.js** (əsas frontend kitabxanası)
- **React Router DOM** (səhifələrarası yönləndirmə)
- **CSS Modules / SCSS** (tərtibat üçün)
- **Bootstrap / Tailwind CSS** *(əgər istifadə olunubsa, əlavə et)*
- **Formik + Yup** (form validasiyası üçün – əgər istifadə olunubsa)
- **LocalStorage / Context API** (istifadəçi sessiyası üçün – əgər istifadə olunubsa)

---

## 🎨 Rəng Palitrası

Saytın vizual tərtibatında aşağıdakı rənglərdən istifadə olunub:
- `#ff7326` – əsas vurğulayıcı rəng
- `whitesmoke` – ümumi fon
- `#1a1a1a` – mətn və dark bölgələr üçün
- `white` – komponent fonları

---

## 🗂️ Saytın Struktur və Səhifələri

Sayt aşağıdakı əsas komponentlər və səhifələrdən ibarətdir:

- **`Home`** – Giriş səhifəsi, kateqoriyalar və vitrin bölmələri.
- **`About`** – Şirkətin tarixi, təsisçi, inkişaf yolunu əhatə edən məlumatlar.
- **`Our Fleet`** – Mövcud avtomobillər buradan incələnə bilər.
- **`Car Details`** – Avtomobil haqqında daha ətraflı məlumat və “Submit Enquiry” formu.
- **`Login / Signup`** – İstifadəçi daxilolma və qeydiyyat formaları.
- **`Contact Us`** – İstifadəçi rəy və sualları üçün əlaqə formu.

> 🔐 **Submit Enquiry** funksiyası yalnız qeydiyyatdan keçmiş istifadəçilər üçün aktivdir. Əgər istifadəçi daxil olmayıbsa, form passiv olur.

---

## 📌 Xüsusiyyətlər

- **SPA (Single Page Application)** arxitekturası
- **React Router ilə naviqasiya**
- **İstifadəçi yönümlü (user-friendly) dizayn və interfeys**
- **Dinamik kontentlə işləmək üçün komponent əsaslı struktur**
- **Form validasiyası və şərti renderlər**
- **Responsive dizayn (fərqli ekran ölçülərinə uyğun)**

---

## 📦 Quraşdırma və İşlədilməsi

```bash
# 1. Repozitoriyanı klonlayın
git clone https://github.com/your-username/gearshift-rentacar.git

# 2. Layihə qovluğuna daxil olun
cd gearshift-rentacar

# 3. Lazımi paketləri yükləyin
npm install

# 4. Layihəni lokal serverdə işə salın
npm run dev
