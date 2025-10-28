import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, contentChildren, input, TemplateRef } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-table',
  imports: [TableModule, NgTemplateOutlet],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  columnTable = input.required<column[]>();
  data = input.required<any[]>();
  customTemplates = contentChildren(TemplateRef);
  templateMap = computed(() => {
    const map = new Map<string, TemplateRef<any>>();
    this.customTemplates().forEach((tpl) => {
      const localNames = (tpl as any)._declarationTContainer?.localNames;
      if (localNames) {
        const key = localNames[0];
        if (key) {
          map.set(key, tpl);
        }
      }
    });

    return map;
  });
}

export type column = { key: string; header: string; custom?: boolean };
