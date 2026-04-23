# 旅行札記 Travel Box

**A travel blog & e-commerce front-end practice project built with Vue 3.**

🔗 Live Demo → https://skyun62.github.io/travel_box/

---

## 專案介紹

這是一個以「旅行」為主題的前端練習專案，結合了部落格瀏覽、旅遊回憶展示與購物流程，從一份靜態 HTML / Bootstrap 原型，逐步重構為 Vue 3 元件化架構。

整個開發過程涵蓋：

- 將原始 HTML + CSS 轉換成 Vue SFC（Single File Component）
- 抽取共用邏輯為可重複使用的 components
- 使用 Vue Router 建立多頁面 SPA 流程（購物車四步驟）
- 以 `localStorage` 實作跨頁狀態管理

---

## 技術棧

| 類別 | 使用技術 |
|------|----------|
| 框架 | Vue 3 (`<script setup>`) |
| 路由 | Vue Router 4 |
| CSS 框架 | Bootstrap 5 |
| 圖示 | Bootstrap Icons、Font Awesome 7 |
| 輪播 | Swiper.js 12 |
| 建置工具 | Vite |
| 部署 | GitHub Pages |

---

## 功能說明

### 首頁（HomeView）

| 區塊 | 說明 |
|------|------|
| Carousel 輪播 | Bootstrap Carousel，三張海景圖搭配文字 CTA |
| 角色圓圈 | `Role.vue`，三欄特色介紹 |
| 拍立得相簿 | Swiper.js 滑動，每頁 2–3 張拍立得風格照片，支援 ❤️ 愛心互動 |
| 購物卡片列表 | `ShoppingCard.vue`，加入購物車後自動跳轉至購物車 |
| 圖片馬賽克 | `PhotoMosaic.vue`，左右兩欄的不對稱網格圖片排列 |
| 資料表格 | `DataTable.vue`，含 radio 選取與按鈕 |
| 圖文交錯區塊 | `TextImageBlock.vue`，支援 `:reverse` prop 切換左右版型 |
| Google Maps 聯絡 | `MapContact.vue`，地圖 iframe + Feedback 表單 |
| Blog 卡片 | `BlogCard.vue`，四欄文章卡片，hover 放大效果 |
| 頁籤切換 | `TabMenu.vue`，NEWS / HOT / 推薦三分頁，搭配 fadeIn 動畫 |

### 購物車流程（4 步驟 SPA）

```
確認購物車 → 付款與運送 → 填寫資料 → 完成訂單
 /cart/step1    /cart/step2    /cart/step3    /cart/step4
```

| 步驟 | 主要功能 |
|------|----------|
| Step 1 | 顯示購物清單、調整數量（+ / −）、刪除單品、清空購物車、計算總金額 |
| Step 2 | 選擇付款方式（宅配 / 超商 / 自取）與運送方式，儲存至 `localStorage` |
| Step 3 | 填寫收件人姓名、電話、Email、地址，儲存至 `localStorage` |
| Step 4 | 顯示完整訂單明細與收件資料確認 |

---

## 元件架構

```
src/
├── views/
│   ├── HomeView.vue
│   ├── CartStep1.vue
│   ├── CartStep2.vue
│   ├── CartStep3.vue
│   └── CartStep4.vue
│
└── components/
    ├── 共用
    │   ├── CartProgress.vue   # 購物車步驟進度條（1–4）
    │   └── CartSummary.vue    # 金額摘要（數量、小計、運費、總計）
    │
    ├── 首頁區塊
    │   ├── Role.vue           # 特色圓圈卡片
    │   ├── LikeButton.vue     # 拍立得愛心按鈕
    │   ├── PhotoMosaic.vue    # 不對稱圖片馬賽克
    │   ├── DataTable.vue      # 資料表格 + radio
    │   ├── TextImageBlock.vue # 圖文交錯區塊（支援 reverse）
    │   ├── MapContact.vue     # 地圖 + 聯絡表單
    │   ├── BlogCard.vue       # 文章卡片
    │   ├── ShoppingCard.vue   # 購物商品卡片
    │   └── TabMenu.vue        # 頁籤選單
```

---

## 資料流（localStorage）

```
首頁點擊「Add to cart」
        ↓
  cart（陣列）寫入 localStorage
        ↓
  自動導向 /cart/step1
        ↓
Step 2 儲存 orderInfo.payMethod / deliveryMethod
        ↓
Step 3 儲存 orderInfo.receiver（姓名、電話、地址…）
        ↓
Step 4 讀取 cart + orderInfo 顯示完整訂單
```

---

## 本地啟動

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建置正式版
npm run build
```

---

## 設計說明

本專案由 UI/UX 設計師主導開發，核心設計決策如下：

- **拍立得風格**：使用 `aspect-ratio: 4/5`、底部空白與 Courier New 字型還原膠卷感，hover 時以輕微旋轉 + 縮放模擬拿起的觸感
- **購物車配色**：主色 `#3a8fb7`（天空藍）呼應旅行主題，進度條與按鈕統一色調
- **文字主色**：`#ba9393`（玫瑰粉）貫穿 caption、連結與頁籤 accent，對應旅遊日記的溫暖質感
- **版型節奏**：圖文交錯的 `TextImageBlock` 交替左右對齊，避免單調的垂直堆疊

---

## 作者

**skyun62** — UI/UX Designer & Front-end Learner
git add README.md
git commit
git push
