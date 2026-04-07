import type { Meta, StoryObj } from '@storybook/angular';
import { DataTable } from './data-table';

const meta: Meta<DataTable> = {
  title: 'Components/Data Table',
  component: DataTable,
  tags: ['autodocs'],
  render: () => ({
    imports: [DataTable],
    template: `
      <div style="max-width: 960px;">
        <app-data-table></app-data-table>
      </div>
    `,
  }),
};

export default meta;

type Story = StoryObj<DataTable>;

export const Default: Story = {};
