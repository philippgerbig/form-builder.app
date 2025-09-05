import {AddFormElementButton} from "@/components/form-designer/add-form-element-button";
import * as React from "react";
import SidebarSection from "@/components/form-designer/sidebar-section";
import {ElementsType, FormElement, FormElements} from "@/components/form-elements";

export function FormDesignerSidebar() {

  return <aside
    className="flex flex-col gap-6 bg-background p-6 w-full max-w-[20rem] border-l">

    <SidebarSection title="Form Elements">
      {Object.keys(FormElements).map(key => {
        const element: FormElement = FormElements[key as ElementsType]
        const { type } = element
        return <AddFormElementButton {...element.designerButton} type={type} badge={type !== 'Textfield' ? 'pro' : undefined} badgeVariant="default" disabled={type !== 'Textfield'} key={key}/>
      })}
      <AddFormElementButton title="Textarea" icon="text" badge="coming soon" disabled/>
      <AddFormElementButton title="Richtext" icon="text" badge="coming soon" disabled/>
      <AddFormElementButton title="Radio Group" icon="radio" badge="coming soon" disabled/>
      <AddFormElementButton title="File Upload" icon="upload" badge="coming soon" disabled/>
      <AddFormElementButton title="Signature" icon="signature" badge="coming soon" disabled/>
    </SidebarSection>

    <SidebarSection title="Layout Elements">
      <AddFormElementButton title="Headline" icon="heading" badge="coming soon" disabled/>
      <AddFormElementButton title="Paragraph" icon="text-quote" badge="coming soon" disabled/>
      <AddFormElementButton title="Divider" icon="minus" badge="coming soon" disabled/>
      <AddFormElementButton title="Columns" icon="columns-2" badge="coming soon" disabled/>
      <AddFormElementButton title="Group" icon="group" badge="coming soon" disabled/>
      <AddFormElementButton title="Fieldset" icon="group" badge="coming soon" disabled/>
    </SidebarSection>

  </aside>
}