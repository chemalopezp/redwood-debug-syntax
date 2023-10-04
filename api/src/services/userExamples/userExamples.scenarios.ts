import type { Prisma, UserExample } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserExampleCreateArgs>({
  userExample: {
    one: { data: { email: 'String8091817' } },
    two: { data: { email: 'String7204739' } },
  },
})

export type StandardScenario = ScenarioData<UserExample, 'userExample'>
