import React, { useState } from "react";
import EmailEditor from "react-email-editor";

const Home = () => {
  const [editor, setEditor] = useState(null);

  const onLoad = (editor) => {
    setEditor(editor);
  };

  const exportHtml = () => {
    if (editor) {
      editor.exportHtml((data) => {
        const { html } = data;
        console.log("exportHtml", html);
      });
    }
  };

  return (
    <>
      <button onClick={exportHtml}>Export HTML</button>
      <EmailEditor onLoad={onLoad} />
    </>
  );
};

export default Home;
