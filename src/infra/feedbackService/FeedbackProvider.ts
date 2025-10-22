import React from "react";
import { IFeedbackService } from "./IFeedbackService";

export const FeedbackContext = React.createContext<IFeedbackService>(
  {} as IFeedbackService
);

export const FeedbackProvider = FeedbackContext.Provider;

export function useFeedbackServices() {
  const context = React.useContext(FeedbackContext);
  if (!context) {
    throw new Error("Feedback must be used within a FeedbackProvider");
  }
  
  return  context
}
