# Hawah Musik 🎵

**Hawah Musik** is a feature-rich, modern music player application built with Next.js, React, and TypeScript. It provides an intuitive interface, robust player controls, user authentication, a customizable library, and more.

## Features

- **Dynamic Music Player:**

  - Play/pause, next/previous tracks, shuffle mode, and speed controls.
  - Displays song duration and allows manual seeking.
  - Responsive and modern UI built with TailwindCSS and PostCSS.

- **User Management:**

  - Account creation, sign-in, and sign-out.
  - Update user credentials and customize theme preferences.
  - Secure authentication flows with JSON Web Tokens (JWT).

- **Customizable Library:**

  - Create playlists, mark favorite songs, and filter by artist.
  - Auto-save frequently played tracks under “Most Played.”
  - Comprehensive search and sorting options.

- **Admin and Analytics Tools:**

  - Admin dashboard for user and content management.
  - Analytics panel with insights into popular songs and user trends.

- **Theming and Accessibility:**
  - Light and dark themes, with easy switching.
  - Keyboard navigation and screen reader-friendly components.

## Tech Stack

- **Frontend:**

  - [Next.js](https://nextjs.org/) for server-side rendering and routing.
  - [React](https://reactjs.org/) for building interactive UIs.
  - [TypeScript](https://www.typescriptlang.org/) for type-safe code.
  - [TailwindCSS](https://tailwindcss.com/) and PostCSS for styling.
  - [Apollo Client](https://www.apollographql.com/docs/react/) for GraphQL data fetching.

- **Backend:**

  - MongoDB with Mongoose for storing user, song, and playlist data.
  - GraphQL for API queries and mutations.
  - Docker for containerized deployments.
  - JWT for secure user authentication.

- **Testing and Development Tools:**
  - [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit tests.
  - [Playwright](https://playwright.dev/) for end-to-end tests.
  - [ESLint](https://eslint.org/) and Prettier for code quality and formatting.
  - [Storybook](https://storybook.js.org/) for UI component development.

## Project Structure
```
hawah-musik/
├── components/ # UI components
├── pages/ # Next.js pages
├── styles/ # Global and component styles
├── utils/ # Utilities and custom hooks
├── public/ # Public assets (images, icons)
├── tests/ # Unit and e2e test files
├── .prettierrc # Prettier configuration
├── tailwind.config.js # TailwindCSS configuration
├── tsconfig.json # TypeScript configuration
├── jest.config.js # Jest configuration
├── playwright.config.ts # Playwright configuration
└── Dockerfile # Docker configuration```

## Getting Started

1. **Install Dependencies:**

   ```bash
   npm install
   ```

2. **Run the Development Server:**

```bash
npm run dev
```

3. **Build and Start in Production Mode:**

```bash
npm run build
npm start
```

4. **Run Tests:**

```bash
npm run test
```

## Contributing

This project is a work in progress. Contributions are welcome!

- Fork the repository and create your branch.
- Submit a pull request once your feature is ready.

## License

[MIT](./LICENSE)

### Note: This README is a starting point and will be updated as new features are added.

## Contributors

**Frandy Slueue**

- Owner and Project Manager
- Lead Developer
- Designer and Product Visionary
- [LinkedIn](https://www.linkedin.com/in/frandyslueuewebdevitpro/)
- [GitHub](https://github.com/Frandy4ever)
