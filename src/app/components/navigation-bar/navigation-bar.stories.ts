import type { Meta, StoryObj } from '@storybook/angular';
import { NavigationBar } from './navigation-bar';

const meta: Meta<NavigationBar> = {
  title: 'Components/Navigation Bar',
  component: NavigationBar,
  tags: ['autodocs'],
  parameters: {
    a11y: {
      test: 'todo',
    },
  },
  render: () => ({
    imports: [NavigationBar],
    template: `
      <app-navigation-bar></app-navigation-bar>

      <main style="padding: 24px;">
        <section id="home" style="min-height: 120px;">
          <h2>Home</h2>
        </section>

        <section id="skip-navigation" style="min-height: 120px;">
          <h2>Skip Navigation</h2>
        </section>

        <section id="navigation-bar" style="min-height: 120px;">
          <h2>Navigation Bar</h2>
        </section>

        <section id="form-inputs" style="min-height: 120px;">
          <h2>Form Inputs</h2>
        </section>

        <section id="modal-dialog" style="min-height: 120px;">
          <h2>Modal Dialog</h2>
        </section>

        <section id="data-table" style="min-height: 120px;">
          <h2>Data Table</h2>
        </section>

        <section id="dropdown-menu" style="min-height: 120px;">
          <h2>Dropdown Menu</h2>
        </section>

        <section id="tabs" style="min-height: 120px;">
          <h2>Tabs</h2>
        </section>

        <section id="accordion" style="min-height: 120px;">
          <h2>Accordion</h2>
        </section>

        <section id="toast-alert" style="min-height: 120px;">
          <h2>Toast Alert</h2>
        </section>

        <section id="date-picker" style="min-height: 120px;">
          <h2>Date Picker</h2>
        </section>

        <section id="documentation" style="min-height: 120px;">
          <h2>Documentation</h2>
        </section>

        <section id="contact" style="min-height: 120px;">
          <h2>Contact</h2>
        </section>
      </main>
    `,
  }),
};

export default meta;

type Story = StoryObj<NavigationBar>;

export const Default: Story = {};
