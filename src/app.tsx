import { Button, Description, Label, Select } from '@/components'
import {
  ArrayBufferToFile,
  CreateWorkbookWithDayTabs,
  UppercaseFirstLetter,
  range,
} from '@/utils'
import { Field } from '@headlessui/react'
import { useRef, useState } from 'react'

const Months = [
  'january',
  'feburary',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
]

export default function App() {
  const download = useRef<HTMLAnchorElement>(null!)

  const [month, SetMonth] = useState(
    new Date().toLocaleString('default', { month: 'long' }).toLowerCase(),
  )
  const [year, SetYear] = useState(new Date().getFullYear())

  async function generate() {
    const date = new Date(year, Months.indexOf(month))
    const spreadsheet = await CreateWorkbookWithDayTabs(date)

    // make the buffer into a file
    download.current.href = ArrayBufferToFile(spreadsheet)
    download.current.download = `${UppercaseFirstLetter(month)} ${year}.xlsx`
    download.current.click()
  }

  function onMonthChange($event: React.ChangeEvent<HTMLSelectElement>) {
    SetMonth($event.target.value)
  }

  function onYearChange($event: React.ChangeEvent<HTMLSelectElement>) {
    SetYear(Number($event.target.value))
  }

  const renderOptionMonths = Months.map((month) => (
    <option key={month.toLowerCase()} value={month.toLowerCase()}>
      {UppercaseFirstLetter(month)}
    </option>
  ))

  const renderOptionYears = range(new Date().getFullYear(), 1970, -1).map(
    (year) => (
      <option key={year} value={year}>
        {year}
      </option>
    ),
  )

  return (
    <div>
      <a ref={download} className="hidden" />

      <h3>Excel template generator</h3>

      <Field className="mt-3 md:mt-5">
        <Label>Select a month to generate a spreadsheet for</Label>
        <Description className="2xl:mt-2">
          You will get a workbook with a tab for each day of the selected month.
          NOTE: This tool takes into account leap years
        </Description>
        <Select className="mt-3 md:mt-5" value={month} onChange={onMonthChange}>
          {renderOptionMonths}
        </Select>
      </Field>

      <Field className="mt-1 md:mt-3">
        <Description>
          Optionally, change the year if you need to generate for a previous
          month
        </Description>
        <div className="flex flex-row gap-2 mt-1 md:mt-2">
          <Select value={year} onChange={onYearChange}>
            {renderOptionYears}
          </Select>
          <Button onClick={generate}>Generate</Button>
        </div>
      </Field>
    </div>
  )
}
