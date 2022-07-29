import React, { createContext, useContext } from "react";
import { ParentModel } from "../models";

const ModelContext = createContext<ParentModel | null>(null)

export const useModel = <T extends ParentModel>() => useContext(ModelContext) as T

export const ModelProvider: React.FC<{ children: React.ReactNode; value: ParentModel }> = ({ children, value }) => {
    return (
        <ModelContext.Provider value={value}>
            {children}
        </ModelContext.Provider>
    )
}