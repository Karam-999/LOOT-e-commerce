# 🛍️ LOOT - Premium E-Commerce Platform

A modern, full-featured e-commerce application built with React, Vite, and Tailwind CSS v4. LOOT provides a seamless shopping experience for customers and a powerful dashboard for sellers.

## ✨ Features

### Customer Portal
- 🏪 **Product Browsing** - Browse products with category filters and search functionality
- 🔍 **Product Details** - Amazon/Flipkart-style detailed product pages with image galleries (up to 4 images)
- 🛒 **Shopping Cart** - Add, remove, and update product quantities
- 💳 **Multiple Payment Options** - UPI, Credit/Debit Card, Net Banking, and Cash on Delivery
- 📍 **Store Locator** - Google Maps integration showing physical store location in Mumbai
- 📱 **Responsive Design** - Mobile-friendly interface with hamburger menu
- 💾 **Data Persistence** - Cart and products saved using localStorage
- 📄 **Legal Pages** - Terms & Conditions and Privacy Policy

### Seller Portal
- 🔐 **Secure Authentication** - Login system for seller access
- 📊 **Analytics Dashboard** - Overview of total products, revenue, and orders
- ➕ **Product Management** - Add, edit, and delete products
- 🖼️ **Multiple Image Upload** - Upload up to 4 images per product from local PC
- 💾 **Persistent Storage** - Products saved across sessions

### Contact & Support
- 📧 **Owner Contact** - Email, phone, and WhatsApp integration
- 📍 **Physical Address** - Phoenix Marketcity, Mumbai
- 💬 **Contact Form** - Direct messaging to owner

## 🚀 Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.17 with PostCSS
- **Icons**: Lucide React
- **Storage**: Browser localStorage API
- **Routing**: Simple pathname-based routing

## 📦 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd loot-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Install Lucide React icons**
```bash
npm install lucide-react
```

4. **Start the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🗂️ Project Structure

```
loot-app/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── CategoryFilters.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Contact.jsx
│   │   ├── StoreLocator.jsx
│   │   ├── Footer.jsx
│   │   ├── Terms.jsx
│   │   ├── Privacy.jsx
│   │   └── SellerLogin.jsx
│   ├── App.jsx             # Main customer app
│   ├── SellerDashboard.jsx # Seller portal
│   ├── main.jsx            # Entry point with routing
│   ├── App.css
│   └── index.css           # Tailwind imports
├── index.html
├── package.json
├── vite.config.js
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

## 🔐 Seller Access

To access the seller dashboard:
1. Navigate to `/seller` route (e.g., `http://localhost:5173/seller`)
2. Use these credentials:
   - **Username**: `seller`
   - **Password**: `seller123`

## 💡 Usage Guide

### For Customers
1. Browse products on the homepage
2. Use category filters to find specific items
3. Click on a product to view detailed information
4. Add products to cart using "Add to Cart" or "Buy Now"
5. Click the cart icon to review your items
6. Proceed to checkout and select your payment method
7. Complete your order

### For Sellers
1. Access `/seller` route and login
2. View dashboard analytics (products, revenue, orders)
3. Navigate to "Products" tab to manage inventory
4. Click "Add Product" to create new listings
5. Upload up to 4 images per product from your PC
6. Edit or delete existing products as needed

## 🌍 Store Location

**Physical Store**: Shop No. 12, Phoenix Marketcity, Kurla West, Mumbai - 400070

View the interactive map on the Store Locator page.

## 👥 Credits

**Developer**: Karam Sayed
- 🔗 GitHub: [@Karam-999](https://github.com/Karam-999)

## 📝 Key Features Implementation

### LocalStorage Persistence
Products and cart items are automatically saved to browser localStorage, ensuring data persists across page refreshes.

### Image Upload System
Sellers can upload multiple images (up to 4) directly from their PC. Images are converted to base64 format for storage.

### Payment Gateway
Integrated checkout supports:
- **UPI** - Enter UPI ID
- **Card Payment** - Card number, expiry, CVV
- **Net Banking** - Select from popular banks
- **Cash on Delivery** - Order tracking number provided

### Responsive Design
Fully responsive layout with:
- Mobile hamburger menu
- Touch-friendly interfaces
- Optimized for all screen sizes

## 🔧 Configuration

### Tailwind CSS v4
This project uses Tailwind CSS v4 with the new PostCSS plugin architecture:

**postcss.config.js**:
```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {}
  }
}
```

**index.css**:
```css
@import "tailwindcss";
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Made with ❤️ by [Karam Sayed](https://github.com/Karam-999) | © 2025 LOOT - All Rights Reserved
