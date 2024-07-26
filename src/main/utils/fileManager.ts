import * as fs from 'fs/promises';
import { dialog } from 'electron';

/**
 * 文件读取返回的类型，包括路径和数据
 */
export interface IFileInfo {
  filePath?: string;
  data: string;
}
/**
 * 文件操作工具类
 */
export const fileUtils = {
  /**
   * 打开文件，并读取文件的text
   * @returns 读取到的text文件
   */
  readFile: async (): Promise<IFileInfo> => {
    const { canceled, filePaths } = await dialog.showOpenDialog({});
    let filePath = '';
    if (!canceled) filePath = filePaths[0];
    const data = await fs.readFile(filePath);
    return { filePath, data: data.toString() };
  }
};
