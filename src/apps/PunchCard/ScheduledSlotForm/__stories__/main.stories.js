import React from 'react'
import ScheduledSlotForm from '../'

const Story = {
  title: 'Apps/Punch Card/Scheduled Slot Form',
  component: ScheduledSlotForm
}

export default Story

const Template = (args) => <ScheduledSlotForm {...args} />
Template.args = {

}

export const Default = Template.bind({})