"use client"

import {ElementsType, FormElement} from "@/components/form-elements";

const type: ElementsType = "Checkbox"

export const CheckboxFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    properties: {
      label: "Checkbox",
      helperText: "Helper text",
      initialChecked: false
    }
  }),

  designerButton: {
    title: 'Checkbox',
    icon: 'check'
  },

  designerComponent: () => <div>{type} Designer Component</div>,
  formComponent: () => <div>{type} Form Component</div>,
  propertiesComponent: () => <div>{type} Properties Component</div>,
}