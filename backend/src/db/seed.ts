import { client, db } from ".";
import { goalCompletions, goals } from "./schema";
import dayjs from "dayjs";

async function seed() {
  await db.delete(goalCompletions);
  await db.delete(goals);

  const result = await db
    .insert(goals)
    .values([
      { title: "Acordar as 7h", desiredWeeklyFrequency: 5 },
      { title: "Malhar", desiredWeeklyFrequency: 4 },
      { title: "Ler um livro", desiredWeeklyFrequency: 2 },
    ])
    .returning();

  const startOfWeek = dayjs().startOf("week");

  await db
    .insert(goalCompletions)
    .values([{ goalId: result[1].id, createdAt: startOfWeek.toDate() }]);
}

seed().finally(() => {
  client.end();
});
