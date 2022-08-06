const months = [
  {
    key: '01',
    short: 'Jan',
    long: 'Janeiro'
  },
  {
    key: '02',
    short: 'Fev',
    long: 'Fevereiro'
  },
  {
    key: '03',
    short: 'Mar',
    long: 'Março'
  },
  {
    key: '04',
    short: 'Abr',
    long: 'Abril'
  },
  {
    key: '05',
    short: 'Mai',
    long: 'Maio'
  },
  {
    key: '06',
    short: 'Jun',
    long: 'Junho'
  },
  {
    key: '07',
    short: 'Jul',
    long: 'Julho'
  },
  {
    key: '08',
    short: 'Ago',
    long: 'Agosto'
  },
  {
    key: '09',
    short: 'Set',
    long: 'Setembro'
  },
  {
    key: '10',
    short: 'Out',
    long: 'Outubro'
  },
  {
    key: '11',
    short: 'Nov',
    long: 'Novembro'
  },
  {
    key: '12',
    short: 'Dez',
    long: 'Dezembro'
  }
]

export function humanizeDate(date: string) {
  if (date) {
    try {
      const split = date.split('/')
      const day = split[0]
      const month = split[1]
      const current = months.find((item) => item.key === month)
      if (Number(day) <= 31 && current?.short) {
        return `${day} de ${current?.short}`
      }
    } catch {
      return ''
    }
  }
  return ''
}
