import React from 'react'
import PropTypes from 'prop-types'
import {
  Stack, DatePicker, MaskedTextField,
  DropdownMenuItemType, Dropdown,
  Checkbox
}from '@fluentui/react'
import moment from 'moment'

const DateTimeForm = ({
  timeField,
  dateField,
  endOfTimeCheckbox
}) => (
  <Stack tokens={{childrenGap: 10}}>
    <Stack horizontal tokens={{childrenGap: 10}}>
      <Stack.Item>
        <DatePicker
          label="Date"
          {...dateField}
        />
      </Stack.Item>
      <Stack.Item>
        <MaskedTextField
          label="Time"
          mask="99:99"
          {...timeField}
        />
      </Stack.Item>

    </Stack>
    <Stack horizontal verticalAlign="center" tokens={{childrenGap: 10}}>
      <Stack.Item>
        <Checkbox
        label="Is end of time?"
        {...endOfTimeCheckbox}
        />
      </Stack.Item>
      <Stack.Item>
        <Dropdown
          placeholder="Select Timezone"
          options={[
            { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
            { key: 'apple', text: 'Apple' },
            { key: 'banana', text: 'Banana' },
            { key: 'orange', text: 'Orange', disabled: true },
            { key: 'grape', text: 'Grape' },
            { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
            { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
            { key: 'broccoli', text: 'Broccoli' },
            { key: 'carrot', text: 'Carrot' },
            { key: 'lettuce', text: 'Lettuce' },
          ]}
        />
      </Stack.Item>
    </Stack>
  </Stack>
)

DateTimeForm.propTypes = {
  timeField: PropTypes.object,
  dateField: PropTypes.object,
  endOfTimeCheckbox: PropTypes.object,
}

DateTimeForm.defaultProps = {
  timeField: {
    value: moment().format('HH:mm')
  },
  dateField: {
    value: new Date()
  },
  endOfTimeCheckbox: {}
}

export default React.memo(DateTimeForm)
