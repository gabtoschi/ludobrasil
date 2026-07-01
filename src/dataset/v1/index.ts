import type { DatasetVersion } from "../../domains/dataset.domain";
import { V1_RAW_DATA } from "./v1.data";

export const DatasetV1: DatasetVersion = {
  version: 'v1',
  publishDate: '01/07/2026',
  csvFile: '/dataset/v1/ludobrasil-v1.csv',
  jsonFile: '/dataset/v1/ludobrasil-v1.json',
  data: V1_RAW_DATA,
}