import React from 'react';
import { observable, action, makeObservable, makeAutoObservable } from 'mobx';
import { AppTheme, Theme } from '../constants/theme';

class store {
    theme: Theme = AppTheme[0]

    constructor() {
        makeAutoObservable(this);
    }

    setTheme(t: Theme) {
        this.theme = t;
    }
    
}

const ThemeStore = new store;

export { ThemeStore }