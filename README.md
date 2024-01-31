# Meetup App using Next.js

👋 Welcome to the Meetup App! This tech-savvy application is crafted with Next.js, showcasing server-side rendering, dynamic routing, and the prowess of `getStaticProps` for optimal performance. MongoDB takes the spotlight as the database of choice to store and manage the meetup data.

## 🚀 Features

- **Dynamic Routing:** Meetup pages dynamically generated based on MongoDB data.
- **Server-side Rendering (SSR):** Harnessing SSR for enhanced performance and SEO.
- **getStaticProps:** Performance optimization through pre-rendering at build time.
- **MongoDB Integration:** Storing and managing meetup data in MongoDB.
- **Create and View Meetups:** Users can add new meetups and explore existing ones.
- **Responsive Design:** Ensuring a seamless experience across devices.

## 🛠️ Getting Started

### Prerequisites

- Node.js installed.
- MongoDB database set up.

# Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rishii-27/NextJs-Meetups.git

2. **Navigate to the project directory:**

    ```bash
    cd NextJs-Meetups
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Create a `.env.local` file in the root directory with environment variables:**

    ```env
    MONGODB_URI=your-mongodb-uri
    NEXT_PUBLIC_API_URL=http://localhost:3000/api
    ```

5. **Start the development server:**

    ```bash
    npm run dev
    ```

6. **Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the app in action.**
