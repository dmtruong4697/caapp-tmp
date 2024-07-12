import React from 'react';
import { observable, action, makeObservable, makeAutoObservable } from 'mobx';
import { AppLanguage, Language } from '../constants/language';
import i18n from '../i18n/i18n';

const changeLanguage = (value: Language) => { 
    i18n
     .changeLanguage(value.code) 
     .then(() => {}) 
     .catch(err => console.log(err)); 

    LanguageStore.setLanguage(value)
 }; 

class store {
    language: Language = AppLanguage[0]

    constructor() {
        makeAutoObservable(this);
    }

    setLanguage(t: Language) {
        this.language = t;
    }
    
}

const LanguageStore = new store;

export { LanguageStore }