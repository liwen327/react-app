import React from 'react'

//创建Context 相当于农民种菜,
export const UserContext = React.createContext();

//接收者，相当于批发商去农民那进菜
export const UserProvider = UserContext.Provider;

//消费者    吃菜
export const UserConsumer = UserContext.Consumer;