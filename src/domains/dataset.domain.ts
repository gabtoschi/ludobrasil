import type { Jogo } from "./jogo.domain";

export type DatasetRawData = Jogo[];

export interface DatasetVersion {
  version: string;
  publishDate: string;
  csvFile: string;
  jsonFile: string;
  data: DatasetRawData;
}