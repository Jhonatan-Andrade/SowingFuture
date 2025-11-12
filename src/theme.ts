import { useState } from "react";

export interface ThemeType {
    titleTheme: string;
    background: string;
    primary: string;
    secondary: string;
    textPrimary: string;
    textSecondary: string;
    textMenu: string;
    border: string;
    transparent: string;
    error: string;
}

export const dark:ThemeType = {
    titleTheme: "dark",
    background: " #090E16",
    primary: "rgb(255, 255, 255)",
    secondary:" #000000ff",
    textPrimary:" #ffffff",
    textSecondary:" #ffffff",
    textMenu:" #ffffff",
    border: " #ffffff",
    transparent:"rgba(255, 255, 255, 0.7)",
    error:"rgba(255, 38, 0, 0.34)",    
}
export const light:ThemeType = {
    titleTheme: "light",
    background: "rgba(255, 255, 255, 1)",
    primary: "rgba(0, 0, 0, 1)",
    secondary:" #ffffffff",
    textPrimary:"rgba(0, 0, 0, 1)",
    textSecondary:"rgba(255, 255, 255, 1)",
    textMenu:"rgb(255, 255, 255)",
    border: "rgb(16, 26, 82)",
    transparent:"rgba(0, 0, 0, 0.7)",
    error:"rgba(255, 38, 0, 0.34)",   
}
export const fonts = {
    primary: "'Poppins', sans-serif",
    secondary: "'Roboto', sans-serif",
}
//crie uma variavel de cor gradiente que vai do azul claro ao azul escuro
export const redGradient = "linear-gradient(to right, #EF0000, #7C0101)";
export const greenGradient = "linear-gradient(to right, #22C45E, #059669)";
export const pinkGradient = "linear-gradient(to right, #EF4445, #DB2776)";
export const purpleGradient = "linear-gradient(to right, #305EEB, #8E35EA)";
export const orangeGradient = "linear-gradient(to right, #F87915, #EAB008)";
export const blueGradient = "linear-gradient(to right, #004781, #1C99FF)";

export const red = "#EF4445";
export const green = "#22C45E";
export const pink = "#DB2776";
export const purple = "#8E35EA";
export const orange = "#F87915";
export const blue = "#008cffff";

