"use client"

import {ElementsType, FormElement, FormElementInstance} from "@/components/form-elements";
import {Label} from "@/components/ui/label";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";

const type: ElementsType = "Textfield"

const properties = {
  label: "Textfield",
  placeholder: "Placeholder",
  helperText: "Helper text"
}

export const TextfieldFormElement: FormElement = {
  type,

  construct: (id: string) => ({
    id,
    type,
    properties
  }),

  designerButton: {
    title: 'Textfield',
    icon: 'text-selection'
  },

  designerComponent: DesignerComponent,
  formComponent: () => <div>{type} Form Component</div>,
  propertiesComponent: () => <div>{type} Properties Component</div>,
}

type CustomInstance = FormElementInstance & {
  properties: {
    label: string
    helperText: string
    placeholder: string
  }
}

function DesignerComponent({
                             elementInstance
                           }:
                           {
                             elementInstance: FormElementInstance
                           }) {
  const element = elementInstance as CustomInstance
  const {helperText, label} = element.properties
  return <Card>
    <CardContent className="flex flex-col gap-2">
      <Label>{label}</Label>
      <Input readOnly disabled placeholder={element.properties?.placeholder}/>
      {helperText && <p className="text-muted-foreground text-xs">{helperText}</p>}
    </CardContent>
  </Card>
}