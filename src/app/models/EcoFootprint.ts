import { EcoAction } from "./EcoAction";

export interface EcoFootprint {
  footPrintId: string,
  id: string,
  firstName: string,
  lastName: string,
  ecoActions: Array<EcoAction>
}
