import { Routes } from '@angular/router';
import { HomeScreen } from './screens/home/home-screen';
import { FormsScreen } from './screens/forms/forms-screen';
import { ModalScreen } from './screens/modal/modal-screen';
import { TableScreen } from './screens/table/table-screen';
import { DropdownScreen } from './screens/dropdown/dropdown-screen';
import { TabsAccordionScreen } from './screens/tabs-accordion/tabs-accordion-screen';
import { ToastDatepickerScreen } from './screens/toast-datepicker/toast-datepicker-screen';

export const routes: Routes = [
  { path: '', component: HomeScreen, title: 'WCAG Demo - Home' },
  { path: 'forms', component: FormsScreen, title: 'WCAG Demo - Forms' },
  { path: 'modal', component: ModalScreen, title: 'WCAG Demo - Modal Dialog' },
  { path: 'table', component: TableScreen, title: 'WCAG Demo - Data Table' },
  { path: 'dropdown', component: DropdownScreen, title: 'WCAG Demo - Dropdown Menu' },
  { path: 'tabs-accordion', component: TabsAccordionScreen, title: 'WCAG Demo - Tabs and Accordion' },
  { path: 'toast-datepicker', component: ToastDatepickerScreen, title: 'WCAG Demo - Toast and Date Picker' },
  { path: '**', redirectTo: '' }
];
