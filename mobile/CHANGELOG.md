# Changelog

## [1.0.0] - Initial MVP Release

### Features Added

#### Authentication
- Login/Signup screens with role selection
- AsyncStorage-based authentication
- Auth context for global state management
- Protected routes with auth guards

#### Dashboard
- Personalized welcome screen
- Weather widget
- Quick stats display
- Quick action buttons
- Pull-to-refresh functionality

#### AI Chatbot
- Text-based conversations
- Image upload for disease detection
- Offline fallback responses
- Text-to-speech support
- Integration with backend API

#### Marketplace
- Product listings with filters
- Category selection
- Search functionality
- Product detail screen
- Contact seller/inquiry forms
- Pull-to-refresh

#### Disease Detection
- Camera integration
- Image picker from gallery
- Crop type selection
- Analysis results display
- Integration with backend API

#### Crop Recommendation
- Form inputs (soil type, rainfall, climate)
- Personalized crop suggestions
- Tips and guidance
- Integration with backend API

#### Weather Forecast
- Location-based weather
- Current conditions
- 7-day forecast
- Farming recommendations
- Location services integration

#### Farmer Connect
- Social feed
- Farmer directory
- Post interactions
- Location-based search

#### Profile
- User information display
- Quick actions
- Logout functionality

### Components Added

#### UI Components
- Button (primary, secondary, outline variants)
- Card
- Input
- TextArea
- Badge (multiple variants)
- Select (modal-based)
- Alert (multiple variants)
- SearchBar
- ImagePicker
- Skeleton (loading placeholder)
- EmptyState

#### Utility Components
- ErrorBoundary
- LoadingSpinner
- NetworkStatus

### Utilities Added

#### Hooks
- useDebounce
- useApi
- useNetworkStatus

#### Formatters
- Currency formatting
- Date formatting
- Time ago formatting
- Phone number formatting

#### Validators
- Email validation
- Phone validation
- Required field validation
- Length validations

### Technical Improvements

- TypeScript for type safety
- Expo Router for navigation
- Error boundaries for crash prevention
- Network status detection
- Offline fallback support
- Loading states throughout
- Pull-to-refresh on list screens
- Image caching and optimization
- Form validation
- API client with interceptors

### Backend Integration

- Updated CORS to allow mobile app requests
- All existing API endpoints compatible
- Base64 image encoding for uploads
- Error handling and retry logic

### Documentation

- README.md - Mobile app overview
- MOBILE_SETUP.md - Setup instructions
- EAS_BUILD_GUIDE.md - Production build guide
- CHANGELOG.md - This file
