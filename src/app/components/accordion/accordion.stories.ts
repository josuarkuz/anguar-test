import type { Meta, StoryObj } from '@storybook/angular';
import { Accordion } from './accordion';

const meta: Meta<Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    a11y: {
      test: 'todo',
    },
  },
  render: () => ({
    imports: [Accordion],
    template: `
      <div style="max-width: 800px;">
        <app-accordion></app-accordion>
      </div>
    `,
  }),
};

export default meta;

type Story = StoryObj<Accordion>;

export const Default: Story = {};
