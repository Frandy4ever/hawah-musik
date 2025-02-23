hawah-musik/
├── src/
│   ├── app/                             # Next.js App Router (replaces traditional pages directory)
│   │   ├── admin/                       # Admin section for admin-related pages
│   │   │   └── page.tsx                 # Admin dashboard page
│   │   ├── auth/                        # Authentication pages
│   │   │   └── page.tsx                 # User sign-in and sign-out page
│   │   ├── library/                     # Library-related pages
│   │   │   └── page.tsx                 # Main library view for playlists, favorites, most played
│   │   ├── settings/                    # User settings pages
│   │   │   └── page.tsx                 # Settings page for updating username, password, and theme
│   │   ├── layout.tsx                   # Shared layout component for all pages
│   │   ├── page.tsx                     # Home page of the application
│   │   ├── api/                         # API endpoints
│   │       ├── admin.ts                 # Admin-related API endpoints
│   │       ├── auth.ts                  # Authentication API endpoints
│   │       ├── library.ts               # Library management API endpoints
│   │       ├── settings.ts              # User settings API endpoints
│   │       ├── songs.ts                 # Song data API endpoints
│   ├── components/                      # Reusable UI components
│   │   ├── AnalyticsDashboard.tsx       # Admin analytics and trends visualization
│   │   ├── AuthForm.tsx                 # Authentication form for user login and registration
│   │   ├── CoverArt.tsx                 # Displays album art and overlays lyrics
│   │   ├── GradientBorder.tsx           # Adds random gradient borders to cover art
│   │   ├── PlayerControls.tsx           # Music player controls (play, pause, next, shuffle, speed)
│   │   ├── Playlist.tsx                 # List of songs in a playlist
│   │   ├── SettingsForm.tsx             # Form for updating user credentials and theme options
│   │   ├── SongDetails.tsx              # Displays currently playing song details
│   │   ├── VolumeControls.tsx           # Volume slider and mute button
│   │   ├── Admin/                       # Admin-related components
│   │   │   ├── AdminPanel.tsx           # Admin control panel UI
│   │   │   ├── UserManagement.tsx       # Component to manage user accounts
│   │   │   ├── AnalyticsDashboard.tsx   # Admin analytics UI component
│   │   ├── Library/                     # Library-related components
│   │   │   ├── ArtistFilter.tsx         # Filter library songs by artist
│   │   │   ├── CustomPlaylist.tsx       # Component for creating custom playlists
│   │   │   ├── FavoriteSongs.tsx        # Displays user's favorite songs
│   │   │   ├── LibrarySection.tsx       # Main library section component
│   │   │   ├── MostPlayed.tsx           # Displays the user's most played songs
│   │   ├── UI/                          # Shared UI elements
│   │       ├── Button.tsx               # Reusable button component
│   │       ├── Input.tsx                # Reusable input field component
│   │       ├── Modal.tsx                # Reusable modal component
│   ├── public/                          # Static assets served as-is
│   │   ├── cover-placeholder.jpg        # Default cover art image
│   ├── styles/                          # Styling files
│   │   ├── globals.css                  # Global CSS imported in the layout
│   │   ├── components/                  # Styles scoped to specific components
│   │   ├── themes/                      # Theme-related CSS files
│   │       ├── light.css                # Styles for the light theme
│   │       ├── dark.css                 # Styles for the dark theme
│   ├── utils/                           # Utility functions and helper files
│       ├── admin-utils.ts               # Helper functions for admin operations
│       ├── analytics-utils.ts           # Functions for generating analytics and trends
│       ├── auth.ts                      # Authentication helpers and token management
│       ├── graphql-client.ts            # GraphQL client configuration
│       ├── library-utils.ts             # Functions for handling library playlists, favorites, etc.
│       ├── localization-utils.ts        # Helpers for handling localization and translations
│       ├── settings-utils.ts            # Helpers for updating user settings
│       ├── test-utils.ts                # Shared helpers for writing tests
│       ├── hooks/                       # Custom React hooks
│           ├── useAuth.ts               # Custom hook for managing authentication state
│           ├── useTheme.ts              # Custom hook for managing theme state
│   ├── tests/                           # Test files and configurations
├── .gitignore                           # Files and directories to exclude from version control
├── .prettierrc                          # Prettier configuration for consistent code formatting
├── AUTHORS                              # List of contributors to the project
├── Dockerfile                           # Instructions for containerizing the application
├── eslint.config.mjs                    # ESLint configuration for linting code
├── jest.config.js                       # Jest configuration for unit testing
├── jest.setup.js                        # Setup file for Jest (e.g., extending matchers)
├── LICENSE                              # License for the project
├── next-env.d.ts                        # TypeScript declarations for Next.js
├── next.config.ts                       # Next.js configuration options
├── package-lock.json                    # Exact versions of installed dependencies
├── package.json                         # Project dependencies and scripts
├── playwright.config.ts                 # Playwright configuration for end-to-end tests
├── postcss.config.mjs                   # PostCSS configuration for CSS processing
├── project-structure.md                 # Document outlining the project’s file structure
├── README.md                            # Main project README with instructions and info
├── tailwind.config.ts                   # TailwindCSS configuration file
├── tsconfig.json                        # TypeScript compiler options
