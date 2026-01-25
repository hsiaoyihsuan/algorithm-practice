/**
 * Q: Given a string s, return the length of the longest palindromic substring.
 *
 * Idea:
 * - A palindrome expands outward from its center.
 * - Each character can be the center of:
 *   1) an odd-length palindrome (center at i)
 *   2) an even-length palindrome (center between i and i + 1)
 *
 * Approach: Expand Around Center
 * --------------------------------
 * - Try every possible center
 * - Expand left and right while characters match
 * - Track the maximum length found
 *
 * Time Complexity: O(n^2)
 *   - There are n centers
 *   - Each expansion can take O(n) in the worst case
 *
 * Space Complexity: O(1)
 *   - Only pointers are used
 */
export function longest(s: string): number {
  let length = 0;

  for (let i = 0; i < s.length; i++) {
    // odd length
    let l = i,
      r = i;
    while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
      if (r - l + 1 > length) {
        length = r - l + 1;
      }
      l--;
      r++;
    }

    // even length
    l = i;
    r = i + 1;
    while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
      if (r - l + 1 > length) {
        length = r - l + 1;
      }
      l--;
      r++;
    }
  }
  return length;
}
