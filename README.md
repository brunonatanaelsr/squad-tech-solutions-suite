
# Squad Soluções - Tecnologia e Consultoria

Este é o site da Squad Soluções, uma empresa de tecnologia e consultoria.

## Desenvolvimento Local

O único requisito é ter Node.js & npm instalado - [instalar com nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Siga estes passos:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## API Config & Auth Debug

- Set your backend URL in an env file:
  - Copy `.env.example` to `.env.local` and set `VITE_API_URL` (defaults to `http://localhost:3001`).
- A minimal debug page is available at `/#/auth` (HashRouter) to test login requests:
  - It posts to `POST ${VITE_API_URL}/auth/login` with `credentials: 'include'`.
  - Use it to validate CORS, cookies, and status codes (expects `401` for invalid credentials).

### Terminal test

- Quick test script: `scripts/curl-login.sh [API_URL] [EMAIL] [PASSWORD]`
  - Example: `scripts/curl-login.sh http://localhost:3001 bruno@move.com 15002031`

