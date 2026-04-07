import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { ModalDialog } from './modal-dialog';

const meta: Meta<ModalDialog> = {
  title: 'Components/Modal Dialog',
  component: ModalDialog,
  tags: ['autodocs'],
  render: () => ({
    imports: [CommonModule, ModalDialog],
    template: `
      <button
        type="button"
        style="min-height:44px; padding:12px 16px; border-radius:12px; border:1px solid #005fcc; background:#005fcc; color:#fff;"
        (click)="isOpen = true"
      >
        Open modal dialog
      </button>

      <app-modal-dialog
        [open]="isOpen"
        [title]="'Delete item'"
        [description]="'This action cannot be undone. Please confirm if you want to continue.'"
        [closeOnBackdropClick]="true"
        (openChange)="isOpen = $event"
      >
        <p>
          This is an interactive modal dialog story. Open it with the button,
          then test keyboard navigation, Escape, and focus return.
        </p>
      </app-modal-dialog>
    `,
    props: {
      isOpen: false,
    },
  }),
};

export default meta;

type Story = StoryObj<ModalDialog>;

export const Default: Story = {};
