const LANGUAGE_KEY = 'app_language';

export const setLanguage = (language) => {
    localStorage.setItem(LANGUAGE_KEY, language);
};

export const getLanguage = () => {
    return localStorage.getItem(LANGUAGE_KEY);
};