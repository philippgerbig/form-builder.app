"use client"

import {ElementsType, FormElement} from "@/components/form-elements";

const type: ElementsType = "Select"

export const SelectFormElement: FormElement = {
  type,

  construct: (id: string) => ({
    id,
    type,
    properties: {
      label: "Select",
      helperText: "Helper text"
    }
  }),

  designerButton: {
    title: 'Select',
    icon: 'chevron-down'
  },

  designerComponent: () => <div>{type} Designer Component</div>,
  formComponent: () => <div>{type} Form Component</div>,
  propertiesComponent: () => <div>{type} Properties Component</div>,
}