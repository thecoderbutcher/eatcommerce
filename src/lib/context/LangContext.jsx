import PropTypes from 'prop-types';
import { useState, createContext, useEffect } from "react";
import { DEFAULT_LANGUAGE } from '../constants/language';
import { getLanguage, setLanguage } from '../storage/languageStorage';

const LangContext = createContext();

const LangProvider = ({ children }) => {
    const [lang, setLang] = useState(getLanguage() || DEFAULT_LANGUAGE); 

    useEffect( () => { setLanguage(lang) }, [lang] )
    
    return (
        <LangContext.Provider value={{ lang, setLang }}>
            {children}
        </LangContext.Provider>
    );
};

export {LangContext, LangProvider}

LangProvider.propTypes = { children: PropTypes.node.isRequired };