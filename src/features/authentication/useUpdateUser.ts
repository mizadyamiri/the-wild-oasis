import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("User account successfull updated");
      queryClient.setQueriesData(["user"], user);
      // queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });

  return { updateUser, isUpdating };
}
