import React from 'react';
import { observable, action, makeObservable, makeAutoObservable } from 'mobx';
import { AppLanguage, Language } from '../constants/language';

class store {
    language: Language = AppLanguage[0]

    constructor() {
        makeAutoObservable(this);
    }

    setTheme(t: Language) {
        this.language = t;
    }
    
}

const LanguageStore = new store;

export { LanguageStore }