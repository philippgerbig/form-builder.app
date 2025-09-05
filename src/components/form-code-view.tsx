import * as React from "react";
import {useDesigner} from "@/components/hooks/use-designer";
import JsonView from '@uiw/react-json-view';
import { githubDarkTheme } from '@uiw/react-json-view/githubDark';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export function FormCodeView() {
  const {elements} = useDesigner()

  return <div className="p-4">
    <Card>
      <CardHeader>
        <CardTitle>Code</CardTitle>
      </CardHeader>
      <CardContent>
        <JsonView value={elements} style={githubDarkTheme}  />
      </CardContent>
    </Card>
  </div>
}