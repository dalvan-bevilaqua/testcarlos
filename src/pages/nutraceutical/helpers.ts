export function getTitleByProperty(property: string) {
  switch (property) {
    case 'actionMechanism':
      return 'Mecanismo de ação'
    case 'adverseReactions':
      return 'Reações adversas'
    case 'indications':
      return 'Indicações'
    case 'againstIndications':
      return 'Contra indicações'
    case 'descriptionDosages':
      return 'Descrição de dosagens'
    case 'drugInteractions':
      return 'Interações medicamentosas'
    case 'nutraceuticalReferences':
      return 'Referências'
    case 'pharmacology':
      return 'Farmacologia'
    case 'recomendedDosages':
      return 'Dosagem recomendada'
    default:
      return ''
  }
}

export default function () {
  return 'Default'
}
