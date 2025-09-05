"use client";
import * as React from "react";
import {DynamicIcon, IconName} from 'lucide-react/dynamic';
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';
import {cn} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";

type AddFormElementButtonProps = {
  title: string,
  type?: string,
  badge?: string,
  icon?: IconName,
  disabled?: boolean,
}

export function AddFormElementButton(props: AddFormElementButtonProps) {
  const {title, icon, badge, disabled, type} = props;
  const iconName: IconName = icon || "alarm-check";

  const {attributes, listeners, setNodeRef, transform, isDragging} = useDraggable({
    id: `add-form-element-button-${title}`,
    data: {
      type,
      fromSidebar: true,
    },
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return <div
    className={
      cn("flex flex-col cursor-grab select-none items-center justify-center gap-2 rounded-md p-4 border-1 text-muted-foreground bg-card hover:text-foreground relative",
        isDragging && "cursor-grabbing z-20",
        disabled && "cursor-not-allowed hover:text-muted-foreground opacity-50 bg-background",
      )}
    ref={!disabled ? setNodeRef : null}
    style={!disabled ? style : {}} {...!disabled ? listeners : {}} {...!disabled ? attributes : {}}
  >
    <DynamicIcon name={iconName} width={24} height={24}/>
    <span
      className="text-sm">
           {title}
         </span>
    {badge && <div className="absolute top-0 right-0 p-1"><Badge variant="secondary">{badge}</Badge></div>}
  </div>
}