import { EcoAction } from "./EcoAction";

export interface EcoFootprint {
  footPrintId: string,
  firstName: string,
  lastName: string,
  ecoActions: Array<EcoAction>
}
