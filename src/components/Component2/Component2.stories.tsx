import type { Meta, StoryObj } from '@storybook/react'

import { Component2 } from './Component2'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Component2',
  component: Component2,
  tags: ['autodocs'],
  argTypes: {
    count: { control: 'string' },
  },
} satisfies Meta<typeof Component2>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    count: '0',
  },
}

export const WithInitialCount: Story = {
  args: {
    count: '42',
  },
}
