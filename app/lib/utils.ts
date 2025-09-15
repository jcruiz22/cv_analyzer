/**
 * Converts bytes to a human-readable string format
 * @param bytes - The number of bytes to format
 * @param decimals - Number of decimal places to show (default: 1)
 * @returns Formatted string with appropriate unit (B, KB, MB, GB, TB)
 */
export function formatSize(bytes: number, decimals: number = 1): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export const generateUUID = () => crypto.randomUUID();