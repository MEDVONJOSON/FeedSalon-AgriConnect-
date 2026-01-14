'use client';

/**
 * Step 2: Location Form
 * 
 * Collects: Country (from API), City/Town, Physical Address
 */

import { useState, useEffect } from 'react';
import { useRegistration } from '../context/RegistrationContext';
import { getCountries } from '@/lib/api/registration';
import type { LocationData, FormErrors } from '../types/registration';

export function Step2Location() {
    const { formData, updateFormData, nextStep, previousStep } = useRegistration();
    const [errors, setErrors] = useState<FormErrors>({});
    const [countries, setCountries] = useState<Array<{ code: string; name: string }>>([]);
    const [isLoadingCountries, setIsLoadingCountries] = useState(true);

    const currentData = formData.location;

    // Load countries from API
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                setIsLoadingCountries(true);
                const data = await getCountries();
                setCountries(data);
            } catch (error) {
                console.error('Failed to load countries:', error);
                setErrors(prev => ({ ...prev, country: 'Failed to load countries' }));

                // Fallback to mock data if API fails
                setCountries([
                    { code: 'SL', name: 'Sierra Leone' },
                    { code: 'LR', name: 'Liberia' },
                    { code: 'GH', name: 'Ghana' },
                    { code: 'NG', name: 'Nigeria' },
                    { code: 'GN', name: 'Guinea' },
                ]);
            } finally {
                setIsLoadingCountries(false);
            }
        };

        fetchCountries();
    }, []);

    const handleChange = (field: keyof LocationData, value: string) => {
        updateFormData('location', { [field]: value });
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        if (!currentData.country) {
            newErrors.country = 'Country is required';
        }
        if (!currentData.cityTown.trim()) {
            newErrors.cityTown = 'City/Town is required';
        } else if (currentData.cityTown.length > 100) {
            newErrors.cityTown = 'City/Town must not exceed 100 characters';
        }
        if (!currentData.physicalAddress.trim()) {
            newErrors.physicalAddress = 'Physical address is required';
        } else if (currentData.physicalAddress.length > 500) {
            newErrors.physicalAddress = 'Physical address must not exceed 500 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validate()) {
            nextStep();
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-[#1a365d]">Location</h2>
                <p className="text-[#4b5563] mt-2">Where is your school located?</p>
            </div>

            {/* Country Dropdown */}
            <div>
                <label htmlFor="country" className="block text-sm font-medium text-[#1f2937] mb-2">
                    Country <span className="text-[#dc2626]">*</span>
                </label>
                {isLoadingCountries ? (
                    <div className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] text-[#6b7280]">
                        Loading countries...
                    </div>
                ) : (
                    <select
                        id="country"
                        value={currentData.country}
                        onChange={(e) => handleChange('country', e.target.value)}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.country ? 'border-[#dc2626]' : 'border-[#d1d5db]'} focus:outline-none focus:ring-2 focus:ring-[#3b82f6]`}
                    >
                        <option value="">Select a country</option>
                        {countries.map((country) => (
                            <option key={country.code} value={country.code}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                )}
                {errors.country && <p className="text-[#dc2626] text-sm mt-1">{errors.country}</p>}
            </div>

            {/* City/Town */}
            <div>
                <label htmlFor="cityTown" className="block text-sm font-medium text-[#1f2937] mb-2">
                    City/Town <span className="text-[#dc2626]">*</span>
                </label>
                <input
                    id="cityTown"
                    type="text"
                    value={currentData.cityTown}
                    onChange={(e) => handleChange('cityTown', e.target.value)}
                    maxLength={100}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.cityTown ? 'border-[#dc2626]' : 'border-[#d1d5db]'} focus:outline-none focus:ring-2 focus:ring-[#3b82f6]`}
                    placeholder="e.g., Freetown"
                />
                {errors.cityTown && <p className="text-[#dc2626] text-sm mt-1">{errors.cityTown}</p>}
            </div>

            {/* Physical Address */}
            <div>
                <label htmlFor="physicalAddress" className="block text-sm font-medium text-[#1f2937] mb-2">
                    Physical Address <span className="text-[#dc2626]">*</span>
                </label>
                <textarea
                    id="physicalAddress"
                    value={currentData.physicalAddress}
                    onChange={(e) => handleChange('physicalAddress', e.target.value)}
                    maxLength={500}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.physicalAddress ? 'border-[#dc2626]' : 'border-[#d1d5db]'} focus:outline-none focus:ring-2 focus:ring-[#3b82f6]`}
                    placeholder="Enter the full physical address of your school"
                />
                <p className="text-[#6b7280] text-xs mt-1">
                    {currentData.physicalAddress.length}/500 characters
                </p>
                {errors.physicalAddress && <p className="text-[#dc2626] text-sm mt-1">{errors.physicalAddress}</p>}
            </div>

            {/* Navigation */}
            <div className="flex justify-between pt-4">
                <button
                    onClick={previousStep}
                    className="px-6 py-3 border border-[#d1d5db] text-[#4b5563] font-medium rounded-lg hover:bg-[#f5f5f5]"
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    className="px-6 py-3 bg-[#1a365d] text-white font-medium rounded-lg hover:bg-[#1e4976]"
                >
                    Continue
                </button>
            </div>
        </div>
    );
}
