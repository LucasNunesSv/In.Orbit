import { Dialog } from "./components/ui/dialog";
import { CreateGoal } from "./components/create-goal";
import { Summary } from "./components/summary";
import { useEffect, useState } from "react";
import { EmptyGoal } from "./components/empty-goal";

type SummaryResposne = {
    completed: number;
    total: number;
    goalsPerDay: Record<string, {
        id: string;
        title: string;
        completedAt: string;
    }[]>;
}

export function App() {
  
  const [summary, setSummary] = useState<SummaryResposne | null>(null);

  useEffect(() => {
    fetch("http://localhost:3333/summary")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSummary(data.summary);
      });
  }, []);

  return (
    <Dialog>
      {summary?.total && summary.total > 0 ? <Summary /> : <EmptyGoal />}

      <CreateGoal />
    </Dialog>
  );
}
