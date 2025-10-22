import React from "react";
import { Repositories } from "../domain/Repositories";

export const RepositoryContext = React.createContext<Repositories>(
  {} as Repositories
);

export const RepositoryProvider = RepositoryContext.Provider;

export function useRepository() {
  const context = React.useContext(RepositoryContext);
  if (!context) {
    throw new Error("useRepository must be used within a RepositoryProvider");
  }
  
  return  context
}
