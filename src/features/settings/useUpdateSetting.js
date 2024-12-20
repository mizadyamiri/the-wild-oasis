import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdateding } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Setting successfull edited");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: err => {
      toast.error(err.massage);
    },
  });

  return { updateSetting, isUpdateding };
}
