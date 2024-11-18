export const validateZipCode = (zipCode) => {
    const zipRegex = /^\d{5}$/;
    return zipRegex.test(zipCode);
};