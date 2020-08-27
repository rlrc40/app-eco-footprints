import { EcoAction } from "./EcoAction";

export interface EcoFootprint {
  footPrintId: string,
  photo: string,
  id: string,
  firstName: string,
  lastName: string,
  ecoActions: Array<EcoAction>
}
