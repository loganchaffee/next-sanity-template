import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("About Me")
        .child(
          S.editor()
            .id("about")
            .schemaType("about")
            .documentId("singleton-about"),
        ),
    ]);
