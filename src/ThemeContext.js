import React from 'react'

//创建Context 相当于农民种菜,   如果没有匹配到provider，那就给一个默认值 green
export const ThemeContext = React.createContext({ themeColor: 'green' });

//接收者，相当于批发商去农民那进菜
export const ThemeProvider = ThemeContext.Provider;

//消费者    吃菜
export const ThemeConsumer = ThemeContext.Consumer;