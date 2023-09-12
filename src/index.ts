import fs from 'node:fs/promises'

/**
 * Checks if a file or directory exists at the specified path.
 * @async
 * @param {string} path - The path to the file or directory to check.
 * @returns {Promise<boolean>} A Promise that resolves to `true` if the path exists, or `false` otherwise.
 */
export async function exists(path: string): Promise<boolean> {
  return !!(await fs.stat(path).catch(() => false))
}
