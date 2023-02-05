import {ThemeProvider} from "styled-components";
import React from "react";
import {typeTheme} from "./typeTheme";

type ThemeProps = {
    children: React.ReactNode,
    theme: typeTheme
}

export const Theme = ({ children, theme }: ThemeProps) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
)