# marketplace

## Description

This is a NextJS project that allows users to create and sell products on the marketplace.

## Features

- User authentication using NextAuth.js
- User profile management
- Product creation and management
- Product listing and search
- Product sales and transactions
- Admin dashboard for managing products and users

## Installation

1. Clone the repository:

```bash
git clone https://github.com/jlerocher/marketplace.git
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add the following environment variables:

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/marketplace
DIRECT_URL=postgres://user:password@localhost:5432/marketplace
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=secret
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your fork.
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.