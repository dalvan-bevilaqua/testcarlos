export interface AreaProps {
  id: string
  name: string
  description: string
}

export interface PlanAreasProps {
  area: AreaProps
}

export interface PlanProps {
  name: string
  description?: string
  planAreas?: PlanAreasProps[]
}

export interface BloodTypeProps {
  id: string
  type: string
  description: string
}

export interface UserProps {
  id: string
  name: string
  email: string
  weight: number
  height: number
  fit: boolean
  genderDescription: string
  imc: number
  pregnant: boolean
  imcResult: string
  lastLoginAt: string
  age: number
  jwt?: string
  token?: string
  plan: PlanProps
  bloodType: BloodTypeProps
}
