![image](https://github.com/user-attachments/assets/cf60f01c-7a9a-4aa0-8c87-59906bf46d5b)![image](https://github.com/user-attachments/assets/4b38c76d-0acb-49d3-972e-eae8f53e2ccd)![image](https://github.com/user-attachments/assets/86c5e850-63c0-46c9-9471-1ee1aac32c6f)![image](https://github.com/user-attachments/assets/340bb634-68d5-4b48-8a41-9a54f8c4e062)# RENT A CAR 🏎️

# GearShift - Rent-a-Car Web Application

**GearShift** — avtomobil icarəsi xidməti üçün hazırlanmış funksional və istifadəçi dostu veb tətbiqdir. Bu layihə vasitəsilə istifadəçilər onlayn şəkildə maşınları incələyə, ətraflı məlumat əldə edə, sifariş üçün sorğu göndərə və lazım gəldikdə sayt üzərindən qeydiyyatdan keçə və ya daxil ola bilərlər.

---

## ⚙️ İstifadə olunan Texnologiyalar

- **React.js** (əsas frontend kitabxanası)
- **React Router DOM** (səhifələrarası yönləndirmə)
- **CSS Modules / SCSS** (tərtibat üçün)
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
  ![image](https://github.com/user-attachments/assets/ae8471b4-18c1-4c53-8a03-56fae4d84515)
  ![image](https://github.com/user-attachments/assets/cc237a36-bb95-4f44-b37d-ed7e3afb3dbc)
  ![image](https://github.com/user-attachments/assets/bc2cd497-eef0-4887-82aa-21837ee3751c)
  ![image](https://github.com/user-attachments/assets/8f41e5e8-9014-4b20-a9d9-5368c6c34736)

- **`About`** – Şirkətin tarixi, təsisçi, inkişaf yolunu əhatə edən məlumatlar.
  ![image](https://github.com/user-attachments/assets/66516c70-c96d-4a56-a720-63e8d299c1a1)

  ![image](https://github.com/user-attachments/assets/227c6b4b-130b-4169-9c67-f83386de993f)


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
