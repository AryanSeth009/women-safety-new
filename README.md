# Raksha - Women's Safety App

A comprehensive React Native application built with Expo that provides emergency assistance and safety features for women. The app includes location sharing, voice recording, image verification, and direct helpline connections.

## 🚀 Features

- **Emergency Process Flow**: Multi-step emergency assistance process
- **Location Services**: Share your current location with emergency contacts
- **Voice Recording**: Record voice messages for evidence or communication
- **Image Verification**: Capture and verify images during emergencies
- **Helpline Connection**: Direct connection to emergency helplines
- **User Authentication**: Secure user authentication with Supabase
- **Real-time Location Tracking**: GPS-based location services
- **Cross-platform Support**: Works on iOS, Android, and Web

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: React Navigation v7
- **Backend**: Supabase (Authentication & Database)
- **Maps**: React Native Maps
- **Camera**: Expo Camera
- **Audio**: Expo AV
- **Location**: Expo Location
- **Icons**: Lucide React Native
- **Language**: TypeScript

## 📱 Screenshots

The app includes:
- Home screen with emergency help button
- Multi-step emergency process flow
- Location selection and sharing
- Voice and image recording capabilities
- Helpline connection interface

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd women-safety-new
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
   EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Run on specific platforms**
   ```bash
   # iOS
   npm run ios
   
   # Android
   npm run android
   
   # Web
   npm run web
   ```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── steps/           # Emergency process step components
│   ├── Auth.tsx         # Authentication component
│   ├── EmergencyProcess.tsx
│   ├── Header.tsx
│   ├── Map.tsx
│   └── ProcessFlow.tsx
├── context/             # React Context providers
│   └── AuthContext.tsx  # Authentication context
├── lib/                 # Utility libraries
│   └── supabase.ts      # Supabase configuration
└── screens/             # Main app screens
    ├── AuthScreen.tsx
    ├── EmergencyProcessScreen.tsx
    └── HomeScreen.tsx
```

## 🔧 Configuration

### Supabase Setup

1. Create a new project on [Supabase](https://supabase.com)
2. Get your project URL and anon key
3. Add them to your `.env` file
4. Set up authentication providers in Supabase dashboard

### Permissions

The app requires the following permissions:
- **Location**: For GPS tracking and location sharing
- **Camera**: For image capture and verification
- **Microphone**: For voice recording
- **Storage**: For saving recordings and images

## 🚨 Emergency Process Flow

The app follows a 5-step emergency process:

1. **Location Selection**: Share current location
2. **Emergency Verification**: Complete emergency questionnaire
3. **Voice Recording**: Record voice message
4. **Image Verification**: Capture relevant images
5. **Helpline Connection**: Connect to emergency services

## 🔐 Security Features

- Secure authentication with Supabase
- Encrypted data transmission
- Privacy-focused design
- Secure storage of sensitive information

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## ⚠️ Disclaimer

This app is designed for emergency situations. In case of a real emergency, please contact local emergency services immediately. This app should be used as a supplementary safety tool, not as a replacement for professional emergency services.

## 🔄 Version History

- **v1.0.0**: Initial release with core emergency features

---

**Built with ❤️ for women's safety and empowerment**
