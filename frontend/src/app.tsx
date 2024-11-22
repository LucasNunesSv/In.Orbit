import { Dialog } from "./components/ui/dialog";
import { CreateGoal } from "./components/create-goal";
import { Summary } from "./components/summary";
import { useEffect, useState } from "react";
// import { EmptyGoal } from "./components/empty-goal";

export function App() {

  const [summary, setSummary] = useState()

  useEffect(() => {
    fetch('http://localhost:3333/summary').then(response => {
      return response.json()
    }).then(data => {
      setSummary(data)
    })
  }, [])

  return (
    <Dialog>
      
      {/* <EmptyGoal /> */}
      <pre>{JSON.stringify(summary, null, 2)}</pre>
      <Summary />

      <CreateGoal />

    </Dialog>
  );
}
