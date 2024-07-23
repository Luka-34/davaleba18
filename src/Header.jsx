import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const Header = () => {
    const {language, translations, changeLanguage} = useContext(LanguageContext)

    return (
        <div>
            <h1>{translations[language].header}</h1>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button  onClick={() => changeLanguage('ka')}>ქართული</button>
        </div>
    )
}

export default Header