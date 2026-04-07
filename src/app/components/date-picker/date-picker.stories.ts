import type { Meta, StoryObj } from '@storybook/angular';
import { DatePicker } from './date-picker';

const meta: Meta<DatePicker> = {
  title: 'Components/Date Picker',
  component: DatePicker,
  tags: ['autodocs'],
  render: () => ({
    imports: [DatePicker],
    template: `
      <div style="padding-bottom: 320px; max-width: 420px;">
        <app-date-picker></app-date-picker>
      </div>
    `,
  }),
};

export default meta;

type Story = StoryObj<DatePicker>;

export const Default: Story = {};
