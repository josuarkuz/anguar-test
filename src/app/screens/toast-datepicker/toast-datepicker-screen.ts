import { Component } from '@angular/core';
import { ToastAlert } from '../../components/toast-alert/toast-alert';
import { DatePicker } from '../../components/date-picker/date-picker';

@Component({
  selector: 'app-toast-datepicker-screen',
  imports: [ToastAlert, DatePicker],
  templateUrl: './toast-datepicker-screen.html',
  styleUrl: './toast-datepicker-screen.scss'
})
export class ToastDatepickerScreen {}
