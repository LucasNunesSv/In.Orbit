import { Plus } from "lucide-react";
import { OutlineButton } from "./ui/outline-button";
import { getPendingGoals } from "../http/get-pending-goals";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createGoalCompletion } from "../http/create-goal-completion";

export function PendingGoals() {

    const queryClient = useQueryClient()
  const { data } = useQuery({
    queryKey: ["pending-goals"],
    queryFn: getPendingGoals,
    staleTime: 1000 * 60, // 60 segundos
  });

  if (!data) {
    return null;
  }

  async function handleCompleteGoal(goalId: String) {
    await createGoalCompletion(goalId);
    queryClient.invalidateQueries({queryKey: ['summary']})
    queryClient.invalidateQueries({queryKey: ['pending-goals']})
  }

  return (
    <div className="flex flex-wrap gap-3">
      {data.map((goal) => {
        return (
          <OutlineButton
            key={goal.id}
            className="pr-5"
            disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
            onClick={() => handleCompleteGoal(goal.id)} 
          >
            <Plus className="size-4 text-zinc-600" />
            {goal.title}
          </OutlineButton>
        );
      })}
    </div>
  );
}