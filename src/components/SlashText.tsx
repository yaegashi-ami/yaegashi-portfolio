import { Fragment } from "react";

export default function SlashText({ text }: { text: string }) {
  return (
    <>
      {text.split("/").map((part, i) => (
        <Fragment key={i}>
          {i > 0 && <span className="mx-1 text-muted">/</span>}
          {part}
        </Fragment>
      ))}
    </>
  );
}