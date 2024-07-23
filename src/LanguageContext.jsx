import { createContext, useState } from "react";

export const LanguageContext = createContext()

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('en')

    const translations = {
        en: {
            header: "Welcome to Our website"
        },
        ka: {
            header: "მოგესალმებით ჩვენს ვებ გვერდზე",
        }
    }

    const changeLanguage = (lang) => {
        setLanguage(lang)
    }

    return (
        <LanguageContext.Provider value={{language, translations, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}