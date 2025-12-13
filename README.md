# 🌾 Agri Connect - Sierra Leone agricultural Platform

**Agri Connect** (formerly Feed Salone) is a comprehensive agricultural platform designed to empower farmers in Sierra Leone with cutting-edge technology. It combines AI-powered tools, a multimodal chatbot, and essential resources to improve crop yield, disease management, and market access.

## 🚀 Key Features

### 🤖 AI-Powered Assistants
1.  **Crop Recommendation**: Personalized crop suggestions based on soil type, rainfall, and climate. 🌱
2.  **Disease Detection**: Instant plant disease diagnosis using image analysis from uploaded photos. 🐛📸
3.  **Yield Prediction**: Estimate harvest potential based on farming conditions. 📈
4.  **Fertilizer Guide**: Customized fertilizer schedules for optimal growth. 🌿

### 💬 Multimodal Chatbot (Agri Connect)
-   **Voice Input**: Speak your questions directly to the assistant. 🎤
-   **Text-to-Speech**: Listen to the answers in natural voice. 🔊
-   **Image Analysis**: Upload plant photos directly in chat for diagnosis. 🖼️
-   **Knowledge Base**: Expert advice on Sierra Leonean crops (Rice, Cassava, Cocoa, etc.). 🧠

### 🔐 User Roles & Dashboard
-   **Farmers**: Access tools, marketplace, and personalized dashboard.
-   **Buyers**: Browse produce and connect with farmers.
-   **Admin**: Comprehensive dashboard to manage users, content, and platform data.

### 🏛️ Government Portal
-   **Agri-Opp Portal**: Access to government schemes, subsidies, and opportunities.
-   **Ministry Integration**: Official resources from the Ministry of Agriculture.

## 🛠️ Technology Stack

-   **Frontend**: Next.js 14, React, Tailwind CSS, Framer Motion
-   **Icons**: Lucide React
-   **Backend**: Node.js Express Server (Custom API integration)
-   **AI Integration**: Custom logic for demonstration (simulating ML models)

## 🎨 Branding

The platform proudly wears the colors of Sierra Leone:
-   🟢 **Green** (#1EB53A): Agriculture & Natural Wealth
-   ⚪ **White** (#FFFFFF): Unity & Justice
-   🔵 **Blue** (#0072C6): The Natural Harbor

## 🚀 Getting Started

### Prerequisites
-   Node.js installed
-   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/MEDVONJOSON/FeedSalon-AgriConnect-.git
    cd FeedSalon-AgriConnect-
    ```

2.  **Install Dependencies:**
    ```bash
    # Install root/server dependencies
    npm install

    # Install client dependencies
    cd client
    npm install
    cd ..
    ```

### Running the Application

You need to run both the backend server and the frontend client.

1.  **Start the Backend Server (Term 1):**
    ```bash
    cd server
    npm run dev
    # Runs on http://localhost:5000
    ```

2.  **Start the Frontend Client (Term 2):**
    ```bash
    cd client
    npm run dev
    # Runs on http://localhost:3000
    ```

3.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
├── client/                 # Next.js Frontend Application
│   ├── app/                # App Router Pages & Layouts
│   ├── components/         # Reusable UI Components
│   └── public/             # Static Assets (Images, Icons)
├── server/                 # Node.js Express Backend
│   └── server.js           # API Endpoints (Chat, AI Services)
└── ...
```

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## 📄 License

[MIT License](LICENSE)
