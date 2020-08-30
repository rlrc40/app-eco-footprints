import { EcoAction } from '../../models/EcoAction';

export function getBarStyle (ecoActions: EcoAction[], totalBar: number): object  {
  const getSum = (total, value) => total + value;
  const totalCo2e = ecoActions && ecoActions.length && ecoActions.map( action => action.co2e ).reduce(getSum) || 0;
  const percentage = ((totalCo2e < totalBar ? totalCo2e : totalBar )* 100) / totalBar;
  var r, g, b = 0;
  if(percentage < 50) {
    r = 255;
    g = Math.round(5.1 * percentage);
  }
  else {
    g = 255;
    r = Math.round(510 - 5.10 * percentage);
  }
  const h = r * 0x10000 + g * 0x100 + b * 0x1;

  return {'width.%': (100 - percentage), 'backgroundColor': `#${('000000' + h.toString(16)).slice(-6)}`};
}
