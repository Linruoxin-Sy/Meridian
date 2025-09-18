import { getDirname } from "@/utils";
import { RenderFormat } from "../interfaces";
import path from 'path'

export const pathResolve = (format: RenderFormat) => {
  return path.join(getDirname(import.meta.url), `./template/${format}`)
}
