import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { createGoalRoute } from "../routes/create-goal-route";
import { createGoalCompletionRoute } from "../routes/create-goal-completion-route";
import { getPendingGoalsRoute } from "../routes/get-pending-goals-route";
import { getWeekSummaryRoute } from "../routes/get-week-summary-route";
import fastifyCors from "@fastify/cors";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, {
  origin: '*',
})

app.register(getPendingGoalsRoute);

app.register(createGoalRoute);

app.register(createGoalCompletionRoute);

app.register(getWeekSummaryRoute)

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running!");
});
