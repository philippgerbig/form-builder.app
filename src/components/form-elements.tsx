import React from "react";
import {TextfieldFormElement} from "@/components/form-fields/textfield";
import {CheckboxFormElement} from "@/components/form-fields/checkbox";
import {SelectFormElement} from "@/components/form-fields/select";
import {IconName} from "lucide-react/dynamic";

export type ElementsType = "Textfield" | "Select" | "Checkbox"

export type Form = {
  pages: [FormElement[]]
}

export type FormElement = {
  type: ElementsType

  construct: (id: string) => FormElementInstance

  designerButton: {
    icon: IconName
    title: string
    badge?: string
  }

  designerComponent: React.FC<{
    elementInstance: FormElementInstance
  }>
  formComponent: React.FC
  propertiesComponent: React.FC
}

export type FormElementInstance = {
  id: string
  type: ElementsType
  properties?: object
}

type FormElementsType = {
  [key in ElementsType]: FormElement
}

export const FormElements: FormElementsType = {
  Textfield: TextfieldFormElement,
  Checkbox: CheckboxFormElement,
  Select: SelectFormElement,
}