# Web3 Crowdfunding Platform

A decentralized crowdfunding platform built on Ethereum blockchain that enables transparent and secure fundraising campaigns. This application combines the power of Web3 technology with a modern, user-friendly interface to facilitate trustless donations and campaign management.

## 🌟 Features

### For Users
- **Browse Campaigns**: Explore various crowdfunding campaigns across multiple categories (Education, Medical, Community, Animals, Environment, Children, and Others)
- **Secure Donations**: Make donations using cryptocurrency through MetaMask wallet integration
- **Campaign Details**: View detailed information about each campaign including targets, deadlines, and contributor statistics
- **User Dashboard**: Track your donations and manage your profile
- **Refund System**: Request refunds for campaigns that don't meet their goals or are rejected

### For Campaign Creators
- **Create Campaigns**: Register new crowdfunding campaigns with customizable targets and deadlines
- **Edit Campaigns**: Modify campaign details before approval
- **Track Progress**: Monitor real-time donation amounts and contributor counts
- **Receive Funds**: Automatic fund transfer upon successful campaign completion

### For Administrators
- **Campaign Approval**: Review and approve/reject submitted campaigns
- **Fund Management**: Oversee all active campaigns and manage fund distributions
- **Voting System**: Enable community voting for campaign legitimacy
- **Admin Dashboard**: Comprehensive view of all platform activities

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) 12.3.0 - React framework for production
- **Blockchain Integration**: [Web3.js](https://web3js.readthedocs.io/) 1.8.1 - Ethereum JavaScript API
- **UI Components**: [Material-UI (MUI)](https://mui.com/) 5.10.4 - React component library
- **Wallet Connection**: MetaMask - Ethereum wallet for Web3 interactions
- **Styling**: CSS Modules and Emotion (MUI's styling solution)
- **Data Display**: MUI X-Data-Grid for advanced table functionality
- **Carousel**: Swiper 8.4.4 for responsive sliders
- **Date Handling**: Moment.js for timestamp formatting

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MetaMask](https://metamask.io/) browser extension
- An Ethereum wallet with test ETH (for development)

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/A-singh07/web3-crowdfunding.git
cd web3-crowdfunding
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Configure the smart contract:
   - Update the `CONTRACT_ADDRESS` in `constants/index.js` with your deployed contract address
   - Update the `ADMIN_ADDRESS` with your administrator wallet address
   - **Important**: For production, use environment variables to store sensitive addresses and never commit private keys to version control

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### MetaMask Setup

1. Install the [MetaMask browser extension](https://metamask.io/download/)
2. Create or import an Ethereum wallet
3. Connect to the appropriate network (e.g., Ethereum Mainnet, Sepolia testnet, or local testnet)
4. Ensure you have sufficient ETH for transactions

## 📁 Project Structure

```
web3-crowdfunding/
├── components/          # Reusable React components
│   ├── authModals/     # Login and signup modals
│   ├── categories/     # Category display components
│   ├── confirmModal/   # Donation and approval modals
│   ├── customInput/    # Custom form inputs
│   ├── herosection/    # Hero sections for pages
│   ├── registerFundLayout/  # Fund registration forms
│   ├── section/        # Various page sections
│   └── testimonySection/    # Testimonial components
├── constants/          # Smart contract ABI and addresses
├── context/            # React context providers
│   ├── AllContext.js   # Global state management
│   └── Web3Context.js  # Web3 and wallet connection
├── data/               # Mock data and content
├── pages/              # Next.js pages and routes
│   ├── admin/          # Admin dashboard pages
│   ├── api/            # API routes
│   ├── funds/          # Campaign listing and details
│   ├── user/           # User dashboard pages
│   ├── about.js        # About page
│   ├── contactus.js    # Contact page
│   ├── index.js        # Home page
│   └── registerfund.js # Campaign registration page
├── public/             # Static assets
├── styles/             # Global styles and CSS modules
└── assets/             # Images and SVG files
```

## 🔐 Smart Contract Integration

The platform interacts with an Ethereum smart contract that handles:

- User and admin authentication
- Campaign creation and management
- Donation processing
- Voting mechanisms
- Fund transfers and refunds
- Campaign status tracking

Key contract functions include:
- `register()` / `adminRegister()` - User/admin registration
- `login()` / `adminLogin()` - Authentication
- `createCrowdFunding()` - Create new campaigns
- `donate()` - Make donations to campaigns
- `transferAmount()` - Transfer funds to campaign recipients
- `refund()` - Process refunds for failed campaigns

## 🎨 Available Pages

- `/` - Home page with featured campaigns
- `/about` - Information about the platform
- `/funds` - Browse all campaigns
- `/funds/[id]` - Individual campaign details
- `/registerfund` - Create a new campaign
- `/user` - User dashboard
- `/user/funds` - User's campaigns
- `/admin` - Admin dashboard
- `/admin/funds` - Campaign approval management
- `/contactus` - Contact information

## 🧪 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint for code quality
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is available for educational and personal use.

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Web3.js Documentation](https://web3js.readthedocs.io/)
- [Material-UI Documentation](https://mui.com/material-ui/getting-started/overview/)
- [MetaMask Documentation](https://docs.metamask.io/)
- [Ethereum Development](https://ethereum.org/en/developers/)

## 📞 Support

For support and queries, please visit the [Contact Us](/contactus) page or open an issue in the repository.
