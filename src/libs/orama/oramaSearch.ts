import type { TypedDocument, Orama, Results, SearchParams } from "@orama/orama";
import { create, insert, search } from "@orama/orama";

type DataDocument = TypedDocument<Orama<typeof dataSchema>>;

const dataSchema = {
  title: "string",
};