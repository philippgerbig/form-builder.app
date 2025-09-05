"use client"
import {ModeToggle} from "@/components/mode-toggle";
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {FormDesigner} from "@/components/form-designer/form-designer";
import {DesignerContextProvider} from "@/context/designer-context";
import {DndContext} from "@dnd-kit/core";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Button} from "@/components/ui/button";
import {DynamicIcon} from "lucide-react/dynamic";
import * as React from "react";
import {FormCodeView} from "@/components/form-code-view";
import {FormWorkflow} from "@/components/form-workflow";
import {Badge} from "@/components/ui/badge";
import {version} from "../../package.json";

export default function Home() {
  return (
    <div className="h-full flex flex-col w-full">
      <nav className="flex justify-between p-4 items-center border-b">
        <div className="text-xl font-bold text-primary flex gap-2">
          FormBuilder
          <Badge variant="secondary">v{version}</Badge>
        </div>
        <div className="flex flex-row items-center gap-4">
          <ModeToggle/>
          <Avatar>
            <AvatarImage src="https://github.com/philippgerbig.png"/>
            <AvatarFallback>PG</AvatarFallback>
          </Avatar>
        </div>
      </nav>

      <Tabs defaultValue="designer" className="w-full">

        <header className="p-4 border-b sticky top-0 bg-background z-10">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-muted-foreground">Form: </span>
              New Form
            </div>
            <div className="flex gap-2">
              <Button variant="outline" disabled={true} className="cursor-not-allowed">
                <DynamicIcon name={'save'}/>
                Save
              </Button>
              <Button variant="outline" disabled={true} className="cursor-not-allowed">
                <DynamicIcon name={'eye'}/>
                Preview
              </Button>
              <Button disabled={true} className="cursor-not-allowed">
                <DynamicIcon name={'rocket'}/>
                Publish
              </Button>
            </div>
          </div>

          <TabsList className="bg-background">
            <TabsTrigger value="designer" className="data-[state=inactive]:cursor-pointer">Designer</TabsTrigger>
            <TabsTrigger value="workflow" className="data-[state=inactive]:cursor-pointer"
                         disabled={true}>Workflow</TabsTrigger>

            <TabsTrigger value="code" className="data-[state=inactive]:cursor-pointer">Code</TabsTrigger>
          </TabsList>
        </header>

        <DesignerContextProvider>
          <main className="flex grow flex-col w-full">
            <TabsContent value="designer">
              <DndContext>
                <FormDesigner/>
              </DndContext>
            </TabsContent>

            <TabsContent value="workflow">
              <FormWorkflow/>
            </TabsContent>

            <TabsContent value="code">
              <FormCodeView/>
            </TabsContent>
          </main>
        </DesignerContextProvider>
      </Tabs>

    </div>
  );
}
