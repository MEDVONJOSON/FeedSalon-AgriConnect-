# Quick Test Guide

## Quick Start Testing

### 1. Install & Setup (5 minutes)
```bash
cd mobile
npm install
echo "EXPO_PUBLIC_API_URL=http://localhost:5000" > .env
npm start
```

### 2. Test on Simulator/Emulator
- Press `i` for iOS simulator
- Press `a` for Android emulator
- Or scan QR code with Expo Go app

### 3. Quick Smoke Tests (10 minutes)

#### Test 1: Authentication ✅
1. Open app → Should show login screen
2. Enter any email → Click "Sign In"
3. Should navigate to Dashboard

#### Test 2: Dashboard ✅
1. Should see welcome message with your name
2. Weather widget should show
3. Quick stats should display (4 cards)
4. Quick action buttons should be visible
5. Pull down to refresh → Should work

#### Test 3: Marketplace ✅
1. Tap "Marketplace" tab
2. Should see product list
3. Type in search bar → Should filter products
4. Tap category chips → Should filter
5. Tap "View Details" on a product → Should open detail screen
6. Tap "Contact Seller" → Modal should open
7. Fill form and submit → Should show success

#### Test 4: AI Chat ✅
1. Tap "AI Chat" tab
2. Type "rice" → Send
3. Should get response
4. Tap image icon → Should open picker
5. Select image → Should upload
6. Should get analysis response

#### Test 5: Disease Detection ✅
1. From Dashboard, tap "Disease Detection"
2. Select crop type (e.g., "Rice")
3. Tap "Take Photo" or "Choose from Gallery"
4. Select/take image
5. Tap "Analyze Disease"
6. Should show results

#### Test 6: Navigation ✅
1. Switch between tabs → Should work smoothly
2. Tap back button → Should navigate back
3. Open modal screens → Should open correctly
4. Close modals → Should close correctly

### 4. Critical Path Test (5 minutes)

**Happy Path:**
1. Login → Dashboard → Marketplace → View Product → Contact Seller → Submit Inquiry ✅
2. Dashboard → Disease Detection → Take Photo → Analyze → View Results ✅
3. Dashboard → Crop Recommendation → Fill Form → Get Recommendations ✅
4. Dashboard → Weather → View Forecast ✅
5. Profile → Logout → Should return to Login ✅

### 5. Error Scenarios (5 minutes)

1. **No Internet**: Turn off WiFi → Should show offline indicator ✅
2. **API Error**: Use wrong API URL → Should show error gracefully ✅
3. **Permission Denied**: Deny camera permission → Should show message ✅
4. **Empty State**: Search for non-existent product → Should show empty state ✅

### 6. Visual Check (2 minutes)

- [ ] Colors match brand (Green #1EB53A, Blue #0072C6)
- [ ] Text is readable
- [ ] Buttons are properly sized
- [ ] Images display correctly
- [ ] No layout issues
- [ ] Icons show correctly

## Expected Results

✅ **All tests should pass**
✅ **No crashes**
✅ **Smooth navigation**
✅ **Proper error handling**
✅ **Offline support works**

## Common Issues & Solutions

### Issue: App won't start
**Solution**: 
- Check Node.js version (need v18+)
- Run `npm install` again
- Clear cache: `npm start -- --reset-cache`

### Issue: API calls fail
**Solution**:
- Check `.env` file has correct API URL
- Ensure backend is running
- Check CORS settings on backend

### Issue: Images don't load
**Solution**:
- Check image URLs are valid
- Ensure permissions granted
- Check network connection

### Issue: Navigation doesn't work
**Solution**:
- Check route paths are correct
- Ensure screens exist
- Check navigation imports

## Test Completion

If all quick tests pass:
✅ **App is ready for beta testing**

If any tests fail:
❌ **Check error messages**
❌ **Review TESTING_REPORT.md**
❌ **Fix issues before proceeding**

---

**Total Test Time**: ~30 minutes
**Status**: Ready for comprehensive testing
