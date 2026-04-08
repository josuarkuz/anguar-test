import type { Meta, StoryObj } from '@storybook/angular';
import { FormInputs } from './form-inputs';

const meta: Meta<FormInputs> = {
  title: 'Components/Form Inputs',
  component: FormInputs,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<FormInputs>;

export const Default: Story = {};

export const ValidationState: Story = {
  parameters: {
    a11y: {
      test: 'todo',
    },
  },
  render: () => ({
    imports: [FormInputs],
    template: `<app-form-inputs></app-form-inputs>`,
  }),
  play: async () => {},
};
