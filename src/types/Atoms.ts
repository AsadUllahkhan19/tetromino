import {PayloadAction} from '@reduxjs/toolkit';
import {ReactElement} from 'react';

export interface AppBarTool {
    action: PayloadAction<any>;

    active?: boolean;

    icon: ReactElement;

    toolTip: string;
}

export interface AppBarProps {
    tools: Array<AppBarTool>;
}


export interface AppKeyBindingProps {
    keyCode: string;

    label: string;

    onClick: () => void;
}

export interface AppLogoProps {
    name: string;

    speed?: number;
}

export interface AppMenuItem {
    action: PayloadAction<any>;

    active?: boolean;

    title: string;
}