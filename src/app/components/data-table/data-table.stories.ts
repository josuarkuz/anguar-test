import type { Meta, StoryObj } from '@storybook/angular';
import { DataTable } from './data-table';

const meta: Meta<DataTable> = {
  title: 'Components/Data Table',
  component: DataTable,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<DataTable>;

export const Default: Story = {};
