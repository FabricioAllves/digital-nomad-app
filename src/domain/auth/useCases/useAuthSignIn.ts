import { useFeedbackServices } from "@/src/infra/feedbackService/FeedbackProvider";
import { useAppMutation } from "@/src/infra/operations/useAppMutation";

import { AuthUser } from "../AuthUser";
import { useAuth } from "../AuthContext";
import { useRepository } from "@/src/infra/repositories/RepositoryProvider";

export function useAuthSignIn() {
  const { auth } = useRepository();
  const { saveAuthUser } = useAuth();
  const feedbackService = useFeedbackServices();

  return useAppMutation<AuthUser, { email: string; password: string }>({
    mutateFn: ({ email, password }) => auth.signIn(email, password),
    onSuccess: (authUser) => {
      saveAuthUser(authUser)
      feedbackService.send({
        type: "success",
        message: `Login realizado com sucesso, ${authUser.email}`,
      });
    },
    onError: (error) => {
      feedbackService.send({
        type: "error",
        message: "error on sign in",
      });
    },
  });
}
