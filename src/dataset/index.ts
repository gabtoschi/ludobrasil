import type { DatasetJogo } from "../domains/jogo.domain";
import { LUDOBRASIL_DATASET_V1 } from "./ludobrasil.v1.data";

export const LUDOBRASIL_DATASET = LUDOBRASIL_DATASET_V1;

export const LUDOBRASIL_VERSION: Record<number, DatasetJogo> = {
  1: LUDOBRASIL_DATASET_V1,
}