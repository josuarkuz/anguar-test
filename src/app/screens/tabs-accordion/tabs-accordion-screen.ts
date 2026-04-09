import { Component } from '@angular/core';
import { Tabs } from '../../components/tabs/tabs';
import { Accordion } from '../../components/accordion/accordion';

@Component({
  selector: 'app-tabs-accordion-screen',
  imports: [Tabs, Accordion],
  templateUrl: './tabs-accordion-screen.html',
  styleUrl: './tabs-accordion-screen.scss'
})
export class TabsAccordionScreen {}
