import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { exists } from '../src/index'

describe('exists', () => {
  it('should return true for an existing file', async () => {
    const filePath = path.join(__dirname, './test-existing-file.txt')
    const result = await exists(filePath)
    expect(result).toBe(true)
  })

  it('should return true for an existing directory', async () => {
    const dirPath = path.join(__dirname, './test-existing-directory')
    const result = await exists(dirPath)
    expect(result).toBe(true)
  })

  it('should return false for a non-existing path', async () => {
    const nonExistentPath = path.join(__dirname, './test-non-existent-path')
    const result = await exists(nonExistentPath)
    expect(result).toBe(false)
  })

  it('should return false for an invalid path', async () => {
    const invalidPath = path.join(__dirname, '/invalid/path/123')
    const result = await exists(invalidPath)
    expect(result).toBe(false)
  })
})
