export const validators = {
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  phone: (phone: string): boolean => {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  },

  required: (value: string): boolean => {
    return value.trim().length > 0;
  },

  minLength: (value: string, min: number): boolean => {
    return value.length >= min;
  },

  maxLength: (value: string, max: number): boolean => {
    return value.length <= max;
  },
};

export function validateForm(
  fields: Record<string, { value: string; rules: Array<(value: string) => boolean | string> }>
): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  let isValid = true;

  Object.keys(fields).forEach((fieldName) => {
    const field = fields[fieldName];
    for (const rule of field.rules) {
      const result = rule(field.value);
      if (result !== true) {
        errors[fieldName] = typeof result === 'string' ? result : `${fieldName} is invalid`;
        isValid = false;
        break;
      }
    }
  });

  return { isValid, errors };
}
