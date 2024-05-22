import { Workbook } from 'exceljs'

export async function CreateWorkbookWithDayTabs(
  date: Date,
): Promise<ArrayBuffer> {
  const workbook = new Workbook()

  const month = date.toLocaleString('default', { month: 'long' })

  // create a new sheet for every day of the month
  const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  for (let i = 0; i < days; i++) {
    workbook.addWorksheet(`${i + 1} ${month}`)
  }

  // return the file as a buffer
  return workbook.xlsx.writeBuffer()
}
