# 🎬 Movie Favorites App

A modern, responsive React application for discovering and managing your favorite movies. Built with React, Vite, and The Movie Database (TMDb) API.

## ✨ Features

- **🔍 Movie Search**: Search for movies using The Movie Database API
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **⭐ Favorites System**: Add and remove movies from your personal favorites list
- **🎨 Modern UI**: Clean, intuitive interface with smooth animations
- **🚀 Fast Performance**: Built with Vite for lightning-fast development and builds
- **📊 Popular Movies**: Browse trending and popular movies
- **💾 Local Storage**: Favorites persist between browser sessions

## 🛠️ Technologies Used

- **Frontend**: React 19.1.0
- **Routing**: React Router DOM 7.6.2
- **Build Tool**: Vite 6.3.5
- **Styling**: Custom CSS with modern layouts
- **API**: The Movie Database (TMDb) API
- **State Management**: React Context API
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/JesusPachdez/movie-tutorial-project.git
   cd movie-tutorial-project
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📁 Project Structure

```
movie-tutorial-project/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, etc.
│   ├── components/        # Reusable React components
│   │   ├── MovieCard.jsx  # Individual movie display component
│   │   └── NavBar.jsx     # Navigation component
│   ├── contexts/          # React Context providers
│   │   └── MovieContext.jsx
│   ├── hooks/             # Custom React hooks
│   │   └── useMovieContext.js
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Main movie browsing page
│   │   └── Favorites.jsx  # User favorites page
│   ├── services/          # API services
│   │   └── api.js         # TMDb API integration
│   ├── css/               # Stylesheet files
│   ├── App.jsx            # Main App component
│   └── main.jsx           # Application entry point
├── package.json
└── README.md
```

## 🎯 Usage

1. **Browse Movies**: The home page displays popular movies by default
2. **Search**: Use the search bar to find specific movies
3. **Add to Favorites**: Click the heart icon on any movie card to add it to favorites
4. **View Favorites**: Navigate to the Favorites page to see your saved movies
5. **Remove Favorites**: Click the heart icon again to remove movies from favorites

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🌟 Key Features Explained

### Movie Search

- Real-time search functionality using TMDb API
- Displays movie posters, titles, and release dates
- Handles loading states and error messages

### Favorites Management

- Add/remove movies from favorites with a single click
- Favorites persist using browser localStorage
- Dedicated favorites page for easy access

### Responsive Design

- Mobile-first approach
- Grid layout that adapts to different screen sizes
- Touch-friendly interface for mobile devices

## 🔑 API Integration

This project uses [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) to fetch movie data. The API provides:

- Popular movies endpoint
- Movie search functionality
- High-quality movie posters and metadata

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] Movie details modal with trailers and cast information
- [ ] User ratings and reviews
- [ ] Watchlist functionality
- [ ] Dark/light theme toggle
- [ ] Social sharing features
- [ ] Movie recommendations based on favorites

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Jesus Pacheco**

- GitHub: [@JesusPachdez](https://github.com/JesusPachdez)

## 🙏 Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing the movie data API
- [React](https://reactjs.org/) for the amazing frontend framework
- [Vite](https://vitejs.dev/) for the fast build tool

---

⭐ If you found this project helpful, please give it a star on GitHub!
