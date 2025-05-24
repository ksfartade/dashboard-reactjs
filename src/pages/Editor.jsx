import React from "react";
import {
  RichTextEditorComponent,
  Toolbar,
  Link,
  Image,
  HtmlEditor,
  QuickToolbar,
  Inject,
} from "@syncfusion/ej2-react-richtexteditor";

import { Header } from "../components";
import { EditorData } from "../data/dummy";

const Editor = () => {
  const toolbarSettings = {
    items: [
      "Bold",
      "Italic",
      "Underline",
      "StrikeThrough",
      "FontName",
      "FontSize",
      "FontColor",
      "BackgroundColor",
      "LowerCase",
      "UpperCase",
      "|",
      "Formats",
      "Alignments",
      "OrderedList",
      "UnorderedList",
      "Outdent",
      "Indent",
      "|",
      "CreateLink",
      "Image",
      "|",
      "ClearFormat",
      "Print",
      "SourceCode",
      "FullScreen",
      "|",
      "Undo",
      "Redo",
    ],
  };

  return (
    <div className="bg-white flex-1 h-full p-[2vw]">
      <Header category="App" title="Editor" />

      <div className="mt-10">
        <RichTextEditorComponent
          height={450}
          toolbarSettings={toolbarSettings}
        >
          <EditorData/>
          <Inject services={[Toolbar, HtmlEditor]} />
        </RichTextEditorComponent>
      </div>
    </div>
  );
};

export default Editor;
