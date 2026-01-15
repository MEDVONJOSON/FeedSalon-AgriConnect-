# Mobile App Testing Checklist

## Pre-Testing Setup

- [ ] Install dependencies: `npm install`
- [ ] Set up environment variables: Create `.env` file with `EXPO_PUBLIC_API_URL`
- [ ] Ensure backend is running and accessible
- [ ] Have test devices/simulators ready

## Manual Testing Checklist

### 1. Authentication Flow
- [ ] Login screen displays correctly
- [ ] Can select role (Farmer/Buyer/Admin)
- [ ] Can enter email and password
- [ ] Login button works
- [ ] Navigation to dashboard after login
- [ ] Signup screen displays correctly
- [ ] Can fill signup form
- [ ] Signup button works
- [ ] Navigation between login/signup works
- [ ] Logout works and redirects to login

### 2. Dashboard Screen
- [ ] User name displays correctly
- [ ] Role badge shows
- [ ] Weather widget displays
- [ ] Quick stats show (4 cards)
- [ ] Quick action buttons work
- [ ] Navigation to features works
- [ ] Pull-to-refresh works
- [ ] Farm information displays

### 3. Marketplace Screen
- [ ] Products list loads
- [ ] Search bar works
- [ ] Category filters work
- [ ] Can scroll through products
- [ ] "View Details" button navigates
- [ ] Pull-to-refresh works
- [ ] Empty state shows when no products
- [ ] Product detail screen displays
- [ ] Seller information shows
- [ ] Contact seller modal opens
- [ ] Inquiry form submits

### 4. AI Chat Screen
- [ ] Initial message displays
- [ ] Can type message
- [ ] Send button works
- [ ] Messages display correctly
- [ ] Bot responses appear
- [ ] Image picker button works
- [ ] Camera permission requested
- [ ] Gallery permission requested
- [ ] Can upload image
- [ ] Image displays in chat
- [ ] Text-to-speech works (if enabled)
- [ ] Offline fallback works

### 5. Disease Detection Screen
- [ ] Crop type selection works
- [ ] Can take photo with camera
- [ ] Can pick from gallery
- [ ] Image preview shows
- [ ] Can remove image
- [ ] Analyze button works
- [ ] Results display correctly
- [ ] Symptoms list shows
- [ ] Treatment shows
- [ ] Prevention tips show

### 6. Crop Recommendation Screen
- [ ] Soil type selection works
- [ ] Rainfall input works
- [ ] Climate selection works
- [ ] Location input works (optional)
- [ ] Get Recommendations button works
- [ ] Recommendations display
- [ ] Tips show
- [ ] Form validation works

### 7. Weather Screen
- [ ] Location permission requested
- [ ] Current weather displays
- [ ] Temperature shows
- [ ] Condition shows
- [ ] Humidity shows
- [ ] Wind speed shows
- [ ] Forecast displays
- [ ] Farming recommendations show

### 8. Farmer Connect Screen
- [ ] Stats display correctly
- [ ] Search form works
- [ ] Location input works
- [ ] Crop interest filter works
- [ ] Posts display
- [ ] Post interactions work (likes, comments)
- [ ] Can scroll through posts

### 9. Profile Screen
- [ ] User info displays
- [ ] Avatar shows
- [ ] Name shows
- [ ] Email shows
- [ ] Phone shows
- [ ] Location shows
- [ ] Quick actions navigate
- [ ] Logout works

### 10. Navigation
- [ ] Tab bar displays correctly
- [ ] Can switch between tabs
- [ ] Tab icons show
- [ ] Active tab highlighted
- [ ] Back navigation works
- [ ] Modal screens open correctly
- [ ] Stack navigation works

### 11. Network & Offline
- [ ] Network status indicator shows when offline
- [ ] App works offline (with fallbacks)
- [ ] API calls handle errors gracefully
- [ ] Offline messages display

### 12. Permissions
- [ ] Camera permission requested
- [ ] Gallery permission requested
- [ ] Location permission requested
- [ ] Permission denied handling works
- [ ] Permission granted works

### 13. Error Handling
- [ ] API errors handled gracefully
- [ ] Network errors show messages
- [ ] Form validation errors show
- [ ] Error boundary catches crashes
- [ ] Loading states show

### 14. UI/UX
- [ ] Colors match brand (Green #1EB53A, Blue #0072C6)
- [ ] Text is readable
- [ ] Buttons are tappable
- [ ] Forms are usable
- [ ] Images load correctly
- [ ] Animations smooth
- [ ] No layout issues
- [ ] Responsive on different screen sizes

## Device-Specific Testing

### iOS
- [ ] Test on iOS Simulator
- [ ] Test on physical iPhone
- [ ] Test on iPad (if supported)
- [ ] Check iOS-specific permissions
- [ ] Test iOS navigation gestures

### Android
- [ ] Test on Android Emulator
- [ ] Test on physical Android device
- [ ] Check Android-specific permissions
- [ ] Test Android back button
- [ ] Test on different Android versions

## Performance Testing

- [ ] App starts quickly
- [ ] Screens load fast
- [ ] Images load efficiently
- [ ] No memory leaks
- [ ] Smooth scrolling
- [ ] No lag in interactions

## Edge Cases

- [ ] Empty states display correctly
- [ ] Long text handles correctly
- [ ] Large images handle correctly
- [ ] Network timeout handled
- [ ] Invalid API responses handled
- [ ] Missing data handled

## Security Testing

- [ ] Authentication tokens stored securely
- [ ] User data protected
- [ ] API calls use HTTPS
- [ ] No sensitive data in logs

## Accessibility Testing

- [ ] Screen reader compatible
- [ ] Text readable
- [ ] Touch targets adequate size
- [ ] Color contrast sufficient

## Final Checks

- [ ] All features work as expected
- [ ] No crashes
- [ ] No console errors
- [ ] Performance acceptable
- [ ] UI polished
- [ ] Ready for beta testing

---

## Test Results Template

**Date**: _______________
**Tester**: _______________
**Device**: _______________
**OS Version**: _______________

**Passed**: ___ / ___
**Failed**: ___ / ___
**Blocked**: ___ / ___

**Notes**:
_________________________________________________
_________________________________________________
_________________________________________________
