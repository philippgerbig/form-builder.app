"use client"

import * as React from "react";
import {DragEndEvent, useDndMonitor, useDroppable} from '@dnd-kit/core';
import {DynamicIcon} from "lucide-react/dynamic";
import {FormDesignerSidebar} from "@/components/form-designer/form-designer-sidebar";
import {cn} from "@/lib/utils";
import {Card, CardContent} from "@/components/ui/card";
import {useDesigner} from "@/components/hooks/use-designer";
import {ElementsType, FormElementInstance, FormElements} from "@/components/form-elements";
import {v4 as uuid} from 'uuid';

export function FormDesigner() {
  const {setNodeRef, over} = useDroppable({
    id: 'element-drop-area',
  });
  const {elements, addElements} = useDesigner()

  useDndMonitor({
    onDragEnd: (event: DragEndEvent) => {
      const {active, over} = event
      if (!active || !over) return

      const isFromSidebar = active.data?.current?.fromSidebar
      if (isFromSidebar) {
        const type = active.data?.current?.type
        const newElement = FormElements[type as ElementsType].construct(uuid())
        addElements(elements.length, [newElement])
      }
    }
  })

  return <>
    <div className="flex flex-row justify-between gap-4  h-full w-full">
      <div className="flex justify-center w-full p-8">
        <Card className="w-full max-w-[40rem]">
          <CardContent className="h-full">
            <div
              ref={setNodeRef}
              className={cn("flex h-full flex-col gap-4")}
            >
              {elements.map((element) => {
                return <DesignerElementWrapper key={element.id} element={element}/>
              })}
              <div
                className={cn("flex flex-col gap-2 justify-center items-center border-4 border-dashed h-full w-full text-muted-foreground", over && "border-primary text-primary")}
              >
                <DynamicIcon name="plus" width={32} height={32}/>
                Drop here
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <FormDesignerSidebar/>
    </div>
  </>
}

function DesignerElementWrapper({element}: { element: FormElementInstance }) {
  const DesignerElement = FormElements[element.type].designerComponent
  return <DesignerElement elementInstance={element} key={element.id}/>
}