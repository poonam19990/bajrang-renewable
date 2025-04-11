export function truncateWords(str, wordLimit = 20) {
    if (!str) return '';
    const words = str.split(/\s+/);
    if (words.length <= wordLimit) return str;
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  